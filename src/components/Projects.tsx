import { ExternalLink, Edit2 } from "lucide-react";

// Import images properly
import facialImg from "../assets/facial.jpg";
import earringsImg from "../assets/earrings.jpg";
import portfolioImg from "../assets/portfolio.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Facial Emotion Detection System",
      description:
        "Designed and implemented a Facial Emotion Detection system using Python, OpenCV, and deep learning (CNN), enabling real-time analysis of facial expressions through webcam input. The model accurately classified key emotions such as happiness, sadness, anger, and surprise with over 90% precision. Integrated a user-friendly interface and visual feedback for enhanced interaction.",
      tags: ["Python", "OpenCV", "Deep Learning", "CNN"],
      link: "https://github.com/khushi036/facial-emotion-detection",
      image: facialImg,
    },
    {
      title: "E-commerce Website - Jewellery",
      description:
        "Built a niche earring-focused e-commerce website showcasing oxidised, silver, jhumka, and trending jewellery collections. Designed a visually appealing home page with hero banners, featured collections, and call-to-action buttons. Fully responsive with clean UI/UX and WhatsApp integration for customer communication.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX", "E-commerce"],
      link: "https://github.com/khushi036/E_commerce-website",
      image: earringsImg,
    },
    {
      title: "Portfolio Website",
      description:
        "Modern and minimal portfolio designed with a clean layout, responsive design, project showcase section, interactive navigation, and optimized performance.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Portfolio", "Responsive Design"],
      link: "https://github.com/khushi036/Portfolio-Website",
      image: portfolioImg,
    },
  ];

  return (
    <section
      id="projects"
      className="
        py-20 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-br from-gray-50 to-white 
        dark:from-gray-900 dark:to-gray-800
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-xl overflow-hidden 
                bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700
                hover:border-indigo-300 dark:hover:border-indigo-500
                hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 animate-slideInRight
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        inline-block px-3 py-1 
                        bg-indigo-50 dark:bg-indigo-900 
                        text-indigo-600 dark:text-indigo-300 
                        text-xs font-medium rounded-full
                        group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800
                        transition-colors
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 inline-flex items-center justify-center 
                      gap-2 px-4 py-2 
                      text-indigo-600 dark:text-indigo-300 
                      font-medium hover:text-indigo-700 dark:hover:text-indigo-400 
                      transition-colors text-sm
                    "
                  >
                    View <ExternalLink size={16} />
                  </a>

                  <button className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Edit2 size={16} className="text-gray-500 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="
          bg-gradient-to-r from-indigo-500 to-amber-400 
          rounded-xl p-8 text-white text-center animate-scaleIn
        ">
          <h3 className="text-2xl font-bold mb-3">Ready to see more?</h3>
          <p className="text-lg mb-6 opacity-90">
            I'm constantly working on new projects and improving my skills.
            Add your latest work!
          </p>
          <button
            className="
              px-8 py-3 
              bg-white dark:bg-gray-800 
              text-indigo-600 dark:text-indigo-300 
              rounded-lg font-semibold 
              hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-all duration-300 hover:shadow-lg
            "
          >
            + Add Project
          </button>
        </div>
      </div>
    </section>
  );
}
