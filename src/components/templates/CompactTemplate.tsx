import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const CompactTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-6 min-h-[297mm] text-sm">
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-gray-900">
        <h1 className="text-3xl font-bold mb-1">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex gap-3 text-xs text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left column - 1/3 */}
        <div className="space-y-4">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">Skills</h2>
              <div className="space-y-1">
                {data.skills.map((skill, idx) => (
                  <div key={idx} className="text-xs">• {skill}</div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <p className="font-semibold text-xs">{edu.degree}</p>
                  <p className="text-xs text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.endDate}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right column - 2/3 */}
        <div className="col-span-2 space-y-4">
          {/* Summary */}
          {data.summary && (
            <section>
              <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">Summary</h2>
              <p className="text-gray-700 leading-snug text-xs">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-xs">{exp.position} • {exp.company}</h3>
                    <span className="text-xs text-gray-500">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 text-xs flex">
                        <span className="mr-1">-</span>
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
            <section>
              <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide">Projects</h2>
              {data.projects.map((project) => (
                <div key={project.id} className="mb-2">
                  <h3 className="font-semibold text-xs">{project.name}</h3>
                  <p className="text-gray-700 text-xs">{project.description}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{project.technologies.join(", ")}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
