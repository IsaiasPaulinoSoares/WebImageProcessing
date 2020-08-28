import React from 'react';
import './style.css';

const Button = ({text}) => {
    return <a className="btn" type="submit">{text}</a>;
}

export default Button;