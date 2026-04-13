import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';
import Profile from './profile';

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}));

describe('Tela de Perfil', () => {
  test('deve exibir as informações do dono da conta', () => {
    render(<Profile />);

    expect(screen.getByText('Tom Hillson')).toBeTruthy();
    expect(screen.getByText('Tomhill@mail.com')).toBeTruthy();
  });

  test('deve exibir todas as opções do menu', () => {
    render(<Profile />);

    expect(screen.getByText('Preferences')).toBeTruthy();
    expect(screen.getByText('Account Security')).toBeTruthy();
    expect(screen.getByText('Customer Support')).toBeTruthy();
    expect(screen.getByText('Logout')).toBeTruthy();
  });

  test('deve navegar para a tela de preferências ao clicar no botão', () => {
    render(<Profile />);

    const prefButton = screen.getByText('Preferences');
    fireEvent.press(prefButton);

    expect(router.navigate).toHaveBeenCalledWith('/modal/preference');
  });

  test('deve exibir o subtítulo de segurança da conta', () => {
    render(<Profile />);

    expect(screen.getByText('Excellent')).toBeTruthy();
  });
});
