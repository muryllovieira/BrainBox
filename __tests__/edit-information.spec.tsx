import EditInformation from '@/app/modal/edit-information/edit-information';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

jest.mock('expo-router', () => ({
  router: { navigate: jest.fn() },
}));

describe('Tela EditInformation', () => {
  test('deve renderizar todos os campos de edição', () => {
    render(<EditInformation />);

    expect(screen.getByText(/Edit Information/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/FULL NAME/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/EMAIL/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/PASSWORD/i)).toBeTruthy();
  });

  test('deve exibir o botão de salvar', () => {
    render(<EditInformation />);
    expect(screen.getByText('SAVE CHANGES')).toBeTruthy();
  });
});
