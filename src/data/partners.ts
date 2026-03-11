export interface PartnerItem {
  name: string;
  tagline: string;
  logoText: string;
  link?: string;
}

export const partners: PartnerItem[] = [
  {
    name: "Delta",
    tagline: "Lightning-fast execution for live scalps",
    logoText: "DELTA",
  },
  {
    name: "Alice Blue",
    tagline: "Clean charts and low-latency order flow",
    logoText: "ALICE BLUE",
    link: "https://ekyc.aliceblueonline.com/?source=WMUM2020",
  },
  {
    name: "Angel One",
    tagline: "Reliable broker stack for intraday pros",
    logoText: "ANGEL ONE",
  },
];
