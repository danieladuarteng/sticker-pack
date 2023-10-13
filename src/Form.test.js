import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form Component', () => {
  it('submits the form with all fields filled', async () => {
    const setFormReset = jest.fn();

    render(<Form setFormReset={setFormReset} />);

    const nameInput = screen.getByLabelText('Nome:');
    const emailInput = screen.getByLabelText('Email:');
    const descriptionTextarea = screen.getByPlaceholderText('Alguma dúvida? Recado?');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'Alguma observação' } });

    const stickers = screen.getAllByRole('button', { name: /^Botão que aumenta a quantidade de stickers de React/ });
    stickers.forEach((sticker) => {
      fireEvent.click(sticker);
    });

    const submitButton = screen.getByText('Enviar');
    fireEvent.click(submitButton);

    await screen.findByText('Formulário enviado com sucesso');
  });
});
