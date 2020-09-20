import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css'

function NavBar(){
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }

    function showButton(){
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                        <img src="images/logo.jpg" alt="Logo Hero Company"/>
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>Home</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = "/cadastrar" className = "nav-links" onClick = {closeMobileMenu}>Cadastrar</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = "/buscar" className = "nav-links" onClick = {closeMobileMenu}>Buscar</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = "/deletar" className = "nav-links" onClick = {closeMobileMenu}>Deletar</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = "/atualizar" className = "nav-links" onClick = {closeMobileMenu}>Atualizar</Link>
                        </li>
                        {/* {button && <Button buttonStyle = 'btn--outline'>Login</Button>} */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar