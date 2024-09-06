import React from "react";

interface ButtonProps {
    img: string;
    text: string;
    disabled: boolean;
    iconPosition: string;
    textColor: string;
    bakcgroundColor: string;
    hovertrue: boolean;
    hoverimg: string;
    hovercolor: string;
    // onclick: (() => {})
}


function Buttonhouter({ img, text, disabled, iconPosition, textColor, bakcgroundColor, hovertrue, hoverimg, hovercolor }: Readonly<ButtonProps>) {
    let ComponentInside;

    if (img === 'null') {
        ComponentInside = <button className="mx-1" disabled={disabled}>{text}</button>
    } else if (text === 'null') {
        ComponentInside = <img className = 'size-4 mx-1' src={img} alt='icon' />
    } else if (iconPosition.toLowerCase() === 'right') {
        ComponentInside = 
            <>
                <button className="mx-1" disabled={disabled}>{text}</button>
                <img className = 'size-4 mx-1' src={img} alt='icon' />
            </>
    } else if (iconPosition.toLowerCase() === 'left') {
        ComponentInside = 
        <>
            <img className = 'size-4 mx-1' src={img} alt='icon' />
            <button className="mx-1" disabled={disabled}>{text}</button>
        </>
    }

    let styling = `flex justify-between text-sm border-2 border-${textColor}-400 ${bakcgroundColor === '' ? '' : bakcgroundColor} ${textColor} p-2 rounded-full mb-2 hover:bg-red-100`

    return (
        <div className={styling}>{ComponentInside}</div>
    )
}

export default Buttonhouter