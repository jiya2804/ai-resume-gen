import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ElegantTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-10 min-h-[297mm]">
      {/* Elegant header with serif font */}
      <div className="text-center mb-10 pb-6 border-b-2 border-gray-300">
        <h1 className="text-5xl font-serif mb-3 tracking-tight">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex justify-center gap-4 text-sm text-gray-600 font-light">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span className="text-gray-400">|</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span className="text-gray-400">|</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8">
          <p className="text-gray-700 leading-loose text-center font-light italic text-lg px-8">
            {data.summary}
          </p>
        </section>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Main content - 2 columns */}
        <div className="col-span-2 space-y-8">
          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif mb-4 pb-2 border-b border-gray-300">Professional Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <span className="text-sm text-gray-500 font-light">
                      {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-600 italic mb-2">{exp.company}, {exp.location}</p>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif mb-4 pb-2 border-b border-gray-300">Notable Projects</h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>
                  <p className="text-xs text-gray-500 italic">{project.technologies.join(" • ")}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-serif mb-4 pb-2 border-b border-gray-300">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-semibold text-sm">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.field}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.institution}</p>
                  <p className="text-xs text-gray-400">{edu.endDate}</p>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-serif mb-4 pb-2 border-b border-gray-300">Core Competencies</h2>
              <div className="space-y-2">
                {data.skills.map((skill, idx) => (
                  <div key={idx} className="text-sm text-gray-700 leading-relaxed">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
