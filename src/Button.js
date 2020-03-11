import React from 'react';

const Button = props => {
  return (
    <button onClick={() => props.onIncrement(props.value)}>
      {props.value}
    </button>
  );
}

export default Button;
