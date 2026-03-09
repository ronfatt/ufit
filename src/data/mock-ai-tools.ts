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
    lifestyle: "Office worker",
    work: "Mostly desk-based work",
    goal: "Better energy",
    mainIssue: "Lower back discomfort",
    wellnessScore: 78,
    recommendation:
      "Your recent profile suggests you may benefit from posture support, a lighter evening meal, and a simple office recovery plan.",
    scoreBreakdown: {
      sleep: 74,
      activity: 77,
      nutrition: 76,
      recovery: 79,
      insight:
        "Improving posture breaks and hydration consistency may increase your wellness score next week.",
    },
  },
  {
    id: "jason",
    name: "Jason Tan",
    age: 41,
    lifestyle: "Retail Supervisor",
    work: "9 hours standing",
    goal: "Recovery + better energy",
    mainIssue: "Tired legs + lower back discomfort",
    wellnessScore: 72,
    recommendation:
      "Your recent profile suggests you may benefit from a circulation-support routine, a lighter evening meal, and recovery wear after work.",
    scoreBreakdown: {
      sleep: 68,
      activity: 74,
      nutrition: 71,
      recovery: 75,
      insight:
        "Improving sleep consistency and hydration may increase your wellness score next week.",
    },
  },
  {
    id: "aina",
    name: "Aina",
    age: 29,
    lifestyle: "Active lifestyle",
    work: "Mix of work, movement, and light training",
    goal: "General wellness",
    mainIssue: "Poor sleep",
    wellnessScore: 81,
    recommendation:
      "Your recent profile suggests you may benefit from a sleep-focused evening routine, lighter cardio, and consistent recovery habits.",
    scoreBreakdown: {
      sleep: 77,
      activity: 84,
      nutrition: 80,
      recovery: 83,
      insight:
        "Sleep hygiene consistency is the fastest way to improve your wellness score next week.",
    },
  },
];

export const dailyPlanOptions = [
  "Office Worker",
  "Long Standing",
  "Low Energy",
  "Poor Sleep",
] as const;

export const mealGoalOptions = [
  "Weight Loss",
  "Energy",
  "Recovery",
  "General Wellness",
] as const;

export const dietOptions = [
  "Balanced",
  "High Protein",
  "Low Sugar",
] as const;

export const workoutOptions = [
  "Beginner",
  "Office Recovery",
  "Fatigue Relief",
  "Home Workout",
] as const;

export const symptomOptions = [
  "Tired Legs",
  "Lower Back Discomfort",
  "Poor Circulation",
  "Long Standing Hours",
  "Long Hours Sitting",
  "Muscle Recovery",
] as const;

type DailyFocus = (typeof dailyPlanOptions)[number];
type MealGoal = (typeof mealGoalOptions)[number];
type DietType = (typeof dietOptions)[number];
type WorkoutFocus = (typeof workoutOptions)[number];
type Symptom = (typeof symptomOptions)[number];

const dailyPlans: Record<DemoProfile["id"], Record<DailyFocus, DailyPlanOutput>> = {
  jason: {
    "Office Worker": {
      morning: [
        "Drink 500ml water after waking",
        "3-minute shoulder and calf stretch",
        "Wear UFIT Daily Support Tee",
      ],
      midday: [
        "Choose a balanced, high-protein lunch",
        "Walk 8 minutes after lunch",
        "Maintain hydration every hour",
      ],
      evening: [
        "Light 15-minute walk after work",
        "Perform 5-minute lower back stretch",
        "Reduce heavy food at dinner",
      ],
      night: [
        "Reduce screen time after 10:30 PM",
        "Gentle breathing exercise before sleep",
        "Target sleep time: before 11:30 PM",
      ],
      note:
        "This routine is designed to support circulation, energy balance, and daily recovery.",
    },
    "Long Standing": {
      morning: [
        "Drink 500ml water within 30 minutes of waking",
        "3-minute calf stretch to activate circulation",
        "Wear UFIT Infra Socks for all-day comfort support",
      ],
      midday: [
        "Choose high-protein lunch (chicken / tofu / fish)",
        "Walk 8 minutes after lunch to improve digestion",
        "Maintain hydration every hour",
      ],
      evening: [
        "Light 15-minute walk after work",
        "Wear UFIT Recovery Legging to support recovery",
        "Perform 5-minute lower back stretch",
      ],
      night: [
        "Reduce screen time after 10:30 PM",
        "Gentle breathing exercise before sleep",
        "Target sleep time: before 11:30 PM",
      ],
      note:
        "This routine is designed to support circulation, energy balance, and daily recovery.",
    },
    "Low Energy": {
      morning: [
        "Drink 500ml water after waking",
        "Eat a higher-protein breakfast",
        "Wear UFIT Infra Socks for comfort during work hours",
      ],
      midday: [
        "Keep lunch balanced and protein-focused",
        "Walk 8 minutes after your meal",
        "Avoid sugary drinks after lunch",
      ],
      evening: [
        "Use UFIT Recovery Legging after work",
        "Take a 12-minute slow walk",
        "Do a 5-minute breathing reset",
      ],
      night: [
        "Reduce caffeine after 5 PM",
        "Lower screen brightness after 10 PM",
        "Aim to sleep before 11:20 PM",
      ],
      note:
        "This routine is designed to reduce afternoon fatigue and improve daily recovery support.",
    },
    "Poor Sleep": {
      morning: [
        "Get sunlight exposure within 20 minutes of waking",
        "Drink 500ml water",
        "Do 3 minutes of light mobility work",
      ],
      midday: [
        "Choose balanced lunch with steady carbs",
        "Avoid a second caffeine hit late in the day",
        "Walk 8 minutes after lunch",
      ],
      evening: [
        "Use UFIT Recovery Legging after work",
        "Take a light 15-minute walk",
        "Stretch calves and lower back",
      ],
      night: [
        "Reduce screen time after 10 PM",
        "Do gentle breathing exercise",
        "Target sleep time: before 11:15 PM",
      ],
      note:
        "This routine is designed to support recovery quality and better night-time habits.",
    },
  },
  sarah: {
    "Office Worker": {
      morning: [
        "Drink 500ml water after waking",
        "5-minute light stretch",
        "Wear UFIT Daily Support Tee",
      ],
      midday: [
        "Choose a balanced lunch with protein",
        "Walk 10 minutes after lunch",
        "Refill your water bottle once before 3 PM",
      ],
      evening: [
        "Use UFIT Wellness Waist Belt after work",
        "Take a light 12-minute walk",
        "Perform 5-minute lower back stretch",
      ],
      night: [
        "Reduce screen time after 10:15 PM",
        "Do gentle breathing exercise",
        "Target sleep time: before 11:15 PM",
      ],
      note:
        "This routine is designed to support posture, energy balance, and workday recovery.",
    },
    "Long Standing": {
      morning: [
        "Drink 500ml water after waking",
        "3-minute calf stretch",
        "Wear UFIT Infra Socks",
      ],
      midday: [
        "Choose protein-focused lunch",
        "Walk 8 minutes after eating",
        "Hydrate every hour",
      ],
      evening: [
        "Use UFIT Recovery Legging after work",
        "Do a 5-minute lower back stretch",
        "Take a light walk",
      ],
      night: [
        "Reduce screen time after 10:30 PM",
        "Do gentle breathing exercise",
        "Sleep before 11:30 PM",
      ],
      note:
        "This routine is designed to support circulation comfort and posture recovery.",
    },
    "Low Energy": {
      morning: [
        "Drink 500ml water after waking",
        "Eat a protein-forward breakfast",
        "Do 5 minutes of mobility work",
      ],
      midday: [
        "Choose balanced lunch with steady carbs",
        "Walk 8 minutes after lunch",
        "Avoid sugary snacks before 4 PM",
      ],
      evening: [
        "Take a light 15-minute walk",
        "Use UFIT Daily Support Tee",
        "Stretch lower back for 5 minutes",
      ],
      night: [
        "Reduce caffeine after 5 PM",
        "Slow down screen exposure",
        "Target sleep before 11:15 PM",
      ],
      note:
        "This routine is designed to support better energy regulation across the workday.",
    },
    "Poor Sleep": {
      morning: [
        "Get 10 minutes of daylight exposure",
        "Drink water before coffee",
        "Do a short mobility flow",
      ],
      midday: [
        "Keep lunch balanced and not too heavy",
        "Walk 8 minutes after eating",
        "Avoid caffeine late in the day",
      ],
      evening: [
        "Use UFIT Wellness Waist Belt for comfort",
        "Take a light walk",
        "Stretch before dinner",
      ],
      night: [
        "Reduce screen time after 10 PM",
        "Do gentle breathing exercise",
        "Target sleep before 11 PM",
      ],
      note:
        "This routine is designed to support better sleep hygiene and evening recovery.",
    },
  },
  aina: {
    "Office Worker": {
      morning: [
        "Drink 400ml water after waking",
        "10-minute yoga flow",
        "Wear UFIT Daily Support Tee",
      ],
      midday: [
        "Choose a balanced lunch with protein",
        "Walk 10 minutes after lunch",
        "Keep hydration steady through the day",
      ],
      evening: [
        "Do light cardio for 15 minutes",
        "Stretch hips and lower back",
        "Keep dinner lighter",
      ],
      night: [
        "Reduce screen time after 10 PM",
        "Follow a sleep hygiene routine",
        "Target sleep before 11 PM",
      ],
      note:
        "This routine is designed to support energy, movement quality, and better evening recovery.",
    },
    "Long Standing": {
      morning: [
        "Drink 500ml water after waking",
        "3-minute calf stretch",
        "Wear UFIT Infra Socks",
      ],
      midday: [
        "Choose high-protein lunch",
        "Walk 8 minutes after lunch",
        "Maintain hydration every hour",
      ],
      evening: [
        "Use UFIT Recovery Legging after work",
        "Take a light 15-minute walk",
        "Stretch calves and hips",
      ],
      night: [
        "Reduce screen time after 10:15 PM",
        "Do gentle breathing exercise",
        "Target sleep before 11:15 PM",
      ],
      note:
        "This routine is designed to support circulation comfort and active recovery.",
    },
    "Low Energy": {
      morning: [
        "Drink water after waking",
        "10-minute yoga flow",
        "Eat a balanced breakfast",
      ],
      midday: [
        "Choose a protein-forward lunch",
        "Walk 10 minutes after lunch",
        "Avoid energy crashes from sugary snacks",
      ],
      evening: [
        "Do light cardio for 15 minutes",
        "Stretch for 5 minutes",
        "Keep dinner light",
      ],
      night: [
        "Reduce screen time after 10 PM",
        "Follow a sleep hygiene routine",
        "Target sleep before 11 PM",
      ],
      note:
        "This routine is designed to support stable energy and better recovery habits.",
    },
    "Poor Sleep": {
      morning: [
        "Get natural light within 20 minutes of waking",
        "Drink water before caffeine",
        "Do 10 minutes of yoga",
      ],
      midday: [
        "Choose balanced lunch",
        "Walk 8 minutes after lunch",
        "Avoid caffeine later in the afternoon",
      ],
      evening: [
        "Do light cardio",
        "Stretch for 5 minutes",
        "Keep dinner easy to digest",
      ],
      night: [
        "Follow a sleep hygiene routine",
        "Reduce screen time after 10 PM",
        "Target sleep before 11 PM",
      ],
      note:
        "This routine is designed to support sleep consistency and daily recovery.",
    },
  },
};

const mealPlans: Record<DemoProfile["id"], Record<MealGoal, Record<DietType, MealPlanOutput>>> = {
  jason: {
    "Weight Loss": {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Handful of almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "High Protein": {
        breakfast: ["Oatmeal with banana", "3 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Oatmeal", "Unsweetened tea"],
        lunch: ["Grilled chicken", "Vegetables", "Small portion brown rice"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and more even afternoon energy.",
      },
    },
    Energy: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Handful of almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "High Protein": {
        breakfast: ["Oatmeal with banana", "3 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and recovery-focused wellness habits.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Green tea"],
        lunch: ["Chicken breast", "Vegetables", "Small portion brown rice"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy with fewer late-day energy crashes.",
      },
    },
    Recovery: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Handful of almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Banana"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Almonds", "Greek yogurt"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports steady energy and recovery-focused wellness habits.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened yogurt", "Tea"],
        lunch: ["Chicken", "Vegetables", "Small brown rice"],
        snack: ["Almonds", "Greek yogurt"],
        dinner: ["Tofu", "Salad", "Sweet potato"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports recovery without heavy evening meals.",
      },
    },
    "General Wellness": {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Handful of almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports balanced daily wellness habits.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Almonds", "Greek yogurt"],
        dinner: ["Salmon", "Salad", "Sweet potato"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports balanced energy and recovery.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken breast", "Vegetables", "Small portion rice"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Salad", "Sweet potato"],
        hydrationGoal: "2.2 liters water throughout the day",
        insight:
          "This meal plan supports a steadier daily energy profile.",
      },
    },
  },
  sarah: {
    "Weight Loss": {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Grilled chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu or salmon", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports lighter daily eating and steady office energy.",
      },
      "High Protein": {
        breakfast: ["Greek yogurt", "2 boiled eggs", "Berries"],
        lunch: ["Chicken breast", "Vegetables", "Brown rice"],
        snack: ["Almonds", "Greek yogurt"],
        dinner: ["Salmon", "Mixed salad", "Sweet potato"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports satiety and workday recovery.",
      },
      "Low Sugar": {
        breakfast: ["Boiled eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken salad", "Small brown rice"],
        snack: ["Greek yogurt", "Nuts"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports more stable focus and less afternoon heaviness.",
      },
    },
    Energy: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports better daytime energy and workday recovery.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon", "Salad", "Sweet potato"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports steadier energy and posture recovery.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken", "Vegetables", "Small brown rice"],
        snack: ["Nuts", "Greek yogurt"],
        dinner: ["Tofu", "Salad", "Soup"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports more even energy through the afternoon.",
      },
    },
    Recovery: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports daily recovery and better after-work comfort.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Greek yogurt", "Nuts"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports posture and recovery-focused wellness habits.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Tea", "Unsweetened yogurt"],
        lunch: ["Chicken salad", "Small rice portion"],
        snack: ["Nuts", "Greek yogurt"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports recovery with a lighter evening structure.",
      },
    },
    "General Wellness": {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports balanced daily wellness habits.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Brown rice", "Vegetables"],
        snack: ["Nuts", "Greek yogurt"],
        dinner: ["Salmon", "Salad", "Sweet potato"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports daily structure and recovery.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken", "Vegetables", "Small rice portion"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Salad", "Soup"],
        hydrationGoal: "2.1 liters water throughout the day",
        insight:
          "This meal plan supports better focus and lighter late-day eating.",
      },
    },
  },
  aina: {
    "Weight Loss": {
      Balanced: {
        breakfast: ["Overnight oats", "Greek yogurt", "Green tea"],
        lunch: ["Chicken salad bowl", "Brown rice", "Vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu or salmon", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports lighter eating and active daily recovery.",
      },
      "High Protein": {
        breakfast: ["Greek yogurt", "Eggs", "Fruit"],
        lunch: ["Chicken breast", "Quinoa", "Vegetables"],
        snack: ["Protein yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports active recovery and stable energy.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oats", "Tea"],
        lunch: ["Chicken salad", "Small rice portion"],
        snack: ["Nuts", "Greek yogurt"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports better sleep and a lighter evening profile.",
      },
    },
    Energy: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and active recovery.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Quinoa", "Vegetables"],
        snack: ["Protein yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports stable energy and recovery-focused wellness habits.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken salad", "Small brown rice"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports steady energy and lighter evenings.",
      },
    },
    Recovery: {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "High Protein": {
        breakfast: ["Greek yogurt", "Eggs", "Fruit"],
        lunch: ["Chicken breast", "Quinoa", "Vegetables"],
        snack: ["Protein yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports stable energy levels and muscle recovery.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Tea", "Unsweetened oats"],
        lunch: ["Chicken salad", "Small rice portion"],
        snack: ["Nuts", "Greek yogurt"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports recovery with a sleep-friendly evening structure.",
      },
    },
    "General Wellness": {
      Balanced: {
        breakfast: ["Oatmeal with banana", "2 boiled eggs", "Green tea"],
        lunch: ["Chicken breast", "Brown rice", "Steamed vegetables"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Salmon or tofu", "Sweet potato", "Mixed salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports balanced energy and active wellness habits.",
      },
      "High Protein": {
        breakfast: ["Eggs", "Greek yogurt", "Fruit"],
        lunch: ["Chicken breast", "Quinoa", "Vegetables"],
        snack: ["Protein yogurt", "Almonds"],
        dinner: ["Salmon", "Sweet potato", "Salad"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports balanced recovery and energy.",
      },
      "Low Sugar": {
        breakfast: ["Eggs", "Unsweetened oatmeal", "Tea"],
        lunch: ["Chicken salad", "Small rice portion"],
        snack: ["Greek yogurt", "Almonds"],
        dinner: ["Tofu", "Vegetables", "Soup"],
        hydrationGoal: "2.3 liters water throughout the day",
        insight:
          "This meal plan supports lighter evenings and steady daily wellness.",
      },
    },
  },
};

const workoutPlans: Record<DemoProfile["id"], Record<WorkoutFocus, WorkoutPlanOutput>> = {
  jason: {
    Beginner: {
      title: "15-Minute Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Light walking in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for users with long standing hours and muscle fatigue.",
    },
    "Office Recovery": {
      title: "12-Minute Desk Reset Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Chair squats — 2 min"],
      circulationBoost: ["Marching in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 2 min"],
      insight:
        "This workout is optimized for users with long sitting hours and low daily mobility.",
    },
    "Fatigue Relief": {
      title: "15-Minute Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Light walking in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for users with long standing hours and muscle fatigue.",
    },
    "Home Workout": {
      title: "16-Minute Home Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 3 min"],
      circulationBoost: ["Marching in place — 3 min"],
      flexibility: ["Hamstring stretch — 3 min"],
      cooldown: ["Deep breathing — 4 min"],
      insight:
        "This workout is optimized for users who want simple recovery at home.",
    },
  },
  sarah: {
    Beginner: {
      title: "14-Minute Office Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Chair squats — 2 min"],
      circulationBoost: ["Walking in place — 3 min"],
      flexibility: ["Lower-back stretch — 2 min"],
      cooldown: ["Deep breathing — 4 min"],
      insight:
        "This workout is optimized for office workers with lower back discomfort.",
    },
    "Office Recovery": {
      title: "14-Minute Office Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Chair squats — 2 min"],
      circulationBoost: ["Walking in place — 3 min"],
      flexibility: ["Lower-back stretch — 2 min"],
      cooldown: ["Deep breathing — 4 min"],
      insight:
        "This workout is optimized for office workers with lower back discomfort.",
    },
    "Fatigue Relief": {
      title: "13-Minute Energy Reset Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Walking in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for users with desk fatigue and low energy.",
    },
    "Home Workout": {
      title: "16-Minute Home Recovery Workout",
      warmup: ["Neck stretch — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 3 min"],
      circulationBoost: ["Walking in place — 3 min"],
      flexibility: ["Lower-back stretch — 3 min"],
      cooldown: ["Deep breathing — 4 min"],
      insight:
        "This workout is optimized for gentle home recovery and posture support.",
    },
  },
  aina: {
    Beginner: {
      title: "15-Minute Light Cardio Flow",
      warmup: ["Breathing reset — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Light cardio march — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for active users who want lighter recovery support.",
    },
    "Office Recovery": {
      title: "13-Minute Desk Reset Workout",
      warmup: ["Breathing reset — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Walking in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for users who need a simple posture and mobility reset.",
    },
    "Fatigue Relief": {
      title: "15-Minute Recovery Workout",
      warmup: ["Breathing reset — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Light walking in place — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for light fatigue relief and recovery.",
    },
    "Home Workout": {
      title: "15-Minute Home Wellness Flow",
      warmup: ["Breathing reset — 1 min"],
      mobility: ["Shoulder rolls — 2 min"],
      lowerBody: ["Bodyweight squats — 2 min"],
      circulationBoost: ["Light cardio march — 3 min"],
      flexibility: ["Hamstring stretch — 2 min"],
      cooldown: ["Deep breathing — 3 min"],
      insight:
        "This workout is optimized for light cardio and home wellness support.",
    },
  },
};

const productMatches: Record<DemoProfile["id"], Record<Symptom, ProductMatchOutput>> = {
  jason: {
    "Tired Legs": {
      selectedSymptoms: [
        "Tired Legs",
        "Lower Back Discomfort",
        "Long Standing Hours",
      ],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports daily comfort for people who stand long hours.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and promotes circulation comfort.",
        },
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides additional lower-back support during long work shifts.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support daily recovery and circulation comfort.",
    },
    "Lower Back Discomfort": {
      selectedSymptoms: [
        "Tired Legs",
        "Lower Back Discomfort",
        "Long Standing Hours",
      ],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides additional lower-back support during long work shifts.",
        },
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports daily comfort for people who stand long hours.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and promotes circulation comfort.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support daily recovery and lower-back comfort.",
    },
    "Poor Circulation": {
      selectedSymptoms: [
        "Tired Legs",
        "Poor Circulation",
        "Long Standing Hours",
      ],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports circulation-focused daily wear and post-work comfort.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and promotes circulation comfort.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support circulation comfort and daily recovery.",
    },
    "Long Standing Hours": {
      selectedSymptoms: [
        "Tired Legs",
        "Lower Back Discomfort",
        "Long Standing Hours",
      ],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports daily comfort for people who stand long hours.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and promotes circulation comfort.",
        },
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides additional lower-back support during long work shifts.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support daily recovery and circulation comfort.",
    },
    "Long Hours Sitting": {
      selectedSymptoms: [
        "Lower Back Discomfort",
        "Long Hours Sitting",
      ],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Supports lower-back comfort during extended desk time.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds light posture-friendly support for everyday wear.",
        },
      ],
      explanation:
        "Based on your selected needs, this combination may support posture comfort and daily recovery.",
    },
    "Muscle Recovery": {
      selectedSymptoms: ["Muscle Recovery", "Tired Legs"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports recovery-focused comfort after long work hours.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Adds foot and lower-leg comfort after standing-heavy days.",
        },
      ],
      explanation:
        "Based on your selected needs, this combination may support muscle recovery and daily comfort.",
    },
  },
  sarah: {
    "Tired Legs": {
      selectedSymptoms: ["Tired Legs", "Office Recovery"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports daily comfort when sitting all day still creates leg fatigue.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Adds lower-leg comfort and circulation-friendly support.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support desk-day recovery and comfort.",
    },
    "Lower Back Discomfort": {
      selectedSymptoms: ["Lower Back Discomfort", "Office Worker"],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides lower-back support during long desk sessions.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds light daily support for office wear and posture comfort.",
        },
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports after-work recovery and lower-body comfort.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support lower-back comfort and daily recovery.",
    },
    "Poor Circulation": {
      selectedSymptoms: ["Poor Circulation", "Office Worker"],
      items: [
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and circulation discomfort.",
        },
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports circulation-focused comfort after work.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support circulation comfort and easier recovery.",
    },
    "Long Standing Hours": {
      selectedSymptoms: ["Tired Legs", "Long Standing Hours"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports comfort during long standing hours.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue during longer shifts.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support standing-day comfort.",
    },
    "Long Hours Sitting": {
      selectedSymptoms: ["Lower Back Discomfort", "Long Hours Sitting"],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides lower-back support during desk work.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds posture-friendly comfort for daily wear.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support posture and lower-back comfort.",
    },
    "Muscle Recovery": {
      selectedSymptoms: ["Muscle Recovery", "General Wellness"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports recovery-focused comfort after daily work.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds comfortable daily support for active routines.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support lighter recovery and comfort.",
    },
  },
  aina: {
    "Tired Legs": {
      selectedSymptoms: ["Tired Legs", "Active Lifestyle"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports active recovery after movement-heavy days.",
        },
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce lower-leg fatigue and daily foot discomfort.",
        },
      ],
      explanation:
        "Based on your lifestyle profile, these products may support light recovery and comfort.",
    },
    "Lower Back Discomfort": {
      selectedSymptoms: ["Lower Back Discomfort", "Active Lifestyle"],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides added lower-back comfort during work and movement.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds a more comfortable support feel for everyday wear.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support lower-back comfort and light recovery.",
    },
    "Poor Circulation": {
      selectedSymptoms: ["Poor Circulation", "Active Lifestyle"],
      items: [
        {
          name: "UFIT Infra Socks",
          description:
            "Supports lower-leg and foot comfort throughout the day.",
        },
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports circulation-focused daily wear and recovery.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support circulation comfort and active recovery.",
    },
    "Long Standing Hours": {
      selectedSymptoms: ["Tired Legs", "Long Standing Hours"],
      items: [
        {
          name: "UFIT Infra Socks",
          description:
            "Helps reduce foot fatigue and supports standing comfort.",
        },
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports post-activity and post-work recovery comfort.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support better standing-day recovery.",
    },
    "Long Hours Sitting": {
      selectedSymptoms: ["Long Hours Sitting", "Lower Back Discomfort"],
      items: [
        {
          name: "UFIT Wellness Waist Belt",
          description:
            "Provides lower-back support during longer seated work.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Adds comfortable posture-friendly daily wear support.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support desk-time comfort and posture recovery.",
    },
    "Muscle Recovery": {
      selectedSymptoms: ["Muscle Recovery", "Active Lifestyle"],
      items: [
        {
          name: "UFIT Recovery Legging",
          description:
            "Supports recovery-focused comfort after light cardio or movement.",
        },
        {
          name: "UFIT Daily Support Tee",
          description:
            "Supports everyday recovery and routine comfort.",
        },
      ],
      explanation:
        "Based on your selected needs, these products may support active recovery and daily comfort.",
    },
  },
};

const weeklyInsights: Record<DemoProfile["id"], WeeklyInsightOutput> = {
  jason: {
    stats: [
      { label: "Sleep", value: "6.4 hrs average", progress: 64 },
      { label: "Water Intake", value: "1.6L / day", progress: 53 },
      { label: "Steps", value: "5200 / day", progress: 59 },
      { label: "Mobility", value: "3 days / week", progress: 48 },
    ],
    sections: [
      {
        title: "Energy Pattern",
        body: "Energy levels drop after 4 PM, likely due to fatigue from prolonged standing.",
      },
      {
        title: "Sleep Quality",
        body: "Average sleep duration is below your optimal target.",
      },
      {
        title: "Hydration",
        body: "Daily water intake is slightly below recommended levels.",
      },
      {
        title: "Activity",
        body: "Light walking habits improved your evening recovery.",
      },
    ],
    recommendation:
      "Next week, focus on increasing hydration, adding one extra mobility session, and maintaining evening recovery routines.",
  },
  sarah: {
    stats: [
      { label: "Sleep", value: "6.8 hrs average", progress: 69 },
      { label: "Water Intake", value: "1.9L / day", progress: 72 },
      { label: "Steps", value: "6100 / day", progress: 66 },
      { label: "Mobility", value: "4 days / week", progress: 61 },
    ],
    sections: [
      {
        title: "Energy Pattern",
        body: "Energy is more stable on days with post-lunch walking.",
      },
      {
        title: "Sleep Quality",
        body: "Sleep is close to target but still inconsistent across weekdays.",
      },
      {
        title: "Hydration",
        body: "Hydration is improving, but afternoon consistency can be better.",
      },
      {
        title: "Activity",
        body: "Short mobility sessions are helping lower-back comfort.",
      },
    ],
    recommendation:
      "Next week, focus on keeping post-lunch walking consistent and adding one more desk recovery session.",
  },
  aina: {
    stats: [
      { label: "Sleep", value: "6.9 hrs average", progress: 71 },
      { label: "Water Intake", value: "2.0L / day", progress: 79 },
      { label: "Steps", value: "7400 / day", progress: 78 },
      { label: "Mobility", value: "5 days / week", progress: 73 },
    ],
    sections: [
      {
        title: "Energy Pattern",
        body: "Your energy stays more stable on days with light cardio.",
      },
      {
        title: "Sleep Quality",
        body: "Sleep quality improves when your night routine starts earlier.",
      },
      {
        title: "Hydration",
        body: "Hydration is strong and supports your overall recovery pattern.",
      },
      {
        title: "Activity",
        body: "Mobility sessions are helping reduce stiffness and improve recovery.",
      },
    ],
    recommendation:
      "Next week, focus on keeping your sleep hygiene routine consistent and preserving evening mobility sessions.",
  },
};

export function getDailyPlan(profileId: DemoProfile["id"], focus: DailyFocus) {
  return dailyPlans[profileId][focus];
}

export function getMealPlan(
  profileId: DemoProfile["id"],
  goal: MealGoal,
  diet: DietType,
) {
  return mealPlans[profileId][goal][diet];
}

export function getWorkoutPlan(
  profileId: DemoProfile["id"],
  focus: WorkoutFocus,
) {
  return workoutPlans[profileId][focus];
}

export function getProductMatch(
  profileId: DemoProfile["id"],
  symptom: Symptom,
) {
  return productMatches[profileId][symptom];
}

export function getWeeklyInsight(profileId: DemoProfile["id"]) {
  return weeklyInsights[profileId];
}
