import { Reveal } from "@/components/reveal";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    school: "United International University (UIU)",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2022 — 2028 (expected)",
    detail: "Currently in 3rd year",
    metric: "CGPA 3.32",
  },
  {
    school: "Dhaka City College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "Completed",
    detail: "Science group",
    metric: "GPA 5.00",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container max-w-3xl">
        <Reveal>
          <p className="section-eyebrow">// education</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {timeline.map((t, i) => (
            <Reveal key={t.school} delay={i * 120}>
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface2 text-accent2">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold">{t.school}</h3>
                    <p className="mt-1 text-[14px] text-muted">{t.degree}</p>
                    <p className="mt-1 font-mono text-[12px] text-muted/70">{t.period}</p>
                  </div>
                </div>
                <div className="ml-14 sm:ml-0 sm:text-right">
                  <p className="font-display text-xl font-semibold text-accent2">{t.metric}</p>
                  <p className="font-mono text-[11px] text-muted">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
