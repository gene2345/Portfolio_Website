import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <div name='about' className='w-screen -mt-32 h-screen py-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. Nice to meet you!</p>
          </div>
          <div>
            <p className='text-lg sm:text-xl lg:text-2xl'>
              I am a <b> penultimate Business Analytics </b> student at the National University of Singapore, honored to receive the NUS Merit Scholarship. 
              My academic interests lie in exploring new technologies and statistical methods, particularly in finance, cybersecurity, and natural language processing. 
              To complement my studies, I am pursuing dual specializations in <b> Finance </b> and <b> Machine Learning </b>. Additionally, my coursework includes comprehensive training in <b> Database Management </b> and <b> Software Development </b>.
              <br /><br />
              Outside of academics, I stay active by playing basketball regularly and occasionally indulge in recreational scuba diving around the islands of Singapore. 
              I have a deep appreciation for nature, which is why I am eagerly looking forward for my upcoming fall semester exchange to Ottawa, renowned for its breathtaking landscapes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
