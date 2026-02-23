export type CourseLevel = "Workshop" | "Strategy" | "Advanced" | "Basic";

export interface CourseItem {
  id: string;
  tag: CourseLevel;
  title: string;
  price: string;
  discountLabel: string;
  validity: string;
  likes: string;
  thumbnail: string;
}

export const courses: CourseItem[] = [
  {
    id: "option-scalper",
    tag: "Strategy",
    title: "Option Scalper Masterclass",
    price: "₹699",
    discountLabel: "74% OFF",
    validity: "Lifetime access",
    likes: "18.2k",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "intraday-pro",
    tag: "Advanced",
    title: "Intraday Momentum Pro",
    price: "₹899",
    discountLabel: "68% OFF",
    validity: "Lifetime access",
    likes: "12.4k",
    thumbnail:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "trap-finder",
    tag: "Workshop",
    title: "Trapping Concepts Workshop",
    price: "₹499",
    discountLabel: "62% OFF",
    validity: "6 months",
    likes: "9.1k",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "scalping-101",
    tag: "Basic",
    title: "Scalping 101 Essentials",
    price: "₹299",
    discountLabel: "50% OFF",
    validity: "3 months",
    likes: "7.5k",
    thumbnail:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "liquidity-zones",
    tag: "Advanced",
    title: "Liquidity Zones Blueprint",
    price: "₹649",
    discountLabel: "66% OFF",
    validity: "Lifetime access",
    likes: "10.8k",
    thumbnail:
      "https://images.unsplash.com/photo-1478826160983-94e0d4eb7808?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "psychology-mindset",
    tag: "Strategy",
    title: "Psychology & Mindset Lab",
    price: "₹599",
    discountLabel: "58% OFF",
    validity: "Lifetime access",
    likes: "6.3k",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];
