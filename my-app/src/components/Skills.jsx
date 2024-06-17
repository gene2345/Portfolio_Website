import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../images/github.png';
import Tailwind from '../assets/tailwind.png';
import Firebase from '../assets/firebase.png';


const Skills = () => {
  return (
          <div className='max-w-[300px] w-full mx-auto grid grid-cols-7 gap-8 text-center py-8'>
              
                  <img className='w-24 mx-auto my-auto ' src={HTML} alt="HTML icon" />
                  <img className='w-24 mx-auto' src={CSS} alt="HTML icon" />   
                  <img className='w-24 mx-auto' src={JavaScript} alt="HTML icon" />
                  <img className='w-24 mx-auto' src={ReactImg} alt="HTML icon" />
                  <img className='w-24 mx-auto rounded-full' src={GitHub} alt="HTML icon" />
                  <img className='w-24 mx-auto' src={Tailwind} alt="HTML icon" />
                  <img className='w-24 mx-auto' src={Firebase} alt="HTML icon" />
              
          </div>
  );
};

export default Skills;