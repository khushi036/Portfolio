import { BookOpen } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      degree: '10th Grade',
      institution: 'Delhi World Public School',
      year: '2019',
      description: 'Completed 10th grade with strong academic performance.',
    },
    {
      degree: '12th Grade',
      institution: 'Delhi World Public School',
      year: '2021',
      description: 'Completed 12th grade in Science stream with good grades.',
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'GL Bajaj Institute of Technology and Management',
      year: '2021 - 2025',
      description:
        'Pursuing B.Tech in Computer Science, focusing on web development and software engineering.',
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br 
      from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className="text-4xl md:text-5xl font-bold 
            text-gray-900 dark:text-white mb-4"
          >
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="group 
              bg-white dark:bg-gray-800 
              rounded-xl p-8 border 
              border-gray-200 dark:border-gray-700 
              hover:border-indigo-300 dark:hover:border-indigo-500 
              hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center justify-center h-12 w-12 rounded-lg
                    bg-indigo-100 dark:bg-indigo-900 
                    group-hover:bg-indigo-600 transition-colors"
                  >
                    <BookOpen
                      size={24}
                      className="text-indigo-600 dark:text-indigo-300 
                      group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                    {item.institution}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {item.year}
                  </p>

                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
