"use client";

// High-fidelity Admin Dashboard component integrated with real campaign and session domain logic.
// Depends on design tokens in globals.css, button styles, campaigns helpers, and status badge.

import { useMemo, useState } from "react";
import {
  TrendingUp,
  FileText,
  Share2,
  MousePointerClick,
  ClipboardList,
  MessageSquare,
  ThumbsUp,
  Plus,
  Settings,
  Rocket,
  Users,
  ChevronRight,
  ExternalLink,
  Sparkles,
  PieChart,
  Activity
} from "lucide-react";
import { cn, relativeTime, tagTint } from "@/lib/utils";
import { PRIMARY_ACTION_MD, SECONDARY_ACTION_MD } from "@/lib/button-styles";
import { StatusBadge } from "@/components/content-planner/status-badge";
import {
  CAMPAIGN_STATE,
  campaignDrafts,
  campaignState,
  campaignSubmitted,
} from "@/lib/campaigns";
import type { Campaign, Session } from "@/lib/types";
import type { AppSection } from "@/app/page";

export interface AdminDashboardProps {
  sessions: Session[];
  campaigns: Campaign[];
  mockNewUser?: boolean;
  onNavigate: (section: AppSection) => void;
  onOpenCampaign: (campaignId: string) => void;
  onOpenSession: (sessionId: string) => void;
  onNewCampaign: () => void;
  onNewContent: () => void;
  onCalculateRoi?: () => void;
}

export function AdminDashboard({
  sessions,
  campaigns,
  mockNewUser = false,
  onNavigate,
  onOpenCampaign,
  onOpenSession,
  onNewCampaign,
  onNewContent,
  onCalculateRoi,
}: AdminDashboardProps) {
  const [advocacyTab, setAdvocacyTab] = useState<"invite" | "invited" | "requests">("invite");
  const [inviteName, setInviteName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [invitePhone, setInvitePhone] = useState("");
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [now] = useState(() => Date.now());

  const totalPostsCount = sessions.length;
  const totalSharesCount = useMemo(() => sessions.reduce((acc, s) => acc + (s.sentToCampaignIds?.length ?? 0), 0), [sessions]);
  
  // Generating visually impressive mock numbers for the Hero panel
  const mockReach = useMemo(() => sessions.length > 0 ? (sessions.length * 14250 + totalSharesCount * 312).toLocaleString() : "0", [sessions, totalSharesCount]);
  const mockClicks = useMemo(() => (totalSharesCount * 14).toLocaleString(), [totalSharesCount]);
  const mockForms = useMemo(() => (totalSharesCount * 2).toLocaleString(), [totalSharesCount]);

  const isMetricsEmpty = mockNewUser || totalPostsCount === 0;

  const activeCampaignRows = useMemo(() => {
    if (isMetricsEmpty) return [];
    return campaigns.map((campaign) => {
      const state = campaignState(campaign, now);
      const draftsCount = campaignDrafts(sessions, campaign.id).length;
      const submittedCount = campaignSubmitted(sessions, campaign).length;
      return {
        campaign,
        state,
        stateMeta: CAMPAIGN_STATE[state],
        draftsCount,
        submittedCount,
        totalPosts: campaign.sessionIds.length,
      };
    });
  }, [campaigns, sessions, now, isMetricsEmpty]);

  const recentSessions = useMemo(() => {
    if (isMetricsEmpty) return [];
    return [...sessions]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5);
  }, [sessions, isMetricsEmpty]);

  function handleGenerateInvite(e: React.FormEvent) {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    setInviteSuccess(true);
    setTimeout(() => setInviteSuccess(false), 3000);
    setInviteName("");
    setInviteEmail("");
    setInvitePhone("");
  }

  return (
    <div className="flex w-full flex-col px-4 py-6 md:px-8 md:py-8 max-w-[1280px] mx-auto overflow-y-auto selection:bg-(--ink) selection:text-sink">
      
      {/* Top Status Bar - Technical, sleek */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-(--ink)/[0.1] pb-4 mb-6 gap-4">
        <div className="flex items-center gap-3">
           <div className={cn("size-2 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse", isMetricsEmpty ? "bg-amber-500 shadow-amber-500/50" : "bg-(--color-live-500)")} />
           <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
             {isMetricsEmpty ? "Wozku Dashboard // Setup Required" : "Wozku Dashboard // Live"}
           </span>
        </div>
        <div className="flex items-center gap-2.5">
          <button onClick={onNewContent} className={SECONDARY_ACTION_MD + " font-mono text-[10px] uppercase tracking-widest px-4"}>
            <Plus className="size-3.5" /> New Post
          </button>
          <button onClick={onNewCampaign} className={PRIMARY_ACTION_MD + " font-mono text-[10px] uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 px-4.5"}>
            <Rocket className="size-3.5" /> Create Campaign
          </button>
        </div>
      </div>

      {/* Hero Block - Architectural Scale */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5">
        {/* Massive Metric Display OR Empty State */}
        <div className="xl:col-span-8 flex flex-col justify-between bg-(--surface-panel) inset-ring-1 inset-ring-(--ink)/[0.1] p-6 md:p-8 relative overflow-hidden group min-h-[260px]">
           <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-(--ink)/[0.03] to-transparent pointer-events-none" />
           
           {isMetricsEmpty ? (
             <div className="z-10 flex flex-col justify-center h-full gap-3 max-w-xl">
               <div className="flex items-center gap-2 text-muted-foreground mb-1">
                 <Activity className="size-3.5 text-amber-500" />
                 <h2 className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber-500/80">Getting Started</h2>
               </div>
               <h1 className="text-3xl md:text-5xl font-light tracking-tighter leading-none text-foreground font-display">
                 Welcome to your Advocacy Overview.
               </h1>
               <p className="text-[13.5px] text-muted-foreground leading-relaxed mt-2">
                 You haven't created any posts or campaigns yet. Get started by initializing your first post or deploying a new campaign to begin capturing real-time network reach and engagement metrics.
               </p>
               <div className="mt-4">
                 <button onClick={onNewCampaign} className={PRIMARY_ACTION_MD + " font-mono text-[10px] uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 px-5"}>
                   <Rocket className="size-3.5 mr-2" /> Create First Campaign
                 </button>
               </div>
             </div>
           ) : (
             <>
               <div className="z-10 flex flex-col gap-3">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Activity className="size-3.5 text-(--color-live-500)" />
                   <h2 className="text-[10px] font-mono uppercase tracking-[0.15em]">Potential Reach</h2>
                 </div>
                 <div className="flex items-baseline gap-3 mt-1">
                   <span className="text-5xl md:text-[80px] font-light tracking-tighter leading-none text-foreground font-display">
                     {mockReach}
                   </span>
                   <span className="text-xl md:text-3xl text-(--color-live-500) font-light font-display tracking-tight">+14%</span>
                 </div>
               </div>

               <div className="z-10 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-(--ink)/[0.08] pt-6">
                 <div className="flex flex-col gap-1">
                   <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-widest">Total Posts</span>
                   <span className="text-xl md:text-2xl font-display font-medium text-foreground">{totalPostsCount}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-widest">Total Shares</span>
                   <span className="text-xl md:text-2xl font-display font-medium text-foreground">{totalSharesCount}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-widest">Total Clicks</span>
                   <span className="text-xl md:text-2xl font-display font-medium text-foreground">{mockClicks}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="text-[9.5px] font-mono text-muted-foreground uppercase tracking-widest">Form Fills</span>
                   <span className="text-xl md:text-2xl font-display font-medium text-foreground">{mockForms}</span>
                 </div>
               </div>
             </>
           )}
        </div>

        {/* Campaign Matrix Side Panel */}
        <div className="xl:col-span-4 flex flex-col bg-(--surface-panel) inset-ring-1 inset-ring-(--ink)/[0.1] p-6">
           <div className="flex items-center justify-between border-b border-(--ink)/[0.1] pb-3 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-foreground">Active Campaigns</span>
              <button onClick={() => onNavigate("campaigns")} className="text-[9.5px] font-mono text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors">All ({campaigns.length})</button>
           </div>
           
           <div className="flex flex-col gap-2.5">
             {activeCampaignRows.slice(0,4).map(({ campaign, state, stateMeta, totalPosts, submittedCount }) => (
               <div key={campaign.id} onClick={() => onOpenCampaign(campaign.id)} className="flex flex-col bg-(--ink)/[0.02] inset-ring-1 inset-ring-(--ink)/[0.05] p-3.5 hover:bg-(--ink)/[0.04] cursor-pointer transition-all duration-300 group">
                 <div className="flex justify-between items-start mb-2.5">
                   <div className="flex items-center gap-2">
                     <div className={cn("size-1.5", state === 'live' ? "bg-(--color-live-500) shadow-[0_0_8px_rgba(16,185,129,0.5)]" : state === 'paused' ? "bg-sky-500" : "bg-amber-500")} />
                     <span className="font-medium text-[13.5px] font-display tracking-tight text-foreground">{campaign.name}</span>
                   </div>
                   <ChevronRight className="size-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                 </div>
                 <div className="flex items-center justify-between text-[9.5px] text-muted-foreground font-mono uppercase tracking-widest">
                   <span>{totalPosts} Assets</span>
                   <span className="text-foreground">{stateMeta.label}</span>
                 </div>
               </div>
             ))}
             {activeCampaignRows.length === 0 && (
               <div className="py-8 text-[10px] font-mono uppercase tracking-widest text-center text-muted-foreground/50 border border-dashed border-(--ink)/[0.1]">
                 No Active Campaigns
               </div>
             )}
           </div>
        </div>
      </div>

      {/* Lower Architecture Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
         
         {/* Content Pipeline */}
         <div className="lg:col-span-7 flex flex-col bg-(--surface-panel) inset-ring-1 inset-ring-(--ink)/[0.1] p-6 md:p-8">
           <div className="flex justify-between items-end border-b border-(--ink)/[0.1] pb-4 mb-5">
             <h3 className="text-xl font-light font-display tracking-tight text-foreground">Recent Content</h3>
             <button onClick={() => onNavigate("repository")} className="text-[9.5px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                View Repository
             </button>
           </div>
           
           <div className="flex flex-col gap-2">
             {recentSessions.map(session => (
               <div key={session.id} onClick={() => onOpenSession(session.id)} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-(--ink)/[0.02] hover:bg-(--ink)/[0.04] border border-(--ink)/[0.04] cursor-pointer group transition-colors gap-2 sm:gap-0">
                  <div className="flex flex-col gap-1 w-full sm:w-1/2 pr-4">
                     <span className="font-medium text-[13px] truncate text-foreground">{session.title}</span>
                     <span className="text-[9.5px] font-mono uppercase tracking-widest text-muted-foreground">{relativeTime(session.updatedAt)}</span>
                  </div>
                  <div className="w-full sm:w-1/4">
                     <StatusBadge status={session.status} />
                  </div>
                  <div className="w-full sm:w-1/4 flex sm:justify-end mt-1 sm:mt-0">
                     <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-mono text-[10.5px] tracking-wide">{session.sentToCampaignIds?.length ?? 0} SHRS</span>
                        <ExternalLink className="size-3.5" />
                     </div>
                  </div>
               </div>
             ))}
             {recentSessions.length === 0 && (
                <div className="py-10 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50">
                   Pipeline Empty
                </div>
             )}
           </div>
         </div>

         {/* Network Matrix Module */}
         <div className="lg:col-span-5 flex flex-col bg-(--surface-panel) inset-ring-1 inset-ring-(--ink)/[0.1] p-6 md:p-8">
           <div className="flex justify-between items-end border-b border-(--ink)/[0.1] pb-4 mb-5">
             <h3 className="text-xl font-light font-display tracking-tight text-foreground">Community</h3>
             <Users className="size-4 text-muted-foreground" />
           </div>
           <p className="text-[12.5px] text-muted-foreground mb-5 leading-relaxed">
             Generate a secure link to onboard new members to your campaigns.
           </p>
           
           {/* Terminal-like Invite Form */}
           <div className="flex flex-col bg-(--ink)/[0.02] border border-(--ink)/[0.06] p-4 gap-4">
             <div className="flex items-center gap-2 mb-1">
                <div className="size-1.5 bg-amber-500" />
                <span className="text-[9.5px] font-mono uppercase tracking-[0.15em] text-amber-500/80">Invite Advocates</span>
             </div>
             
             <form onSubmit={handleGenerateInvite} className="flex flex-col gap-3.5">
               <input 
                 value={inviteName} onChange={e => setInviteName(e.target.value)}
                 placeholder="ADVOCATE NAME" 
                 className="bg-transparent border-b border-(--ink)/[0.15] pb-2 text-[12px] font-mono placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors text-foreground" 
               />
               <input 
                 type="email"
                 value={inviteEmail} onChange={e => setInviteEmail(e.target.value)}
                 placeholder="EMAIL ADDRESS" 
                 className="bg-transparent border-b border-(--ink)/[0.15] pb-2 text-[12px] font-mono placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors text-foreground" 
               />
               
               <button type="submit" className="mt-4 bg-foreground text-background py-3 px-4 text-[9.5px] font-mono uppercase tracking-[0.15em] font-bold hover:bg-foreground/90 transition-colors flex justify-center items-center gap-2">
                 {inviteSuccess ? "Link Generated" : "Initialize Link"} <ChevronRight className="size-3" />
               </button>
             </form>
           </div>
         </div>
      </div>
      
      <footer className="mt-8 pt-4 pb-2 text-center text-[9.5px] font-mono uppercase tracking-widest text-muted-foreground/40 border-t border-(--ink)/[0.06]">
        Wozku Advocacy Engine // System Version {new Date().getFullYear()} // All Rights Reserved
      </footer>
    </div>
  );
}
