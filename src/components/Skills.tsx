import { Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Communication",
      skills: ["Client Interaction", "Presentation", "Team Collaboration", "Negotiation"],
    },
    {
      category: "Marketing",
      skills: ["Lead Generation", "Demo Handling", "Digital Marketing", "Social Media"],
    },
    {
      category: "Creative",
      skills: ["Script Writing", "Content Creation", "Video Scriptwriting", "Copy Writing"],
    },
    {
      category: "Technical",
      skills: ["Web Development Basics", "Digital Platforms", "Problem-Solving", "CRM Tools"],
    },
  ];

  return (
    <section
      id="skills"
      className="
        py-20 px-4 sm:px-6 lg:px-8 
        bg-white dark:bg-gray-900
      "
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="
                bg-gradient-to-br 
                from-gray-50 to-white 
                dark:from-gray-800 dark:to-gray-700
                rounded-xl p-6 
                border border-gray-200 dark:border-gray-600
                hover:border-indigo-300 dark:hover:border-indigo-500
                transition-all duration-300 
                animate-slideInLeft
              "
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="
                    flex items-center justify-center h-10 w-10 rounded-lg 
                    bg-indigo-100 dark:bg-indigo-900
                  "
                >
                  <Zap size={20} className="text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="
                      bg-white dark:bg-gray-800 
                      border border-gray-200 dark:border-gray-600 
                      rounded-lg px-4 py-3 text-center 
                      hover:border-indigo-400 dark:hover:border-indigo-500 
                      hover:bg-indigo-50 dark:hover:bg-gray-700
                      transition-all duration-300 cursor-pointer group
                    "
                    style={{ animationDelay: `${skillIndex * 50}ms` }}
                  >
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="
            bg-gradient-to-r 
            from-indigo-50 to-amber-50 
            dark:from-gray-800 dark:to-gray-700
            rounded-xl p-8 
            border border-indigo-200 dark:border-gray-600
            animate-scaleIn
          "
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm actively building expertise in web development, digital marketing, and modern IT technologies. 
            My passion for learning drives me to stay updated with industry trends and develop new skills.
          </p>

          <div className="flex flex-wrap gap-3">
            <span
              className="
                inline-block px-4 py-2 
                bg-white dark:bg-gray-800 
                text-indigo-600 dark:text-indigo-300 
                rounded-lg font-medium 
                border border-indigo-200 dark:border-gray-600
              "
            >
              Currently Learning
            </span>

            <span
              className="
                inline-block px-4 py-2 
                bg-white dark:bg-gray-800 
                text-amber-600 dark:text-amber-300 
                rounded-lg font-medium 
                border border-amber-200 dark:border-gray-600
              "
            >
              Open to New Skills
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
