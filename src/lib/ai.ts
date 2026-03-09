import { featuredProducts } from "@/lib/mock-data";

export function buildDemoCoachResponse(prompt: string) {
  const lowerPrompt = prompt.toLowerCase();

  const productMap = {
    fatigue: [
      {
        name: featuredProducts[0].name,
        reason:
          "适合久站后的日常恢复节奏，也更容易切入体感改善这类需求。",
      },
      {
        name: featuredProducts[1].name,
        reason:
          "如果问题同时包含腿部疲劳和循环舒适感，这类搭配会更顺。",
      },
    ],
    circulation: [
      {
        name: featuredProducts[1].name,
        reason:
          "更适合循环支持、久坐久站后的舒适管理和身体状态维持。",
      },
      {
        name: featuredProducts[2].name,
        reason:
          "可与日常恢复习惯搭配，适合腿部疲劳和移动后的放松场景。",
      },
    ],
    back: [
      {
        name: featuredProducts[2].name,
        reason:
          "当身体僵硬或腰部不适出现时，更适合从恢复型产品切入。",
      },
      {
        name: featuredProducts[0].name,
        reason:
          "可以和姿势调整、活动频率和补水节奏一起组成更完整的恢复方案。",
      },
    ],
    sleep: [
      {
        name: featuredProducts[0].name,
        reason:
          "适合放进夜间恢复节奏里，帮助把休息感做得更完整。",
      },
      {
        name: featuredProducts[2].name,
        reason:
          "如果晚上还伴随身体紧绷或疲劳累积，这类产品会更适合搭配。",
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
  if (
    lowerPrompt.includes("circulation") ||
    lowerPrompt.includes("legs") ||
    lowerPrompt.includes("standing") ||
    lowerPrompt.includes("feet")
  ) {
    key = "circulation";
  }

  return {
    summary:
      key === "back"
        ? "你现在更像是日常姿势和活动节奏带来的腰部紧张感，需要先把恢复和支撑做顺。"
        : key === "sleep"
          ? "你的重点更偏向夜间恢复质量和睡前健康节奏，而不是单一产品问题。"
          : key === "circulation"
            ? "现在最值得先处理的是日间舒适感、活动状态和循环支持。"
            : "这更像是久站或日常疲劳累积后的恢复问题，先从体感改善切入会更自然。",
    advice:
      "先从简单的非医疗型健康习惯开始：规律补水、每 3 到 5 分钟做小幅活动、改善姿势支撑，并建立稳定的晚间恢复节奏。这只是健康建议，不是医疗诊断。",
    products: productMap[key],
    cta: "加入 UFIT 会员后，可继续解锁 AI 指导、产品组合和推荐奖励体验。",
  };
}
