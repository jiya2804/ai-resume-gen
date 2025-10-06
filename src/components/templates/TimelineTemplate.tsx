import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const TimelineTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[297mm]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">{data.summary}</p>
        </section>
      )}

      <div className="flex gap-8">
        {/* Timeline side */}
        <div className="w-2/3">
          {/* Experience Timeline */}
          {data.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Professional Journey</h2>
              <div className="relative border-l-4 border-blue-500 pl-8 space-y-8">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[42px] w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                    
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-blue-900">{exp.position}</h3>
                          <p className="text-blue-700 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
                      <ul className="space-y-1">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex">
                            <span className="text-blue-500 mr-2">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Projects</h2>
              <div className="space-y-4">
                {data.projects.map((project) => (
                  <div key={project.id} className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-700 text-sm mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-1/3 space-y-6">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="bg-blue-50 p-5 rounded-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section className="bg-purple-50 p-5 rounded-lg">
              <h2 className="text-xl font-bold text-purple-900 mb-4">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 pb-4 border-b border-purple-200 last:border-0">
                  <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-purple-700">{edu.field}</p>
                  <p className="text-xs text-gray-600 mt-1">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.endDate}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
