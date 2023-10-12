import React from 'react';

const Button = ({ disabledButton, onClick, icon, onBlur }) => {
  return (
    <button
      disabled={disabledButton}
      onClick={onClick}
      onBlur={onBlur}
    >
      {icon}
    </button>
  )
}

export default Button;
