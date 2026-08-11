"use client";

// Depends on cn() from @/lib/utils, sibling shell components, Sheet primitive, and design tokens in globals.css.

import { useState, type ReactNode } from "react";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavRail, type NavItem } from "./nav-rail";
import { AccountMenu, type AccountMenuItem, type ShellUser } from "./account-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

export interface AdminShellProps {
  brand: ReactNode;
  items: NavItem[];
  secondaryItems?: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  breadcrumbs?: BreadcrumbItem[];
  onOpenSearch?: () => void;
  searchHint?: string;
  utility?: ReactNode;
  user: ShellUser;
  accountItems?: AccountMenuItem[];
  accountFooter?: ReactNode;
  children: ReactNode;
}

export function AdminShell({
  brand,
  items,
  secondaryItems = [],
  activeId,
  onNavigate,
  breadcrumbs,
  onOpenSearch,
  searchHint = "⌘K",
  utility,
  user,
  accountItems = [],
  accountFooter,
  children,
}: AdminShellProps) {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavigate(id: string) {
    onNavigate(id);
    setNavOpen(false);
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground [background-image:var(--wash-page)]">
      <header className="relative w-full h-12 shrink-0 border-b border-(--ink)/[0.06] bg-(--sink)/[0.14]">
        <div className="relative flex h-full w-full max-w-[1280px] mx-auto items-center justify-between gap-3 px-4 md:px-8">
          {/* Left: Hamburger menu + Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open main navigation"
              title="Navigation"
              className="flex size-8 shrink-0 items-center justify-center rounded-(--r-pill) text-muted-foreground transition-[background-color,color,scale] duration-150 hover:bg-(--ink)/[0.06] hover:text-foreground active:scale-(--press)"
            >
              <Menu className="size-4.5" />
            </button>

            <span className="flex shrink-0 items-center pl-0.5">
              {brand}
            </span>

            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="ml-2 flex items-center gap-1.5 text-[12.5px] text-muted-foreground border-l border-(--ink)/[0.08] pl-3">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <span key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5">
                      {idx > 0 && (
                        <ChevronRight className="size-3.5 text-muted-foreground/40 shrink-0" />
                      )}
                      {crumb.onClick && !isLast ? (
                        <button
                          type="button"
                          onClick={crumb.onClick}
                          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {crumb.label}
                        </button>
                      ) : (
                        <span
                          className={cn(
                            "truncate max-w-[200px]",
                            isLast ? "font-medium text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </span>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Center: Command Palette / Search (Dead-Centered relative to the inner container) */}
          {onOpenSearch && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <button
                type="button"
                onClick={onOpenSearch}
                title={`Search everything (${searchHint})`}
                className="group flex h-7 w-[280px] items-center gap-2 rounded-(--r-pill) bg-(--ink)/[0.03] pl-2.5 pr-1.5 text-[11.5px] font-medium text-muted-foreground inset-ring-1 inset-ring-(--ink)/[0.08] transition-[background-color,color] duration-150 hover:bg-(--ink)/[0.06] hover:text-foreground"
              >
                <Search className="size-3.5 shrink-0 text-muted-foreground/70" />
                <span className="flex-1 text-left">Search...</span>
                <kbd className="rounded-(--r-pill) bg-(--ink)/[0.07] px-1.5 py-px text-[10px] text-muted-foreground/80 inset-ring-1 inset-ring-(--ink)/[0.07]">
                  {searchHint}
                </kbd>
              </button>
            </div>
          )}

          {/* Right: Utility & User Profile Menu */}
          <div className="flex items-center justify-end gap-2 shrink-0 ml-auto">
            {utility}
            <AccountMenu user={user} items={accountItems} footer={accountFooter} />
          </div>
        </div>
      </header>

      {/* Main View Area (Full Width, No Left Rail) */}
      <main className="flex min-h-0 min-w-0 flex-1 overflow-hidden">{children}</main>

      {/* Left Navigation Sheet Drawer */}
      <Sheet open={navOpen} onOpenChange={setNavOpen}>
        <SheetContent
          side="left"
          showCloseButton={false}
          aria-label="Navigation drawer"
          overlayClassName="z-40 bg-black/40 backdrop-blur-[2px]"
          className="fixed inset-y-0 left-0 z-50 flex h-full w-[240px] flex-col border-r border-(--ink)/[0.09] bg-(--surface-panel) p-0 shadow-2xl transition-transform duration-250 ease-out"
        >
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-(--ink)/[0.06] px-4">
            <span className="flex items-center">{brand}</span>
            <button
              type="button"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
              className="flex size-7 items-center justify-center rounded-(--r-pill) text-muted-foreground transition-[background-color,color,scale] duration-150 hover:bg-(--ink)/[0.08] hover:text-foreground active:scale-(--press)"
            >
              <X className="size-3.5" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <NavRail
              items={items}
              secondaryItems={secondaryItems}
              activeId={activeId}
              onNavigate={handleNavigate}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
