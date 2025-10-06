import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Sparkles, Download, Zap } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              AI Resume Generator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Create, enhance, and export your professional resume in minutes.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <Sparkles className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">AI Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Automatically improve your experience and skills descriptions
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <FileText className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">10+ Templates</h3>
              <p className="text-sm text-muted-foreground">
                Choose from professionally designed resume templates
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border shadow-soft">
              <Download className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Export to PDF</h3>
              <p className="text-sm text-muted-foreground">
                Download your resume as a styled PDF instantly
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button
              onClick={() => navigate("/builder")}
              size="lg"
              className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-shadow"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
