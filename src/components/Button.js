import React from 'react';

const Button = ({ dataTestid, ariaLabel, disabledButton, onClick, icon, onBlur }) => {
  return (
    <button
      data-testid={dataTestid}
      aria-label={ariaLabel}
      disabled={disabledButton}
      onClick={onClick}
      onBlur={onBlur}
    >
      {icon}
    </button>
  )
}

export default Button;
