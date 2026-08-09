import React from 'react';

const skillGroups = [
  {
    title: 'Languages',
    accent: 'from-indigo-500 to-violet-500',
    items: ['Python', 'SQL', 'Java', 'R', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'ML & Data',
    accent: 'from-pink-500 to-rose-500',
    items: ['TensorFlow', 'PyTorch', 'CUDA', 'Scikit-learn', 'Spark', 'Hadoop', 'Airflow', 'dbt', 'Langchain', 'Langfuse', 'Ollama'],
  },
  {
    title: 'Cloud & DevOps',
    accent: 'from-sky-500 to-cyan-500',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Analytics & BI',
    accent: 'from-emerald-500 to-teal-500',
    items: ['Tableau', 'Power BI', 'Excel DAX', 'VBA', 'A/B testing', 'Data storytelling'],
  },
];

const Skills = () => {
  return (
    <div name='skills' className='w-full py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='inline-block text-4xl font-bold text-slate-800 border-b-4 border-pink-600 pb-2'>
            Skills
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className='rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] overflow-hidden'
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`} />

              <div className='p-5'>
                <h3 className='text-xl font-bold text-slate-800 mb-4'>{group.title}</h3>

                <div className='flex flex-wrap gap-2'>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
