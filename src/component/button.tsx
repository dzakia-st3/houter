import React from "react";
import star from '../img/star.png'

interface ButtonProps {
    text: string;
    disabled: boolean;
    // isleft: boolean;
    // onclick: (() => {})
  }


function Buttonhouter({ text, disabled }: Readonly<ButtonProps>) {    
    return (
      <div className="flex justify-between text-sm border-gray-400 bg-slate-50 text-gray-600 p-2 rounded-full">
      <img className = 'size-4 mx-1' src={star} alt='icon' />
      <button className="mx-1" disabled={disabled}>{text}</button>
      </div>
    );
  }

export default Buttonhouter