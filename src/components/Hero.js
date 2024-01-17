import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center pt-32 h-screen gap-y-12 px-16 text-white'>
            <h1 className="hero__header text-8xl font-extrabold">
                Capture<span className='text-[#6C83FF] '>.</span>Produce<span className='text-[#FFA98E]'>.</span>Grow<span className='text-[#6C83FF]'>.</span>
            </h1>
            <h3 className="hero__subheading text-3xl font-regular line-clamp-3 w-4/12">Over the last 4 years we have committed to capture great experiences for all, produce high quality content, and grow our clients.</h3>
            <Button />
        </div>
    )
}

export default Hero