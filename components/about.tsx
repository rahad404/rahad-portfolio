import { Reveal } from "@/components/reveal";
import { Code2, Palette, Trophy, Sparkles } from "lucide-react";

const facets = [
  {
    icon: Code2,
    title: "The route here",
    body: "Started in data analysis, moved into competitive programming to sharpen problem solving, then went deep on full stack — Spring Boot on top of a Java background, SQL from the data days, and a modern MERN toolkit for everything client-facing.",
  },
  {
    icon: Trophy,
    title: "What I enjoy building",
    body: "Systems with real constraints: role-based dashboards, booking flows with limited inventory, payment integrations — the kind of product where the interesting work is in the edge cases, not just the UI.",
  },
  {
    icon: Palette,
    title: "Off the keyboard",
    body: "Artwork is my reset button. Sketching keeps the same part of my brain busy as debugging a gnarly bug — just slower, and with no console to check.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">// about</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Not just shipping features —
            <br className="hidden sm:block" /> figuring out how things should work.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {facets.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent2/30">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface2 text-accent2">
                  <f.icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-border bg-surface/50 p-6 font-mono text-[13px] text-muted">
            <Sparkles size={16} className="text-accent2" />
            Currently: 3rd-year CSE undergrad at UIU, shipping side projects, and still
            solving problems for fun on Codeforces &amp; LeetCode between semesters.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
