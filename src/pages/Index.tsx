import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeData, defaultResumeData } from "@/types/resume";
import { TemplateKey, templates } from "@/components/templates";
import { ResumeForm } from "@/components/ResumeForm";
import { TemplateSelector } from "@/components/TemplateSelector";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>("modern");
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${resumeData.personalInfo.fullName || "Resume"}_Resume`,
    onAfterPrint: () => {
      toast({
        title: "Success!",
        description: "Your resume has been exported as PDF",
      });
    },
  });

  const SelectedTemplateComponent = templates[selectedTemplate].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-8 shadow-strong sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8" />
              <h1 className="text-3xl font-bold">Resume Builder</h1>
            </div>
            <Button
              onClick={handlePrint}
              size="lg"
              variant="secondary"
              className="shadow-medium hover:shadow-strong transition-shadow"
            >
              <Download className="h-5 w-5 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-5 animate-fade-in">
            <ResumeForm data={resumeData} onChange={setResumeData} />
          </div>

          {/* Template Selector */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="sticky top-24">
              <TemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="sticky top-24">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-primary mb-2">Live Preview</h2>
                <p className="text-sm text-muted-foreground">
                  Selected: {templates[selectedTemplate].name}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-strong overflow-hidden border border-border">
                <div
                  className="overflow-y-auto"
                  style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}
                >
                  <div ref={resumeRef} className="transform scale-75 origin-top">
                    <SelectedTemplateComponent data={resumeData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Built with ❤️ using React, TypeScript & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
