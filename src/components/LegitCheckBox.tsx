import { ShieldCheck, CheckCircle2, Package, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LegitCheckBox = () => {
  const verificationSteps = [
    {
      icon: Camera,
      title: "Multi-Point Inspection",
      description: "Over 30+ authentication checkpoints verified by our experts",
    },
    {
      icon: Package,
      title: "Original Packaging",
      description: "Box, tags, and accessories verified for authenticity",
    },
    {
      icon: CheckCircle2,
      title: "Material Analysis",
      description: "Stitching, leather quality, and materials cross-referenced with brand specs",
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              Stride. Verified Authentic
              <Badge variant="default" className="ml-2">100% Legit</Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Authenticated by industry experts
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {verificationSteps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <step.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Every item sold on Stride. goes through our rigorous authentication process.
            We partner with Nike, Gucci, Balmain, Louis Vuitton and other luxury brands
            to ensure you receive only genuine products.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LegitCheckBox;
