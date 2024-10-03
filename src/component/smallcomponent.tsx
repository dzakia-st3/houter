import React from "react";
import clock from "../img/clock.svg"

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

interface MiniLGCardProps {
    img: string;
    text: string;
}

interface MiniSMCardProps {
    img: string;
    name: string;
    info: string;
}

interface MiniCardSection5Props {
    imgHouse: string;
    imgProfil: string;
    name: string; 
    title: string;
    info: string;
}

function Buttonhouter({ img, text, disabled, iconPosition, textColor, bakcgroundColor, hovercolor }: Readonly<ButtonProps>) {
    let ComponentInside;

    if (img === 'null') {
        ComponentInside = <button className="mx-1 font-lexend" disabled={disabled}>{text}</button>
    } else if (text === 'null') {
        ComponentInside = <img className='size-4 mx-1' src={img} alt='icon' />
    } else if (iconPosition.toLowerCase() === 'right') {
        ComponentInside =
            <>
                <button className="mx-1 font-lexend" disabled={disabled}>{text}</button>
                <img className='size-4 mx-1' src={img} alt='icon' />
            </>
    } else if (iconPosition.toLowerCase() === 'left') {
        ComponentInside =
            <>
                <img className='size-4 mx-1' src={img} alt='icon' />
                <button className="font-lexend" disabled={disabled}>{text}</button>
            </>
    }

    let styling = `flex justify-between text-sm border-2 border-gray-200 ${bakcgroundColor === '' ? '' : bakcgroundColor} ${textColor} p-2 rounded-full ${hovercolor}`

    return (
        <div className={styling}>{ComponentInside}</div>
    )
}

function TextHouter({ text, fontstyle }: Readonly<TextProps>) {
    return (
        <p className={`${fontstyle}`}>{text}</p>
    )
}

function MiniCard({ listimageandstyle, texttop, textbottom }: Readonly<MiniCardProps>) {
    return (
        <div className="flex-none">
            <div className="flex items-center justify-center bg-white rounded-3xl p-4 h-24">
                <div className='flex mr-2'>
                    {
                        listimageandstyle.map((item: any, idx: number) => <img key={idx + 1} src={`${item.img}`} className={item.style} alt="" />)
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

function MiniLGCard({ img, text }: Readonly<MiniLGCardProps>) {
    return (
        <div className='flex items-center p-2'>
            <img src={img} className='mr-2' alt="" />
            <TextHouter
                text={text}
                fontstyle="font-lexend font-bold text-base text-gray-600"
            />
        </div>
    )
}

function MiniSMCard({ img, name, info }: Readonly<MiniSMCardProps>) {
    return (
        <div className="flex space-x-2 items-center">
            <div className='flex'>
                <img src={img} className='w-14 h-14' alt="" />
            </div>
            <div>
                <p className="font-bold font-lexend text-base text-[#1b1c57]">{name}</p>
                <p className="font-lexend text-base text-gray-500">{info}</p>
            </div>
        </div>
    )
}

function MiniCardSection5({imgHouse, imgProfil, name, title, info} : Readonly<MiniCardSection5Props>) {
    return (
        <div className='flex flex-col py-3 md:py-0 md:flex-row'>
            <img src={imgHouse} alt="" />
            <div className='flex-col p-3 md:p-5 space-y-5'>
                <div className="flex items-center">
                    <img src={imgProfil} className='w-8 h-8 mr-2' alt="" />
                    <p className="font-lexend text-sm text-gray-500">{name}</p>
                </div>
                <p className="font-bold font-lexend text-base text-[#1b1c57]">{title}</p>
                <div className="flex">
                    <img src={clock} className='mr-2' alt="" />
                    <p className="font-lexend text-sm text-gray-400">{info}</p>
                </div>
            </div>
        </div>
    )
}

export { Buttonhouter, TextHouter, MiniCard, MiniLGCard, MiniSMCard, MiniCardSection5}