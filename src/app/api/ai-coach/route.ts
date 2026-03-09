import { NextRequest, NextResponse } from "next/server";
import { buildDemoCoachResponse } from "@/lib/ai";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { prompt?: string };
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return NextResponse.json(
      { error: "Prompt is required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(buildDemoCoachResponse(prompt));
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "You are UFIT AI, a wellness membership demo assistant. Give short lifestyle guidance, avoid diagnosis, and recommend one or two wellness products in a commercial but credible tone.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "ufit_ai_response",
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                summary: { type: "string" },
                advice: { type: "string" },
                products: {
                  type: "array",
                  items: {
                    type: "object",
                    additionalProperties: false,
                    properties: {
                      name: { type: "string" },
                      reason: { type: "string" },
                    },
                    required: ["name", "reason"],
                  },
                },
                cta: { type: "string" },
              },
              required: ["summary", "advice", "products", "cta"],
            },
          },
        },
      }),
    });

    if (!response.ok) {
      return NextResponse.json(buildDemoCoachResponse(prompt));
    }

    const result = (await response.json()) as {
      output_text?: string;
    };

    if (!result.output_text) {
      return NextResponse.json(buildDemoCoachResponse(prompt));
    }

    return NextResponse.json(JSON.parse(result.output_text));
  } catch {
    return NextResponse.json(buildDemoCoachResponse(prompt));
  }
}
