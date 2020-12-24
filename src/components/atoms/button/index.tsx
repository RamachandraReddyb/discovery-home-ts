import React from 'react';
// import './Button.css';

type props = {
  style : object;
  label: string;
  onClick: any;
  disabled: boolean;
}

const Button = (props: props) => (
  <button onClick={props.onClick} style={props.style} disabled={props.disabled}>
    {props.label && <span>{props.label}</span>}
  </button>
)

export default Button;
