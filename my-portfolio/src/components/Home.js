import React, { useRef } from 'react'
import {Routes, useNavigate, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Typewriter from 'typewriter-effect';
import { useEffect, useState} from 'react';
import {useAnimate, stagger,motion} from 'framer-motion';

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

    const [open, setOpen] = useState(false);
    const [scope,animate]=useAnimate();

    const sun = useRef(new Image());
    const earth = useRef(new Image());
    const mars = useRef(new Image());
    const canvasref=useRef(null);
    const staggerList = stagger(0.1, { startDelay: 0.25 });
    useEffect(() => {
      let requestID;
  
      const canvas = canvasref.current;
      const ctx = canvas.getContext("2d");
      
      sun.current.src = "https://files.oaiusercontent.com/file-qBi5cQGdwpa028Uyn7A2y1e5?se=2024-09-17T17%3A07%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2bd41b15-8010-41f3-820f-f2ce382454f4.webp&sig=WodSYrqHE9RJM1h4YOiDfLbypDe30SAr7CyaKLz%2Bu28%3D";
      earth.current.src = "https://i.etsystatic.com/28921914/r/il/6012cc/3477638374/il_fullxfull.3477638374_rl1v.jpg";
      mars.current.src = "https://as2.ftcdn.net/v2/jpg/03/41/22/33/1000_F_341223314_TuiMtFvlAba07hrDA6GX8Hz3Omt5CdZV.jpg";
  
      const stars = [];
  
      // Generate random stars for background
      for (let i = 0; i < 100; i++) {
          stars.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              radius: Math.random() * 2,
          });
      }
  
      function drawStars() {
          ctx.save();
          ctx.fillStyle = 'white';
          stars.forEach(star => {
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
              ctx.fill();
              ctx.closePath();
          });
          ctx.restore();
      }
  
      function drawPlanets() {
          const time = new Date();
          const earthOrbitSpeed = ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds();
          const marsOrbitSpeed = ((Math.PI) / 60) * time.getSeconds() + ((Math.PI) / 60000) * time.getMilliseconds() * 0.8;
  
          // Earth orbit
          ctx.save();
          ctx.rotate(earthOrbitSpeed);
          ctx.translate(225, 0);
          ctx.drawImage(earth.current, -25, -25, 50, 50); // Earth
          ctx.restore();
  
          // Mars orbit
          ctx.save();
          ctx.rotate(marsOrbitSpeed);
          ctx.translate(325, 0);
          ctx.drawImage(mars.current, -30, -30, 50, 50); // Mars
          ctx.restore();
      }
  
      // function drawOrbits() {
      //     // Earth Orbit
      //     ctx.strokeStyle = 'rgba(0, 153, 255, 0.5)';
      //     ctx.beginPath();
      //     ctx.arc(500, 300, 225, 0, Math.PI * 2);
      //     ctx.stroke();
      //     ctx.closePath();
  
      //     // Mars Orbit
      //     ctx.strokeStyle = 'rgba(255, 100, 100, 0.5)';
      //     ctx.beginPath();
      //     ctx.arc(500, 300, 325, 0, Math.PI * 2);
      //     ctx.stroke();
      //     ctx.closePath();
      // }
  
      function drawSun() {
          ctx.drawImage(sun.current, 415, 200, 200, 200); // Sun
      }
  
      function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawStars();
          ctx.save();
          ctx.translate(500, 300); // Move the origin to the center of the sun
  
          // drawOrbits();
          drawPlanets();
  
          ctx.restore();
          drawSun();
  
          requestID = requestAnimationFrame(animate);
      }
  
      animate();
  
      return () => {
          cancelAnimationFrame(requestID);
      };
  }, []);

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);


    

    return (
      
    <div className="App-header">
        {/*<header className="App-header">*/}
        <img className="logo" src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg" style={{width:"300px",height:"100px", position: 'absolute', left:'0', top:'0',backgroundColor:'transparent'}}></img>
        <div className='button-container' ref ={scope}>
          <motion.button style={{color: 'white',border:'none', backgroundColor: 'transparent'}} onClick={toAbout}>About me</motion.button>
          <motion.button style={{border:'none', backgroundColor: 'transparent', color:'white'}} onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
            Contact Me
          </motion.button>
      <ul>
        <motion.li><a href="https://www.linkedin.com/in/harshit-malik-273108224/"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" ></img></a></motion.li>
        <motion.li><a href="https://github.com/harshit-malik7"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{backgroundColor:'white'}}></img></a></motion.li>
        <motion.li><a href="mailto:harshit4731@gmail.com"><img className="linkedin" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"></img></a></motion.li>
      </ul>
        </div>
        <canvas ref={canvasref} width="1000" height="900" className='canvas' ></canvas>
        {/* <iframe className="gif" src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="400" height="300" frameBorder="0" class="giphy-embed"></iframe> */}
      {/*Typewriter  onInit={(typewriter)=>{ typewriter.typeString("Hello, I am Harshit Malik").pauseFor(1000).deleteAll().typeString("I am in my final year as a software engineering co-op student at the University of Alberta").start();}}>*/}
      <div className="typewriter">
      <Typewriter
      options={{
        strings: ["Hello, I am&nbsp; <strong style='color:red'>Harshit Malik</strong>", "I am a Junior Software Developer working at CES corporation."],
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
    <div className="info">
      <img src="https://media.licdn.com/dms/image/D5603AQHt0pOImcj1FA/profile-displayphoto-shrink_800_800/0/1693545419433?e=1699488000&v=beta&t=Img6CtUksyjYxHyUvWrSEi2PjX8DEAsup8WEw-My0QM"></img>
      <div className="info-text">
        <p style={{color:"white"}}>Bachelor's of Science Graduate in Software Engineering. (September 2019- May 2024 )

Currently living in Edmonton Alberta, with a passion for creating products that help the public and developing strategies to counter real-life problems using my technological knowledge. A keen and adapt learner to enhance my knowledge.

Want to work on projects with experienced professionals and impact the daily lives of people with my work. As for my future, I hope to one day work as a software developer and work with a diverse team.

In my free time, you can either find me at the gym or playing/watching soccer.</p>
      </div>  
    </div>   
    </div>
  )
}

       

export default Home