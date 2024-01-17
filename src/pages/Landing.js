import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Video from '@/components/Video'
import Portfolio from '@/components/Portfolio'
import Info from '@/components/Info'
import Work from '@/components/Work'
import Footer from '@/components/Footer'


const Landing = () => {
    return (
        <div>
            <div className="relative -z-5] bg-black animate-expand-shrink outer-container ">
                <div className="fixed inset-0 z-4 overflow-hidden ">
                    {/* <div className="absolute top-1/4 left-2/4 inset-0 rounded-full mix-blend-multiply filter blur-xl opacity-70 inner-container" /> */}
                    <div class="absolute pointer-events-none top-1/4 left-2/4 w-[500px] h-[500px] bg-[#FFA98E] rounded-full mix-blend-lighten filter blur-xl opacity-[0.1] animate-reverseblob animation-delay-2000"></div>
                    <div class="absolute pointer-events-none bottom-16 right-1/4 w-[700px] h-[700px] bg-[#6C83FF]  rounded-full mix-blend-lighten filter blur-xl opacity-[0.1] animate-blob animation-delay-4000"></div>
                </div>
                <div className='z-2'>
                    <Navbar />
                    <Hero />
                    <Video />
                    <Portfolio />
                    <Info />
                    <Work />
                    <Info />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Landing