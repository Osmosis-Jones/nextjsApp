'use client'
import React from 'react'
// import ReactPlayer from 'react-player'
// import cloudinary from "cloudinary-video-player";
// import "cloudinary-video-player/dist/cld-video-player.min.css";


const Video = () => {
    let videosrc = '/video.mp4'
    // const demoplayer = cloudinary.videoPlayer('doc-player', { cloudName: 'demo' });
    // demoplayer.source(videosrc);
    return (
        <div className='w-full'>
            <video className='w-full px-16' autoPlay loop>
                <source src='/video.mp4' type="video/mp4" controls='true' />
            </video>

            {/* <ReactPlayer
                className='w-full px-16 hidden'

                url={videosrc}
                controls={true}
                playing={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={videosrc} type="video/mp4" /> */}
        </div>
    )
}

export default Video

// https://filmsupply-files.s3.amazonaws.com/fs/files/production/clip_mov/2507082/mp4.wat.h.484.EeQOpLS8a2LUk2CbR5LnA2KDl3SQgQVIznLBpDhA55DTl.mp4
// https://mementostudio.netlify.app/images/video.mp4