import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'SkyBrisk',
      period: 'July 2021 - Present',
      responsibilities: [
        'Developing new web projects every month',
        'Creating responsive and interactive websites using MERN stack, full-stack development',
        'Collaborating with team members on design and implementation',
        'Maintaining and updating existing projects for improved performance',
        'Ensuring projects are delivered on time with quality code',
      ],
    },
    {
      title: 'Network Marketing Intern',
      company: 'Cyber InfoMines Pvt. Ltd.',
      period: 'Current',
      responsibilities: [
        'Handling demo classes and coordinating with leads',
        'Managing communication with students and clients',
        'Supporting marketing work for courses and services',
        'Helping in outreach, promotions, and website understanding',
        'Creating video scripts and supporting social media content',
        'Improving understanding of IT services and digital platforms',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Bharat Intern',
      period: 'March 2023 - April 2023',
      responsibilities: [
        'Created a website from scratch using HTML, CSS, and JavaScript',
        'Designed responsive layouts and ensured cross-browser compatibility',
        'Implemented interactive features and UI elements',
        'Tested and debugged code to ensure smooth functionality',
        'Collaborated with team members to deliver project on time',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 
      bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold 
          text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group 
              bg-gradient-to-br from-white to-gray-50 
              dark:from-gray-800 dark:to-gray-700 
              rounded-xl p-8 border 
              border-gray-200 dark:border-gray-700 
              hover:border-indigo-300 dark:hover:border-indigo-500 
              hover:shadow-xl transition-all duration-300 animate-slideInLeft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg 
                  bg-gradient-to-br from-indigo-500 to-amber-400 group-hover:shadow-lg transition-all">
                    <Briefcase size={28} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="ml-18 space-y-3">
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                  Key Responsibilities:
                </p>

                {exp.responsibilities.map((resp, respIndex) => (
                  <div
                    key={respIndex}
                    className="flex items-start gap-3 animate-fadeInUp"
                    style={{ animationDelay: `${respIndex * 50}ms` }}
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 dark:text-gray-300">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add Experience */}
        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to add more experience?
          </p>

          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium 
          hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg">
            + Add Experience
          </button>
        </div>

      </div>
    </section>
  );
}
