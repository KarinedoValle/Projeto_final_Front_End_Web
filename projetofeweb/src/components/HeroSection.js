import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection(){

    return(
    <div className = "hero-container">
        <video src="/videos/video-3.mp4"autoPlay loop muted/>
        <h1>Uma aventura te espera!</h1>
        <p>O que está esperando?</p>
        <div className="hero-buttons">
            {/* <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>Enviar</Button> */}
            <Button className = 'btns' buttonStyle = 'btns--primary' buttonSize = 'btns--large'>Logar</Button>
            </div>        
    </div>
    )
}

export default HeroSection