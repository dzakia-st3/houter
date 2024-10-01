import React from "react"
import profil1 from '../img/hero-1a.png'
import profil2 from '../img/hero-1b.png'
import line from '../img/line.svg'
import clock from '../img/clock.svg'
import house5_1 from '../img/section5_house1.svg'
import house5_2 from '../img/section5_house2.svg'
import house5_3 from '../img/section4&5_house3.svg'
import house5_4 from '../img/section4&5_house1.svg'
import { Buttonhouter, TextHouter, MiniCardSection5 } from '../component/smallcomponent'

export default function Section5() {
    return (
        <div className='section-5 py-12'>
            <div className='p-10 flex flex-col space-y-4 items-center justify-center'>
                <img src={line} alt="" />
                <TextHouter
                    text='Ready To Sell'
                    fontstyle="font-lexend text-base text-[#F59E0B]"
                />
                <TextHouter
                    text="What Our User Say About Us"
                    fontstyle="mt-2 font-bold font-lexend text-xl text-[#1b1c57]"
                />
                <Buttonhouter
                    img="null"
                    text="More Artikel"
                    disabled={false}
                    iconPosition=""
                    textColor="text-white"
                    bakcgroundColor='bg-[#10B981]'
                    hovercolor='hover:bg-emerald-400'
                />
            </div>
            <div className="flex justify-between px-16">
                <div className='w-1/2'>
                    <MiniCardSection5
                        imgHouse={house5_1}
                        imgProfil={profil1}
                        name="Dianne Russell"
                        title="The Things We Need To Check When We Want To Buy A House"
                        info="4 min read | 25 Apr 2021"
                    />
                    <MiniCardSection5
                        imgHouse={house5_2}
                        imgProfil={profil2}
                        name="Courtney Henry"
                        title="7 Ways To Distinguish The Quality Of The House We Want To Buy"
                        info="6 min read | 24 Apr 2021"
                    />
                    <MiniCardSection5
                        imgHouse={house5_3}
                        imgProfil={profil2}
                        name="Darlene Robertson"
                        title="The Best Way To Know The Quality Of The House We Want To Buy"
                        info="2 min read | 24 Apr 2021"
                    />
                </div>
                <div className='space-y-4 w-1/2'>
                    <img src={house5_4} className='w-full' alt="" />
                    <div className='flex-col space-y-4 w-4/5'>
                        <div className="flex items-center">
                            <img src={profil2} className='w-8 h-8 mr-2' alt="" />
                            <p className="font-lexend text-sm text-gray-500">Cameron Williamsom</p>
                        </div>
                        <p className="font-bold font-lexend text-base text-[#1b1c57]">The Things We Need To Check When We Want To Buy A House</p>
                        <p className="font-lexend text-sm text-gray-400">Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                        <div className="flex">
                            <img src={clock} className='mr-2' alt="" />
                            <p className="font-lexend text-sm text-gray-400">8 min read | 25 Apr 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}