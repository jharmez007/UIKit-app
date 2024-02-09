import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <div className="md:mx-24 app__flex flex-col min-h-96">
      <div className="footer__links p-12">
        <div className="footer__links-div">
           <p>Lorem</p> 
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
        </div>
        <div className="footer__links-div">
            <div className="footer__links-innerdiv">
                <p>Lorem</p>
                <p>Ispum</p>
                <p>Ispum</p>
            </div>
            <div className="footer__links-innerdiv">
                <p>Lorem</p>
                <p>Ispum</p>
                <p>Ispum</p>
            </div>
        </div>
        <div className="footer__links-div">
           <p>Lorem</p> 
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
           <p>Ipsum</p>
        </div>
        <div className="footer__links-div">
            <div className="footer__links-innerdiv">
                <p>Lorem</p>
                <p>Ispum</p>
                <p>Ispum</p>
                <p>Ispum</p>
            </div>
            <div className="footer__links-innerdiv">
                <p>Lorem</p>
                <p>Ispum</p>
                <p>Ispum</p>
            </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024</p>
      </div>
    </div>
  )
}

export default Footer
