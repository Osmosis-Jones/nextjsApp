import React from 'react'


const Video = () => {
    return (
        <div>
            <video className='w-full px-16'>
                <source src='https://mementostudio.netlify.app/images/video.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Video