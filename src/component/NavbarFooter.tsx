import React from "react";
import logohouter from "../img/logo_houter.svg"
import down from "../img/down.svg"
import { Buttonhouter, TextHouter } from "./smallcomponent";

function Navbar() {
    return (
        <div className="fixed bg-white bg-opacity-20 px-20 py-5 right-0 left-0 z-50" id="nav-houter">
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
        <p>WORLD !!!!</p>
    )
}

export { Navbar, Footer }