export type Product = {
  id: string;
  name: string;
  category: string;
  benefit: string;
  price: string;
  image: string;
};

export const featuredProducts: Product[] = [
  {
    id: "prod-boost",
    name: "UFIT Vitality+",
    category: "Daily Wellness",
    benefit:
      "Designed for members who need better daily energy, recovery rhythm, and all-day resilience.",
    price: "RM 189",
    image: "Clinical-style product visual placeholder for supplement bottle.",
  },
  {
    id: "prod-flow",
    name: "UFIT Flow Support",
    category: "Circulation",
    benefit:
      "A circulation-focused option for tired legs, long standing hours, and comfort support.",
    price: "RM 220",
    image: "Soft blue product visual placeholder for circulation support pack.",
  },
  {
    id: "prod-recover",
    name: "UFIT Recover Gel",
    category: "Recovery",
    benefit:
      "A recovery-first product story for active routines, mobility work, and muscle tension relief.",
    price: "RM 98",
    image: "Premium gel tube placeholder shown in a silver wellness tray.",
  },
];

export const wellnessBenefits = [
  {
    label: "Recovery",
    title: "Support daily movement and body comfort",
    description:
      "A practical AI-led flow that turns common issues like standing fatigue and stiffness into a simple routine plus product fit.",
  },
  {
    label: "Routine",
    title: "Build better habits with guidance",
    description:
      "Use the AI coach to move members toward hydration, posture, sleep, and recovery habits that make the platform feel useful every day.",
  },
  {
    label: "Commerce",
    title: "Recommend products in context",
    description:
      "Products appear as part of a wellness conversation, making the commercial layer feel relevant instead of pushy.",
  },
  {
    label: "Membership",
    title: "Make the subscription feel valuable",
    description:
      "The demo shows why people join: AI support, wellness products, member perks, and referral upside in one journey.",
  },
];

export const membershipBenefits = [
  {
    title: "AI wellness check-ins",
    description:
      "Members can ask about common lifestyle concerns and receive simple guidance with product suggestions.",
  },
  {
    title: "Preferred member pricing",
    description:
      "Demo-ready pricing logic that makes membership feel like a valuable unlock.",
  },
  {
    title: "Referral commerce tools",
    description:
      "Shareable referral links, sponsor visibility, and reward previews without full MLM complexity.",
  },
];

export const referralPreview = [
  { label: "Members using AI coach", value: "2.4k" },
  { label: "Avg. monthly referrals", value: "38" },
  { label: "Demo conversion uplift", value: "+31%" },
];

export const dashboardMetrics = [
  { label: "AI Health Score", value: "86", note: "Improved by 4 points this week" },
  { label: "Product Match", value: "3", note: "Recommended for recovery and circulation" },
  { label: "Rewards", value: "RM 640", note: "Pending this month" },
];

export const teamSummary = [
  { label: "Total Invites", value: "42", note: "Across social and direct referrals" },
  { label: "Active Members", value: "18", note: "Renewed or purchased this cycle" },
];

export const rewardSummary = [
  { label: "Estimated Rewards", value: "RM 1,280", note: "Mock payout preview" },
  { label: "Top Channel", value: "Wellness Demo", note: "Homepage AI coach converts best" },
];

export const networkMetrics = [
  { label: "Referral Link", value: "UFIT-AINA-108", note: "Primary invite code" },
  { label: "Total Invites", value: "42", note: "Sent across channels" },
  { label: "Active Members", value: "18", note: "Currently retained" },
  { label: "Estimated Rewards", value: "RM 1,280", note: "Mock monthly projection" },
  { label: "Conversion Rate", value: "27%", note: "From demo to member signup" },
  { label: "Sponsor Tier", value: "Silver", note: "Example network status" },
];

export const sponsorCard = {
  name: "Farah Wellness Group",
  description:
    "A clean sponsor identity block helps the client understand referral relationships without exposing a complex tree view.",
  contact: "support@ufit.ai",
};
