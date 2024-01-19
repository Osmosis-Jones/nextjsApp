'use client'
import React, { useEffect, useRef } from 'react'
import Button from './Button'
import gsap from 'gsap'
import SplitType from 'split-type'

const Hero = () => {
    const heroRef = useRef(null);
    const heroSubheadingRef = useRef(null);

    useEffect(() => {
        const typeSplit = new SplitType(heroRef.current, {
            type: 'lines, words, chars',
            tagName: 'span'
        });

        gsap.from(heroRef.current.querySelectorAll('.word'), {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.5,
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top center',
            },
        });

        const typeSplitH3 = new SplitType(heroSubheadingRef.current, {
            types: 'lines',
            tagName: 'span',
        });

        // GSAP Animation for h3
        gsap.from(heroSubheadingRef.current.querySelectorAll('.line'), {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: heroSubheadingRef.current,
                // start: 'top center',
            },
        });
    }, []);


    return (
        <div className='flex flex-col justify-center pt-32 h-screen gap-y-12 px-16 text-white'>
            <h1 ref={heroRef} className="hero__header text-8xl font-extrabold">
                Capture<span className='text-[#6C83FF] '>.</span>Produce<span className='text-[#FFA98E]'>.</span>Grow<span className='text-[#6C83FF]'>.</span>
            </h1>
            <h3 ref={heroSubheadingRef} className="hero__subheading text-3xl font-regular line-clamp-3 w-7/12">Over the last 4 years we have committed to capture great experiences for all, produce high quality content, and grow our clients.</h3>
            <Button />
        </div>
    )
}

export default Hero