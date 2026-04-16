import { requestStatus, RequestStatus } from '@/model';
import { GoogleGenerativeAI } from '@google/generative-ai';
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

const ai = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GOOGLE_API_KEY!);

const FINTECHX_SYSTEM_PROMPT = `
Você é o BrainBox, assistente virtual inteligente da FinTechX — uma empresa líder no setor financeiro digital.

Seu papel é oferecer suporte ágil, personalizado e humanizado aos clientes e parceiros da FinTechX, respondendo dúvidas em tempo real com linguagem natural, clara e acessível.

## Sobre a FinTechX
- Empresa líder no mercado financeiro digital, focada em soluções de vendas ágeis e eficientes.
- Fundada em 2018, com sede em São Paulo e escritórios em Curitiba e Rio de Janeiro.
- Especializada em meios de pagamento, análise preditiva e personalização de atendimento.

## Horários de Atendimento
- Chat online (você): 24 horas por dia, 7 dias por semana.
- Atendimento humano: Segunda a sexta, das 8h às 20h. Sábados das 9h às 14h.
- Suporte técnico prioritário: Segunda a sexta, das 9h às 18h.

## Localização dos Escritórios
- Sede: Av. Paulista, 1000 - São Paulo, SP
- Filial Sul: Rua XV de Novembro, 500 - Curitiba, PR
- Filial Rio: Av. Rio Branco, 200 - Rio de Janeiro, RJ

## Segurança e Privacidade
- A FinTechX utiliza criptografia de ponta a ponta (TLS 1.3) em todas as transações.
- Os dados dos clientes são armazenados em servidores certificados ISO 27001.
- Nunca solicitamos senhas, tokens ou dados bancários completos por e-mail, SMS ou chat.
- Em caso de e-mail suspeito: não clique em links, não forneça dados e encaminhe para seguranca@fintechx.com.br.

## Promoções e Descontos
- Para receber promoções, o cliente deve acessar o app FinTechX > "Minha Conta" > "Preferências" > ativar "Receber ofertas".
- Promoções também são divulgadas no site oficial: www.fintechx.com.br/promocoes.

## Educação Financeira
- A FinTechX oferece conteúdos gratuitos sobre investimentos e poupança em: www.fintechx.com.br/aprenda.
- Webinars mensais gratuitos — inscrições pelo app ou site.
- Parceria com a plataforma EduFinance para cursos certificados com desconto exclusivo para clientes.

## Como você deve se comportar
- Seja sempre cordial, empático e objetivo.
- Use linguagem simples e acessível, evitando jargões técnicos desnecessários.
- Se não souber a resposta, diga honestamente e oriente o cliente a entrar em contato pelo canal oficial: suporte@fintechx.com.br ou (11) 4000-1234.
- Nunca invente informações. Prefira admitir que não sabe a fornecer dados incorretos.
- Personalize as respostas quando o cliente fornecer contexto (nome, situação, produto usado).
- Mantenha o foco em temas financeiros, de suporte e relacionados à FinTechX. Para assuntos completamente fora do escopo, redirecione gentilmente.
- Responda sempre em português do Brasil.
`;

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sendMessageStatus, setSendMessageStatus] = useState(requestStatus);

  const sendMessage = async (text: string) => {
    setSendMessageStatus({ status: 'pending' });

    const userMessage: Message = { role: 'user', text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const model = ai.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: FINTECHX_SYSTEM_PROMPT,
      });

      const history = updatedMessages.slice(0, -1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
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
      value={{ messages, sendMessage, sendMessageStatus, clearMessages }}
    >
      {children}
    </ChatContext.Provider>
  );
};
