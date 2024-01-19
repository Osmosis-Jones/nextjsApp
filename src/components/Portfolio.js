'use client'
import React, { useEffect, useRef } from 'react'
import Text_Banner from './Text_Banner'
import Project from './Project'
import Project1 from './Project1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Portfolio = () => {
    const projectRef = useRef(null);
    const project1Ref = useRef(null);

    // useEffect(() => {
    //     const project1Element = project1Ref.current;
    //     gsap.set(project1Element, { opacity: 0, x: '100%' });

    //     const tlproject1 = gsap.timeline({
    //         defaults: { ease: 'power2.inOut' },
    //         scrollTrigger: {
    //             trigger: project1Element,
    //             start: 'top 80%',
    //             end: 'top 20%',
    //             toggleActions: 'play none none reverse',
    //         }
    //     });


    //     tlproject1.to(project1Element, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
    // }, []);


    return (
        <div className='overflow-hidden'>
            <Text_Banner />
            <div ref={projectRef}>
                <Project image={'https://mementostudio.netlify.app/images/person.jpeg'} />
            </div>
            <div ref={project1Ref}>
                <Project1 />
            </div>
            <div ref={projectRef}>
                <Project image={'https://mementostudio.netlify.app/images/lightblock.jpeg'} />
            </div>
        </div>
    )
}

export default Portfolio