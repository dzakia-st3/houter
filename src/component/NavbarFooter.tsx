import React from "react";
import logohouter from "../img/logo_houter.svg"
import down from "../img/down.svg"
import fb from "../img/fb.svg"
import twitter from "../img/twitter.svg"
import ig from "../img/ig.svg"
import { Buttonhouter, TextHouter } from "./smallcomponent";

function Navbar() {
    return (
        <div className="hidden md:fixed md:mb-0 mb-5 bg-white bg-opacity-20 px-20 py-5 right-0 left-0 z-50" id="nav-houter">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logohouter} className="mr-3" alt="" />
                    <TextHouter
                        text="Hounter"
                        fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                    />
                </div>
                <div className="flex">
                    <Buttonhouter
                        img="null"
                        text="About Us"
                        disabled={false}
                        iconPosition=""
                        textColor="text-white"
                        bakcgroundColor='bg-transparent mr-4'
                        hovercolor='hover:underline'
                    />
                    <Buttonhouter
                        img="null"
                        text="Article"
                        disabled={false}
                        iconPosition=""
                        textColor="text-white"
                        bakcgroundColor='bg-transparent mr-4'
                        hovercolor='hover:underline'
                    />
                    <Buttonhouter
                        img={down}
                        text="Property"
                        disabled={false}
                        iconPosition="right"
                        textColor="text-white"
                        bakcgroundColor='bg-transparent mr-4'
                        hovercolor='hover:underline'
                    />
                    <Buttonhouter
                        img="null"
                        text="Sign Up!"
                        disabled={false}
                        iconPosition=""
                        textColor="ml-5 font-bold text-[#047857]"
                        bakcgroundColor='bg-[#D1FAE5]'
                        hovercolor='hover:bg-emerald-300'
                    />
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="flex justify-between items-start p-16">
            <div className="space-y-4 w-1/3">
                <div className="flex items-center">
                    <img src={logohouter} className="mr-3" alt="" />
                    <TextHouter
                        text="Hounter"
                        fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                    />
                </div>
                <TextHouter
                    text="We provide information about properties such as houses, villas and apartments to help people find their dream home"
                    fontstyle="font-lexend text-sm text-gray-500"
                />
                <div className="flex space-x-4">
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                    <img src={ig} alt="" />
                </div>
            </div>
            <div className="flex justify-around w-2/3">
                <div className="space-y-3">
                    <TextHouter
                        text="Property"
                        fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                    />
                    <TextHouter
                        text="House"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="Apartment"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="Vila"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                </div>
                <div className="space-y-3">
                    <TextHouter
                        text="Article"
                        fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                    />
                    <TextHouter
                        text="New Article"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="Popular Article"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="Most Read"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="Tips & Tricks"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                </div>
                <div className="space-y-3">
                    <TextHouter
                        text="Contact"
                        fontstyle="font-bold font-lexend text-base text-[#1b1c57]"
                    />
                    <TextHouter
                        text="2464 Royal Ln. Mesa, New Jersey 45463"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="(671) 555-0110"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                    <TextHouter
                        text="info@hounter.com"
                        fontstyle="font-lexend text-sm text-gray-500"
                    />
                </div>
            </div>
        </div>
    )
}

export { Navbar, Footer }