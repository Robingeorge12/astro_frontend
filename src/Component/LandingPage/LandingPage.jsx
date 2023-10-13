import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./LandingPage.css"


function LandingPage() {
  return (
    <div className='land-container'>
      
      <div className='land-container-divCarousel'>

      <Carousel>
                <div className='crl-1'>
                    <img className='land-astroImg' src="https://thumbs.dreamstime.com/b/astrology-magic-book-witchcraft-concept-78266718.jpg" />
                    <p className="legend">Upgrade Now</p>
                </div>
                <div className='crl-1'>
                    <img className='land-astroImg' src="https://img.freepik.com/premium-photo/zodiac-symbols-sacred-temple-backdrop-astrology-alchemy-magic-sorcery-crystals-enigmatic-structure_285885-3305.jpg" />
                    <p className="legend">Upgrade Now</p>
                </div>
                <div className='crl-1'>
                    <img className='land-astroImg' src="https://img.freepik.com/free-vector/gradient-numerology-illustration_23-2150037595.jpg?w=1060&t=st=1696306916~exp=1696307516~hmac=ef5207e31779cb2694a6b3960603f4b06ed3c83ba620d47eb156ec1d39d70456" />
                    <p className="legend">Upgrade Now</p>
                </div>
            </Carousel>

      </div>

    </div>
  )
}

export default LandingPage
