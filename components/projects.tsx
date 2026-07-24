import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects-data";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">// projects</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&apos;ve shipped
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-muted">
            Four full stack builds, each solving a real workflow — booking, marketplace,
            and data tooling.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent2/40">
                <Link
                  href={`/projects/${p.slug}`}
                  className="relative aspect-[16/9] w-full overflow-hidden border-b border-border"
                >
                  <Image
                    src={p.cover}
                    alt={`${p.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-xs text-accent2/80">
                    {p.index}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="flex items-start justify-between gap-3"
                  >
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                      <p className="mt-1 text-[13px] text-muted">{p.tagline}</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-all group-hover:border-accent2/40 group-hover:text-accent2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <Badge key={s} variant="mono">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[13px] font-medium text-muted transition-colors hover:border-accent2/40 hover:text-accent2"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[13px] font-medium text-muted transition-colors hover:border-accent2/40 hover:text-accent2"
                    >
                      <Globe size={14} />
                      Live
                    </a>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-accent2"
                    >
                      View details
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
