import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; 
import { FaGithub } from 'react-icons/fa';

import { Button } from '../../components'; 
import './Header.scss';

const buttonData = [
  {
    title: 'Get started',
    icon: <HiArrowNarrowRight />
  },
  {
    title: 'See repo',
    icon: <FaGithub />
  }
]

const Header = () => {
  return (
    <div id="Home" className="sm:mx-24 sm:px-24 app__flex min-h-screen">
      <div className="app__content">
        <h2>It doesn’t matter what <span>JS Framework</span> you work with.</h2>
        <p className="sm:text-xl">Our boilerplates works with it <span>out-of-the-box.</span></p>
        <div className="flex flex-col gap-4 mt-2 sm:flex-row sm:gap-8">
          {buttonData.map((item, index) => (
            <Button title={item.title} icon={item.icon} key={item.title + index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
