import { featuredProducts } from "@/lib/mock-data";

export function buildDemoCoachResponse(prompt: string) {
  const lowerPrompt = prompt.toLowerCase();

  const productMap = {
    fatigue: [
      {
        name: featuredProducts[0].name,
        reason:
          "Supports daily energy rhythm and recovery after long hours on your feet.",
      },
      {
        name: featuredProducts[1].name,
        reason:
          "Useful when tired legs and circulation comfort are part of the issue.",
      },
    ],
    circulation: [
      {
        name: featuredProducts[1].name,
        reason:
          "Positioned around circulation support and all-day comfort during sedentary or standing routines.",
      },
      {
        name: featuredProducts[2].name,
        reason:
          "Pairs well with a recovery routine for mobility and body tension management.",
      },
    ],
    back: [
      {
        name: featuredProducts[2].name,
        reason:
          "A good fit for a recovery-focused routine when stiffness or lower back discomfort shows up.",
      },
      {
        name: featuredProducts[0].name,
        reason:
          "Adds overall recovery support alongside posture, mobility, and hydration habits.",
      },
    ],
    sleep: [
      {
        name: featuredProducts[0].name,
        reason:
          "Helps frame a more complete evening recovery routine around consistency and rest.",
      },
      {
        name: featuredProducts[2].name,
        reason:
          "Useful when the user also needs muscle relaxation and recovery after the day.",
      },
    ],
  };

  let key: keyof typeof productMap = "fatigue";
  if (lowerPrompt.includes("circulation")) key = "circulation";
  if (
    lowerPrompt.includes("back") ||
    lowerPrompt.includes("腰") ||
    lowerPrompt.includes("posture")
  ) {
    key = "back";
  }
  if (
    lowerPrompt.includes("sleep") ||
    lowerPrompt.includes("insomnia") ||
    lowerPrompt.includes("睡")
  ) {
    key = "sleep";
  }

  return {
    summary:
      key === "back"
        ? "It sounds like your routine may be creating tension in the lower back and core support area."
        : key === "sleep"
          ? "Your input points to recovery quality and evening wellness habits as the main focus."
          : key === "circulation"
            ? "The main opportunity here is improving comfort, movement, and circulation support during the day."
            : "This looks like a daily energy and recovery issue linked to long standing hours or physical fatigue.",
    advice:
      "Start with simple non-medical wellness steps: hydrate consistently, add 3 to 5 minute movement breaks, improve posture support, and build a repeatable recovery routine in the evening.",
    products: productMap[key],
    cta: "Join the UFIT membership to unlock guided routines, product bundles, and referral rewards.",
  };
}
