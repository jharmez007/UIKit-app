import React from 'react';

import { Feature } from '../../components';
import './brands.scss';


const Brands = () => {
  return (
    <div className="lg:mx-24 md:lg-24 app__flex min-h-screen">
      <div className="brands__content">
        <p className="brands__ptext font-bold">Supported and backed by:</p>
        <div className="app__feature-container my-6">
            <Feature text="Lorem"/>
            <Feature text="Ispum"/>
            <Feature text="Dolor"/>
            <Feature text="Sit"/>
            <Feature text="Dolor"/>
            <Feature text="Sit"/>
            <Feature text="Lorem"/>
            <Feature text="Ispum"/>
        </div>
        <h3 className="brands__headtext">Less code. More product.</h3>
        <p className="brands__ptext">By using our UI Kit, we make sure you only get to <span>focus more</span> on the other things that matter.</p>
      </div>
    </div>
  )
}

export default Brands
