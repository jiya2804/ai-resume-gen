import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const CreativeTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900 p-8 min-h-[297mm]">
      {/* Header with circular design */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
          {data.personalInfo.fullName ? data.personalInfo.fullName.split(' ').map(n => n[0]).join('').slice(0, 2) : "YN"}
        </div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex justify-center gap-3 text-sm text-gray-600 flex-wrap">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>|</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>|</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6 bg-white rounded-lg p-5 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-center italic">{data.summary}</p>
        </section>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Left column */}
        <div className="col-span-2 space-y-6">
          {/* Experience */}
          {data.experience.length > 0 && (
            <section className="bg-white rounded-lg p-5 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">💼 Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate} • {exp.location}
                  </p>
                  <ul className="space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex">
                        <span className="text-purple-500 mr-2">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="bg-white rounded-lg p-5 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">🚀 Projects</h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-3 pb-3 border-b border-gray-200 last:border-0">
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Education */}
          {data.education.length > 0 && (
            <section className="bg-white rounded-lg p-5 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-purple-600">🎓 Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
                  <h3 className="font-semibold text-gray-800 text-sm">{edu.degree}</h3>
                  <p className="text-purple-600 text-sm">{edu.field}</p>
                  <p className="text-xs text-gray-600 mt-1">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.endDate}</p>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="bg-white rounded-lg p-5 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-blue-600">⚡ Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
