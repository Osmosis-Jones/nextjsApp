import React from 'react'
import Button from './Button'
import { Instagram } from './icons/InstagramLogo'
import { Twitter } from './icons/TwitterLogo'
import { Linkedin } from './icons/LinkedinLogo'

const Footer = () => {
    return (
        <div>
            <div className='relative flex text-xl text-white bg-black px-16 leading-[2.5] py-12'>
                <ul className='mr-24'>
                    <li >HOME</li>
                    <li>WHAT WE DO</li>
                    <li>WORK</li>
                    <li>WHO WE ARE</li>
                    <li>ARICLES</li>
                </ul>
                <ul>
                    <li>BEING HERE</li>
                    <li>CAREERS</li>
                    <li>CONTACT</li>
                    <li>PRIVACY</li>
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