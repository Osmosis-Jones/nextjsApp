'use client'
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Use GSAP for smooth animations
    gsap.to('.navbar', {
      top: scrollDirection === 'up' ? '0' : '-160px',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }, [scrollDirection]);

  return (
    <nav className='navbar fixed w-full top-0 py-12 bg-black text-white'>
      <div className="navbar px-16 flex justify-between">
        <div className="navbar__logo font-bold text-3xl">
          MEMENTO
        </div>
        <div className="navbar__links w-2/5">
          <ul className='flex justify-between justify-around font-light text-lg'>
            <li><Link href='/'> WHAT WE DO</Link></li>
            <li><Link href='/'> WHO WE ARE</Link></li>
            <li><Link href='/'> BEING HERE</Link></li>
            <li><Link href='/'> CAREERS</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;