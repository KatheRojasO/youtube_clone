import React from 'react';
import './VideoCard.css';


function VideoCard({videoName, channelName, channelThumbnail, videoThumbnail, views}) {
  
  const avatar = require(`../../assets/channels/${channelThumbnail}`);
  const videoImage = require(`../../assets/videos/${videoThumbnail}`);

  return (
    <div className='videoCard'>
      <img className='videoCard_image' src={videoImage} alt='videoCard_image'/>
      <div className='videoCard_info'>
        <img className='videoCard_avatar'src={avatar} alt='videoCard_avatar' />
        <div className='video_text'>
          <h4>{videoName}</h4>
          <p>{channelName}</p>
          <p>{views} views</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard