import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[297mm]">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 -mx-8 -mt-8 mb-6">
        <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b-2 border-blue-600 pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b-2 border-blue-600 pb-1">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b-2 border-blue-600 pb-1">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree} in {edu.field}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
              </div>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b-2 border-blue-600 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-3 border-b-2 border-blue-600 pb-1">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-700 text-sm mb-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
