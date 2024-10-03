import React from "react";
import profil1 from '../img/hero-1a.png'
import profil2 from '../img/hero-1b.png'
import profil3 from '../img/hero-1c.png'
import profil4 from '../img/hero-3.png'
import home from '../img/home.svg'
import villa from '../img/villa.svg'
import apart from '../img/apartment.svg'
import line from '../img/line.svg'
import homeblue from '../img/home-blue.svg'
import fire from '../img/fire.svg'
import wallet from '../img/wallet-green.svg'
import { Buttonhouter, TextHouter } from '../component/smallcomponent'


export default function Section2() {
    return (
        <div className='section-2'>
            <div className='flex flex-col items-center justify-center space-y-5 md:flex-row md:justify-around w-full my-12'>
                <div>
                    <div className='flex flex-col-reverse space-x-0 md:flex-row md:space-x-2'>
                        <img src={line} className="h-1" alt="" />
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
            <div className='flex items-center space-x-12 px-6 md:p-12 overflow-x-auto scroll-container'>
                <div>
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home1.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home2.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home3.svg')] flex justify-start bg-cover items-end p-2">
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
                    <div className="w-72 h-96 md:w-52 md:h-60 rounded-2xl bg-[url('./img/home4.svg')] flex justify-start bg-cover items-end p-2">
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
    )
}