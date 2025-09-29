import React from 'react';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-full lg:w-80 bg-slate-900 text-white z-10 lg:z-auto">
      <div className="flex flex-col h-full p-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">Alex Rivera</h1>
          <p className="text-slate-300 text-sm">Full Stack Developer</p>
          <p className="text-slate-400 text-xs mt-1">San Francisco, CA</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => onSectionClick(id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    activeSection === id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-6 mt-6">
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <span className="text-sm font-bold">Li</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <span className="text-sm font-bold">Gh</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
            >
              <span className="text-sm font-bold">Tw</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;