export type DemoProfile = {
  id: "sarah" | "jason" | "aina";
  name: string;
  age: number;
  lifestyle: string;
  work: string;
  goal: string;
  mainIssue: string;
  wellnessScore: number;
  recommendation: string;
  scoreBreakdown: {
    sleep: number;
    activity: number;
    nutrition: number;
    recovery: number;
    insight: string;
  };
};

export type DailyPlanOutput = {
  morning: string[];
  midday: string[];
  evening: string[];
  night: string[];
  note: string;
};

export type MealPlanOutput = {
  breakfast: string[];
  lunch: string[];
  snack: string[];
  dinner: string[];
  hydrationGoal: string;
  insight: string;
};

export type WorkoutPlanOutput = {
  title: string;
  warmup: string[];
  mobility: string[];
  lowerBody: string[];
  circulationBoost: string[];
  flexibility: string[];
  cooldown: string[];
  insight: string;
};

export type ProductMatchOutput = {
  selectedSymptoms: string[];
  items: Array<{
    name: string;
    description: string;
  }>;
  explanation: string;
};

export type WeeklyInsightOutput = {
  stats: Array<{
    label: string;
    value: string;
    progress: number;
  }>;
  sections: Array<{
    title: string;
    body: string;
  }>;
  recommendation: string;
};

export const demoProfiles: DemoProfile[] = [
  {
    id: "sarah",
    name: "Sarah Lim",
    age: 34,
    lifestyle: "办公室工作",
    work: "长期久坐工作",
    goal: "提升能量",
    mainIssue: "腰部不适",
    wellnessScore: 78,
    recommendation:
      "你最近更适合做姿势支撑型日常计划、偏轻盈的晚餐结构，以及办公室恢复路线。",
    scoreBreakdown: {
      sleep: 74,
      activity: 77,
      nutrition: 76,
      recovery: 79,
      insight: "如果下周把补水和工作间隙活动做得更稳定，健康分数还有提升空间。",
    },
  },
  {
    id: "jason",
    name: "Jason Tan",
    age: 41,
    lifestyle: "零售主管",
    work: "每天站立工作 9 小时",
    goal: "恢复 + 更稳定精力",
    mainIssue: "腿部疲劳 + 腰部不适",
    wellnessScore: 72,
    recommendation:
      "你最近更适合做循环支持型日常计划、清爽一点的晚餐结构，以及下班后的恢复穿戴路线。",
    scoreBreakdown: {
      sleep: 68,
      activity: 74,
      nutrition: 71,
      recovery: 75,
      insight: "如果下周把睡眠稳定性和补水做得更好，健康分数有机会继续上升。",
    },
  },
  {
    id: "aina",
    name: "Aina",
    age: 29,
    lifestyle: "活跃型生活方式",
    work: "工作与轻运动并行",
    goal: "整体健康",
    mainIssue: "睡眠不佳",
    wellnessScore: 81,
    recommendation:
      "你最近更适合把睡前节奏、轻有氧和恢复习惯连成一套更稳定的日常流程。",
    scoreBreakdown: {
      sleep: 77,
      activity: 84,
      nutrition: 80,
      recovery: 83,
      insight: "维持睡前卫生习惯，会是你下周提升健康分数最快的一步。",
    },
  },
];

export const dailyPlanOptions = [
  "办公室工作",
  "久站工作",
  "低能量",
  "睡眠不佳",
] as const;

export const mealGoalOptions = [
  "减重",
  "能量",
  "恢复",
  "日常健康",
] as const;

export const dietOptions = ["均衡", "高蛋白", "低糖"] as const;

export const workoutOptions = [
  "新手",
  "办公室恢复",
  "缓解疲劳",
  "居家训练",
] as const;

export const symptomOptions = [
  "腿部疲劳",
  "腰部不适",
  "循环较差",
  "久站工时",
  "久坐工时",
  "运动恢复",
] as const;

type DailyFocus = (typeof dailyPlanOptions)[number];
type MealGoal = (typeof mealGoalOptions)[number];
type DietType = (typeof dietOptions)[number];
type WorkoutFocus = (typeof workoutOptions)[number];
type Symptom = (typeof symptomOptions)[number];

const dailyPlans: Record<DemoProfile["id"], Record<DailyFocus, DailyPlanOutput>> = {
  jason: {
    "办公室工作": {
      morning: ["醒来 30 分钟内喝 500ml 水", "做 3 分钟小腿与肩颈舒展", "穿上 UFIT Daily Support Tee"],
      midday: ["午餐优先高蛋白", "饭后步行 8 分钟", "每小时补一次水"],
      evening: ["下班后慢走 15 分钟", "做 5 分钟腰部拉伸", "晚餐保持轻一点"],
      night: ["10:30 后减少屏幕时间", "睡前做轻呼吸练习", "目标 11:30 前睡觉"],
      note: "这套节奏主要用于支持循环舒适感、精力平衡和下班后的日常恢复。",
    },
    "久站工作": {
      morning: ["醒来 30 分钟内喝 500ml 水", "做 3 分钟小腿拉伸启动循环", "穿上 UFIT Infra Socks"],
      midday: ["午餐选择鸡肉 / 豆腐 / 鱼类这类高蛋白", "饭后步行 8 分钟帮助消化", "每小时维持补水"],
      evening: ["下班后轻走 15 分钟", "穿上 UFIT Recovery Legging 做恢复", "做 5 分钟腰部拉伸"],
      night: ["10:30 后减少屏幕时间", "睡前做轻呼吸练习", "目标 11:30 前睡觉"],
      note: "这套计划主要用于支持循环、能量平衡和日常恢复。",
    },
    "低能量": {
      morning: ["醒来先补水 500ml", "早餐提高蛋白质比例", "穿上 UFIT Infra Socks 维持白天舒适感"],
      midday: ["午餐保持均衡", "饭后步行 8 分钟", "下午避免高糖饮料"],
      evening: ["下班后穿上 UFIT Recovery Legging", "慢走 12 分钟", "做 5 分钟放松呼吸"],
      night: ["下午 5 点后减少咖啡因", "10 点后降低屏幕亮度", "目标 11:20 前睡觉"],
      note: "这套节奏更适合下午 4 点后精力明显下滑的人。",
    },
    "睡眠不佳": {
      morning: ["醒来后先晒自然光 10 分钟", "喝水后再喝咖啡", "做 3 分钟轻活动"],
      midday: ["午餐保持均衡", "饭后步行 8 分钟", "下午尽量不再摄入刺激性饮品"],
      evening: ["下班后先做恢复再吃晚餐", "轻走 15 分钟", "拉伸小腿和腰部"],
      night: ["10 点后减少手机使用", "睡前做轻呼吸放松", "目标 11:15 前睡觉"],
      note: "这套节奏更适合恢复质量不足、晚上不容易真正放松的人。",
    },
  },
  sarah: {
    "办公室工作": {
      morning: ["醒来后喝 500ml 水", "做 5 分钟轻伸展", "穿上 UFIT Daily Support Tee"],
      midday: ["午餐保持高蛋白与蔬菜比例", "饭后步行 10 分钟", "下午补水 2 次"],
      evening: ["下班后使用 UFIT Wellness Waist Belt", "轻走 12 分钟", "做 5 分钟腰部放松"],
      night: ["10:15 后减少屏幕时间", "做轻呼吸练习", "目标 11:15 前入睡"],
      note: "这套节奏更适合办公室用户做姿势支持与工作日恢复。",
    },
    "久站工作": {
      morning: ["起床喝 500ml 水", "做 3 分钟小腿拉伸", "穿上 UFIT Infra Socks"],
      midday: ["午餐偏高蛋白", "饭后步行 8 分钟", "每小时补水"],
      evening: ["下班后使用 UFIT Recovery Legging", "做 5 分钟腿后侧放松", "轻走 12 分钟"],
      night: ["10:30 后减少屏幕时间", "睡前做轻呼吸练习", "目标 11:30 前睡觉"],
      note: "这套节奏主要支持腿部舒适感与晚间恢复。",
    },
    "低能量": {
      morning: ["醒来先补水", "早餐增加蛋白质", "做 5 分钟唤醒活动"],
      midday: ["午餐减少精制糖", "饭后步行 10 分钟", "下午加一份酸奶或坚果"],
      evening: ["轻活动 15 分钟", "晚餐更清爽", "减少晚间咖啡因"],
      night: ["做呼吸放松", "提早 30 分钟进入休息状态", "目标 11:15 前睡觉"],
      note: "这套节奏更适合办公日精力起伏较大的人。",
    },
    "睡眠不佳": {
      morning: ["晒自然光 10 分钟", "先喝水再喝咖啡", "做 3 分钟舒展"],
      midday: ["午餐不要太重", "饭后走 8 分钟", "下午 4 点后减少刺激饮品"],
      evening: ["下班后做轻恢复", "尽量早点吃晚餐", "降低晚间刺激"],
      night: ["10 点后减少屏幕", "做睡前卫生流程", "目标 11 点前睡觉"],
      note: "这套节奏更适合提升睡眠稳定性和第二天的恢复感。",
    },
  },
  aina: {
    "办公室工作": {
      morning: ["起床补水 400ml", "做 10 分钟瑜伽", "穿上 UFIT Daily Support Tee"],
      midday: ["午餐均衡搭配蛋白质", "饭后步行 10 分钟", "维持补水频率"],
      evening: ["做 15 分钟轻有氧", "拉伸髋部与腿后侧", "晚餐吃轻一点"],
      night: ["10 点后减少屏幕时间", "做睡前放松流程", "目标 11 点前睡觉"],
      note: "这套节奏更适合活跃型用户把精力和恢复做得更稳定。",
    },
    "久站工作": {
      morning: ["起床喝水 500ml", "做 3 分钟小腿拉伸", "穿上 UFIT Infra Socks"],
      midday: ["午餐优先高蛋白", "饭后步行 8 分钟", "每小时补水"],
      evening: ["下班后穿上 UFIT Recovery Legging", "做 15 分钟轻走", "拉伸小腿和髋部"],
      night: ["10:15 后减少屏幕时间", "做轻呼吸放松", "目标 11:15 前睡觉"],
      note: "这套节奏更适合活跃但白天身体负担偏高的人。",
    },
    "低能量": {
      morning: ["先喝水再活动", "做 10 分钟瑜伽", "吃完整早餐"],
      midday: ["午餐保持均衡", "饭后步行 10 分钟", "避免甜食造成波动"],
      evening: ["做轻有氧 15 分钟", "拉伸 5 分钟", "晚餐不过量"],
      night: ["进入睡前卫生流程", "减少蓝光刺激", "目标 11 点前睡觉"],
      note: "这套节奏更适合想把精力感做稳的人。",
    },
    "睡眠不佳": {
      morning: ["起床 20 分钟内接触自然光", "补水后再摄入咖啡因", "做 10 分钟瑜伽"],
      midday: ["午餐均衡", "饭后轻走 8 分钟", "下午尽量不再摄入刺激饮品"],
      evening: ["做轻有氧", "进行 5 分钟拉伸", "晚餐清爽易消化"],
      night: ["执行睡前卫生流程", "10 点后减少屏幕", "目标 11 点前睡觉"],
      note: "这套节奏更适合把睡前放松和第二天恢复连起来。",
    },
  },
};

const mealPlans: Record<DemoProfile["id"], Record<MealGoal, Record<DietType, MealPlanOutput>>> = {
  jason: {
    减重: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "一小把杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单有助于维持稳定精力与肌肉恢复。",
      },
      高蛋白: {
        breakfast: ["燕麦配香蕉", "3 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "杏仁"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单有助于维持稳定精力与恢复支持。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["希腊酸奶", "杏仁"],
        dinner: ["豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单更适合减少下午精力波动。",
      },
    },
    能量: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "一小把杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单有助于维持稳定精力与肌肉恢复。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "希腊酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["高蛋白酸奶", "杏仁"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单适合久站工作后的能量与恢复需求。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "绿茶"],
        lunch: ["鸡肉", "蔬菜", "少量全谷类"],
        snack: ["酸奶", "杏仁"],
        dinner: ["豆腐", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单更适合稳定下午精力。",
      },
    },
    恢复: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "一小把杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单有助于维持稳定精力与肌肉恢复。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "高蛋白酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单更适合下班后恢复与肌肉支持。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖酸奶", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量粗粮"],
        snack: ["坚果", "酸奶"],
        dinner: ["豆腐", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单适合晚餐不想太重但又希望有恢复感的人。",
      },
    },
    日常健康: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "一小把杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单适合作为可长期坚持的均衡版本。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "高蛋白酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单适合把恢复和饱腹感一起兼顾。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["希腊酸奶", "杏仁"],
        dinner: ["豆腐", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.2 升水",
        insight: "这份餐单有助于保持更平稳的日常状态。",
      },
    },
  },
  sarah: {
    减重: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["烤鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "杏仁"],
        dinner: ["豆腐或三文鱼", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合办公室日常的轻负担节奏。",
      },
      高蛋白: {
        breakfast: ["希腊酸奶", "鸡蛋", "水果"],
        lunch: ["鸡胸肉", "蔬菜", "糙米"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合保持饱腹感与工作后恢复。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉沙拉", "少量糙米"],
        snack: ["酸奶", "坚果"],
        dinner: ["豆腐", "蔬菜", "汤品"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合减少下午沉重感。",
      },
    },
    能量: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["希腊酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单适合工作日维持稳定能量。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "希腊酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["坚果", "酸奶"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合办公室恢复和姿势支持用户。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["酸奶", "杏仁"],
        dinner: ["豆腐", "蔬菜", "汤品"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合减少下午精力下滑。",
      },
    },
    恢复: {
      均衡: {
        breakfast: ["燕麦", "鸡蛋", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合工作后身体恢复与舒适感支持。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "高蛋白酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["坚果", "酸奶"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单适合恢复导向与饱腹感并行。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖酸奶", "茶"],
        lunch: ["鸡肉沙拉", "少量粗粮"],
        snack: ["坚果", "酸奶"],
        dinner: ["豆腐", "蔬菜", "汤品"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单适合晚餐偏轻的恢复节奏。",
      },
    },
    日常健康: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单适合作为长期可坚持的均衡版本。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "希腊酸奶", "水果"],
        lunch: ["鸡胸肉", "糙米", "蔬菜"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合想让饮食更有结构感的人。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["酸奶", "坚果"],
        dinner: ["豆腐", "汤品", "蔬菜"],
        hydrationGoal: "全天 2.1 升水",
        insight: "这份餐单更适合控制能量波动。",
      },
    },
  },
  aina: {
    减重: {
      均衡: {
        breakfast: ["隔夜燕麦", "希腊酸奶", "绿茶"],
        lunch: ["鸡肉沙拉碗", "糙米", "蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["豆腐或三文鱼", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合活跃型用户做轻盈饮食。",
      },
      高蛋白: {
        breakfast: ["酸奶", "鸡蛋", "水果"],
        lunch: ["鸡胸肉", "藜麦", "蔬菜"],
        snack: ["高蛋白酸奶", "杏仁"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单更适合训练后的恢复支持。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉沙拉", "少量糙米"],
        snack: ["坚果", "酸奶"],
        dinner: ["豆腐", "蔬菜", "汤品"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单更适合晚间想吃得轻一点的人。",
      },
    },
    能量: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合活跃型用户维持稳定精力。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "高蛋白酸奶", "水果"],
        lunch: ["鸡胸肉", "藜麦", "蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合恢复和能量管理同时进行。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["酸奶", "坚果"],
        dinner: ["豆腐", "沙拉", "汤品"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单更适合把晚间负担降下来。",
      },
    },
    恢复: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合训练后恢复与日常舒适感。",
      },
      高蛋白: {
        breakfast: ["高蛋白酸奶", "鸡蛋", "水果"],
        lunch: ["鸡胸肉", "藜麦", "蔬菜"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "地瓜", "沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单更适合把恢复感做得更稳。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖酸奶", "茶"],
        lunch: ["鸡肉沙拉", "少量糙米"],
        snack: ["坚果", "酸奶"],
        dinner: ["豆腐", "蔬菜", "汤品"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单更适合晚间恢复和睡前轻盈感。",
      },
    },
    日常健康: {
      均衡: {
        breakfast: ["燕麦配香蕉", "2 颗水煮蛋", "绿茶"],
        lunch: ["鸡胸肉", "糙米", "蒸蔬菜"],
        snack: ["酸奶", "杏仁"],
        dinner: ["三文鱼或豆腐", "地瓜", "综合沙拉"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合作为日常健康版本长期使用。",
      },
      高蛋白: {
        breakfast: ["鸡蛋", "高蛋白酸奶", "水果"],
        lunch: ["鸡胸肉", "藜麦", "蔬菜"],
        snack: ["杏仁", "酸奶"],
        dinner: ["三文鱼", "沙拉", "地瓜"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合恢复和活力管理并行。",
      },
      低糖: {
        breakfast: ["鸡蛋", "无糖燕麦", "茶"],
        lunch: ["鸡肉", "蔬菜", "少量糙米"],
        snack: ["酸奶", "杏仁"],
        dinner: ["豆腐", "沙拉", "汤品"],
        hydrationGoal: "全天 2.3 升水",
        insight: "这份餐单适合保持更轻的晚间状态。",
      },
    },
  },
};

const workoutPlans: Record<DemoProfile["id"], Record<WorkoutFocus, WorkoutPlanOutput>> = {
  jason: {
    新手: {
      title: "15 分钟恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸放松 — 3 分钟"],
      insight: "这组训练更适合长时间站立和肌肉疲劳的人。",
    },
    办公室恢复: {
      title: "12 分钟办公恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["椅旁深蹲 — 2 分钟"],
      circulationBoost: ["原地踏步 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["呼吸放松 — 2 分钟"],
      insight: "这组训练更适合久坐和低活动量的人。",
    },
    缓解疲劳: {
      title: "15 分钟恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸放松 — 3 分钟"],
      insight: "这组训练主要用于缓解久站后的疲劳感。",
    },
    居家训练: {
      title: "16 分钟居家恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 3 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 3 分钟"],
      cooldown: ["深呼吸放松 — 4 分钟"],
      insight: "这组训练适合在家完成的轻恢复路线。",
    },
  },
  sarah: {
    新手: {
      title: "14 分钟办公室恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["椅旁深蹲 — 2 分钟"],
      circulationBoost: ["原地走动 — 3 分钟"],
      flexibility: ["腰部拉伸 — 2 分钟"],
      cooldown: ["呼吸放松 — 4 分钟"],
      insight: "这组训练更适合办公室用户和腰部不适场景。",
    },
    办公室恢复: {
      title: "14 分钟办公室恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["椅旁深蹲 — 2 分钟"],
      circulationBoost: ["原地走动 — 3 分钟"],
      flexibility: ["腰部拉伸 — 2 分钟"],
      cooldown: ["呼吸放松 — 4 分钟"],
      insight: "这组训练主要用于工作后的姿势恢复。",
    },
    缓解疲劳: {
      title: "13 分钟能量重启训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["原地走动 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸 — 3 分钟"],
      insight: "这组训练更适合工作日下午精力下滑的人。",
    },
    居家训练: {
      title: "16 分钟居家恢复训练",
      warmup: ["颈部伸展 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 3 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腰部拉伸 — 3 分钟"],
      cooldown: ["呼吸放松 — 4 分钟"],
      insight: "这组训练适合在家做轻恢复和姿势支持。",
    },
  },
  aina: {
    新手: {
      title: "15 分钟轻有氧流程",
      warmup: ["呼吸启动 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["轻有氧踏步 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸放松 — 3 分钟"],
      insight: "这组训练更适合活跃型用户做轻恢复。",
    },
    办公室恢复: {
      title: "13 分钟久坐恢复训练",
      warmup: ["呼吸启动 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["呼吸放松 — 3 分钟"],
      insight: "这组训练适合久坐后恢复活动度。",
    },
    缓解疲劳: {
      title: "15 分钟轻恢复训练",
      warmup: ["呼吸启动 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["原地轻走 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸放松 — 3 分钟"],
      insight: "这组训练适合轻疲劳和恢复导向场景。",
    },
    居家训练: {
      title: "15 分钟居家健康流程",
      warmup: ["呼吸启动 — 1 分钟"],
      mobility: ["肩部环绕 — 2 分钟"],
      lowerBody: ["徒手深蹲 — 2 分钟"],
      circulationBoost: ["轻有氧踏步 — 3 分钟"],
      flexibility: ["腿后侧拉伸 — 2 分钟"],
      cooldown: ["深呼吸放松 — 3 分钟"],
      insight: "这组训练适合在家维持轻有氧与恢复感。",
    },
  },
};

const productMatches: Record<DemoProfile["id"], Record<Symptom, ProductMatchOutput>> = {
  jason: {
    腿部疲劳: {
      selectedSymptoms: ["腿部疲劳", "腰部不适", "久站工时"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合长时间站立后的日常舒适与恢复支持。" },
        { name: "UFIT Infra Socks", description: "有助于减轻脚部疲劳并支持循环舒适感。" },
        { name: "UFIT Wellness Waist Belt", description: "适合长时间工作时补充腰部支撑。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合支持日常恢复和循环舒适感。",
    },
    腰部不适: {
      selectedSymptoms: ["腿部疲劳", "腰部不适", "久站工时"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合长工时下的腰部舒适支持。" },
        { name: "UFIT Recovery Legging", description: "适合下班后的恢复路线。" },
        { name: "UFIT Infra Socks", description: "适合脚部疲劳与循环舒适支持。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合腰部舒适与下班后恢复。",
    },
    循环较差: {
      selectedSymptoms: ["腿部疲劳", "循环较差", "久站工时"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合循环支持与日常恢复穿戴。" },
        { name: "UFIT Infra Socks", description: "适合脚部舒适和循环支持场景。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合循环舒适与恢复支持。",
    },
    久站工时: {
      selectedSymptoms: ["腿部疲劳", "腰部不适", "久站工时"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合长时间站立后的日常舒适与恢复支持。" },
        { name: "UFIT Infra Socks", description: "有助于减轻脚部疲劳并支持循环舒适感。" },
        { name: "UFIT Wellness Waist Belt", description: "适合长时间工作时补充腰部支撑。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合支持日常恢复和循环舒适感。",
    },
    久坐工时: {
      selectedSymptoms: ["腰部不适", "久坐工时"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合久坐后的腰部舒适支持。" },
        { name: "UFIT Daily Support Tee", description: "适合作为日常轻支撑穿着。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合姿势支持与日常舒适感。",
    },
    运动恢复: {
      selectedSymptoms: ["运动恢复", "腿部疲劳"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合恢复导向场景和下班后放松。" },
        { name: "UFIT Infra Socks", description: "适合腿脚舒适感和轻恢复路线。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合作为恢复型搭配。",
    },
  },
  sarah: {
    腿部疲劳: {
      selectedSymptoms: ["腿部疲劳", "办公室恢复"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合久坐后依然出现腿部疲劳的人。" },
        { name: "UFIT Infra Socks", description: "适合下肢舒适和循环支持。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合办公室后的恢复感。",
    },
    腰部不适: {
      selectedSymptoms: ["腰部不适", "办公室工作"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合长时间办公时的腰部舒适支持。" },
        { name: "UFIT Daily Support Tee", description: "适合作为日常姿势与穿着支持。" },
        { name: "UFIT Recovery Legging", description: "适合下班后做恢复延伸。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合腰部舒适与日常恢复。",
    },
    循环较差: {
      selectedSymptoms: ["循环较差", "办公室工作"],
      items: [
        { name: "UFIT Infra Socks", description: "适合脚部疲劳与循环舒适支持。" },
        { name: "UFIT Recovery Legging", description: "适合作为下班后的恢复穿戴。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合循环舒适和轻恢复。",
    },
    久站工时: {
      selectedSymptoms: ["腿部疲劳", "久站工时"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合站立工作后的恢复场景。" },
        { name: "UFIT Infra Socks", description: "适合长工时下的腿脚舒适支持。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合站立场景和恢复感。",
    },
    久坐工时: {
      selectedSymptoms: ["腰部不适", "久坐工时"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合桌面工作下的腰部支撑。" },
        { name: "UFIT Daily Support Tee", description: "适合作为日常轻支撑穿搭。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合姿势支持和办公室场景。",
    },
    运动恢复: {
      selectedSymptoms: ["运动恢复", "日常健康"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合轻恢复和下班后放松。" },
        { name: "UFIT Daily Support Tee", description: "适合把舒适穿搭纳入健康路线。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合作为轻恢复组合。",
    },
  },
  aina: {
    腿部疲劳: {
      selectedSymptoms: ["腿部疲劳", "活跃生活方式"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合活跃型用户的轻恢复需求。" },
        { name: "UFIT Infra Socks", description: "适合腿脚疲劳和舒适支持。" },
      ],
      explanation: "根据你的生活方式画像，这组产品更适合活动后的轻恢复。",
    },
    腰部不适: {
      selectedSymptoms: ["腰部不适", "活跃生活方式"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合作为腰部舒适支撑。" },
        { name: "UFIT Daily Support Tee", description: "适合日常轻支撑和舒适穿着。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合作为腰部舒适与恢复支持。",
    },
    循环较差: {
      selectedSymptoms: ["循环较差", "活跃生活方式"],
      items: [
        { name: "UFIT Infra Socks", description: "适合腿脚舒适和循环支持。" },
        { name: "UFIT Recovery Legging", description: "适合作为恢复导向穿戴。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合循环舒适和恢复感。",
    },
    久站工时: {
      selectedSymptoms: ["腿部疲劳", "久站工时"],
      items: [
        { name: "UFIT Infra Socks", description: "适合脚部疲劳与久站舒适支持。" },
        { name: "UFIT Recovery Legging", description: "适合作为下班后恢复单品。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合久站后的舒适支持。",
    },
    久坐工时: {
      selectedSymptoms: ["久坐工时", "腰部不适"],
      items: [
        { name: "UFIT Wellness Waist Belt", description: "适合久坐后的腰部舒适支持。" },
        { name: "UFIT Daily Support Tee", description: "适合作为姿势友好的轻支撑穿搭。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合桌面工作和姿势支持。",
    },
    运动恢复: {
      selectedSymptoms: ["运动恢复", "活跃生活方式"],
      items: [
        { name: "UFIT Recovery Legging", description: "适合活动后舒适恢复。" },
        { name: "UFIT Daily Support Tee", description: "适合作为训练前后的轻支撑穿搭。" },
      ],
      explanation: "根据你选择的状态，这组产品更适合作为活跃型恢复路线。",
    },
  },
};

const weeklyInsights: Record<DemoProfile["id"], WeeklyInsightOutput> = {
  jason: {
    stats: [
      { label: "睡眠", value: "平均 6.4 小时", progress: 64 },
      { label: "饮水", value: "每天 1.6L", progress: 53 },
      { label: "步数", value: "每天 5200 步", progress: 59 },
      { label: "活动度", value: "每周 3 天", progress: 48 },
    ],
    sections: [
      { title: "精力模式", body: "下午 4 点后精力明显下降，主要与久站后的疲劳累积有关。" },
      { title: "睡眠质量", body: "当前平均睡眠时长仍低于理想目标。" },
      { title: "补水状态", body: "每天饮水量略低于建议值。" },
      { title: "活动表现", body: "轻步行的习惯对晚间恢复有明显帮助。" },
    ],
    recommendation: "下周建议优先提升补水量，再增加一次活动度练习，并保持晚间恢复习惯。",
  },
  sarah: {
    stats: [
      { label: "睡眠", value: "平均 6.8 小时", progress: 69 },
      { label: "饮水", value: "每天 1.9L", progress: 72 },
      { label: "步数", value: "每天 6100 步", progress: 66 },
      { label: "活动度", value: "每周 4 天", progress: 61 },
    ],
    sections: [
      { title: "精力模式", body: "有午后步行的日子，白天精力会更稳定。" },
      { title: "睡眠质量", body: "睡眠接近目标，但工作日仍不够稳定。" },
      { title: "补水状态", body: "补水表现比之前好，但下午时段还可以更稳定。" },
      { title: "活动表现", body: "短时活动度练习正在帮助腰部舒适感提升。" },
    ],
    recommendation: "下周建议把午后步行固定下来，并多加一次桌边恢复练习。",
  },
  aina: {
    stats: [
      { label: "睡眠", value: "平均 6.9 小时", progress: 71 },
      { label: "饮水", value: "每天 2.0L", progress: 79 },
      { label: "步数", value: "每天 7400 步", progress: 78 },
      { label: "活动度", value: "每周 5 天", progress: 73 },
    ],
    sections: [
      { title: "精力模式", body: "做了轻有氧的日子，精力感会更平稳。" },
      { title: "睡眠质量", body: "只要更早进入睡前节奏，睡眠表现就会更好。" },
      { title: "补水状态", body: "补水表现整体不错，正在帮助恢复感稳定下来。" },
      { title: "活动表现", body: "活动度练习对缓解僵硬和提升恢复很有帮助。" },
    ],
    recommendation: "下周建议把睡前卫生流程固定下来，并继续保留晚间活动度习惯。",
  },
};

export function getDailyPlan(profileId: DemoProfile["id"], focus: DailyFocus) {
  return dailyPlans[profileId][focus];
}

export function getMealPlan(profileId: DemoProfile["id"], goal: MealGoal, diet: DietType) {
  return mealPlans[profileId][goal][diet];
}

export function getWorkoutPlan(profileId: DemoProfile["id"], focus: WorkoutFocus) {
  return workoutPlans[profileId][focus];
}

export function getProductMatch(profileId: DemoProfile["id"], symptom: Symptom) {
  return productMatches[profileId][symptom];
}

export function getWeeklyInsight(profileId: DemoProfile["id"]) {
  return weeklyInsights[profileId];
}
