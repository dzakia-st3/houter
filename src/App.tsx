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
import bed from './img/bed 1.svg'
import garage from './img/car-garage 1.svg'
import bath from './img/bath 1.svg'
import stairs from './img/stairs-with-handrail 1.svg'
import phone from './img/phone.svg'
import tableimg from './img/table.svg'
import sofa from './img/sofa.svg'
import chair from './img/chair.svg'
import playbtn from './img/play btn.svg'
import star from './img/star.png'
import clock from './img/clock.svg'
import house5_1 from './img/section5_house1.svg'
import house5_2 from './img/section5_house2.svg'
import house5_3 from './img/section4&5_house3.svg'
import house5_4 from './img/section4&5_house1.svg'
import email from './img/email.svg'
import chair1 from './img/section6_chair.svg'
import chair2 from './img/section6_chair2.svg'
import house6_1 from './img/section6_house1.svg'
import house6_2 from './img/section6_house2.svg'
import './App.css';
import { Buttonhouter, TextHouter, MiniCard, MiniLGCard, MiniSMCard, MiniCardSection5 } from './component/smallcomponent'
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
                <div className='flex items-center justify-around w-full my-16'>
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
            <div className='section-3 flex items-center justify-around py-12'>
                <div className='w-1/3 p-10'>
                    <div className='flex space-x-2'>
                        <img src={line} alt="" />
                        <TextHouter
                            text='Ready To Sell'
                            fontstyle="font-lexend text-base text-[#F59E0B]"
                        />
                    </div>
                    <TextHouter
                        text="Let's Tour And See Our House!"
                        fontstyle="mt-2 font-bold font-lexend text-xl text-[#1b1c57]"
                    />
                    <TextHouter
                        text="Houses recommended by our partners that have been curated to become the home of your dreams!"
                        fontstyle="font-lexend text-base mt-4 text-gray-400"
                    />
                    <div>
                        <TextHouter
                            text="House Detail"
                            fontstyle="font-lexend font-bold text-base mt-4 text-gray-600"
                        />
                        <div className="flex justify-between">
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
                    <div className="flex items-center justify-between">
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
                    <div className="w-96 h-96 rounded-xl bg-[url('./img/section3_house.svg')] flex justify-center bg-cover items-center p-2">
                        <img src={playbtn} alt="" />
                    </div>
                    <div className='absolute -bottom-8 -left-36 flex space-x-2 items-end'>
                        <img src={sofa} className='h-40 w-auto' alt="" />
                        <img src={tableimg} className='h-20 w-auto' alt="" />
                        <img src={chair} className='h-20 w-auto' alt="" />
                    </div>
                </div>
            </div>
            <div className='section-4 py-12'>
                <div className='p-10 flex flex-col items-center justify-center'>
                    <img src={line} className='mb-2' alt="" />
                    <TextHouter
                        text='Ready To Sell'
                        fontstyle="font-lexend text-base text-[#F59E0B]"
                    />
                    <TextHouter
                        text="What Our User Say About Us"
                        fontstyle="mt-2 font-bold font-lexend text-xl text-[#1b1c57]"
                    />
                </div>
                <div className='flex items-center space-x-10 overflow-x-auto scroll-container'>
                    <div className='h-[33rem]'>
                        <div className="relative flex-none w-[55rem] h-96 rounded-xl bg-[url('./img/section4&5_house1.svg')] bg-opacity-75 bg-cover shadow-md shadow-slate-400 p-28">
                            <div className='absolute bg-white p-10 rounded-lg -bottom-32 right-20 left-20 shadow-md shadow-slate-400'>
                                <TextHouter
                                    text="My house sold out fast!"
                                    fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                                />
                                <TextHouter
                                    text="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
                                    fontstyle="mt-2 font-lexend text-sm text-gray-500"
                                />
                                <div className="flex items-center justify-between mt-4">
                                    <MiniSMCard
                                        img={profil2}
                                        name="Courtney Henry"
                                        info="CEO Andarafish"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <img src={star} alt="" />
                                        <TextHouter
                                            text="4.3"
                                            fontstyle="font-lexend font-bold text-base text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[33rem]'>
                        <div className="relative flex-none w-[55rem] h-96 rounded-xl bg-[url('./img/section4_house2.svg')] bg-cover shadow-md shadow-slate-400 p-28">
                            <div className='absolute bg-white p-10 rounded-lg -bottom-32 right-20 left-20 shadow-md shadow-slate-400'>
                                <TextHouter
                                    text="Best! I got the house I wanted through Hounter"
                                    fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                                />
                                <TextHouter
                                    text="Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
                                    fontstyle="mt-2 font-lexend text-sm text-gray-500"
                                />
                                <div className="flex items-center justify-between mt-4">
                                    <MiniSMCard
                                        img={profil1}
                                        name="Dianne Russell"
                                        info="Manager Director"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <img src={star} alt="" />
                                        <TextHouter
                                            text="4.6"
                                            fontstyle="font-lexend font-bold text-base text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[33rem]'>
                        <div className="relative flex-none w-[55rem] h-96 rounded-xl bg-[url('./img/section4&5_house3.svg')] bg-cover shadow-md shadow-slate-400 p-28">
                            <div className='absolute bg-white p-10 rounded-lg -bottom-32 right-20 left-20 shadow-md shadow-slate-400'>
                                <TextHouter
                                    text="Through the Hounter, I can get a house for my self"
                                    fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                                />
                                <TextHouter
                                    text="By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!"
                                    fontstyle="mt-2 font-lexend text-sm text-gray-500"
                                />
                                <div className="flex items-center justify-between mt-4">
                                    <MiniSMCard
                                        img={profil3}
                                        name="Esther Howard"
                                        info="Head of Marketing"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <img src={star} alt="" />
                                        <TextHouter
                                            text="4.5"
                                            fontstyle="font-lexend font-bold text-base text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div className='section-6 py-12 w-full h-60 p-16'>
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
        </>
    )
}

export default App;
