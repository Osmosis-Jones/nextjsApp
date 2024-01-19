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
            <div className="relative bg-black animate-expand-shrink outer-container ">
                <div className="fixed inset-0 -z-4 overflow-hidden ">
                    <div class="absolute pointer-events-none top-1/4 left-2/4 w-[500px] h-[500px] bg-[#FFA98E] rounded-full mix-blend-lighten filter blur-xl opacity-[0.1] animate-reverseblob animation-delay-2000 z-[-1]"></div>
                    <div class="absolute pointer-events-none bottom-16 right-1/4 w-[700px] h-[700px] bg-[#6C83FF]  rounded-full mix-blend-lighten filter blur-xl opacity-[0.1] animate-blob animation-delay-4000 z-[-1]"></div>
                </div>
                <div className='relative z-[1]'> {/* Set a higher z-index for other elements to overlap */}
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