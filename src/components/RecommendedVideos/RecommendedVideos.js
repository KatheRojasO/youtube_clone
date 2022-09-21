import React from 'react';
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard';
import data from '../../data.json';

function RecommendedVideos() {
 
  return (
    <div className='recommendedVideos'>
      <div className='recommendedVideos_card'>
        
          {
            data.map((recommendedVideos) =>{
              return <VideoCard videoName={recommendedVideos.videoName} 
                channelName={recommendedVideos.channelName}
                channelThumbnail={recommendedVideos.channelThumbnail}
                videoThumbnail={recommendedVideos.videoThumbnail}
                views={recommendedVideos.views}
                videoLink={recommendedVideos.videoId}/>
          })}
      </div>
    </div>
  )
}

export default RecommendedVideos