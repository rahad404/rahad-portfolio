import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[12px] text-muted">
          © {new Date().getFullYear()} Md. Ashikuzzaman Rahad — built with Next.js &amp; shadcn/ui
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rahad404"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent2"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahad404/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent2"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
