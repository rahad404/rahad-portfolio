import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "rahad.0911@gmail.com",
    href: "mailto:rahad.0911@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1840-031149",
    href: "tel:+8801840031149",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+880 1840-031149",
    href: "https://wa.me/8801840031149",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 sm:px-14">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="section-eyebrow justify-center flex">// contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Got something worth building?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] text-muted">
                Open to full stack roles, freelance MERN work, and interesting
                collaborations. Reach out through whichever channel is easiest.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === "WhatsApp" ? "_blank" : undefined}
                    rel={c.label === "WhatsApp" ? "noreferrer" : undefined}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface2 px-5 py-6 text-center transition-colors hover:border-accent2/40"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-accent2">
                      <c.icon size={18} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                        {c.label}
                      </p>
                      <p className="mt-1 flex items-center justify-center gap-1 text-[13px] font-medium text-text">
                        {c.value}
                        <ArrowUpRight
                          size={12}
                          className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent2"
                        />
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
