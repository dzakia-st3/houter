import React from "react";
import imghero from '../img/img_hero.svg'
import pinpoint from '../img/pinpoint.svg'
import right from '../img/right.svg'
import traveloka from '../img/traveloka_logo.svg'
import tiket from '../img/tiket_logo.svg'
import airbnb from '../img/airbnb_logo.svg'
import tripad from '../img/tripadvisor_logo.svg'
import profil1 from '../img/hero-1a.png'
import profil2 from '../img/hero-1b.png'
import profil3 from '../img/hero-1c.png'
import houseprof from '../img/hero-2.svg'
import profil4 from '../img/hero-3.png'
import { Buttonhouter, TextHouter, MiniCard } from '../component/smallcomponent'

export default function Section1() {
    let dataimage1 = [
        {
            img: `${profil3}`,
            style: 'z-0'
        },
        {
            img: `${profil2}`,
            style: 'z-10 -ml-8'
        },
        {
            img: `${profil1}`,
            style: 'z-20 -ml-8'
        }
    ]

    return (
        <div className='section-1 flex justify-between'>
            <div className='flex items-center justify-center'>
                <div className='absolute bg-[#82FFE8] blur-3xl z-0 h-2/6 w-1/6 -top-16 -left-16 rounded-full'></div>
                <div className='w-4/5 z-10'>
                    <TextHouter
                        text="Find The Place To"
                        fontstyle="font-bold font-lexend text-4xl text-[#1b1c57]"
                    />
                    <div className="flex mt-2">
                        <TextHouter
                            text="Live"
                            fontstyle='font-bold font-lexend text-4xl text-[#1b1c57]'
                        />
                        <TextHouter
                            text="Your Dreams"
                            fontstyle='font-bold font-lexend text-4xl text-white text-stroke-1 mx-3 tracking-widest'
                        />
                    </div>
                    <TextHouter
                        text="Easily Here"
                        fontstyle="font-bold font-lexend text-4xl text-[#1b1c57] mt-2"
                    />
                    <TextHouter
                        text="Everything you need about finding your place to live will be here, where it will be easier for you"
                        fontstyle="font-lexend text-lg mt-4 text-gray-400"
                    />
                    <div className='flex items-center justify-between mt-3 border-solid border-2 border-gray-300 rounded-full p-3'>
                        <div className='flex items-center w-4/5'>
                            <img src={pinpoint} alt="" />
                            <input type="text" placeholder='Search for the location you want!' className='mx-2 px-2 w-full' />
                        </div>
                        <Buttonhouter
                            img={right}
                            text="Search"
                            disabled={false}
                            iconPosition="right"
                            textColor="text-white"
                            bakcgroundColor='bg-[#10B981]'
                            hovercolor='hover:bg-emerald-400'
                        />
                    </div>

                    <TextHouter
                        text="Our Partnership"
                        fontstyle="font-lexend text-lg mt-4 text-gray-400"
                    />

                    <div className="flex items-center">
                        <img src={traveloka} className='mr-2' alt="" />
                        <img src={tiket} className='mx-2' alt="" />
                        <img src={airbnb} className='mx-2' alt="" />
                        <img src={tripad} className='mx-2' alt="" />
                    </div>
                </div>
            </div>
            <div className='hidden md:relative'>
                <img src={imghero} className="sm:hidden" alt="" />
                <div className=''>
                    <div className='absolute flex flex-nowrap bottom-16 overflow-x-auto w-full scroll-container'>
                        <div className='flex animate-loop-scroll space-x-4'>
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                            <MiniCard
                                listimageandstyle={dataimage1}
                                texttop="1K+ People"
                                textbottom="Successfully Getting Home"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${houseprof}`,
                                        style: ''
                                    }
                                ]}
                                texttop="56 Houses"
                                textbottom="Sold Monthly"
                            />
                            <MiniCard
                                listimageandstyle={[
                                    {
                                        img: `${profil4}`,
                                        style: ''
                                    }
                                ]}
                                texttop="4K+"
                                textbottom="People Looking for New Homes"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}