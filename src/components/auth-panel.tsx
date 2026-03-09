"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthPanel() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(41,75,119,0.10)] backdrop-blur xl:p-10">
      <TabsList>
        {(["login", "register"] as const).map((item) => {
          const active = item === mode;
          return (
            <TabsTrigger
              key={item}
              onClick={() => setMode(item)}
              active={active}
            >
              {item === "login" ? "Login" : "Register"}
            </TabsTrigger>
          );
        })}
      </TabsList>

      <form className="mt-8 space-y-4">
        {mode === "register" && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </span>
            <Input
              type="text"
              placeholder="Sarah Lim"
            />
          </label>
        )}
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </span>
          <Input
            type="email"
            placeholder="you@ufit.ai"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </span>
          <Input
            type="password"
            placeholder="••••••••"
          />
        </label>
        {mode === "register" && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Referral Code
            </span>
            <Input
              type="text"
              placeholder="Optional"
            />
          </label>
        )}
        <Button
          type="button"
          className="w-full"
        >
          {mode === "login" ? "Continue to Dashboard" : "Create Membership Account"}
        </Button>
      </form>

      <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5 text-sm leading-6 text-sky-900">
        Join the AI-powered wellness membership experience.
      </div>
    </div>
  );
}
