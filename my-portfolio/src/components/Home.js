import React from 'react'

const Home = () => {
    const toAbout = () => {
        window.location.href = '/about'
    }
    const toContact = () => {
        window.location.href = '/contact'
    }
    return (
    <div>
        <header className="App-header">
        <img src="https://www.ualberta.ca/women-in-scholarship-engineering-science-technology/media-library/images/logos/copy-of-faculty-of-engineering.jpg"></img>
        <div className='button-container'>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={toAbout}>About me</button>
          <button className='btn btn-primary btn-lg mx-3 px-5 py-3 mt-2' onClick={toContact}>Contact me</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>    
    </div>
  )
}

export default Home