import React from 'react'

const Clients = ({ image, title, description }) => {
    return (
        <div>
            <img className='w-11/12 h-[350px] mb-10' src={image} />
            <h2 className='text-white text-3xl mb-5 '>{title}</h2>
            <p className='text-white text-md leading-6 w-5/6'>{description}</p>
        </div>
    )
}

export default Clients