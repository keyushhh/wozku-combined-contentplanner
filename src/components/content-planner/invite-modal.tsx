"use client";

import { useState, useRef } from "react";
import {
  Check,
  Link as LinkIcon,
  Users,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/toast";
import { avatarTint, cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface InviteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contextName?: string;
  campaignId?: string;
}

// Mock data mapping to the screenshot
const people = [
  { id: "1", name: "Sam Dy", email: "sam@ui8.net", role: "edit" },
  { id: "2", name: "Ellie Joy", email: "ellie@ui8.net", role: "edit" },
  { id: "3", name: "Hellen", email: "helen@ui8.net", role: "owner" },
];

function DraggableRow({
  person,
  onDelete,
}: {
  person: typeof people[0];
  onDelete: () => void;
}) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only allow left click dragging
    if (e.button !== 0) return;
    
    setIsDragging(true);
    startX.current = e.clientX - currentX.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    
    let newOffset = e.clientX - startX.current;
    
    // Only allow dragging left, max -64px (width of delete button)
    if (newOffset > 0) newOffset = 0;
    if (newOffset < -64) newOffset = -64;
    
    currentX.current = newOffset;
    setOffset(newOffset);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap open if dragged more than halfway
    if (currentX.current < -32) {
      currentX.current = -64;
      setOffset(-64);
    } else {
      currentX.current = 0;
      setOffset(0);
    }
    
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  if (person.role === "owner") {
    return (
      <div className="flex items-center justify-between bg-(--surface-dialog) py-1.5 px-6">
        <div className="flex items-center gap-3.5">
          <Avatar className="size-10 rounded-none inset-ring-1 inset-ring-(--ink)/10 !rounded-none">
            <AvatarFallback className={cn("!rounded-none text-[13px] font-medium", avatarTint(person.name))}>
              {initials(person.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[14px] font-medium text-foreground">{person.name}</span>
            <span className="text-[13px] text-muted-foreground">{person.email}</span>
          </div>
        </div>
        
        <div className="flex items-center bg-(--surface-dialog)">
          <div className="flex items-center gap-2 pr-3">
            <span className="text-[14px] text-foreground">owner</span>
            <Check className="size-4 text-emerald-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        className={cn(
          "flex items-center justify-between bg-(--surface-dialog) py-1.5 px-6 relative z-10 touch-pan-y",
          !isDragging && "transition-transform duration-200 ease-out",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ transform: `translateX(${offset}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="flex items-center gap-3.5 pointer-events-none">
          <Avatar className="size-10 rounded-none inset-ring-1 inset-ring-(--ink)/10 !rounded-none">
            <AvatarFallback className={cn("!rounded-none text-[13px] font-medium", avatarTint(person.name))}>
              {initials(person.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[14px] font-medium text-foreground">{person.name}</span>
            <span className="text-[13px] text-muted-foreground">{person.email}</span>
          </div>
        </div>
        
        <div className="flex items-center bg-(--surface-dialog)">
          <div className="relative flex items-center pr-1" onPointerDown={(e) => e.stopPropagation()}>
            <Select defaultValue={person.role}>
              <SelectTrigger className="h-8 w-auto min-w-[100px] rounded-none border-0 bg-transparent pl-3 pr-2 text-[14px] text-foreground outline-none shadow-none focus-visible:ring-0 gap-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end" alignItemWithTrigger={false} sideOffset={4} className="rounded-none border-white/10 bg-[#1a1a1a] text-zinc-200 min-w-[120px]">
                <SelectItem value="edit" className="rounded-none hover:!bg-emerald-500/10 hover:!text-emerald-400 focus:!bg-emerald-500/10 focus:!text-emerald-400 cursor-pointer data-[state=checked]:!bg-emerald-500/10 data-[state=checked]:!text-emerald-400 [&_svg]:!text-emerald-400">can edit</SelectItem>
                <SelectItem value="view" className="rounded-none hover:!bg-emerald-500/10 hover:!text-emerald-400 focus:!bg-emerald-500/10 focus:!text-emerald-400 cursor-pointer data-[state=checked]:!bg-emerald-500/10 data-[state=checked]:!text-emerald-400 [&_svg]:!text-emerald-400">can view</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Delete Button (attached to the right side of the sliding row) */}
        <button 
          onClick={onDelete} 
          className="absolute -right-[64px] top-0 bottom-0 w-[64px] bg-[#ff3333] flex items-center justify-center text-white hover:bg-red-600 transition-colors"
          aria-label="Remove access"
        >
          <X className="size-[20px]" />
        </button>
      </div>
    </div>
  );
}

export function InviteModal({
  open,
  onOpenChange,
  contextName = "this campaign",
  campaignId = "c_123456",
}: InviteModalProps) {
  const toast = useToast();
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("view");

  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setQuery("");
      setRole("view");
    }
  }

  function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    if (!query) return;
    
    toast({
      title: "Invitation sent",
      description: `Invited to ${contextName}.`,
      tone: "success",
    });
    setQuery("");
  }
  
  const appLink = typeof window !== "undefined" 
    ? `${window.location.origin}/campaign/${campaignId}` 
    : `https://wozku.com/campaign/${campaignId}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[520px] max-w-[calc(100vw-2rem)] gap-0 overflow-hidden rounded-none border-0 bg-(--surface-dialog) p-0 text-foreground shadow-(--lift-lg) inset-ring-1 inset-ring-(--ink)/[0.09] sm:max-w-[520px]"
      >
        <div
          aria-hidden
          className="h-px w-full shrink-0 [background-image:var(--specular)]"
        />

        {/* Top Input Area */}
        <form onSubmit={handleInvite} className="p-4 border-b border-(--ink)/[0.06]">
          <div className="flex h-12 items-center gap-2 rounded-none bg-(--ink)/[0.04] p-1.5 inset-ring-1 inset-ring-(--ink)/[0.08] focus-within:inset-ring-violet-400/50 transition-[box-shadow]">
            <input 
              className="h-full flex-1 rounded-none border-0 bg-transparent px-3 text-[14px] shadow-none outline-none focus:ring-0 placeholder:text-muted-foreground/75"
              placeholder="Email, name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex items-center gap-1.5 h-full">
              <div className="relative h-full flex items-center">
                <Select value={role} onValueChange={(val) => { if (val) setRole(val); }}>
                  <SelectTrigger className="h-full w-auto min-w-[110px] rounded-none border-0 border-l border-white/10 bg-emerald-500/5 px-3 text-[14px] font-medium text-emerald-400 outline-none shadow-none focus-visible:ring-0 gap-2 hover:bg-emerald-500/10 transition-colors [&_svg]:text-emerald-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end" alignItemWithTrigger={false} sideOffset={4} className="rounded-none border-white/10 bg-[#1a1a1a] text-zinc-200 min-w-[120px]">
                    <SelectItem value="view" className="rounded-none hover:!bg-emerald-500/10 hover:!text-emerald-400 focus:!bg-emerald-500/10 focus:!text-emerald-400 cursor-pointer data-[state=checked]:!bg-emerald-500/10 data-[state=checked]:!text-emerald-400 [&_svg]:!text-emerald-400">can view</SelectItem>
                    <SelectItem value="edit" className="rounded-none hover:!bg-emerald-500/10 hover:!text-emerald-400 focus:!bg-emerald-500/10 focus:!text-emerald-400 cursor-pointer data-[state=checked]:!bg-emerald-500/10 data-[state=checked]:!text-emerald-400 [&_svg]:!text-emerald-400">can edit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <button 
                type="submit"
                className="h-full rounded-none bg-zinc-900 text-white px-5 font-medium hover:bg-zinc-800 text-[14px] transition-colors"
              >
                Invite
              </button>
            </div>
          </div>
        </form>

        <div className="px-6 py-5">
          {/* General Access */}
          <div className="mb-6">
            <h3 className="mb-4 text-[13px] font-medium text-muted-foreground">General access</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-none bg-(--ink)/[0.04] text-foreground inset-ring-1 inset-ring-(--ink)/[0.08]">
                  <Users className="size-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-foreground">Only those invited</span>
                  <span className="text-[13px] text-muted-foreground">4 people</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-none bg-(--ink)/[0.04] text-foreground inset-ring-1 inset-ring-(--ink)/[0.08]">
                  <LinkIcon className="size-[18px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-foreground">Link access</span>
                  <span className="text-[13px] text-muted-foreground">Only users have shared the link</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-(--ink)/[0.06] mb-5" />

          {/* People with access */}
          <div className="-mx-6">
            <h3 className="mb-2 px-6 text-[13px] font-medium text-muted-foreground">People with access</h3>
            <div className="flex flex-col">
              {people.map((person) => (
                <DraggableRow 
                  key={person.id} 
                  person={person} 
                  onDelete={() => {
                    toast({
                      title: "Access removed",
                      description: `${person.name} has been removed.`,
                    });
                  }} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-(--ink)/[0.06] bg-(--sink)/[0.03] px-6 py-4">
          <span className="text-[14px] text-muted-foreground truncate max-w-[320px]">
            {appLink}
          </span>
          <button 
            type="button"
            className="flex h-10 items-center gap-2 rounded-none bg-(--ink)/[0.04] px-4 text-[14px] font-medium text-foreground inset-ring-1 inset-ring-(--ink)/[0.08] hover:bg-(--ink)/[0.06] transition-[background-color]"
          >
            <LinkIcon className="size-[16px]" />
            Copy link
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
