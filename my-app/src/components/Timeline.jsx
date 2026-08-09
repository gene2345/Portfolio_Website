import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import income_insurance from '../images/income_insurance.png';
import govtech from '../images/govtech.jpg';
import tridentity from '../images/tridentity.jpg';
import nus from '../images/nus.jpg';
import moe from '../images/moe.png';
import tiktokLogo from '../images/tiktok_logo.avif';
import tencentLogo from '../images/tencent_wechat_logo.png';

const experiences = [
  {
    title: 'Tencent – WeChat, Machine Learning Engineer Intern',
    img: tencentLogo,
    date: 'Jan 2026 - Present',
    desc: (
      <>
        At Tencent WeChat, I built and deployed end-to-end fraud detection systems using <span className='highlight-text'> Graph SAGE-based GNNs </span> in PyTorch, with custom deep-learning architectures optimized for real-world detection quality and investigation support.
        <br /> <br />
        I also created an <span className='highlight-text'> LLM-based agentic explainability framework </span> to interpret graph predictions and support investigations, while refactoring the graph inference pipeline to reduce memory usage and cut compute cost at production scale.
        <br /> <br />
        Skills: PyTorch, GNNs, Graph SAGE, LLMs, Python, Deep Learning
      </>
    ),
  },
  {
    title: 'TikTok, Data Scientist Intern',
    img: tiktokLogo,
    date: 'Jul 2025 - Dec 2025',
    desc: (
      <>
        At TikTok, I built and deployed optimization algorithms using <span className='highlight-text'> linear and constraint programming </span> to improve task–labeler assignment, reducing annotation cost per sample while sustaining quality.
        <br /> <br />
        I also implemented <span className='highlight-text'> feature engineering workflows and data pipelines </span> to streamline large-scale data acquisition, and worked with the Data Science and MLOps teams to deploy the algorithms into production via ByteCloud.
        <br /> <br />
        Skills: Optimization, Feature Engineering, Data Pipelines, MLOps, Python, Production Deployment
      </>
    ),
  },
  {
    title: 'GovTech, Software Engineer Intern – Machine Learning',
    img: govtech,
    date: 'Jan 2025 - Jun 2025',
    desc: (
      <>
        At GovTech Singapore, I developed and validated machine learning models, including <span className='highlight-text'> regression </span> and <span className='highlight-text'> Graph Neural Networks </span>, to quantify student learning outcomes and enable data-driven scaling for around 300,000 students.
        <br /> <br />
        I built scalable data pipelines with <span className='highlight-text'> AWS (S3, RDS) </span> and <span className='highlight-text'> Spark </span> to process 10M+ rows daily, and engineered a full-stack <span className='highlight-text'> LLM grading system </span> using Azure OpenAI and Langchain to deliver projected cost savings of around SGD 700,000 per school annually.
        <br /> <br />
        Skills: AWS, Spark, LLMs, Langchain, Python, SQL
      </>
    ),
  },
  {
    title: 'NUS Department of Information Systems, AI / ML Research Assistant',
    img: nus,
    date: 'May 2024 - Aug 2024',
    desc: (
      <> Built various time-series architectures including <span className='highlight-text'> LSTM </span> and <span className='highlight-text'> Transformer </span> models to achieve a 63% baseline F1 score in early-stage DDoS attack prediction.
        <br /><br />
        This work helped strengthen research in predictive AI systems for cybersecurity and anomaly detection.
        <br /> <br />
        Skills: LSTM, Transformers, Time Series, DDoS Prediction, Python
      </>
    ),
  },
  {
    title: 'Cybersecurity Analyst Intern, Income Insurance',
    img: income_insurance,
    date: 'May 2024 - Aug 2024',
    desc: (
      <>
        At Income insurance, I was actively engaged with the SOC team in combating cybersecurity threats in real-time. <br /> <br /> My contributions include spearheading the development of a <span className='highlight-text'> structured data pipeline </span>
        that consolidates extensive cybersecurity logs. I also collaborated with the DLP team to leverage <span className='highlight-text'> Statistical and Machine Learning methodologies to enhance the DLP detection system </span>. This effort aims to minimize False Positives and improve the accuracy of alert detection.
        <br /> <br />
        Skills: Python, NLP, Clustering, Tableau, PowerBI, Power Automate, VBA, DAX
      </>
    ),
  },
  {
    title: <> Business Analyst Intern, <br />Trident Digital Tech </>,
    img: tridentity,
    date: 'Jan 2024 - May 2024',
    desc: (
      <>
        At Tridentity, my role involved collaborating with cross-functional teams to <span className='highlight-text'> gather requirements </span> and <span className='highlight-text'> translate </span> them into detailed
        <span className='highlight-text'> functional specifications </span> for development teams. <br /> <br />
        I played a pivotal role in <span className='highlight-text'> documenting user stories, conducting thorough market analyses, and crafting comprehensive product roadmaps. </span> As part of the final stages of the Software Development Life Cycle (SDLC),
        I conducted rigorous <span className='highlight-text'> User Acceptance Testing </span> for the E-commerce website we developed.
        <br /><br /> Additionally, I spearheaded the development of an <span className='highlight-text'> automated data processing pipeline </span> that aggregates weekly data and generates dashboards for streamlined weekly reporting.
        <br /> <br />
        Skills: SQL, R, PowerBI, Jira, VBA, DAX, Google Appscript
      </>
    ),
  },
  {
    title: <> Machine Learning Analyst, <br />NUS Fintech Society </>,
    img: nus,
    date: 'Aug 2023 - May 2024',
    desc: (
      <> At NUS Fintech Society, I collaborated with a sprint team consisting of about 4-5 members across two distinct projects.
        <br /><br />
        In my first project, we developed a machine learning-driven solution aimed at distinguishing fake financial news from authentic sources. Leveraging Natural Language Processing (NLP),
        we trained <span className='highlight-text'> Long Short-Term Memory (LSTM) </span> models on historical fintech news articles. Additionally, we integrated <span className='highlight-text'> Large Language Models (LLMs) </span> like Llama into our machine learning pipeline.
        With a simple ticker input, users gained access to a curated list of credible fintech news articles.
        <br /><br />
        In my second project, we explored using GAN-BERT for intent classification of news articles.
        Given our relatively small dataset, <span className='highlight-text'> Generative Adversarial Networks (GANs) </span> were employed to augment data. We then experimented with various BERT models,
        including <span className='highlight-text'> DistilBERT </span> and <span className='highlight-text'> BERT base </span>, to train on our corpus. This resulted in a robust machine learning pipeline tailored for intent classification within the fintech domain.
        <br /> <br />
        Skills: NLP, BERT, LSTM, GANs, Regression, Random Forest, CNN, Naive Bayes, LDA
      </>
    ),
  },
  {
    title: 'Teaching Assistant, NUS',
    img: nus,
    date: 'Aug 2023 - May 2024',
    desc: (
      <>
        At NUS, I had the opportunity to teach two modules: <span className='highlight-text'> IS1108 Digital Ethics and Data Privacy </span>, and <span className='highlight-text'> BT2102 Data Management and Visualization </span>.
        <br /> <br />
        In these courses, I facilitated weekly tutorial discussions and delivered lectures on essential topics such as <span className='highlight-text'> Database Management </span> and <span className='highlight-text'> MySQL / Tableau </span>.
        Additionally, I engaged students in exploring the ethical implications of emerging technologies like Computer Vision and Generative AI.
        <br /> <br />
        Through these teaching experiences, I aimed to foster a deeper understanding of both theoretical concepts and practical applications in the realm of digital ethics and data management.
        <br /> <br />
        Skills: RDBMS, Database Management, MySQL, Data Visualisation, Data Storytelling, Classroom Management
      </>
    ),
  },
  {
    title: 'Primary School Teacher, MOE',
    img: moe,
    date: 'Jan 2016 - Dec 2021',
    desc: (
      <>
        After more than a decade in the educational system, I wanted to experience what it was like on the opposite end of a student. As such, I signed up to be a teacher under the MOE Relief Teaching Scheme, where I was placed in Beacon Primary School to teach <span className='highlight-text'> Math </span> and <span className='highlight-text'> Chinese </span> for one semester. It was an enriching and fun experience, and definitely taught me more about Classroom Management and Public Speaking.
        <br /> <br />
        Skills: Public Speaking, Classroom Management, Teaching
      </>
    ),
  },
];

function Trial({ experience }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <VerticalTimelineElement
      className='reveal-item vertical-timeline-element--work'
      contentStyle={{
        background: '#ffffff',
        color: '#0f172a',
        boxShadow: '0 16px 30px rgba(15, 23, 42, 0.08)',
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '18px',
      }}
      contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
      iconStyle={{ background: '#f8fafc', color: '#fff', boxShadow: '0 0 0 2px rgba(148, 163, 184, 0.15)' }}
      icon={<img src={experience.img} className='rounded-full object-cover w-full h-full p-1.5 bg-white' alt='Experience Icon' />}
    >
      <h3 className='vertical-timeline-element-title text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800'>{experience.title}</h3>
      <h4 className='vertical-timeline-element-subtitle text-base font-semibold text-slate-500 mt-2'>{experience.date}</h4>
      <p className='text-base leading-relaxed mt-4 text-slate-700'>{experience.desc}</p>
    </VerticalTimelineElement>
  );
}

function Testing() {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-20'>
      <div className='text-center mb-12'>
        <p className='inline-block text-4xl font-bold text-slate-800 border-b-4 border-pink-600 pb-2'>
          My Experiences
        </p>
      </div>

      <VerticalTimeline className='w-full' lineColor='#e2e8f0' animate={true}>
        {experiences.map((experience, index) => (
          <Trial key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Testing;
