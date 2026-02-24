export type CourseLevel = "Live" | "Free" | "Private" | "Earn" | "Premium";

export interface CourseSchedule {
  label: string;
  items: string[];
}

export interface CourseItem {
  id: string;
  tag: CourseLevel;
  title: string;
  description: string;
  features: string[];
  schedules?: CourseSchedule[];
}

export const courses: CourseItem[] = [
  {
    id: "live-classes",
    tag: "Live",
    title: "Live classes",
    description: "Trade Guru hosts real-time trading rooms with screen-share, Q&A, and execution drills.",
    features: ["Daily scalping rooms", "Voice + screen breakdowns", "Post-trade debriefs"],
    schedules: [
      {
        label: "Previous batches",
        items: ["Batch Alpha (Jan) — completed", "Batch Blitz (Feb) — completed"],
      },
      {
        label: "Ongoing",
        items: ["Batch Titan — live weekdays 9:15-11:00"],
      },
      {
        label: "Upcoming",
        items: ["Batch Nova — starts Mar 10", "Batch Pulse — starts Apr 2"],
      },
    ],
  },
  {
    id: "free-course",
    tag: "Free",
    title: "Free course",
    description: "Starter pack that covers the complete Trade Guru basics with checklists and PDFs.",
    features: ["Lifetime access", "Downloadable notes", "Live Q&A drops"],
  },
  {
    id: "private-group",
    tag: "Private",
    title: "Private group",
    description: "Tight-knit community with curated setups, intraday alerts, and accountability threads.",
    features: ["Intraday levels", "Accountability pods", "Voice huddles"],
  },
  {
    id: "earn-with-us",
    tag: "Earn",
    title: "Earn with us",
    description: "Partner program to co-host streams, share playbooks, and monetize your edge together.",
    features: ["Revenue share", "Coaching slots", "Signal co-branding"],
  },
  {
    id: "free-premium-group",
    tag: "Premium",
    title: "Free primium group",
    description: "Zero-cost premium room with curated trade ideas and moderated chat for serious traders.",
    features: ["Premium trade ideas", "Moderated chat", "Weekly office hours"],
  },
];
