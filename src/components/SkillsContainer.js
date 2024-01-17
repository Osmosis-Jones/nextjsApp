'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Skills from './Skills';

const SkillsContainer = ({ children }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        // GSAP Animation
        gsap.to(carousel, {
            x: '-90%', // Move the carousel to the left by its width
            duration: 40, // Adjust the duration based on your preference
            ease: 'linear',
            repeat: -1, // Infinite loop
        });
    }, []);

    return (
        <div className="carousel-container h-screen" ref={carouselRef}>
            {/* Render the Skills component */}
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
            <Skills />
        </div>
    );
};

export default SkillsContainer;
