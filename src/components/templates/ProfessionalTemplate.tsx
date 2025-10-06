import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const ProfessionalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[297mm] flex">
      {/* Left sidebar */}
      <div className="w-1/3 bg-gray-800 text-white p-6 -ml-8 -mt-8 -mb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 break-words">{data.personalInfo.fullName || "Your Name"}</h1>
          <div className="space-y-2 text-sm">
            {data.personalInfo.email && <p className="break-all">{data.personalInfo.email}</p>}
            {data.personalInfo.phone && <p>{data.personalInfo.phone}</p>}
            {data.personalInfo.location && <p>{data.personalInfo.location}</p>}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-600 pb-2">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill, idx) => (
                <div key={idx} className="text-sm">• {skill}</div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b border-gray-600 pb-2">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 text-sm">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-gray-300">{edu.field}</p>
                <p className="text-gray-400 text-xs mt-1">{edu.institution}</p>
                <p className="text-gray-400 text-xs">{edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="w-2/3 pl-8">
        {/* Summary */}
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1">Profile</h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3 className="text-lg font-bold">{exp.position}</h3>
                <p className="text-gray-600 font-medium">{exp.company} | {exp.location}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                <ul className="space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex">
                      <span className="mr-2">▸</span>
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
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1">Projects</h2>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-4">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-1">{project.description}</p>
                <p className="text-xs text-gray-600">{project.technologies.join(" • ")}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};
