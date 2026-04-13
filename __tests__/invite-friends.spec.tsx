import InviteFriends from '@/app/modal/invite-friends/invite-friends';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

describe('Tela InviteFriends', () => {
  test('deve exibir as informações de convite corretamente', () => {
    render(<InviteFriends />);

    expect(screen.getByText('Invite Friends')).toBeTruthy();
    expect(screen.getByText('Refer A Friend')).toBeTruthy();
    expect(screen.getByText(/Share Your Promo Code/i)).toBeTruthy();
  });

  test('deve exibir o código de parceiro no botão', () => {
    render(<InviteFriends />);
    expect(screen.getByText('BrainAiPartnerMR')).toBeTruthy();
  });
});
