import { requestStatus, RequestStatus } from '@/model';
import { GoogleGenAI } from '@google/genai';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatContextProps {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  sendMessageStatus: RequestStatus;
  clearMessages: () => void;
}

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatContext = createContext<ChatContextProps>(
  {} as ChatContextProps,
);

export const useChat = () => useContext(ChatContext);

const ai = new GoogleGenAI({ apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY! });

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sendMessageStatus, setSendMessageStatus] = useState(requestStatus);

  const sendMessage = async (text: string) => {
    setSendMessageStatus({ status: 'pending' });

    const userMessage: Message = { role: 'user', text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const contents = updatedMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents,
      });

      const modelMessage: Message = {
        role: 'model',
        text: response.text ?? '',
      };

      setMessages(prev => [...prev, modelMessage]);
      setSendMessageStatus({ status: 'succeeded' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages(prev => prev.slice(0, -1));
      setSendMessageStatus({ status: 'failed' });
    }
  };

  const clearMessages = useCallback(() => {
    setMessages([]);
    setSendMessageStatus(requestStatus);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        sendMessageStatus,
        clearMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
