import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Button = (props) => {
    return (
        <div className='flex align-center cursor-pointer justify-center rounded-full bg-[#F6F7F8] w-fit text-black px-10 py-3 text-lg font-normal' >
            Learn More <FontAwesomeIcon icon={faArrowRight} className=' h-3  mt-2 mx-2' />
        </div>
    )
}

export default Button

