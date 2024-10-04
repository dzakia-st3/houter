import React from "react";
import profil1 from '../img/hero-1a.png'
import line from '../img/line.svg'
import bed from '../img/bed 1.svg'
import garage from '../img/car-garage 1.svg'
import bath from '../img/bath 1.svg'
import stairs from '../img/stairs-with-handrail 1.svg'
import phone from '../img/phone.svg'
import tableimg from '../img/table.svg'
import sofa from '../img/sofa.svg'
import chair from '../img/chair.svg'
import playbtn from '../img/play btn.svg'
import { Buttonhouter, TextHouter, MiniLGCard, MiniSMCard } from '../component/smallcomponent'

export default function Section3() {
    return (
        <div className='section-3 flex flex-col md:flex-row items-center md:justify-around py-12'>
            <div className='md:w-1/3 md:p-10'>
                <div className='flex flex-col-reverse md:flex-row md:space-x-2 md:items-center'>
                    <img src={line} className="h-1 md:w-7" alt="" />
                    <TextHouter
                        text='Ready To Sell'
                        fontstyle="font-lexend text-center md:text-left text-base text-[#F59E0B]"
                    />
                </div>
                <TextHouter
                    text="Let's Tour And See Our House!"
                    fontstyle="mt-2 font-bold font-lexend text-center md:text-left text-xl text-[#1b1c57]"
                />
                <TextHouter
                    text="Houses recommended by our partners that have been curated to become the home of your dreams!"
                    fontstyle="font-lexend text-base mt-4 p-4 md:p-0 text-gray-400"
                />
                <div>
                    <TextHouter
                        text="House Detail"
                        fontstyle="font-lexend font-bold text-center md:text-left text-base mt-4 text-gray-600"
                    />
                    <div className="flex p-4 md:p-0 justify-between">
                        <div>
                            <div>
                                <MiniLGCard
                                    img={bed}
                                    text="4 Bedrooms"
                                />
                            </div>
                            <div>
                                <MiniLGCard
                                    img={garage}
                                    text="1 Carport"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <MiniLGCard
                                    img={bath}
                                    text="2 Bathrooms"
                                />
                            </div>
                            <div>
                                <MiniLGCard
                                    img={stairs}
                                    text="2 Floors"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex p-4 md:p-0 my-2 items-center justify-between">
                    <MiniSMCard
                        img={profil1}
                        name="Dianne Russell"
                        info="Manager Director"
                    />
                    <Buttonhouter
                        img={phone}
                        text="Contact Now"
                        disabled={true}
                        iconPosition="left"
                        textColor="text-white"
                        bakcgroundColor='bg-[#10B981]'
                        hovercolor='hover:bg-emerald-400'
                    />
                </div>
            </div>
            <div className='relative'>
                <div className="w-60 h-60 md:w-96 md:h-96 rounded-xl bg-[url('./img/section3_house.svg')] flex justify-center bg-cover items-center p-2">
                    <img src={playbtn} alt="" />
                </div>
                <div className='hidden md:absolute md:-bottom-8 md:-left-36 md:flex md:space-x-2 md:items-end'>
                    <img src={sofa} className='h-40 w-auto' alt="" />
                    <img src={tableimg} className='h-20 w-auto' alt="" />
                    <img src={chair} className='h-20 w-auto' alt="" />
                </div>
            </div>
        </div>
    )
}