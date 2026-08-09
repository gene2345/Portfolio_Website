import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full py-20 px-4'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='inline-block text-4xl font-bold text-slate-800 border-b-4 border-indigo-500 pb-2'>
            About
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='text-center md:text-right'>
            <p className='text-3xl lg:text-4xl font-bold text-slate-800'>
              Hi. Nice to meet you!
            </p>
          </div>

          <div>
            <p className='text-lg sm:text-xl leading-relaxed text-slate-700'>
              I am a <b> penultimate Business Analytics </b> student at the National University of Singapore,
              honored to receive the NUS Merit Scholarship. My academic interests lie in exploring new technologies
              and statistical methods for data science. To complement my studies, I am pursuing dual specializations
              in <b>Finance</b> and <b>Machine Learning</b>.
              <br /><br />
              Outside of academics, I stay active by playing basketball regularly and occasionally indulge in
              recreational scuba diving around the islands of Singapore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
