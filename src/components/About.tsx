import React from 'react';
import { Download, Award, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Happy Clients', value: '30+' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience crafting 
              digital experiences that make a difference. I specialize in React, Node.js, 
              and modern web technologies.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech trends, 
              contributing to open-source projects, or enjoying the beautiful outdoors 
              of San Francisco. I believe in writing clean, maintainable code and 
              creating user experiences that delight and inspire.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-md">
                <Download size={18} />
                <span>Download CV</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {stats.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{value}</div>
                      <div className="text-slate-600 text-sm">{label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-slate-800 mb-2">Currently Learning</h3>
              <p className="text-slate-600 text-sm">
                Diving deep into AI/ML integration with web applications and exploring 
                the latest in serverless architecture patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;