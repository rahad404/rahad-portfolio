import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Database, Wrench, Braces, LineChart } from "lucide-react";

const categories = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["Next.js", "Tailwind CSS", "shadcn/ui", "React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Spring Boot", "Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    icon: Braces,
    title: "Languages",
    items: ["Java", "C++", "C", "Python", "R"],
  },
  {
    icon: LineChart,
    title: "Data & Analysis",
    items: ["NumPy", "Pandas", "Matplotlib", "Jupyter", "Metabase"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">// stack</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I reach for
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface2 text-accent">
                    <cat.icon size={16} />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge key={item} variant={i % 2 === 0 ? "default" : "teal"}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
