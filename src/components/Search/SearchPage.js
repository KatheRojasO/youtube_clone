import React from 'react';
import './Search.css';
import VideoRow from '../VideoCard/VideoRow'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage({searchedVideos}) {
  
  return (
    <div className='searchPage'>
      <div className='filterSection'>
        <TuneOutlinedIcon className='searchICon'/>
        <h2>Filters</h2>
      </div>     
      <hr/>
      {
        searchedVideos.map((foundVideo) =>{
          
          return <VideoRow  videoName={foundVideo.videoName} 
            channelName={foundVideo.channelName}
            channelThumbnail={foundVideo.channelThumbnail}
            videoThumbnail={foundVideo.videoThumbnail}
            views={foundVideo.views}/>
        })
      } 


    </div>
      
  )
}

export default SearchPage