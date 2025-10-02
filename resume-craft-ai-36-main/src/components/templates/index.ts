import { ModernTemplate } from "./ModernTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { ProfessionalTemplate } from "./ProfessionalTemplate";
import { CreativeTemplate } from "./CreativeTemplate";
import { CompactTemplate } from "./CompactTemplate";
import { TechTemplate } from "./TechTemplate";
import { ElegantTemplate } from "./ElegantTemplate";
import { BoldTemplate } from "./BoldTemplate";
import { TimelineTemplate } from "./TimelineTemplate";
import { ClassicTemplate } from "./ClassicTemplate";

export const templates = {
  modern: { name: "Modern", component: ModernTemplate },
  minimal: { name: "Minimal", component: MinimalTemplate },
  professional: { name: "Professional", component: ProfessionalTemplate },
  creative: { name: "Creative", component: CreativeTemplate },
  compact: { name: "Compact", component: CompactTemplate },
  tech: { name: "Tech", component: TechTemplate },
  elegant: { name: "Elegant", component: ElegantTemplate },
  bold: { name: "Bold", component: BoldTemplate },
  timeline: { name: "Timeline", component: TimelineTemplate },
  classic: { name: "Classic", component: ClassicTemplate },
};

export type TemplateKey = keyof typeof templates;
