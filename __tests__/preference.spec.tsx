import Preferences from '@/app/modal/preference/preference';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}));

describe('Tela Preferences', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve renderizar todas as opções de configuração', () => {
    render(<Preferences />);

    expect(screen.getByText('Account Information')).toBeTruthy();
    expect(screen.getByText('Password')).toBeTruthy();
    expect(screen.getByText('Payment Methods')).toBeTruthy();
    expect(screen.getByText('Invite Your Friends')).toBeTruthy();
    expect(screen.getByText('Theme Colour')).toBeTruthy();
  });

  test('deve navegar para Edit Information ao clicar na opção', () => {
    render(<Preferences />);

    const editBtn = screen.getByText('Account Information');
    fireEvent.press(editBtn);

    expect(router.navigate).toHaveBeenCalledWith(
      '/modal/edit-information/edit-information',
    );
  });

  test('deve navegar para Invite Friends ao clicar na opção', () => {
    render(<Preferences />);

    const inviteBtn = screen.getByText('Invite Your Friends');
    fireEvent.press(inviteBtn);

    expect(router.navigate).toHaveBeenCalledWith(
      '/modal/invite-friends/invite-friends',
    );
  });
});
