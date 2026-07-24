"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-accent2">
            <Terminal size={16} strokeWidth={2.25} />
          </span>
          <span>
            Rahad
          </span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[13px] text-muted md:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:text-text",
                  active === link.href && "text-accent2"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleClick("#contact")}
          >
            Say hello
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-b border-border bg-bg/95 backdrop-blur-lg transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-b-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="container flex flex-col gap-1 py-4 font-mono text-sm">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-3 text-muted transition-colors hover:bg-surface hover:text-text",
                    active === link.href && "text-accent2"
                  )}
                >
                  <span className="text-[11px] text-muted/60">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button className="w-full" onClick={() => handleClick("#contact")}>
                Say hello
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
