import React from 'react';

import './feature.scss';

const Feature = ({ text }) => {
  return (
    <div className="feature flex justify-center items-center sm:py-10 py-8 sm:px-24 px-20 m-2">
      <h3>{text}</h3>
    </div>
  )
}

export default Feature
