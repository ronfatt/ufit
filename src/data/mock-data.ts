export type Product = {
  id: string;
  name: string;
  category: string;
  benefit: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
};

export type UserProfile = {
  name: string;
  memberSince: string;
  referralCode: string;
  wellnessScore: number;
  recoveryStatus: string;
  lifestyleFocus: string;
  directReferrals: number;
  activeMembers: number;
  estimatedRewards: string;
  joinDate: string;
  tier: string;
};

export const userProfile: UserProfile = {
  name: "Sarah Lim",
  memberSince: "Jan 2026",
  referralCode: "SARAH2026",
  wellnessScore: 78,
  recoveryStatus: "Moderate",
  lifestyleFocus: "Circulation Support",
  directReferrals: 12,
  activeMembers: 8,
  estimatedRewards: "RM 1,280",
  joinDate: "12 Jan 2026",
  tier: "Silver Circle",
};

export const featuredProducts: Product[] = [
  {
    id: "legging",
    name: "UFIT Recovery Legging",
    category: "Recovery Wear",
    benefit: "Supports daily comfort and circulation-focused wear.",
    description:
      "A premium recovery essential designed for members who spend long hours standing, walking, or staying active throughout the day.",
    price: "RM 229",
    image: "Soft silver product silhouette with wellness-tech styling.",
    tags: ["circulation", "comfort", "daily wear"],
  },
  {
    id: "belt",
    name: "UFIT Wellness Waist Belt",
    category: "Support Wear",
    benefit: "Designed for daily support and body comfort.",
    description:
      "A lightweight support piece for posture-conscious routines and lower back comfort during busy schedules.",
    price: "RM 188",
    image: "Minimal waist support product placeholder with chrome trim.",
    tags: ["back support", "routine", "comfort"],
  },
  {
    id: "socks",
    name: "UFIT Infra Socks",
    category: "Circulation",
    benefit: "Comfort support for tired feet and long standing hours.",
    description:
      "Made for users who feel leg fatigue after standing all day and want a daily recovery routine that feels easy to maintain.",
    price: "RM 96",
    image: "Clean sock product render placeholder in pale blue lighting.",
    tags: ["tired legs", "recovery", "standing hours"],
  },
  {
    id: "tee",
    name: "UFIT Daily Support Tee",
    category: "Daily Wellness",
    benefit: "Wellness-focused daily wear for comfort and routine use.",
    description:
      "An everyday layer for members who want a more complete lifestyle and recovery setup around movement, support, and comfort.",
    price: "RM 158",
    image: "Premium daily support tee placeholder on a floating card.",
    tags: ["routine", "comfort", "lifestyle"],
  },
];

export const featureCards = [
  {
    title: "AI Wellness Guidance",
    description:
      "Members ask natural questions and get concise lifestyle guidance without clinical language.",
  },
  {
    title: "Smart Product Matching",
    description:
      "The platform translates common symptoms and routine needs into product suggestions with context.",
  },
  {
    title: "Membership Rewards",
    description:
      "A modern benefits layer that gives members pricing, insights, and a clear reason to stay engaged.",
  },
  {
    title: "Referral Growth Tracking",
    description:
      "Clean referral visibility, conversion summaries, and reward previews without old-school complexity.",
  },
];

export const membershipBenefits = [
  "AI-powered wellness support",
  "Exclusive member pricing",
  "Product recommendation insights",
  "Referral and rewards tracking",
  "Personal dashboard access",
];

export const referralPreview = [
  { label: "Total Members", value: "2,480" },
  { label: "Active Referrals", value: "386" },
  { label: "Estimated Rewards", value: "RM 48k" },
  { label: "AI Recommendations Delivered", value: "9,200" },
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

export const dashboardMetrics = [
  { label: "Wellness Score", value: "78 / 100", note: "Lifestyle consistency is trending up" },
  { label: "Recovery Status", value: "Moderate", note: "Focus on daily movement and circulation" },
  { label: "Lifestyle Focus", value: "Circulation", note: "Most relevant product category this week" },
];

export const teamSummary = [
  { label: "Direct Referrals", value: "12", note: "Personal network joins" },
  { label: "Active Members", value: "8", note: "Engaged this month" },
  { label: "New Joins", value: "3", note: "Added in March 2026" },
];

export const rewardSummary = [
  { label: "Reward Balance", value: "RM 1,280", note: "Estimated current balance" },
  { label: "Monthly Growth", value: "+14%", note: "Compared with February 2026" },
  { label: "Membership Activity", value: "86%", note: "Healthy engagement trend" },
];

export const aiInsight =
  "Based on your recent activity, users interested in fatigue recovery are engaging most with compression-style support products.";

export const sponsorCard = {
  name: "Farah Wellness Group",
  description:
    "A clean sponsor identity block helps the client understand referral relationships without exposing a complex tree view.",
  contact: "support@ufit.ai",
  joinDate: "10 Jan 2026",
  tier: "Silver Circle",
};

export const networkMetrics = [
  { label: "Total Referrals", value: "12", note: "From Sarah's direct network" },
  { label: "Active Members", value: "8", note: "Currently participating" },
  { label: "Estimated Rewards", value: "RM 1,280", note: "Mock projection" },
  { label: "Conversion Rate", value: "27%", note: "Demo to membership" },
];

export const referralMembers = [
  {
    name: "Alicia Tan",
    joinDate: "02 Mar 2026",
    status: "Active",
    activity: "Viewed AI coach and purchased support wear",
    contribution: "RM 320",
  },
  {
    name: "Daniel Ong",
    joinDate: "24 Feb 2026",
    status: "Active",
    activity: "Engaged with recovery recommendations",
    contribution: "RM 210",
  },
  {
    name: "Jasmine Lee",
    joinDate: "18 Feb 2026",
    status: "Pending",
    activity: "Registered and exploring products",
    contribution: "RM 90",
  },
  {
    name: "Marcus Goh",
    joinDate: "09 Feb 2026",
    status: "Active",
    activity: "Referred two wellness-focused users",
    contribution: "RM 410",
  },
];

export const rewardProjection = [
  { month: "Jan", value: 28 },
  { month: "Feb", value: 46 },
  { month: "Mar", value: 64 },
  { month: "Apr", value: 78 },
];

export const recommendationOptions = [
  "tired legs",
  "lower back discomfort",
  "poor circulation",
  "daily fatigue",
  "muscle recovery",
  "long hours standing",
  "long hours sitting",
  "sleep support",
];
