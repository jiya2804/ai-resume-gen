import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { ResumeData, EducationItem, ExperienceItem, ProjectItem } from "@/types/resume";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: string) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: [""],
        },
      ],
    });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const updateExperienceDescription = (id: string, index: number, value: string) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              description: exp.description.map((desc, i) => (i === index ? value : desc)),
            }
          : exp
      ),
    });
  };

  const addExperienceDescription = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, description: [...exp.description, ""] } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const addProject = () => {
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: Date.now().toString(),
          name: "",
          description: "",
          technologies: [],
        },
      ],
    });
  };

  const updateProject = (id: string, field: keyof ProjectItem, value: any) => {
    onChange({
      ...data,
      projects: data.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((proj) => proj.id !== id),
    });
  };

  const updateSkills = (value: string) => {
    onChange({
      ...data,
      skills: value.split(",").map((s) => s.trim()).filter(Boolean),
    });
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-bold mb-4 text-primary">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={data.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
              placeholder="New York, NY"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin">LinkedIn (optional)</Label>
              <Input
                id="linkedin"
                value={data.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="website">Website (optional)</Label>
              <Input
                id="website"
                value={data.personalInfo.website}
                onChange={(e) => updatePersonalInfo("website", e.target.value)}
                placeholder="johndoe.com"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-bold mb-4 text-primary">Professional Summary</h2>
        <Textarea
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          placeholder="Brief summary about your professional background and goals..."
          rows={4}
        />
      </Card>

      {/* Experience */}
      <Card className="p-6 shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">Work Experience</h2>
          <Button onClick={addExperience} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </div>
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-4 bg-secondary/30">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Experience Entry</h3>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                      placeholder="Tech Corp"
                    />
                  </div>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                      placeholder="Jan 2020"
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                      placeholder="Dec 2022"
                      disabled={exp.current}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`current-${exp.id}`}
                    checked={exp.current}
                    onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor={`current-${exp.id}`}>Currently working here</Label>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Responsibilities</Label>
                    <Button
                      onClick={() => addExperienceDescription(exp.id)}
                      size="sm"
                      variant="ghost"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add Point
                    </Button>
                  </div>
                  {exp.description.map((desc, idx) => (
                    <Input
                      key={idx}
                      value={desc}
                      onChange={(e) =>
                        updateExperienceDescription(exp.id, idx, e.target.value)
                      }
                      placeholder="Describe your achievement or responsibility..."
                      className="mb-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Education */}
      <Card className="p-6 shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">Education</h2>
          <Button onClick={addEducation} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="border rounded-lg p-4 bg-secondary/30">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Education Entry</h3>
                <Button
                  onClick={() => removeEducation(edu.id)}
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div>
                    <Label>Field of Study</Label>
                    <Input
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                      placeholder="Computer Science"
                    />
                  </div>
                </div>
                <div>
                  <Label>Institution</Label>
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                    placeholder="University Name"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                      placeholder="2016"
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <Label>GPA (optional)</Label>
                    <Input
                      value={edu.gpa || ""}
                      onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                      placeholder="3.8"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Skills */}
      <Card className="p-6 shadow-soft">
        <h2 className="text-xl font-bold mb-4 text-primary">Skills</h2>
        <div>
          <Label htmlFor="skills">Enter skills separated by commas</Label>
          <Input
            id="skills"
            value={data.skills.join(", ")}
            onChange={(e) => updateSkills(e.target.value)}
            placeholder="JavaScript, React, Node.js, Python, AWS"
          />
        </div>
      </Card>

      {/* Projects */}
      <Card className="p-6 shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">Projects</h2>
          <Button onClick={addProject} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
        <div className="space-y-4">
          {data.projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 bg-secondary/30">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Project Entry</h3>
                <Button
                  onClick={() => removeProject(project.id)}
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div>
                  <Label>Project Name</Label>
                  <Input
                    value={project.name}
                    onChange={(e) => updateProject(project.id, "name", e.target.value)}
                    placeholder="E-commerce Platform"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    placeholder="Describe what the project does..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Technologies (comma-separated)</Label>
                  <Input
                    value={project.technologies.join(", ")}
                    onChange={(e) =>
                      updateProject(
                        project.id,
                        "technologies",
                        e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                      )
                    }
                    placeholder="React, TypeScript, Node.js"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
