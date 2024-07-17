import React from 'react'
import IIMVideo from '../assets/video/IIM-Video.mp4'
// import video2 from '../assets/video/iitvideo.mp4'
const VideoComponent = () => {
  return (
    <div className='video-component'>
      <video muted autoPlay loop poster="/sites/default/files/poster.webp" playsInline preload="none" className="relative w-full h-full" >
        <source src={IIMVideo} type="video/mp4" />
      </video>
    </div>
  )
}


export default VideoComponent