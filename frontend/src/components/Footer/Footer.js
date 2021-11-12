import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() { 
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
       {/* <p className='footer-subscription-heading'>
           Materialisez vos idées dès maintenant
  </p>*/}
        <p className='footer-subscription-text'>
          Abonnez-vous à notre newsletter.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'incrire</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>À propos</h2>
            <Link to='/inscription'>S'inscrire</Link>
            <Link to='/aide'>Aide</Link>
            <Link to='/donnees-personnelles'>Données personnelles</Link>
            <Link to='/conditions-generales'>Conditions générales</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Qui sommes-nous</h2>
            <Link to='/contact'>Contactez-nous</Link>
            <Link to='/'>Vendez sur ecommerce</Link>
            <Link to='/'>Nos partanaires</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Paiements</h2>
            <Link to='/'>Carte bancaire</Link>
            <Link to='/'>Airtel Money</Link>
            <Link to='/'>Mobi Cash</Link>
            <Link to='/'>PayPal</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Assistance</h2>
            <Link to='/'>Application ecommerce</Link>
            <Link to='/'>Tarifs de livraison</Link>
            <Link to='/'>Retour et remboursement</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ecommerce
             { /*<i class='fab fa-typo3' />*/}
            </Link>
          </div>
          <small className='website-rights'>By HRP-CODE © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link> 
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;