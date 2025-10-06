import { templates, TemplateKey } from "./templates";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selected: TemplateKey;
  onSelect: (key: TemplateKey) => void;
}

export const TemplateSelector = ({ selected, onSelect }: TemplateSelectorProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Choose Template</h2>
      <div className="space-y-2">
        {Object.entries(templates).map(([key, template]) => (
          <Card
            key={key}
            onClick={() => onSelect(key as TemplateKey)}
            className={`p-4 cursor-pointer transition-all hover:shadow-medium ${
              selected === key
                ? "border-primary border-2 shadow-medium bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">{template.name}</span>
              {selected === key && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
