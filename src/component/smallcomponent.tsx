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

interface MiniLGCardProps {
    img: string;
    text: string;
}

interface MiniSMCardProps {
    img: string;
    name: string;
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
                        listimageandstyle.map((item: any) => <img src={`${item.img}`} className={item.style} alt="" />)
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

function MiniSMCard({img, name, info} : Readonly<MiniSMCardProps>) {
    return (
        <div className="flex space-x-2 items-center p-2">
            <div className='flex'>
                <img src={img} className='w-14 h-14' alt="" />
            </div>
            <div>
                <p className="font-bold font-lexend text-base text-[#1b1c57]">{name}</p>
                <p className="font-lexend text-base text-gray-400">{info}</p>
            </div>
        </div>
    )
}

export { Buttonhouter, TextHouter, MiniCard, MiniLGCard, MiniSMCard}