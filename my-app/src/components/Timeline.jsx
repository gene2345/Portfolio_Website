import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import income_insurance from '../images/income_insurance.png';
import govtech from '../images/govtech.jpg';
import tridentity from '../images/tridentity.jpg';
import nus from '../images/nus.jpg';
import moe from '../images/moe.png';
const experiences = [
  {
    title: "Data Scientist Intern",
    img: govtech,
    date: "Jan 2025 - Present",
    desc: (
      <>
         Presently, I am at GovTech Singapore, where I apply <span className="highlight-text"> machine learning methodologies </span> and <span className="highlight-text"> data engineering </span> skills to analyze data from the Student Learning Space (SLS). 
         <br/> <br/>
         Currently, I have experience utilizing AWS tools such as <span className="highlight-text"> SageMaker </span> and <span className="highlight-text"> Redshift </span> to develop and deploy machine learning solutions that operate on large-scale datasets.
         It is an enriching experience, and I am excited to continue growing as I tackle meaningful, real-world challenges at the intersection of technology and education.

      <br/> <br/> 
      Skills: Sagemaker, Redshift, python, SQL
      </>
      ),
  },
  {
    title: "Cybersecurity Analyst Intern, Income Insurance",
    img: income_insurance,
    date: "May 2024 - Aug 2024",
    desc: (
      <>
         At Income insurance, I was actively engaged with the SOC team in combating cybersecurity threats in real-time. <br/> <br/> My contributions include spearheading the development of a   <span className="highlight-text"> structured data pipeline </span> 
         that consolidates extensive cybersecurity logs. I also collaborated with the DLP team to leverage  <span className="highlight-text"> Statistical and Machine Learning methodologies to enhance the DLP detection system </span>. This effort aims to minimize False Positives and improve 
      the accuracy of alert detection.

      <br/> <br/> 
      Skills: Python, NLP, Clustering, Tableau, PowerBI, Power Automate, VBA, DAX
      </>
      ),
  },
  {
    title: (<> Business Analyst Intern, <br/>Trident Digital Tech </>),
    img: tridentity,
    date: "Jan 2024 - May 2024",
    desc: (
      <>
           At Tridentity, my role involved collaborating with cross-functional teams to <span className="highlight-text"> gather requirements </span> and <span className="highlight-text"> translate </span> them into detailed 
           <span className="highlight-text"> functional specifications </span> for development teams. <br/> <br/>
           I played a pivotal role in <span className="highlight-text"> documenting user stories, conducting thorough market analyses, and crafting comprehensive product roadmaps.  </span> As part of the final stages of the Software Development Life Cycle (SDLC), 
           I conducted rigorous <span className="highlight-text"> User Acceptance Testing  </span> for the E-commerce website we developed. 
           <br/><br/> Additionally, I spearheaded the development of an <span className="highlight-text"> automated data processing pipeline </span> that aggregates weekly data and generates dashboards for streamlined weekly reporting.  

      <br/> <br/> 
      Skills: SQL, R, PowerBI, Jira, VBA, DAX, Google Appscript
      </>
      ),
  },
  {
    title: (<> Machine Learning Analyst, <br/>NUS Fintech Society </>),
    img: nus,
    date: "Aug 2023 - May 2024",
    desc: (
      <> At NUS Fintech Society, I collaborated with a sprint team consisting of about 4-5 members across two distinct projects. 
       <br/><br/>
      In my first project, we developed a machine learning-driven solution aimed at distinguishing fake financial news from authentic sources. Leveraging Natural Language Processing (NLP), 
      we trained <span className="highlight-text"> Long Short-Term Memory (LSTM) </span> models on historical fintech news articles. Additionally, we integrated <span className="highlight-text"> Large Language Models (LLMs) </span> like Llama into our machine learning pipeline. 
      With a simple ticker input, users gained access to a curated list of credible fintech news articles.
      <br/><br/>
      In my second project, we explored using GAN-BERT for intent classification of news articles. 
      Given our relatively small dataset,<span className="highlight-text">  Generative Adversarial Networks (GANs) </span> were employed to augment data. We then experimented with various BERT models, 
      including <span className="highlight-text"> DistilBERT </span> and <span className="highlight-text"> BERT base </span> , to train on our corpus. This resulted in a robust machine learning pipeline tailored for intent classification within the fintech domain.
      <br/> <br/> 
      Skills: NLP, BERT, LSTM, GANs, Regression, Random Forest, CNN, Naive Bayes, LDA
      </>
      ),
  },
  {
    title: "Teaching Assistant, NUS",
    img: nus,
    date: "Aug 2023 - May 2024",
    desc: (
      <>
      At NUS, I had the opportunity to teach two modules: <span className="highlight-text"> IS1108 Digital Ethics and Data Privacy </span>, and <span className="highlight-text"> BT2102 Data Management and Visualization </span>. 
      <br/> <br/> 
      In these courses, I facilitated weekly tutorial discussions and delivered lectures on essential topics such as <span className="highlight-text"> Database Management </span> and <span className="highlight-text"> MySQL / Tableau </span>. 
      Additionally, I engaged students in exploring the ethical implications of emerging technologies like Computer Vision and Generative AI. 
      <br/> <br/> 
      Through these teaching experiences, I aimed to foster a deeper understanding of both theoretical concepts and practical applications in the realm of digital ethics and data management.
      <br/> <br/> 
      Skills: RDBMS, Database Management, MySQL, Data Visualisation, Data Storytelling, Classroom Management
      </>
      ),
  },
  {
    title: "Primary School Teacher, MOE",
    img: moe,
    date: "Jan 2016 - Dec 2021",
    desc: (
      <>
      After more than a decade in the educational system, I wanted to experience what it was like on the oppsite end of a student. As such, I signed up to be a teacher under the MOE Relief Teaching Scheme, where I was placed 
      in Beacon Primary School to teach <span className="highlight-text">  Math </span>and <span className="highlight-text">  Chinese </span> for one semester. It was an enriching and fun experience, and definitely taught me more about Classroom Management and Public Speaking.
      <br/> <br/> 
      Skills: Public Speaking, Classroom Management, Teaching
      </>
      ),
  },
];

function Trial({ experience }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<img src={experience.img} className='rounded-full' alt='Experience Icon' />}
    >
      <h3 className="vertical-timeline-element-title text-xl sm:text-2xl lg:text-3xl font-bold">{experience.title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-lg">{experience.date}</h4>
      <p className="text-base">{experience.desc}</p>
    </VerticalTimelineElement>
  );
}

function Testing() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
        My Experiences
      </p>
      <VerticalTimeline className='w-full' lineColor={'black'} animate={true}>
        {experiences.map((experience, index) => (
          <Trial key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Testing;
