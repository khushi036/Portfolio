export default function About() {
  const highlights = [
    { label: 'Current Role', value: 'Network Marketing Intern' },
    { label: 'Company', value: 'Cyber InfoMines Pvt. Ltd.' },
    { label: 'Location', value: 'India' },
    { label: 'Passion', value: 'Tech & Digital Growth' },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* LEFT SIDE CARD */}
          <div className="md:col-span-2 animate-slideInLeft">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm Khushi Saxena, a passionate Network Marketing Intern at Cyber InfoMines Pvt. Ltd., where I handle demo classes, lead generation, and client communication. My role involves managing outreach activities, supporting marketing initiatives, and building strong relationships with students and clients.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm actively building my expertise in web development, digital marketing, and content creation. My strengths include excellent communication skills, creative problem-solving, and the ability to work effectively in fast-paced environments. I'm committed to continuous learning and growing in the IT and business sector.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE HIGHLIGHT CARDS */}
          <div className="animate-slideInRight space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="bg-gradient-to-br from-indigo-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 border border-indigo-100 dark:border-gray-700 hover:shadow-md transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PASSION BOX */}
        <div className="bg-gradient-to-r from-indigo-500 to-amber-400 rounded-xl p-8 text-white animate-scaleIn">
          <h3 className="text-2xl font-bold mb-4">My Passion</h3>
          <p className="text-lg leading-relaxed">
            I'm passionate about learning new technologies, improving my communication skills, and making an impact in the IT and business world. Every project is an opportunity to grow and contribute meaningfully to my team.
          </p>
        </div>

      </div>
    </section>
  );
}
