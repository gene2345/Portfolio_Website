import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../images/profile.jpg';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <img src={profile} className='rounded-full w-48 sm:w-64 mx-auto my-8' />

      <div className='max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
        <p className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>Hey there! I'm Gene Ee, and I love</p>
        <ReactTyped
          backSpeed={30}
          typeSpeed={50}
          className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl border-b-4 border-pink-600 mb-8'
          strings={[
            'exploring new technologies',
            'scuba diving',
            'being a team player',
            'playing basketball',
          ]}
          loop={true}
          backDelay={1000}
        />
      </div>

    </div>
  );
};

export default Home;
