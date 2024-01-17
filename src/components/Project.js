import React from 'react'
import Button from './Button'


const Project = (props) => {
    return (
        <div className='flex px-16 justify-around flex items-center justify-center mb-24'>
            <img className='w-1/3 bg-cover mx-12 w-5/12' src={props.image} />
            <div className='ml-12'>
                <p className='text-3xl text-white line-clamp-7 w-5/6 mb-12'>We are happy to announce Lorem Ipsum as Memento's next CEO. Ipsum's as a president of Memento has played an essential role for us to grow as a studio over the past 4 years.</p>
                <Button />
            </div>
        </div>
    )
}

export default Project