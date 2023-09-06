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
      <div>
    <div className="App-header"style={{backgroundImage:'url("https://img.freepik.com/free-vector/digital-note-vector-pastel-purple-background_53876-126437.jpg?w=826&t=st=1694011676~exp=1694012276~hmac=d27e94e5e1f2cf5046c8c894139c7d0529f438488a12586c4b634e4f8b236301")',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',marginTop:'-200px',height:'1600px', width:'1850px',position:'absolute'}}>
        {/*<header className="App-header">*/}
        <img classname="logo" src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg" style={{width:"400px",height:"200px", position: 'relative',marginLeft:'-1500px',marginTop:'200px'}}></img>
        <iframe className="gif" src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="400" height="300" frameBorder="0" class="giphy-embed"></iframe>
      {/*Typewriter  onInit={(typewriter)=>{ typewriter.typeString("Hello, I am Harshit Malik").pauseFor(1000).deleteAll().typeString("I am in my final year as a software engineering co-op student at the University of Alberta").start();}}>*/}
      <div className="typewriter">
      <Typewriter
      options={{
        strings: ["Hello, I am <strong style='color:red'>Harshit Malik</strong>", "I am in my final year as a software engineering co-op student at the University of Alberta"],
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
        
        <div className='button-container'>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' style={{fontFamily:'cursive'}} onClick={toAbout}>About me</button>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' style={{fontFamily:'cursive'}} onClick={scrolltoBottom}>Contact me</button>
        </div>
      {/* </header> */}
      <div ref={bottomElement} classname="contact">
        <h1 style={{color:'pink'}}>Contact Me</h1>
        <a href="https://www.linkedin.com/in/harshit-malik-273108224/"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" ></img></a>
        <a href="https://github.com/harshit-malik7"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
        <a href="mailto:harshit4731@gmail.com"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img></a>
      </div>    
    </div>
    </div>
  )
}

export default Home