import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SearchPage from './components/Search/SearchPage';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  const [searchedVideos, setSearchedVideos] = useState([]);

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header setSearchedVideos={setSearchedVideos}/>
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app_page'>
              <Sidebar />
              <SearchPage searchedVideos={searchedVideos}/>
            </div>
          </Route>
          <Route path='/'>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      
      {/*<Header />
      <div className='app_page'>
        <Sidebar />
        <RecommendedVideos />
      </div>*/}
          
    </div>
  );
}

export default App;
