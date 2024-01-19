import React from 'react'
import { useEffect, useRef } from 'react';
import Button from './Button'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateProject1 = (element) => {
    gsap.set(element, { opacity: 0, x: '-100%' });

    const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        },
    });

    tl.to(element, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
};

const Project1 = () => {
    const portfolioRef1 = useRef(null)
    useEffect(() => {
        animateProject1(portfolioRef1.current, {
            opacity: 0,
            translateX: '100%',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',

        });
    }, []);

    return (
        <div ref={portfolioRef1} className='flex px-16 justify-around flex items-center justify-center mb-24'>
            <div className='ml-12'>
                <p className='text-2xl font-extralight text-white line-clamp-7 w-5/6 mb-12'>We are happy to announce Lorem Ipsum as Memento's next CEO. Ipsum's as a president of Memento has played an essential role for us to grow as a studio over the past 4 years.</p>
                <Button />
            </div>
            <img className='w-1/3 bg-cover mx-12 w-5/12' src='https://mementostudio.netlify.app/images/image1.jpeg' />

        </div>
    )
}

export default Project1