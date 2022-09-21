import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected Icon={HomeOutlinedIcon} title='Home'/>
      <SidebarRow Icon={ExploreOutlinedIcon} title='Explore'/>
      <SidebarRow Icon={PlayArrowOutlinedIcon} title='Shorts'/>
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title='Subscriptions'/>
      <hr/>
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title='Library'/>
      <SidebarRow Icon={RestoreOutlinedIcon} title='History'/>
      <SidebarRow Icon={SlideshowOutlinedIcon} title='Your videos'/>
      <SidebarRow Icon={WatchLaterOutlinedIcon} title='Watch later'/>
      <SidebarRow Icon={ThumbUpOutlinedIcon} title='Videos you liked'/>
      <hr/>
    </div>
  );
}

export default Sidebar;