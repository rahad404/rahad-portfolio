import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  Rocket,
  Layers,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Md. Ashikuzzaman Rahad`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-bg pb-24">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container relative pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-mono text-[13px] text-muted transition-colors hover:text-accent2"
        >
          <ArrowLeft size={14} />
          back to projects
        </Link>
      </div>

      <header className="container relative mt-10">
        <p className="section-eyebrow">{project.index} / {String(projects.length).padStart(2, "0")}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-xl text-[15px] text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.role.map((r) => (
            <Badge key={r} variant="teal">
              {r} view
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              Live project
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} />
              Client repo
            </a>
          </Button>
        </div>
      </header>

      <div className="container relative mt-12">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.cover}
            alt={`${project.name} screenshot`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container relative mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-border bg-surface p-7">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface2 text-accent">
                <Layers size={16} />
              </span>
              <h2 className="font-display text-lg font-semibold">Overview</h2>
            </div>
            <p className="text-[14px] leading-relaxed text-muted">{project.description}</p>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-7">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface2 text-warn">
                <AlertTriangle size={16} />
              </span>
              <h2 className="font-display text-lg font-semibold">Challenges faced</h2>
            </div>
            <p className="text-[14px] leading-relaxed text-muted">{project.challenge}</p>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-7">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface2 text-accent2">
                <Rocket size={16} />
              </span>
              <h2 className="font-display text-lg font-semibold">What&apos;s next</h2>
            </div>
            <p className="text-[14px] leading-relaxed text-muted">{project.improvement}</p>
          </section>
        </div>

        <aside className="h-fit space-y-6 rounded-2xl border border-border bg-surface p-7 lg:sticky lg:top-24">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Main tech stack
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s} variant="mono">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-wide text-muted">
              User roles
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.role.map((r) => (
                <Badge key={r} variant="default">
                  {r}
                </Badge>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between rounded-xl border border-border bg-surface2 px-4 py-3.5 transition-colors hover:border-accent2/40"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                Next project
              </p>
              <p className="mt-0.5 font-display text-[14px] font-semibold">{next.name}</p>
            </div>
            <ArrowLeft size={15} className="rotate-180 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent2" />
          </Link>
        </aside>
      </div>
    </main>
  );
}
