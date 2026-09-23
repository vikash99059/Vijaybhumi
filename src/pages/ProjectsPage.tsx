import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS_DATA, type ProjectItem } from '../data/projects';
import { Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [filterVertical, setFilterVertical] = useState<string>('All');

  const verticals = ['All', 'Mining', 'Properties', 'Solar Energy'];

  const filteredProjects = filterVertical === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.vertical === filterVertical);

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            OPERATIONS & PIPELINE
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            PROJECT PORTFOLIO & INITIATIVES.
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Active extraction blocks, deep exploration campaigns, and emerging infrastructure pipelines across the Vijaybhumi Group ecosystem.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {verticals.map(v => (
              <button
                key={v}
                onClick={() => setFilterVertical(v)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                  filterVertical === v
                    ? 'bg-navy-900 text-gold-400 shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredProjects.length} Verified Initiatives
          </span>
        </div>
      </section>

      {/* Projects Grid (Clean White Cards) */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between shadow-card-subtle group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-navy-900 text-xs font-bold text-gold-400">
                      {project.vertical}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black bg-white/90 text-navy-900 shadow-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-black text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="space-y-1 text-xs text-slate-700">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">
                      Scope of Delivery:
                    </span>
                    {project.scope.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2 rounded-lg bg-slate-100 hover:bg-navy-900 hover:text-gold-400 text-navy-900 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire Regarding Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Expansion Notice */}
        <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 max-w-xl mx-auto space-y-2 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center mx-auto">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-black text-navy-900">
            Projects will be showcased here as the portfolio expands.
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            All project details are verified and updated strictly in accordance with client confidentiality and statutory operational agreements.
          </p>
        </div>
      </section>
    </div>
  );
};
