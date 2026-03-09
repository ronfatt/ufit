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
  memberSince: "2026年1月",
  referralCode: "SARAH2026",
  wellnessScore: 78,
  recoveryStatus: "中等恢复",
  lifestyleFocus: "循环支持",
  directReferrals: 12,
  activeMembers: 8,
  estimatedRewards: "RM 1,280",
  joinDate: "2026年1月12日",
  tier: "银级会员",
};

export const featuredProducts: Product[] = [
  {
    id: "legging",
    name: "UFIT Recovery Legging",
    category: "恢复穿戴",
    benefit: "适合日常舒适与循环支持场景。",
    description:
      "A premium recovery essential designed for members who spend long hours standing, walking, or staying active throughout the day.",
    price: "RM 229",
    image: "银色未来感产品轮廓，占位图。",
    tags: ["循环", "舒适", "日常"],
  },
  {
    id: "belt",
    name: "UFIT Wellness Waist Belt",
    category: "支撑穿戴",
    benefit: "面向日常支撑与身体舒适感。",
    description:
      "A lightweight support piece for posture-conscious routines and lower back comfort during busy schedules.",
    price: "RM 188",
    image: "极简腰部支撑产品占位图，带金属边缘感。",
    tags: ["腰部支撑", "日常习惯", "舒适"],
  },
  {
    id: "socks",
    name: "UFIT Infra Socks",
    category: "循环支持",
    benefit: "适合久站、脚部疲劳与舒适支持。",
    description:
      "Made for users who feel leg fatigue after standing all day and want a daily recovery routine that feels easy to maintain.",
    price: "RM 96",
    image: "浅蓝灯光下的袜类产品占位渲染图。",
    tags: ["腿部疲劳", "恢复", "久站"],
  },
  {
    id: "tee",
    name: "UFIT Daily Support Tee",
    category: "日常健康",
    benefit: "面向舒适穿着与日常节奏的健康单品。",
    description:
      "An everyday layer for members who want a more complete lifestyle and recovery setup around movement, support, and comfort.",
    price: "RM 158",
    image: "悬浮卡片上的高质感日常支撑 T 恤占位图。",
    tags: ["日常", "舒适", "生活方式"],
  },
];

export const featureCards = [
  {
    title: "问 AI",
    description: "从真实身体感受出发，先聊疲劳、久站、恢复，再给建议。",
  },
  {
    title: "配产品",
    description: "把生活场景和不适感，转换成更适合的健康产品组合。",
  },
  {
    title: "开权益",
    description: "会员不是老派后台，而是 AI、价格、洞察和体验一起升级。",
  },
  {
    title: "长奖励",
    description: "像 creator growth dashboard 一样看推荐增长，而不是奖金树。",
  },
];

export const membershipBenefits = [
  "AI 健康支持",
  "会员专属价格",
  "产品推荐洞察",
  "推荐与奖励追踪",
  "个人仪表盘权限",
];

export const referralPreview = [
  { label: "总会员数", value: "2,480" },
  { label: "活跃推荐", value: "386" },
  { label: "预计奖励", value: "RM 48k" },
  { label: "AI 推荐次数", value: "9,200" },
];

export const wellnessBenefits = [
  {
    label: "恢复",
    title: "让身体日常状态更轻盈",
    description:
      "A practical AI-led flow that turns common issues like standing fatigue and stiffness into a simple routine plus product fit.",
  },
  {
    label: "习惯",
    title: "把健康建议变成可持续节奏",
    description:
      "Use the AI coach to move members toward hydration, posture, sleep, and recovery habits that make the platform feel useful every day.",
  },
  {
    label: "推荐",
    title: "先理解需求，再推荐产品",
    description:
      "Products appear as part of a wellness conversation, making the commercial layer feel relevant instead of pushy.",
  },
  {
    label: "会员",
    title: "让会员价值真正被看见",
    description:
      "The demo shows why people join: AI support, wellness products, member perks, and referral upside in one journey.",
  },
];

export const dashboardMetrics = [
  { label: "健康分数", value: "78 / 100", note: "生活规律度正在提升" },
  { label: "恢复状态", value: "中等", note: "当前重点是活动量与循环支持" },
  { label: "本周重点", value: "循环", note: "最相关的产品类别" },
];

export const teamSummary = [
  { label: "直属推荐", value: "12", note: "来自个人网络" },
  { label: "活跃成员", value: "8", note: "本月有互动" },
  { label: "本月新增", value: "3", note: "2026 年 3 月新增" },
];

export const rewardSummary = [
  { label: "奖励余额", value: "RM 1,280", note: "当前预计值" },
  { label: "月增长", value: "+14%", note: "相较 2026 年 2 月" },
  { label: "会员活跃度", value: "86%", note: "互动趋势健康" },
];

export const aiInsight =
  "根据最近互动数据，关注疲劳恢复的用户，对压缩支撑类产品的点击和咨询最活跃。";

export const sponsorCard = {
  name: "Farah Wellness Group",
  description:
    "这个 sponsor 区块用来让客户快速理解推荐关系，而不必看到复杂树状结构。",
  contact: "support@ufit.ai",
  joinDate: "2026年1月10日",
  tier: "银级会员",
};

export const networkMetrics = [
  { label: "总推荐数", value: "12", note: "来自 Sarah 的直接网络" },
  { label: "活跃成员", value: "8", note: "当前仍在参与" },
  { label: "预计奖励", value: "RM 1,280", note: "演示用预测值" },
  { label: "转化率", value: "27%", note: "从 Demo 到会员注册" },
];

export const referralMembers = [
  {
    name: "Alicia Tan",
    joinDate: "02 Mar 2026",
    status: "活跃",
    activity: "看过 AI 教练并购买支撑类产品",
    contribution: "RM 320",
  },
  {
    name: "Daniel Ong",
    joinDate: "24 Feb 2026",
    status: "活跃",
    activity: "与恢复类推荐有持续互动",
    contribution: "RM 210",
  },
  {
    name: "Jasmine Lee",
    joinDate: "18 Feb 2026",
    status: "待激活",
    activity: "已注册，正在浏览产品",
    contribution: "RM 90",
  },
  {
    name: "Marcus Goh",
    joinDate: "09 Feb 2026",
    status: "活跃",
    activity: "又推荐了两位健康导向用户",
    contribution: "RM 410",
  },
];

export const rewardProjection = [
  { month: "1月", value: 28 },
  { month: "2月", value: 46 },
  { month: "3月", value: 64 },
  { month: "4月", value: 78 },
];

export const recommendationOptions = [
  "腿部疲劳",
  "腰部不适",
  "循环较差",
  "日常疲劳",
  "运动恢复",
  "久站",
  "久坐",
  "睡眠支持",
];
