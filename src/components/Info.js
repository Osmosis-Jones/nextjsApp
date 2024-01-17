import React from 'react'
import Button from './Button'

const Info = (props) => {
    return (
        <>
            <div className='h-hero flex flex-col items-center justify-center h-[75vh] '>
                <h1 className='text-center text-white text-4xl line-clamp-3 w-2/5 mb-5'>Explore a few of our most impactful projects</h1>
                <Button />
            </div>

        </>
    )
}

export default Info