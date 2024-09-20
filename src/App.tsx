import React from 'react';
import imghero from './img/img_hero.svg'
import pinpoint from './img/pinpoint.svg'
import right from './img/right.svg'
import traveloka from './img/traveloka_logo.svg'
import tiket from './img/tiket_logo.svg'
import airbnb from './img/airbnb_logo.svg'
import tripad from './img/tripadvisor_logo.svg'
import profil1 from './img/hero-1a.png'
import profil2 from './img/hero-1b.png'
import profil3 from './img/hero-1c.png'
import houseprof from './img/hero-2.svg'
import profil4 from './img/hero-3.png'
import home from './img/home.svg'
import villa from './img/villa.svg'
import apart from './img/apartment.svg'
import line from './img/line.svg'
import homeblue from './img/home-blue.svg'
import fire from './img/fire.svg'
import wallet from './img/wallet-green.svg'
import './App.css';
import { Buttonhouter, TextHouter, MiniCard } from './component/smallcomponent'
import { Navbar } from './component/NavbarFooter';

function App() {
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
        <>
            <Navbar />
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

                <div className='relative'>
                    <img src={imghero} alt="" />
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
            <div className='section-2'>
                <div className='flex items-center justify-around w-full space-y-16'>
                    <div>
                        <div className='flex space-x-2'>
                            <img src={line} alt="" />
                            <TextHouter
                                text='Our Recomendation'
                                fontstyle="font-lexend text-base text-[#F59E0B]"
                            />
                        </div>
                        <TextHouter
                            text='Featured House'
                            fontstyle="mt-2 font-bold font-lexend text-xl text-[#1b1c57]"
                        />
                    </div>
                    <div className='flex space-x-4'>
                        <Buttonhouter
                            img={home}
                            text="House"
                            disabled={false}
                            iconPosition="left"
                            textColor="text-[#047857]"
                            bakcgroundColor='bg-transparent'
                            hovercolor='hover:bg-[#D1FAE5]'
                        />
                        <Buttonhouter
                            img={villa}
                            text="Villa"
                            disabled={false}
                            iconPosition="left"
                            textColor="text-[#047857]"
                            bakcgroundColor='bg-transparent'
                            hovercolor='hover:bg-[#D1FAE5]'
                        />
                        <Buttonhouter
                            img={apart}
                            text="Apartment"
                            disabled={false}
                            iconPosition="left"
                            textColor="text-[#047857]"
                            bakcgroundColor='bg-transparent'
                            hovercolor='hover:bg-[#D1FAE5]'
                        />
                    </div>
                </div>
                <div className='flex items-center space-x-12 m-16 overflow-x-auto scroll-container'>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Roseland House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 35.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil1} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Dianne Russell</p>
                                <p className="font-lexend text-xs text-gray-400">Manchester, Kentucky</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={homeblue}
                                text="New House"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#1D4ED8]"
                                bakcgroundColor='bg-[#DBEAFE]'
                                hovercolor='hover:bg-blue-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Woodlandside"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 20.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil2} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Robert Fox</p>
                                <p className="font-lexend text-xs text-gray-400">Dr. San Jose, South Dakota</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={wallet}
                                text="Best Deals"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#047857]"
                                bakcgroundColor='bg-[#D1FAE5]'
                                hovercolor='hover:bg-emerald-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="The Old Lighthouse"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 44.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil3} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jennifer Lawrance</p>
                                <p className="font-lexend text-xs text-gray-400">Santa Ana, Illinois</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Cosmo's House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 22.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil4} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jenny Wilson</p>
                                <p className="font-lexend text-xs text-gray-400">Preston Rd. Inglewood, Maine 98380</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Roseland House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 35.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil1} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Dianne Russell</p>
                                <p className="font-lexend text-xs text-gray-400">Manchester, Kentucky</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={homeblue}
                                text="New House"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#1D4ED8]"
                                bakcgroundColor='bg-[#DBEAFE]'
                                hovercolor='hover:bg-blue-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Woodlandside"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 20.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil2} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Robert Fox</p>
                                <p className="font-lexend text-xs text-gray-400">Dr. San Jose, South Dakota</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={wallet}
                                text="Best Deals"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#047857]"
                                bakcgroundColor='bg-[#D1FAE5]'
                                hovercolor='hover:bg-emerald-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="The Old Lighthouse"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 44.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil3} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jennifer Lawrance</p>
                                <p className="font-lexend text-xs text-gray-400">Santa Ana, Illinois</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Cosmo's House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 22.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil4} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jenny Wilson</p>
                                <p className="font-lexend text-xs text-gray-400">Preston Rd. Inglewood, Maine 98380</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Roseland House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 35.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil1} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Dianne Russell</p>
                                <p className="font-lexend text-xs text-gray-400">Manchester, Kentucky</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={homeblue}
                                text="New House"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#1D4ED8]"
                                bakcgroundColor='bg-[#DBEAFE]'
                                hovercolor='hover:bg-blue-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Woodlandside"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 20.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil2} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Robert Fox</p>
                                <p className="font-lexend text-xs text-gray-400">Dr. San Jose, South Dakota</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={wallet}
                                text="Best Deals"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#047857]"
                                bakcgroundColor='bg-[#D1FAE5]'
                                hovercolor='hover:bg-emerald-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="The Old Lighthouse"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 44.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil3} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jennifer Lawrance</p>
                                <p className="font-lexend text-xs text-gray-400">Santa Ana, Illinois</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Cosmo's House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 22.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil4} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jenny Wilson</p>
                                <p className="font-lexend text-xs text-gray-400">Preston Rd. Inglewood, Maine 98380</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Roseland House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 35.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil1} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Dianne Russell</p>
                                <p className="font-lexend text-xs text-gray-400">Manchester, Kentucky</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={homeblue}
                                text="New House"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#1D4ED8]"
                                bakcgroundColor='bg-[#DBEAFE]'
                                hovercolor='hover:bg-blue-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Woodlandside"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 20.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil2} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Robert Fox</p>
                                <p className="font-lexend text-xs text-gray-400">Dr. San Jose, South Dakota</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={wallet}
                                text="Best Deals"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#047857]"
                                bakcgroundColor='bg-[#D1FAE5]'
                                hovercolor='hover:bg-emerald-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="The Old Lighthouse"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 44.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil3} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jennifer Lawrance</p>
                                <p className="font-lexend text-xs text-gray-400">Santa Ana, Illinois</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Cosmo's House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 22.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil4} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jenny Wilson</p>
                                <p className="font-lexend text-xs text-gray-400">Preston Rd. Inglewood, Maine 98380</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Roseland House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 35.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil1} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Dianne Russell</p>
                                <p className="font-lexend text-xs text-gray-400">Manchester, Kentucky</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={homeblue}
                                text="New House"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#1D4ED8]"
                                bakcgroundColor='bg-[#DBEAFE]'
                                hovercolor='hover:bg-blue-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Woodlandside"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 20.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil2} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Robert Fox</p>
                                <p className="font-lexend text-xs text-gray-400">Dr. San Jose, South Dakota</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={wallet}
                                text="Best Deals"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#047857]"
                                bakcgroundColor='bg-[#D1FAE5]'
                                hovercolor='hover:bg-emerald-300'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="The Old Lighthouse"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 44.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil3} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jennifer Lawrance</p>
                                <p className="font-lexend text-xs text-gray-400">Santa Ana, Illinois</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
                            <Buttonhouter
                                img={fire}
                                text="Popular"
                                disabled={false}
                                iconPosition="left"
                                textColor="text-[#EF4444]"
                                bakcgroundColor='bg-[#FEE2E2]'
                                hovercolor='hover:bg-red-400'
                            />
                        </div>
                        <div className='p-2'>
                            <TextHouter
                                text="Cosmo's House"
                                fontstyle="font-bold font-lexend text-lg text-[#1b1c57]"
                            />
                            <TextHouter
                                text="$ 22.000.000"
                                fontstyle="font-lexend text-base text-[#1b1c57]"
                            />
                        </div>
                        <div className="flex space-x-2 items-center p-2">
                            <div className='flex'>
                                <img src={profil4} className='w-10 h-10' alt="" />
                            </div>
                            <div>
                                <p className="font-bold font-lexend text-sm text-[#1b1c57]">Jenny Wilson</p>
                                <p className="font-lexend text-xs text-gray-400">Preston Rd. Inglewood, Maine 98380</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
