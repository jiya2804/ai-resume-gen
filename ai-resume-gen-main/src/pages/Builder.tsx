import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ResumeData, defaultResumeData } from "@/types/resume";
import { TemplateKey, templates } from "@/components/templates";
import { ResumeFormEnhanced } from "@/components/ResumeFormEnhanced";
import { TemplateSelector } from "@/components/TemplateSelector";
import { BuilderSteps } from "@/components/BuilderSteps";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Builder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>("modern");
  const resumeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const canProceedToStep2 = () => {
    const { fullName, email, phone, location } = resumeData.personalInfo;
    return fullName && email && phone && location;
  };

  const handleNext = () => {
    if (currentStep === 1 && !canProceedToStep2()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required personal information fields.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-6 shadow-strong sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Home
              </Button>
              <FileText className="h-7 w-7" />
              <h1 className="text-2xl font-bold">AI Resume Builder</h1>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              {currentStep === 3 && (
                <Button
                  onClick={handlePrint}
                  size="lg"
                  variant="secondary"
                  className="shadow-medium hover:shadow-strong transition-shadow"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Export PDF
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <BuilderSteps currentStep={currentStep} />

        {/* Step 1: Enter Details */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Step 1: Enter Your Details
              </h2>
              <p className="text-muted-foreground">
                Fill in your information and use AI to enhance your experience and skills
              </p>
            </div>
            <ResumeFormEnhanced data={resumeData} onChange={setResumeData} />
            <div className="flex justify-end mt-6">
              <Button onClick={handleNext} size="lg">
                Next: Select Template
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Select Template */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Step 2: Choose Your Template
              </h2>
              <p className="text-muted-foreground">
                Select a design that best represents your professional style
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <TemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
              </div>
              <div className="lg:col-span-9">
                <div className="bg-card rounded-lg shadow-strong border border-border p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Preview: {templates[selectedTemplate].name}
                  </h3>
                  <div
                    className="overflow-y-auto bg-white dark:bg-gray-900"
                    style={{ height: "600px" }}
                  >
                    <div className="transform scale-75 origin-top">
                      <SelectedTemplateComponent data={resumeData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6 max-w-7xl mx-auto">
              <Button onClick={handlePrevious} variant="outline" size="lg">
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
              <Button onClick={handleNext} size="lg">
                Next: Preview & Export
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Preview & Export */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Step 3: Preview & Export
              </h2>
              <p className="text-muted-foreground">
                Review your resume and download it as a PDF
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-strong overflow-hidden border border-border">
                <div
                  className="overflow-y-auto"
                  style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}
                >
                  <div ref={resumeRef} className="transform scale-90 origin-top">
                    <SelectedTemplateComponent data={resumeData} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={handlePrevious} variant="outline" size="lg">
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  Previous
                </Button>
                <Button onClick={handlePrint} size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Builder;
