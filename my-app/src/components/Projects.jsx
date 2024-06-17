import React from 'react';
import sort from '../images/sort.png'
import volunteer from '../images/volunteer.png'
import github from '../images/github.png'
import GCN from '../images/GCN.png'
import newConnectHub from '../images/newConnectHub.png'

const projects =  [
    {
    title: "Twitter Bot Detection using Graphical Neural Networks",
    img: GCN,
    link: "https://volunteerconnectsg.netlify.app/",
    header:"Twitter Bot Detection using Graphical Neural Networks",
    desc: "I developed VolunConnect which is a comprehensive platform using ReactJS, Firebase, and NodeJS to facilitate event uploads for beneficiaries and volunteer participation.TF-IDF vectorization was implemented to offer personalized recommendations for users and utilized Natural Language Processing (NLP) techniques for feedback analysis, enhancing user experience. There were also integrated features which enabled users to provide feedback and obtain certificates seamlessly within the platform.",         
},

{
  title: "Quantitative Risk Analysis of Firms in Healthcare Market",
  img: sort,
  link: "https://github.com/genehern/sort/blob/main/csv_analyser.py",
  header:"Quantitative Risk Analysis of Firms in Healthcare Market",
  desc: "I was hired to do an admin job which involved in me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then has to group these students based on their classes and their allocated course.",         
},

{
    title: "OverEasy - Financial Guidance Website",
    img: sort,
    link: "https://github.com/genehern/sort/blob/main/csv_analyser.py",
    header:"OverEasy - Financial Guidance Website",
    desc: "I was hired to do an admin job which involved in me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then has to group these students based on their classes and their allocated course.",         
  },

  {
    title: "ConnectHUB - Community Group Platform",
    img: newConnectHub,
    link: "https://github.com/genehern/sort/blob/main/csv_analyser.py",
    header:"ConnectHUB - Community Group Platform",
    desc: "",         
  },

  {
    title: "VolunConnect - Volunteer x Benefiaricies Platform",
    img: volunteer,
    link: "https://github.com/genehern/sort/blob/main/csv_analyser.py",
    header:"VolunConnect - Volunteer x Benefiaricies Platform",
    desc: "I was hired to do an admin job which involved in me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then has to group these students based on their classes and their allocated course.",         
  },    
]

const Card = ({project}) => {
return(
    <div className='w-full relative shadow-xl max-w-5xl mx-auto flex flex-col p-4 md:my-0 items-center mt-8 rounded-lg lg:hover:scale-105 duration-300 lg:grid grid-cols-2 lg:gap-8 lg:py-24' >
        <a href={project.link} className='absolute top-0 right-0 rounded-full w-10' target="_blank"> <img className='rounded-full w-8 lg:w-10' src={github} to={project.link}/> </a>
        <img className = 'object-scale-down py-8 ' src={project.img}/>
        <div>     
        <h1 className='text-2xl font-bold py-4'>{project.header}</h1>
        <p>{project.desc}</p>
        </div>  
    </div>
)
}

const Cards = () => {
return (
    <div className='w-full py-8 px-4 bg-white flex flex-col items-center pt-24'>
        <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
              My Projects
            </p>
        <div className='max-w-[1240px] mx-auto grid gap-8 mb-4'>
        {projects.map((project) => (
        <Card project={project} />
        ))}
        </div>
    </div>
);
};

export default Cards;