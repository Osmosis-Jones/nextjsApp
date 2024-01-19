import React from 'react'
import Button from './Button'
import { Instagram } from './icons/InstagramLogo'
import { Twitter } from './icons/TwitterLogo'
import { Linkedin } from './icons/LinkedinLogo'
import Link from 'next/link'


const Footer = () => {
    return (
        <div>
            <div className='relative flex text-xl text-white bg-black px-16 leading-[2.5] py-12'>
                <ul className='mr-24'>
                    <li ><Link href={'/'}>HOME</Link></li>
                    < li > <Link href={'/'}>WHAT WE DO</Link></li>
                    <li><Link href={'/'}>WORK</Link></li>
                    <li><Link href={'/'}>WHO WE ARE</Link></li>
                    <li><Link href={'/'}>ARICLES</Link></li>
                </ul>
                <ul>
                    <li><Link href={'/'}>BEING HERE</Link></li>
                    <li><Link href={'/'}>CAREERS</Link></li>
                    <li><Link href={'/'}>CONTACT</Link></li>
                    <li><Link href={'/'}>PRIVACY</Link></li>
                </ul>
                <div className='flex absolute bottom-10 right-0 px-16 items-center w-2/5 justify-around'>
                    <Button />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                </div>
            </div>

        </div>
    )
}

export default Footer