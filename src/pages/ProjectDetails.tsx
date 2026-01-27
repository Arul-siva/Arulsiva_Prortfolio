import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import Navbar from '../components/Navbar';
import GradientText from '../components/GradientText';
import CursorFollower from '../components/CursorFollower';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-dark rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
    );
  }

  const nextProject = projects.find(p => p.id === project.id + 1) || projects[0];
  const prevProject = projects.find(p => p.id === project.id - 1) || projects[projects.length - 1];

  return (
    <div className="min-h-screen text-white selection:bg-accent selection:text-dark">
      <CursorFollower />
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-gray-400 hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <GradientText text={project.title} />
          </h1>
          
          <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 relative group">
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Project Info</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <User size={16} />
                    <span className="text-sm uppercase tracking-wider">Client</span>
                  </div>
                  <p className="text-lg font-medium text-white">{project.client || "Confidential"}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Calendar size={16} />
                    <span className="text-sm uppercase tracking-wider">Date</span>
                  </div>
                  <p className="text-lg font-medium text-white">{project.date || "2024"}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Tag size={16} />
                    <span className="text-sm uppercase tracking-wider">Category</span>
                  </div>
                  <p className="text-lg font-medium text-white">{project.category || "Web Development"}</p>
                </div>

                <div className="pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-dark rounded-xl font-bold hover:bg-white transition-colors"
                  >
                    Live Preview <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.overview || project.description}
              </p>
            </div>

            {project.challenge && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <Link 
            to={`/project/${prevProject.id}`}
            className="group flex flex-col items-start gap-2"
          >
            <span className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-accent transition-colors">Previous Project</span>
            <div className="flex items-center gap-2 text-xl font-bold">
              <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
              {prevProject.title}
            </div>
          </Link>

          <Link 
            to={`/project/${nextProject.id}`}
            className="group flex flex-col items-end gap-2"
          >
            <span className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-accent transition-colors">Next Project</span>
            <div className="flex items-center gap-2 text-xl font-bold">
              {nextProject.title}
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
