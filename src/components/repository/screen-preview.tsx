"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { LiveScreen } from "@/components/public/live-screen";
import { screenThemeVars, type MomentId } from "@/lib/screen-theme";
import { cn } from "@/lib/utils";
import type { Campaign, CampaignState, MediaAsset, Session } from "@/lib/types";

const DESIGN_WIDTH = 1280;
const ASPECT = 16 / 9;

export function ScreenPreview({
  campaign,
  posts,
  mediaAssets,
  state,
  momentId,
  className,
}: {
  campaign: Campaign;
  posts: Session[];
  mediaAssets: MediaAsset[];
  state: CampaignState;
  momentId?: MomentId;
  className?: string;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const innerHeight = DESIGN_WIDTH / ASPECT;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-(--r-surface) bg-(--surface-raised) shadow-(--lift-lg) inset-ring-1 inset-ring-(--ink)/[0.08]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-(--ink)/[0.06] bg-(--surface-panel) px-3 py-2">
        <span aria-hidden className="flex items-center gap-1">
          <span className="size-2 rounded-(--r-round) bg-(--ink)/[0.14]" />
          <span className="size-2 rounded-(--r-round) bg-(--ink)/[0.14]" />
          <span className="size-2 rounded-(--r-round) bg-(--ink)/[0.14]" />
        </span>
        <span className="ml-1.5 min-w-0 flex-1 truncate rounded-(--r-pill) bg-(--ink)/[0.05] px-2.5 py-0.5 text-[10.5px] text-muted-foreground/70 flex justify-between items-center">
          <span>
            {origin.replace(/^https?:\/\//, "")}/c/
            <span className="text-muted-foreground/45">{campaign.id}</span>
          </span>
          {state !== "paused" && (
            <button
              onClick={() => setPlaying(!playing)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {playing ? <Pause className="size-3" /> : <Play className="size-3" />}
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </span>
      </div>

      {state === "paused" ? (
        <div
          className="flex flex-col items-center justify-center gap-1.5 bg-black px-6 py-16 text-center text-white h-[400px]"
          style={{ height: innerHeight * scale }}
        >
          <h1 className="text-[17px] font-semibold">This campaign is paused</h1>
          <p className="max-w-[42ch] text-pretty text-[13px] text-white/60">
            {campaign.name} is taking a short break. Resume it to bring the screen back.
          </p>
        </div>
      ) : (
        <div ref={frame} className="relative w-full overflow-hidden" style={{ aspectRatio: ASPECT }}>
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: DESIGN_WIDTH,
              height: innerHeight,
              transform: `scale(${scale})`,
            }}
          >
            <LiveScreen
              campaign={campaign}
              posts={posts}
              mediaAssets={mediaAssets}
              momentId={momentId}
              running={playing}
              isPreview={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
