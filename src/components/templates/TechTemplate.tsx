import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const TechTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-gray-900 text-gray-100 p-8 min-h-[297mm] font-mono">
      {/* Terminal-style header */}
      <div className="border-2 border-green-500 p-4 mb-6">
        <div className="text-green-400 mb-2">$ cat resume.txt</div>
        <h1 className="text-3xl font-bold text-green-400">{data.personalInfo.fullName || "Your Name"}</h1>
        <div className="flex gap-4 text-sm mt-2 text-gray-300">
          {data.personalInfo.email && <span>📧 {data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>📱 {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>📍 {data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-2">&gt; About</h2>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-300 leading-relaxed">{data.summary}</p>
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-2">&gt; Skills --list</h2>
          <div className="grid grid-cols-3 gap-2 border-l-4 border-green-500 pl-4">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-800 px-3 py-1 text-sm text-green-300">
                [{idx + 1}] {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-2">&gt; Experience.log</h2>
          {data.experience.map((exp, idx) => (
            <div key={exp.id} className="mb-4 border-l-4 border-green-500 pl-4">
              <div className="flex justify-between text-green-300">
                <h3 className="font-bold">[{idx + 1}] {exp.position}</h3>
                <span className="text-sm">{exp.startDate} - {exp.current ? "Present" : exp.endDate}</span>
              </div>
              <p className="text-gray-400 text-sm">{exp.company} | {exp.location}</p>
              <ul className="mt-2 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    <span className="text-green-400">→</span> {item}
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
          <h2 className="text-xl font-bold text-green-400 mb-2">&gt; Projects.json</h2>
          {data.projects.map((project, idx) => (
            <div key={project.id} className="mb-3 border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-300">[{idx + 1}] {project.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-green-400 px-2 py-0.5 text-xs">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-2">&gt; Education --verbose</h2>
          {data.education.map((edu, idx) => (
            <div key={edu.id} className="mb-3 border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-green-300">[{idx + 1}] {edu.degree} in {edu.field}</h3>
              <p className="text-gray-400 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>
      )}

      <div className="text-green-400 mt-8 border-t-2 border-green-500 pt-4">
        $ _
      </div>
    </div>
  );
};
