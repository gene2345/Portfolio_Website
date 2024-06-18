import React from 'react';

const Skills = () => {
  return (
    <div name='about' className='w-screen -mt-16 h-screen py-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Skills
            </p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Over the years, I have gained an understanding of the following skillsets</p>
          </div>
          <div>
            <div className='text-lg sm:text-xl lg:text-2xl'>
              <p><b>Machine Learning:</b></p>
              <ul className='list-disc list-inside'>
                <li>Strong understanding of machine learning algorithms and models</li>
                <li>Experience in data preprocessing, feature engineering</li>
                <li>Hands-on experience with libraries like TensorFlow, PyTorch</li>
                <li>Deployment of ML models using Flask</li>
                <li>Natural Language Processing (NLP) techniques</li>
                <li>Python, R, Tableau</li>
              </ul>
              <p className='mt-4'><b>Web Development:</b></p>
              <ul className='list-disc list-inside'>
                <li>Proficient in HTML, CSS, JavaScript, SQL, Java</li>
                <li>Experience with React.js, Vue.js for frontend development</li>
                <li>Backend development with Node.js, Express.js</li>
                <li>Database management using MongoDB, Firebase</li>
                <li>Responsive design and cross-browser compatibility</li>
              </ul>
              <p className='mt-4'><b>Additional Skills:</b></p>
              <ul className='list-disc list-inside'>
                <li>Excel DAX, VBA Macro, PowerBI</li>
                <li>Version control with Git, GitHub</li>
                <li>Experience with Agile methodologies</li>
                <li>Problem-solving and analytical skills</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
