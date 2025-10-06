import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ClassicTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-10 min-h-[297mm]">
      {/* Traditional header */}
      <div className="text-center mb-8 pb-6 border-b-4 border-double border-gray-800">
        <h1 className="text-4xl font-bold mb-3 tracking-wide">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="text-sm text-gray-700 space-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
        </div>
      </div>

      {/* Objective/Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-900 border-b-2 border-gray-300 pb-1">
            Objective
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-900 border-b-2 border-gray-300 pb-1">
            Professional Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="text-base font-bold">{exp.position}</h3>
                  <p className="text-gray-700 italic">{exp.company}, {exp.location}</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">
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
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-900 border-b-2 border-gray-300 pb-1">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-bold">{edu.degree} in {edu.field}</h3>
                  <p className="text-gray-700 italic">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">{edu.endDate}</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-900 border-b-2 border-gray-300 pb-1">
            Skills
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.skills.join(", ")}</p>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-gray-900 border-b-2 border-gray-300 pb-1">
            Projects
          </h2>
          {data.projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="text-base font-bold">{project.name}</h3>
              <p className="text-gray-700 text-sm mt-1">{project.description}</p>
              <p className="text-sm text-gray-600 italic mt-1">
                Technologies: {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
