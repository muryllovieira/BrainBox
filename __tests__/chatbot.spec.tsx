import { ChatProvider, useChat } from '@/data/ChatBot';
import { act, renderHook } from '@testing-library/react-native';

jest.mock('@google/genai/web', () => {
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => ({
      models: {
        generateContent: jest.fn().mockResolvedValue({
          text: 'Olá, sou o BrainBox simulado!',
        }),
      },
    })),
  };
});

test('deve adicionar mensagem do usuário e receber resposta do modelo', async () => {
  const { result } = renderHook(() => useChat(), {
    wrapper: ChatProvider,
  });

  await act(async () => {
    await result.current.sendMessage('Olá');
  });

  expect(result.current.messages).toHaveLength(2);
  expect(result.current.messages[0].role).toBe('user');
  expect(result.current.messages[1].role).toBe('model');
  expect(result.current.messages[1].text).toBe('Olá, sou o BrainBox simulado!');
  expect(result.current.sendMessageStatus.status).toBe('succeeded');
});
