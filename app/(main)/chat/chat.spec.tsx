import { useChat } from '@/data/ChatBot';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import Chat from './chat';

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

  test('deve renderizar a lista de mensagens corretamente', () => {
    (useChat as jest.Mock).mockReturnValue({
      messages: [
        { role: 'user', text: 'Olá BrainBox' },
        { role: 'model', text: 'Olá! Como posso ajudar?' },
      ],
      sendMessage: mockSendMessage,
      sendMessageStatus: { status: 'succeeded' },
      clearMessages: mockClearMessages,
    });

    render(<Chat />);

    expect(screen.getByText('Olá BrainBox')).toBeTruthy();
    expect(screen.getByText('Olá! Como posso ajudar?')).toBeTruthy();
  });

  test('deve chamar sendMessage quando o botão de enviar for pressionado', () => {
    (useChat as jest.Mock).mockReturnValue({
      messages: [],
      sendMessage: mockSendMessage,
      sendMessageStatus: { status: 'idle' },
      clearMessages: mockClearMessages,
    });

    render(<Chat />);

    const input = screen.getByPlaceholderText('Send a message.');
    const sendButton = screen.getByRole('button');

    fireEvent.changeText(input, 'Minha dúvida financeira');
    fireEvent.press(sendButton);

    expect(mockSendMessage).toHaveBeenCalledWith('Minha dúvida financeira');
  });
});
