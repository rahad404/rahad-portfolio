"use client";

import Image from "next/image";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/typewriter";

const socials = [
  { href: "https://github.com/rahad404", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/rahad404/", label: "LinkedIn", icon: Linkedin },
];

// Codeforces / LeetCode don't have lucide icons — use text glyphs styled to match.
const codeSocials = [
  { href: "https://codeforces.com/profile/rahad404", label: "CF" },
  { href: "https://leetcode.com/u/rahad404/", label: "LC" },
  { href: "https://www.hackerrank.com/profile/rahad404", label: "HR" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="container relative grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            open to full stack &amp; MERN collaborations
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Md. Ashikuzzaman Rahad
          </h1>

          <p className="mt-4 font-mono text-lg text-accent2 sm:text-xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN & Spring Boot",
                "Competitive Programmer",
                "Artist by Hobby",
              ]}
            />
          </p>

          <p className="mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-muted">
            CSE undergrad at United International University, building
            production-shaped web apps — booking platforms, marketplaces, and
            AI-assisted tools — end to end, from schema to UI.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/resume.pdf" download>
              <Button size="lg" className="group">
                <Download size={17} className="transition-transform group-hover:-translate-y-0.5" />
                Download resume
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View projects
              <ArrowDown size={16} className="rotate-[-90deg]" />
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent2/40 hover:text-accent2"
              >
                <s.icon size={17} />
              </a>
            ))}
            <span className="mx-1 h-6 w-px bg-border" />
            {codeSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[11px] font-medium text-muted transition-colors hover:border-accent2/40 hover:text-accent2"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="glow-border relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-muted">whoami.sh</span>
            </div>

            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://i.ibb.co.com/RTTQBzCX/rahad.jpg"
                alt="Portrait of Md. Ashikuzzaman Rahad"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-1.5 border-t border-border p-4 font-mono text-[12px] leading-relaxed">
              <p className="text-muted">
                <span className="text-accent2">$</span> cat profile.json
              </p>
              <p className="text-text">
                {"{ "}
                <span className="text-accent2">"role"</span>: "Full Stack Dev",{" "}
                <span className="text-accent2">"stack"</span>: "MERN + Spring" {"}"}
              </p>
              <p className="text-muted">
                <span className="text-accent2">$</span> status --current
              </p>
              <p className="text-text">building, learning, sketching 🎨</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-border bg-surface px-4 py-3 shadow-xl sm:block">
            <p className="font-display text-2xl font-semibold text-accent2">3rd yr</p>
            <p className="font-mono text-[11px] text-muted">CSE @ UIU · class of 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
}
