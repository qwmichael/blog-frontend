import React from 'react';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Navbar, Nav, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var mySounds = ['1.mp3', '2.mp3', "3.mp3","4.flac","5.mp3","6.mp3","7.mp3","8.flac","9.mp3","10.mp3","11.mp3"];

function App() {
  
  function chooseSong() {   
    if (window.localStorage.getItem('index') == null) window.localStorage.setItem("index",Math.floor(Math.random() * 1000) % mySounds.length); 
    let newindex = Math.floor(Math.random() * 1000) % mySounds.length;
    while (newindex == window.localStorage.getItem('index')) {
      newindex = Math.floor(Math.random() * 1000) % mySounds.length;
    }
    window.localStorage.setItem('index', newindex);
    return mySounds[newindex];
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }
  function backSong(e) {
    e.preventDefault();
    
    let index = mod(Number(window.localStorage.getItem('index')) - 1,mySounds.length);
    window.localStorage.setItem('index', index);
    document.getElementById('audio').src = mySounds[index];
    document.getElementById('audio').setAttribute('autoplay', "");
    console.log("index is " + window.localStorage.getItem("index"));
  }

  function nextSong(e) {
    e.preventDefault();
    let index = (Number(window.localStorage.getItem("index")) + 1) % mySounds.length;
    window.localStorage.setItem("index", index);
    document.getElementById('audio').src = mySounds[index];
    document.getElementById('audio').setAttribute("autoplay", "")
   
  }
  console.log(process.env.PUBLIC_URL);

  return (
    <HashRouter >   
       <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
              <Image src="hibibg.png" roundedCircle width="50" height="50" />
             </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="/articles-list" className="nav-link">Articles</Nav.Link>
            </Nav>
            <Button variant="light" className="right-buffer" onClick={backSong}>&lt;</Button>
            <Button variant="light" className="right-buffer" onClick={nextSong}>></Button>            
            <audio controls src={chooseSong()} onEnded={nextSong} id='audio' controlsList="nodownload">
            </audio>
      </Navbar>

      <div id='page-body'>   
        <div className="App">     
            <Switch>
              <Route path={'/'} component={HomePage} exact/>
              <Route path={'/about'} component={AboutPage}/>
              <Route path={"/articles-list"} component={ArticlesListPage}  />
              <Route path={"/article/:name"} component={ArticlePage} t/>  
              <Route component={NotFoundPage}></Route>
            </Switch> 
        </div>
      </div>
  
      </HashRouter>
    
  );
}


export default App;
