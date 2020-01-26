import React from 'react';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Navbar, Nav, Image, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var mySounds = [ '空虚な答え.mp3', 'Wings of Courage -空を超えて- instrumental ver.mp3', "アペイリア (Instrumental).mp3","松本文紀 - 邂逅.flac","彩菜 - freak of nature ： start.mp3","誰が為に.mp3","Histoire de Destin_ (Furuiro Meikyuu Rondo _Histoire de Destin_).mp3","松本文紀 - 夜の向日葵.flac","Narsissu Inst.mp3","阿保剛 - Karma -Klavier-.mp3","コネクド -Instrumental-.mp3"];

function App() {
  
  function chooseSong() {   
    if (window.localStorage.getItem("index") == null) window.localStorage.setItem("index",Math.floor(Math.random() * 1000) % mySounds.length); 
    let newindex = Math.floor(Math.random() * 1000) % mySounds.length;
    while (newindex == window.localStorage.getItem("index")) {
      newindex = Math.floor(Math.random() * 1000) % mySounds.length;
    }
    window.localStorage.setItem("index", newindex);
    console.log("index is " + newindex);
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


  return (
    <Router>     
       <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <Image src="hibibg.png" roundedCircle width="50" height="50" />
             </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/articles-list">Articles</Nav.Link>
            </Nav>
            <Button variant="light" className="right-buffer" onClick={backSong}>&lt;</Button>
            <Button variant="light" className="right-buffer" onClick={nextSong}>></Button>            
            <audio controls src={chooseSong()} onEnded={nextSong} id='audio' controlsList="nodownload">
            </audio>
      </Navbar>

      <div id='page-body'>   
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>  
            <Route component={NotFoundPage}></Route>
          </Switch> 
        </div>
      </div>
  
    </Router>
    
  );
}


export default App;
