import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection(){

    return(
    <div className = "hero-container">
        <video src="/videos/video-1.mp4"autoPlay loop muted/>
        <h1>Adventure awaits</h1>
        <p>O que está esperando?</p>
        <div className="hero-btns">
            <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>Enviar</Button>
            <Button className = 'btns' buttonStyle = 'btn--primary' buttonSize = 'btn--large'>Logar</Button>
            </div>        
    </div>
    )
}

export default HeroSection