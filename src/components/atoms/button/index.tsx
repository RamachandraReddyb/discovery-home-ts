import React from 'react';
// import './Button.css';

type props = {
  style : object;
  label: string;
  onClick: any;
}

const Button = (props: props) => (
  <button onClick={props.onClick} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </button>
)

export default Button;
