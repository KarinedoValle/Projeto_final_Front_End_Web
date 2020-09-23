import React from 'react';
import '../../css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-inscricao'>
        <p className='footer-titulo'>
          Inscreva-se na nossa newsletter 
        </p>
        <div className='footer-input'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Seu email'/>
            <Button buttonStyle='btn--outline'>Inscrever-se</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link'>
          <div className='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/'>Nosso trabalho</Link>
            <Link to='/'>Carreiras</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Suporte</Link>
          </div>
        </div>
      </div>
      <section className='midiaSocial'>
        <div className='midiaSocial-geral'>
          <div className='footer-logo'>
            <Link to = "/" className = "navbar-logo">
                 <img src="images/hero.png" alt="Logo Hero Company"/>
            </Link>
          </div>
          <small className='copyright'>Hero Company &copy; 2020</small>
          <div className='iconesMS'>
            <a className='iconesMS-link' href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </a>
            <a className='iconesMS-link' href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </a>
            <a className='iconesMS-link' href='https://www.youtube.com/' target='_blank' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </a>
            <a className='iconesMS-link' href='https://twitter.com/' target='_blank' aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
