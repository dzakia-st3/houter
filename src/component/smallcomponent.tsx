import React from "react";

interface ButtonProps {
    img: string;
    text: string;
    disabled: boolean;
    iconPosition: string;
    textColor: string;
    bakcgroundColor: string;
    hovercolor: string;
    // onclick: (() => {})
}

interface TextProps {
    text: string;
    fontstyle: string
}

interface MiniCardProps {
    listimageandstyle: Array<Object>;
    texttop: string;
    textbottom: string;
} 

function Buttonhouter({ img, text, disabled, iconPosition, textColor, bakcgroundColor, hovercolor }: Readonly<ButtonProps>) {
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

    let styling = `flex justify-between text-sm border-2 border-${textColor}-400 ${bakcgroundColor === '' ? '' : bakcgroundColor} ${textColor} p-2 rounded-full ${hovercolor}`

    return (
        <div className={styling}>{ComponentInside}</div>
    )
}

function TextHouter ({ text, fontstyle }: Readonly<TextProps>) {
    return (
        <p className={`${fontstyle}`}>{text}</p>
    )
}

function MiniCard ({listimageandstyle, texttop, textbottom} : Readonly<MiniCardProps> ) {
    return (
        <div className="flex-auto mr-4">
            <div className="flex items-center justify-center bg-white rounded-3xl p-4">
                <div className='flex mr-2'>
                    {
                        listimageandstyle.map( (item: any) => <img src={`${item.img}`} className={item.style} alt="" />)
                    }
                </div>
                <div className=''>
                    <p className="font-bold font-lexend text-base text-[#1b1c57]">{texttop}</p>
                    <p className="font-lexend text-sm text-gray-400">{textbottom}</p>
                </div>
            </div>
        </div>
    )
}

export {Buttonhouter, TextHouter, MiniCard}