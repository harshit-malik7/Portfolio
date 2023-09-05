import React from 'react'
import Typewriter from 'typewriter-effect';

const About = () => {
  //make a button function to download resume
  const downloadResume = () => {
    fetch('Resume July 2023.pdf').then(response=>{
      response.blob().then(blob=>{
        const resumeURL=window.URL.createObjectURL(blob);
        let a=document.createElement('a');
        a.href=resumeURL;
        a.download="Resume July 2023.pdf";
        a.click();
      })
    })
  }
  return (
    <div className='About-header'>
      <div className='about1'>
      <Typewriter onInit={(typewriter)=>{ typewriter.typeString("Hello, I am Harshit Malik").pauseFor(1000).deleteAll().typeString("I am in my final year as a software engineering co-op student at the University of Alberta").start();}}/>
      </div>
      <div className='about2'>
      <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={downloadResume}>Download Resume</button>
      </div>
    </div>

  )
}

export default About