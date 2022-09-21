import React, {useState}from 'react'
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import {Link} from 'react-router-dom';
import data from '../../data.json';
const logo = require('../../assets/logo.jpg');

function Header({setSearchedVideos}) {

  const [inputSearchbar, setInputSearchBar] = useState('');
  
  /*let inputHandler = (e) => {
    const lowercase =e.target.value.toLowerCase();
    setInputSearchBar(lowercase)
  }*/

  let inputHandler = (e) => {
    setInputSearchBar(e.target.value);
    console.log(inputSearchbar)
    let search = data.filter((video) =>{
      return Object.values(video.videoName)
        .join('')
        .toLocaleLowerCase()
        .includes(inputSearchbar.toLocaleLowerCase());
    });

    /*setdisplayVideos(search);*/
    setSearchedVideos(search);
  }

  return (
    <div className='header'>

      <div className='header_left'>
        <MenuOutlinedIcon />
        <Link to='/'>
          <img className='header_logo' src={logo} alt='logo'></img>
        </Link>
        
      </div>
        
      <div className='header_center'>
        <input 
          onChange={inputHandler}
          value={inputSearchbar}
          placeholder='Search'
          type='text'
        />
        <KeyboardOutlinedIcon className='keyboard_icon' />
        <Link to={`/search/${inputSearchbar}`}>
          <SearchOutlinedIcon className='search_icon' />
        </Link>
        
        
      </div>

      <div className='header_right'>
        <VideoCallOutlinedIcon className='header_right_icon'/>
        <NotificationsNoneOutlinedIcon className='header_right_icon'/>
        <AccountCircleOutlinedIcon className='header_right_icon'/>
      </div>
    </div>

  )
}

export default Header