import type { LucideIcon } from "lucide-react";
import {
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Facebook,
  ShieldCheck,
} from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trade.guru9?igsh=ajk4dGNtZjFvajVp&utm_source=qr",
    icon: Instagram,
  },
  { label: "Telegram", href: "https://t.me/optionguruji9", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
];

export interface ScamChannel {
  platform: string;
  handle: string;
  verified: boolean;
}

export const scamChannels: ScamChannel[] = [
  { platform: "YouTube", handle: "@TradeGuruOfficial", verified: true },
  { platform: "Telegram", handle: "@TradeGuruHQ", verified: true },
  { platform: "Instagram", handle: "@tradeguru", verified: true },
  { platform: "LinkedIn", handle: "@trade-guru", verified: true },
];

export const scamNote =
  "We never ask for money over chats. Only trust the official handles listed above.";

export const trustedBadges = [ShieldCheck];
