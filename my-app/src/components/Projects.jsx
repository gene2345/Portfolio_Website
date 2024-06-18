import React from 'react';
import sort from '../images/sort.png';
import volunteer from '../images/volunteer.png';
import github from '../images/github.png';
import GCN from '../images/GCN.png';
import OverEasy from '../images/overeasy.png';
import Pharma from '../images/pharma.png';
import newConnectHub from '../images/newConnectHub.png';
import pdf from '../images/HICSS_Paper.pdf';
import HealthcarePdf from '../images/Analysis_Healthcare_Corporate_Bonds.pdf';

const projects = [
  {
    title: 'Twitter Bot Detection using Graphical Neural Networks',
    img: GCN,
    link: pdf,
    githubLink: '',
    header: 'Twitter Bot Detection using Graphical Neural Networks',
    desc:
      'This paper explores the innovative application of Graphical Neural Networks (GNNs) in Bot Detection. Unlike traditional ML approaches that primarily analyze account metadata, our study posits that GNNs offer greater accuracy in detecting bots, particularly in response to evolving bot behaviors and adversarial tactics employed by operators. By leveraging retweets to define relationships, we investigate various GNN architectures tailored to this domain. \n Following guidance from our NUS professor, we have submitted this paper for consideration at the Hawaiian International Conference on System Sciences (HICSSS).',
  },
  {
    title: 'Quantitative Risk Analysis of Firms in Healthcare Market',
    img: Pharma,
    link: HealthcarePdf, 
    githubLink: 'https://github.com/gene2345/finModelling/blob/main/QualitativeAnalysis.ipynb',
    header: 'Quantitative Risk Analysis of Firms in Healthcare Market',
    desc:
      "This project comprises a concise examination of parametric and historical methods for computing Value-at-Risk and Expected Shortfall, alongside their backtesting, applied to a basket of stocks utilizing Python. \n Additionally, it delves into portfolio optimization methodologies including the Mean-variance method, Hierarchical Risk Parity, and the Black-Litterman model. The culmination is a comprehensive 90-page financial risk report centered on healthcare corporate bonds, providing a critical assessment of financial metrics alongside qualitative insights into the firm's background",
  },
  {
    title: 'OverEasy - Financial Guidance Website',
    img: OverEasy,
    link: '',
    githubLink: 'https://github.com/gene2345/OverEasyUpdatedv3', 
    header: 'OverEasy - Financial Guidance Website',
    desc:
      'This website features a Sentiment Analysis Scanner designed to analyze the latest comments about a ticker from popular channels like Yahoo Finance. The comments are processed and fed into a NLP model trained on financial news data. This allows users to gauge the overall sentiment of the market towards a particular ticker. \n The second part of the website enables users to conduct a Comparable Companies Analysis for a chosen ticker. Leveraging YFinance API, the website identifies similar companies based on market capitalization and sector. It then compares up to 15 financial ratios (such as PE, ROE, ROA) among the top 5 companies in this group. This comparative analysis offers new investors a preliminary understanding of the financial health and performance metrics of the respective sector.',
  },
  {
    title: 'VolunConnect - Volunteer x Beneficiaries Platform',
    img: volunteer,
    link: '',
    githubLink: 'https://github.com/gene2345/h4gteam',
    header: 'VolunConnect - Volunteer x Beneficiaries Platform',
    desc:
      'Together with a team, we developed VolunConnect which is a comprehensive platform using ReactJS, Firebase, and NodeJS to facilitate event uploads for beneficiaries and volunteer participation. TF-IDF vectorization was implemented to offer personalized recommendations for users and utilized Natural Language Processing (NLP) techniques for feedback analysis, enhancing user experience. There were also integrated features which enabled users to provide feedback and obtain certificates seamlessly within the platform.',
  },
  {
    title: 'ConnectHUB - Community Group Platform',
    img: newConnectHub,
    link: 'https://connecthub-88e58.web.app/', 
    githubLink: 'https://github.com/gene2345/connectHub',
    header: 'ConnectHUB - Community Group Platform',
    desc: ' This website, built with Vue.js, Firebase, and Node.js, aims to unite communities by offering two primary features. First, it includes an e-commerce platform where users can buy and sell items within their community. Second, it features group functionality that enables users to engage through live forums or coordinate physical events. Additionally, administrators have tools to moderate these groups effectively.',
  },
];

const Card = ({ project }) => {
  return (
    <div className='relative shadow-xl max-w-5xl mx-auto flex flex-col p-4 md:my-0 items-center mt-8 rounded-lg lg:hover:scale-105 duration-300 lg:grid grid-cols-2 lg:gap-8 lg:py-24'>
      <img className='object-scale-down py-8' src={project.img} alt='Project' />
      <div className='w-full'>
        <h1 className='text-2xl font-bold py-4'>{project.header}</h1>
        <div>
          {project.desc.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
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
