import React from 'react';
import { ReactTyped } from 'react-typed';
import profile from '../images/profilepic.png';
import pdf from '../images/ResumeJune2024Font.pdf';

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center py-16 flex flex-col'>
      <img src={profile} className='rounded-full w-48 sm:w-64 mx-auto my-8' alt='Profile' />

      <div className='max-w-4xl text-center px-4 sm:px-6 lg:px-8'>
        <p className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>
          Hey there! I'm Gene Ee, and I love
        </p>
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
      <br/> <br/>
      <a
        href={pdf}  // Replace with the actual path to your CV PDF
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white font-raleway py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default Home;
