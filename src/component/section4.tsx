import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import profil1 from '../img/hero-1a.png'
import profil2 from '../img/hero-1b.png'
import profil3 from '../img/hero-1c.png'
import line from '../img/line.svg'
import star from '../img/star.png'
import { TextHouter, MiniSMCard } from '../component/smallcomponent'

export default function Section4() {
    return (
        <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay="200" className='section-4 md:py-12'>
            <div className='pb-5 md:p-10 md:pb-0 flex flex-col items-center justify-center'>
                <div className="flex flex-col-reverse">
                    <img src={line} className='' alt="" />
                    <TextHouter
                        text='See Our Review'
                        fontstyle="font-lexend text-base text-[#F59E0B] md:mb-2"
                    />
                </div>
                <TextHouter
                    text="What Our User Say About Us"
                    fontstyle="mt-2 md:mb-10 font-bold font-lexend text-xl text-[#1b1c57]"
                />
            </div>
            <div className='flex items-center px-5 space-x-10'>
                <Swiper
                    grabCursor={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="swipertestimonial"
                >
                    <SwiperSlide>
                        <div className='h-[20rem] md:h-[33rem]'>
                            <div className="relative flex-none w-[20rem] sm:w-full h-72 md:w-[38rem] md:h-96 rounded-xl bg-[url('./img/section4&5_house1.svg')] bg-opacity-75 bg-cover shadow-md shadow-slate-400 p-28">
                                <div className='absolute bg-white p-5 md:p-10 rounded-lg -bottom-32 right-3 left-3 md:right-20 md:left-20 shadow-md shadow-slate-400'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[27rem] md:h-[33rem]'>
                            <div className="relative flex-none w-[20rem] sm:w-full h-72 md:w-[38rem] md:h-96 rounded-xl bg-[url('./img/section4_house2.svg')] bg-cover shadow-md shadow-slate-400 p-28">
                                <div className='absolute bg-white p-5 md:p-10 rounded-lg -bottom-32 right-3 left-3 md:right-20 md:left-20 shadow-md shadow-slate-400'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[27rem] md:h-[33rem]'>
                            <div className="relative flex-none w-[20rem] sm:w-full h-72 md:w-[38rem] md:h-96 rounded-xl bg-[url('./img/section4&5_house3.svg')] bg-cover shadow-md shadow-slate-400 p-28">
                                <div className='absolute bg-white p-5 md:p-10 rounded-lg -bottom-32 right-3 left-3 md:right-20 md:left-20 shadow-md shadow-slate-400'>
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}