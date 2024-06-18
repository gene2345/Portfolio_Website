import React from 'react';
import sort from '../images/sort.png';
import volunteer from '../images/volunteer.png';
import github from '../images/github.png';
import GCN from '../images/GCN.png';
import newConnectHub from '../images/newConnectHub.png';
import pdf from '../images/HICSS_Paper.pdf';

const projects = [
  {
    title: 'Twitter Bot Detection using Graphical Neural Networks',
    img: GCN,
    link: pdf,
    githubLink: '',
    header: 'Twitter Bot Detection using Graphical Neural Networks',
    desc:
      'I developed VolunConnect which is a comprehensive platform using ReactJS, Firebase, and NodeJS to facilitate event uploads for beneficiaries and volunteer participation. TF-IDF vectorization was implemented to offer personalized recommendations for users and utilized Natural Language Processing (NLP) techniques for feedback analysis, enhancing user experience. There were also integrated features which enabled users to provide feedback and obtain certificates seamlessly within the platform.',
  },
  {
    title: 'Quantitative Risk Analysis of Firms in Healthcare Market',
    img: sort,
    link: '', 
    githubLink: '',
    header: 'Quantitative Risk Analysis of Firms in Healthcare Market',
    desc:
      'I was hired to do an admin job which involved me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then had to group these students based on their classes and their allocated course.',
  },
  {
    title: 'OverEasy - Financial Guidance Website',
    img: sort,
    link: '',
    githubLink: 'https://github.com/yourusername/overeasy', 
    header: 'OverEasy - Financial Guidance Website',
    desc:
      'I was hired to do an admin job which involved me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then had to group these students based on their classes and their allocated course.',
  },
  {
    title: 'ConnectHUB - Community Group Platform',
    img: newConnectHub,
    link: 'https://connecthub-88e58.web.app/', 
    githubLink: 'https://github.com/gene2345/connectHub',
    header: 'ConnectHUB - Community Group Platform',
    desc: '',
  },
  {
    title: 'VolunConnect - Volunteer x Beneficiaries Platform',
    img: volunteer,
    link: '',
    githubLink: '',
    header: 'VolunConnect - Volunteer x Beneficiaries Platform',
    desc:
      'I was hired to do an admin job which involved me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then had to group these students based on their classes and their allocated course.',
  },
];

const Card = ({ project }) => {
  return (
    <div className='relative shadow-xl max-w-5xl mx-auto flex flex-col p-4 md:my-0 items-center mt-8 rounded-lg lg:hover:scale-105 duration-300 lg:grid grid-cols-2 lg:gap-8 lg:py-24'>
      <img className='object-scale-down py-8' src={project.img} alt='Project' />
      <div className='w-full'>
        <h1 className='text-2xl font-bold py-4'>{project.header}</h1>
        <p>{project.desc}</p>
        <div className='flex justify-center mt-4'>
          {project.link && (
            <a
              href={project.link}
              className='bg-white border border-rose-800 text-rose-800 hover:bg-rose-800 hover:text-white font-raleway py-3 px-6 rounded-lg text-lg font-semibold mr-4 transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              View More
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              className='bg-white border border-rose-800 text-rose-800 hover:bg-rose-800 hover:text-white font-raleway py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className='w-full py-8 px-4 bg-white flex flex-col items-center pt-24'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
        My Projects
      </p>
      <div className='max-w-[1240px] mx-auto grid gap-8 mb-4'>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
