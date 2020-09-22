import React from 'react'
import '../../css/App.css'
import '../../css/HeroSection.css'

function HeroSection(){

    return(
    <div className = "hero-container">
        <video src="/videos/video-3.mp4"autoPlay loop muted/>
        <h1>Uma aventura te espera!</h1>
        <p>O que está esperando?</p>
    </div>
    )
}

export default HeroSection