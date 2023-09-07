import React, { useRef } from 'react'
import {Routes, useNavigate, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';

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

    const sun = useRef(new Image());
    const earth = useRef(new Image());
    const mars = useRef(new Image());
    const canvasref=useRef(null);
    useEffect(()=>{
      let requestID;
      
      
      const canvas=canvasref.current;
      const ctx=canvas.getContext("2d");
      // sun.current.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/F-type_subgiant_star_in_Celestia_03.png";
      sun.current.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88IDEtSSTQUnYes_xdF23woS-Wu0iSmIRVg&usqp=CAU";
      earth.current.src = "https://i.etsystatic.com/28921914/r/il/6012cc/3477638374/il_fullxfull.3477638374_rl1v.jpg";
      mars.current.src="https://as2.ftcdn.net/v2/jpg/03/41/22/33/1000_F_341223314_TuiMtFvlAba07hrDA6GX8Hz3Omt5CdZV.jpg";
      function init() {
        window.requestAnimationFrame(draw);
      }
      function draw() {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 800, 800); // clear canvas
  
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();
        ctx.translate(500, 300);
        ctx.save();
  
        // Earth
        const time = new Date();
        ctx.rotate(
          ((2 * Math.PI) / 60) * time.getSeconds() +
            ((2 * Math.PI) / 60000) * time.getMilliseconds(),
        );
        ctx.translate(225, 0);
        ctx.fillRect(0, -12, 40, 24); // Shadow
        ctx.drawImage(earth.current, -25, -25,50,50);
        ctx.restore();

        
  
        // Mars
        ctx.save();
         const marsTime = new Date();
         ctx.rotate(
           (( Math.PI) / 6) * marsTime.getSeconds()*0.1 +
             (( Math.PI) / 6000) * marsTime.getMilliseconds()*0.1,
         );
         ctx.translate(325,0);
         ctx.drawImage(mars.current, -45, -45, 50,50);
         ctx.restore();
  
        ctx.restore();
  
        ctx.beginPath();
        ctx.arc(500, 300, 225, 0, Math.PI * 2, false); // Earth orbit
        ctx.stroke();
        ctx.closePath();
        //mars orbit
        ctx.beginPath();
        ctx.arc(500, 300, 300, 0, Math.PI * 2, false); // Mars orbit
        ctx.stroke();
  
        ctx.drawImage(sun.current, 415, 200, 200, 200);
  
        window.requestAnimationFrame(draw);
      }
  
      init();
    },[] );


    

    return (
      
    <div className="App-header">
        {/*<header className="App-header">*/}
        <img className="logo" src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg" style={{width:"300px",height:"100px", position: 'absolute', left:'0', top:'0'}}></img>
        <div className='button-container'>
          <button className='btn btn-outline-success btn-lg' style={{fontFamily:'cursive', border:'none', backgroundColor: 'transparent'}} onClick={toAbout}>About me</button>
          <button className='btn btn-outline-info btn-lg' style={{fontFamily:'cursive',border:'none',backgroundColor: 'transparent'}} onClick={scrolltoBottom}>Contact me</button>
        </div>
        <canvas ref={canvasref} width="800" height="800" className='canvas' ></canvas>
        {/* <iframe className="gif" src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="400" height="300" frameBorder="0" class="giphy-embed"></iframe> */}
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
      <div ref={bottomElement} className="contact">
        <h1 style={{color:'blueviolet'}}>Contact Me</h1>
        <a href="https://www.linkedin.com/in/harshit-malik-273108224/"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" ></img></a>
        <a href="https://github.com/harshit-malik7"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{backgroundColor:'white'}}></img></a>
        <a href="mailto:harshit4731@gmail.com"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img></a>
      </div>    
    </div>
  )
}

       

export default Home