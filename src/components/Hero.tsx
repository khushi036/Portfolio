import { ChevronDown, ArrowRight } from 'lucide-react';
import profilePhoto from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 
      bg-gradient-to-br from-gray-50 via-white to-gray-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="animate-slideInLeft">

            <div className="inline-block mb-4 px-4 py-2 
              bg-indigo-50 dark:bg-indigo-900/30 
              rounded-full transition-colors">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold 
              text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Khushi</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Network Marketing Intern & Aspiring Digital Professional 
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              I specialize in client communication, lead generation, digital marketing, and web development. 
              Currently growing my skills at Cyber InfoMines Pvt. Ltd.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Hire me button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 
                bg-indigo-600 text-white rounded-lg font-medium 
                hover:bg-indigo-700 transition-all duration-300 
                hover:shadow-lg hover:-translate-y-1"
              >
                Hire Me <ArrowRight size={18} />
              </a>

              {/* View work button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 
                border-2 border-gray-300 dark:border-gray-600 
                text-gray-700 dark:text-gray-300 
                rounded-lg font-medium 
                hover:border-indigo-600 hover:text-indigo-600 
                dark:hover:border-indigo-400 dark:hover:text-indigo-400 
                transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT SIDE PHOTO */}
          <div className="animate-slideInRight">
            <div className="relative">

              <div className="absolute inset-0 
                bg-gradient-to-br from-indigo-500 to-amber-400 
                rounded-2xl blur-3xl opacity-20"></div>

              <div className="relative 
                bg-gradient-to-br from-indigo-100 to-amber-50 
                dark:from-gray-800 dark:to-gray-700 
                rounded-2xl p-12 flex items-center justify-center h-64 
                transition-colors">

                {/* Profile picture */}
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl 
                  border-4 border-white dark:border-gray-600 
                  mx-auto animate-float">
                  <img 
                    src={profilePhoto} 
                    alt="Khushi" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="text-gray-600 dark:text-gray-300 font-medium 
                  absolute bottom-6 text-center w-full">
                  Digital Marketing Professional
                </p>

              </div>
            </div>
          </div>

        </div>

        {/* SCROLL ICON */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown size={32} className="text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
    </section>
  );
}
