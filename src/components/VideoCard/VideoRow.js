import React from 'react';
import './VideoRow.css'

function VideoRow({videoName, channelName, channelThumbnail, videoThumbnail, views}) {

  console.log(channelThumbnail)

  const avatar = require(`../../assets/channels/${channelThumbnail}`);
  const videoImage = require(`../../assets/videos/${videoThumbnail}`);
  
  return (
    <div className='videoRow'>
      <img className='videoRow_image' src={videoImage} alt='videoRow_image'/>
      <div className='videoRow_text'>
        <h3>{videoName}</h3>
        <p className='videoRow_headline'>{views} views</p>
        <div className='videoRow_info'>
          <img className='videoRow_avatar' src={avatar} alt='videoRow_avatar' />
          <p className='videoRow_headline'>{channelName}</p>
        </div>
        

      </div>

    </div>
  )
}

export default VideoRow
