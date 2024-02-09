import React from 'react';

import './button.scss';

const Button = ({ title, icon }) => {
  return (
    <div className="button__container">
      <button className="bg-black flex gap-3 justify-center items-center w-40">
        <p>{title}</p>
        <div>{icon}</div>
      </button>
    </div>
  )
}

export default Button
