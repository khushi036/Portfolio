import { Mail, Phone, MapPin, Linkedin, Send, Github, Twitter, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saxenakhushi699@gmail.com',
      link: 'mailto:saxenakhushi699@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7042959724',
      link: 'tel:+917042959724',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@khushi-saxena',
      link: 'https://www.linkedin.com/in/khushi-saxena/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@khushi036',
      link: 'https://github.com/khushi036/',
    },
    {
      icon: BookOpen,
      label: 'LeetCode',
      value: '@khushisaxena036',
      link: 'https://leetcode.com/u/khushisaxena036/',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@khushisaxe70696',
      link: 'https://x.com/KhushiSaxe70696',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* LEFT SECTION */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 dark:bg-gray-700 group-hover:bg-indigo-600 transition-colors">
                        <Icon size={24} className="text-indigo-600 dark:text-indigo-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* RESPONSE TIME BOX */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-100 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-indigo-200 dark:border-gray-700 transition-colors">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Response Time</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I'll get back to you within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slideInRight">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Send Message <Send size={18} />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
