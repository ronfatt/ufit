"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthPanel() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="glass-card rounded-[2rem] p-8 xl:p-10">
      <TabsList>
        {(["login", "register"] as const).map((item) => {
          const active = item === mode;
          return (
            <TabsTrigger
              key={item}
              onClick={() => setMode(item)}
              active={active}
            >
              {item === "login" ? "登录" : "注册"}
            </TabsTrigger>
          );
        })}
      </TabsList>

      <form className="mt-8 space-y-4">
        {mode === "register" && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/72">
              姓名
            </span>
            <Input
              type="text"
              placeholder="Sarah Lim"
            />
          </label>
        )}
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/72">
            邮箱
          </span>
          <Input
            type="email"
            placeholder="you@ufit.ai"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/72">
            密码
          </span>
          <Input
            type="password"
            placeholder="••••••••"
          />
        </label>
        {mode === "register" && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/72">
              推荐码
            </span>
            <Input
              type="text"
              placeholder="选填"
            />
          </label>
        )}
        <Button
          type="button"
          className="w-full"
        >
          {mode === "login" ? "进入仪表盘" : "创建会员账号"}
        </Button>
      </form>

      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-sm leading-6 text-white/72">
        进入 UFIT AI 的健康会员体验。当前支持演示模式，后续可直接接入真实认证。
      </div>
    </div>
  );
}
