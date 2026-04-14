import Chat from '@/app/(main)/chat/chat';
import { useChat } from '@/data/ChatBot';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';

jest.mock('@/data/ChatBot', () => ({
  useChat: jest.fn(),
}));

describe('Tela de Chat', () => {
  const mockSendMessage = jest.fn();
  const mockClearMessages = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve exibir a tela de boas-vindas quando não houver mensagens', () => {
    (useChat as jest.Mock).mockReturnValue({
      messages: [],
      sendMessage: mockSendMessage,
      sendMessageStatus: { status: 'idle' },
      clearMessages: mockClearMessages,
    });

    render(<Chat />);

    expect(screen.getByText('BrainBox')).toBeTruthy();
    expect(screen.getByText(/Remembers what user said/i)).toBeTruthy();
  });

  test('deve chamar sendMessage quando o botão de enviar for pressionado', async () => {
    (useChat as jest.Mock).mockReturnValue({
      messages: [],
      sendMessage: mockSendMessage,
      sendMessageStatus: { status: 'idle' },
      clearMessages: mockClearMessages,
    });

    render(<Chat />);

    const input = screen.getByPlaceholderText('Send a message.');
    const sendButton = screen.getByText('send');

    fireEvent.changeText(input, 'Minha dúvida financeira');
    fireEvent.press(sendButton);

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith('Minha dúvida financeira');
    });
  });
});
