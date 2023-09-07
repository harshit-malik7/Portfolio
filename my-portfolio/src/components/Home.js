import React, { useRef } from 'react'
import {Routes, useNavigate, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Typewriter from 'typewriter-effect';

const Home = () => {

    const navigate=useNavigate();
    //function to redirect to the about page
    const toAbout = () => {
        navigate('/about')
    }
    const bottomElement=useRef(null);

    const scrolltoBottom=()=>{
        bottomElement?.current?.scrollIntoView({behavior:"smooth"})
    }
    return (
    <div className="App-header">
        {/*<header className="App-header">*/}
        <img classname="logo" src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg" style={{width:"300px",height:"100px", position: 'absolute', left:'0', top:'0'}}></img>
        <div className='button-container'>
          <button className='btn btn-outline-success btn-lg' style={{fontFamily:'cursive', border:'none', backgroundColor: 'transparent'}} onClick={toAbout}>About me</button>
          <button className='btn btn-outline-info btn-lg' style={{fontFamily:'cursive',border:'none',backgroundColor: 'transparent'}} onClick={scrolltoBottom}>Contact me</button>
        </div>
        <iframe className="gif" src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="400" height="300" frameBorder="0" class="giphy-embed"></iframe>
      {/*Typewriter  onInit={(typewriter)=>{ typewriter.typeString("Hello, I am Harshit Malik").pauseFor(1000).deleteAll().typeString("I am in my final year as a software engineering co-op student at the University of Alberta").start();}}>*/}
      <div className="typewriter">
      <Typewriter
      options={{
        strings: ["Hello, I am&nbsp; <strong style='color:red'>Harshit Malik</strong>", "I am in my final year as a software engineering co-op student at the University of Alberta"],
        autoStart: true, // Automatically start typing
        loop: true,       // Loop the typing animation
        delay: 50,        // Delay between each character
        deleteSpeed: 20,  // Speed of deleting characters
        wrapperClassName: 'wrapper',
        //get max width of the typewriter
        cursorClassName: 'cursor',
      }}
    />
    </div>
      {/* </header> */}
      <div ref={bottomElement} classname="contact">
        <h1 style={{color:'blueviolet'}}>Contact Me</h1>
        <a href="https://www.linkedin.com/in/harshit-malik-273108224/"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" ></img></a>
        <a href="https://github.com/harshit-malik7"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{backgroundColor:'white'}}></img></a>
        <a href="mailto:harshit4731@gmail.com"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img></a>
      </div>    
    </div>
  )
}

export default Home