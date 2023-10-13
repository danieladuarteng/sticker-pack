import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render a button', () => {
    render(
      <Button
        dataTestid='button-icon'
        disabledButton={false}
        onClick={() => { }}
        icon={<div data-testid="icon">Button Icon</div>}
        onBlur={() => { }}
      />
    );

    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button
        dataTestid='button-icon'
        disabledButton={false}
        onClick={onClickMock}
        icon={<div data-testid="icon">Button Icon</div>}
        onBlur={() => { }}
      />
    );

    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should call onBlur when the button loses focus', () => {
    const onBlurMock = jest.fn();
    render(
      <Button
        dataTestid='button-icon'
        disabledButton={false}
        onClick={() => { }}
        icon={<div data-testid="icon">Button Icon</div>}
        onBlur={onBlurMock}
      />
    );

    const buttonElement = screen.getByTestId('button-icon');
    fireEvent.blur(buttonElement);

    expect(onBlurMock).toHaveBeenCalled();
  });

  it('should be disabled when disabledButton is true', () => {
    render(
      <Button
        dataTestid='button-icon'
        disabledButton={true}
        onClick={() => { }}
        icon={<div data-testid="icon">Button Icon</div>}
        onBlur={() => { }}
      />
    );

    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeDisabled();
  });
});
