import React from "react"
import profil1 from '../img/hero-1a.png'
import profil2 from '../img/hero-1b.png'
import email from '../img/email.svg'
import chair1 from '../img/section6_chair.svg'
import chair2 from '../img/section6_chair2.svg'
import house6_1 from '../img/section6_house1.svg'
import house6_2 from '../img/section6_house2.svg'
import { Buttonhouter, TextHouter } from '../component/smallcomponent'

export default function Section6() {
    return (
        <div className='section-6 py-12 w-full p-16'>
            <div className='bg-gradient-to-r from-[#8ab4fa] via-white to-[#8ab4fa] flex justify-between items-center p-10 rounded-lg'>
                <div className='flex items-center'>
                    <div className='space-y-8'>
                        <img src={chair1} alt="" />
                        <img src={profil1} className='w-12 h-12 ml-4' alt="" />
                    </div>
                    <div className='ml-10'>
                        <img src={profil2} className='w-12 h-12 mt-20 mb-10' alt="" />
                        <img src={house6_1} alt="" />
                    </div>
                </div>
                <div className="space-y-4 w-2/4">
                    <TextHouter
                        text='Subscribe For More Info'
                        fontstyle="font-lexend font-bold text-2xl text-center text-[#1b1c57]"
                    />
                    <TextHouter
                        text='And Update From Hounter'
                        fontstyle="font-lexend font-bold text-2xl text-center text-[#1b1c57]"
                    />
                    <div className='flex items-center justify-between p-2 w-full border-solid border-2 border-gray-400 rounded-full'>
                        <div className='flex items-center'>
                            <img src={email} alt="" />
                            <input type="text" placeholder='Your email here' className='mx-2 px-2 w-full' />
                        </div>
                        <Buttonhouter
                            img="null"
                            text="Subscribe Now"
                            disabled={false}
                            iconPosition=""
                            textColor="text-white"
                            bakcgroundColor='bg-[#10B981]'
                            hovercolor='hover:bg-emerald-400'
                        />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='space-y-8'>
                        <img src={house6_2} className='mt-20' alt="" />
                        <img src={profil2} className='w-12 h-12 ml-4' alt="" />
                    </div>
                    <div className='ml-10'>
                        <img src={profil1} className='w-12 h-12 mb-10' alt="" />
                        <img src={chair2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}