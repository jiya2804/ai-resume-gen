import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const MinimalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[297mm] font-light">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b border-gray-300">
        <h1 className="text-5xl font-light tracking-wide mb-3">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex justify-center gap-3 text-sm text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed text-center italic">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-normal uppercase tracking-wider mb-4 text-gray-800">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between mb-1">
                <h3 className="text-base font-medium">{exp.position} • {exp.company}</h3>
                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
              <ul className="space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-normal uppercase tracking-wider mb-4 text-gray-800">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-medium">{edu.degree} in {edu.field}</h3>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.endDate}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-normal uppercase tracking-wider mb-4 text-gray-800">Skills</h2>
          <p className="text-gray-700">{data.skills.join(" • ")}</p>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-normal uppercase tracking-wider mb-4 text-gray-800">Projects</h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="text-base font-medium">{project.name}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
              <p className="text-sm text-gray-600 mt-1">{project.technologies.join(", ")}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
