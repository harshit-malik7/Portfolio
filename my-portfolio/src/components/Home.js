import React from 'react'
import {Routes, useNavigate, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Home = () => {

    const navigate=useNavigate();
    //function to redirect to the about page
    const toAbout = () => {
        navigate('/about')
    }
    const toContact = () => {
        navigate('/contact')
    }
    return (
    <div>
        <header className="App-header">
          <h1 style={{color:"blue"}}>Harshit Malik</h1>
        <img classname="logo" src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg"></img>
        <div className='button-container'>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={toAbout}>About me</button>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={toContact}>Contact me</button>
        </div>
      </header>    
    </div>
  )
}

export default Home