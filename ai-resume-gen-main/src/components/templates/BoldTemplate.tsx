import { ResumeData } from "@/types/resume";

interface TemplateProps {
  data: ResumeData;
}

export const BoldTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="bg-white text-gray-900 p-8 min-h-[297mm]">
      {/* Bold colorful header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 -mx-8 -mt-8 p-8 mb-8 text-white">
        <h1 className="text-5xl font-black mb-3">{data.personalInfo.fullName || "YOUR NAME"}</h1>
        <div className="flex gap-6 text-sm font-semibold">
          {data.personalInfo.email && <span>✉ {data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>☎ {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>⚲ {data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-black text-orange-500 mb-3 uppercase">Profile</h2>
          <p className="text-gray-700 leading-relaxed font-medium">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-black text-orange-500 mb-4 uppercase border-b-4 border-orange-500 pb-2">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 bg-gray-50 p-5 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-black text-gray-900">{exp.position}</h3>
                  <p className="text-lg font-bold text-pink-600">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex">
                    <span className="text-orange-500 font-bold mr-2">▸</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-2xl font-black text-pink-500 mb-4 uppercase border-b-4 border-pink-500 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-black text-pink-500 mb-4 uppercase border-b-4 border-pink-500 pb-2">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                <p className="font-bold text-orange-600">{edu.field}</p>
                <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.endDate}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-black text-orange-500 mb-4 uppercase border-b-4 border-orange-500 pb-2">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-black text-gray-900">{project.name}</h3>
                <p className="text-gray-700 text-sm mt-2 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-xs font-bold">
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
  );
};
