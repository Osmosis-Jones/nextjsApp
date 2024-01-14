import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center h-hero gap-y-12 px-16 text-white'>
            <h1 className="hero__header text-8xl font-extrabold">
                Capture<span>.</span>Produce<span>.</span>Grow<span>.</span>
            </h1>
            <h3 className="hero__subheading text-2xl font-semibold line-clamp-3 w-4/12">Over the last 4 years we have committed to capture great experiences for all, produce high quality content, and grow our clients.</h3>
            <Button />
        </div>
    )
}

export default Hero