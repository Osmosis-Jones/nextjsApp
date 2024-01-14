import React from 'react'
import sky from '../assets/video.mp4'

const Video = () => {
    return (
        <div>
            <video className='w-full'>
                <source src={sky} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video