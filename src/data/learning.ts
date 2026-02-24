export interface LearningTopic {
  title: string;
  description: string;
}

export const learningTopics: LearningTopic[] = [
  { title: "Stock market: basic to advance", description: "Foundations through advanced market structure." },
  { title: "Personal strategy", description: "Build a playbook tuned to your risk style." },
  { title: "Scalping strategy", description: "Fast execution setups for volatile moves." },
  { title: "Live support", description: "Get questions answered during market hours." },
  { title: "Risk management", description: "Sizing, stops, and capital protection rules." },
  { title: "Price action", description: "Read tape and levels without indicator clutter." },
  { title: "Chart patterns", description: "Spot high-probability structures early." },
  { title: "Option value", description: "Understand premium behavior and decay." },
];
