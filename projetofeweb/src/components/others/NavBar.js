import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../css/NavBar.css'


function NavBar(){
    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                        <img src="images/hero.png" alt="Logo Hero Company"/>
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
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar