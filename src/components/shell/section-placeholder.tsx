"use client";

// Depends on cn() from @/lib/utils and the design tokens in globals.css.

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionPlaceholder({
  icon: Icon,
  title,
  description,
  note,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-0 flex-1 flex-col overflow-y-auto", className)}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6">
        <div className="pb-6 pt-6">
          <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.025em] text-balance">
            {title}
          </h1>
          <p className="mt-1.5 text-[13px] text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-1 items-center justify-center pb-16">
          <div className="flex max-w-[420px] flex-col items-center rounded-(--r-surface) bg-(--surface-raised) px-8 py-10 text-center shadow-(--lift-md) inset-ring-1 inset-ring-(--ink)/[0.09]">
            <span className="flex size-11 items-center justify-center rounded-(--r-float) bg-violet-500/[0.12] text-violet-300 inset-ring-1 inset-ring-violet-400/25">
              <Icon className="size-5" />
            </span>
            <span className="mt-4 block text-[15px] font-semibold tracking-[-0.01em]">
              Not designed yet
            </span>
            <span className="mt-1.5 block text-[13px] leading-relaxed text-muted-foreground text-pretty">
              {note ??
                "This section exists in the live product and has a home in this shell. Its screens are the next thing to design."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
