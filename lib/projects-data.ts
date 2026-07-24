export interface Project {
  slug: string;
  name: string;
  tagline: string;
  cover: string;
  role: string[];
  stack: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  challenge: string;
  improvement: string;
  index: string;
}

export const projects: Project[] = [
  {
    slug: "mediqueue",
    name: "MediQueue",
    tagline: "Tutor booking, without the back-and-forth",
    cover:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    role: ["User", "Tutor"],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
    description:
      "MediQueue bridges tutors and students. Visitors can browse tutor listings with multi-parameter filtering, book sessions against automated seat-slot limits, and manage everything from a personal dashboard. Tutors can create and maintain their own public profiles.",
    liveUrl: "https://mediqueue-client-nine.vercel.app/",
    githubUrl: "https://github.com/rahad404/mediqueue-client",
    challenge:
      "Authentication was still new territory at the time, so wiring up secure session handling — token storage, protected routes, and keeping a logged-in state consistent across the dashboard — took several rebuilds before it felt solid.",
    improvement:
      "The permission model is currently flat. The next version introduces real role-based access control, so tutors and students see distinct dashboards and permissions instead of one shared view.",
    index: "01",
  },
  {
    slug: "ticket-bari",
    name: "TicketBari",
    tagline: "One platform, four ways to travel",
    cover:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1400&auto=format&fit=crop",
    role: ["User", "Vendor", "Admin"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    description:
      "A fully responsive MERN ticket booking platform covering Bus, Train, Launch, and Flight travel. Users search, filter, sort, and paginate through approved tickets, book through a modal, pay with Stripe, and download PDF tickets. Vendors manage inventory and view revenue charts; admins verify tickets and curate the homepage ad slots.",
    liveUrl: "https://ticket-bari-client-tan.vercel.app/",
    githubUrl: "https://github.com/rahad404/ticket-bari-client",
    challenge:
      "Three separate roles sharing one codebase meant the access rules and route guards multiplied fast. Getting Stripe's payment flow to reliably confirm bookings — without double-charging or leaving orphaned pending seats — was the harder half of the build.",
    improvement:
      "Booking currently reserves a seat count, not a seat itself. A visual seat map is next, so buyers pick their exact seat instead of a quantity.",
    index: "02",
  },
  {
    slug: "plant-pot",
    name: "Plant Pot",
    tagline: "A shop that remembers to water your plants",
    cover:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1400&auto=format&fit=crop",
    role: ["User", "Admin"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A responsive plant shop with catalog search, filters for category/price/rating/light, and a streamlined checkout. Beyond the sale, buyers track an automated care schedule per plant and mark watering as done. Admins run full CRUD on inventory and orders, with dark/light theming, skeleton loaders, and toast feedback throughout.",
    liveUrl: "https://plant-pot-two.vercel.app/",
    githubUrl: "https://github.com/rahad404/plant-pot",
    challenge:
      "The watering-schedule engine — generating recurring reminders per plant species and keeping them accurate as users mark plants watered — needed more careful date logic than a typical CRUD feature.",
    improvement:
      "Payment is not wired up yet — that's the next milestone — alongside a deeper plant-care system with species-specific tips and health check-ins.",
    index: "03",
  },
  {
    slug: "datanav-ai",
    name: "DataNav AI",
    tagline: "Upload a dataset, ask it questions",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    role: ["User"],
    stack: ["React", "Node.js", "Express", "AI/LLM Integration"],
    description:
      "A full-stack data analysis platform: upload CSV, XLSX, or JSON, get AI-powered analysis and visual insight summaries, then keep exploring the dataset conversationally through an in-app chat assistant.",
    liveUrl: "https://datanav-ai.vercel.app/",
    githubUrl: "https://github.com/rahad404/datanav-ai",
    challenge:
      "Getting the AI layer to reason reliably over arbitrary, messy uploaded data — rather than a fixed schema — was by far the hardest part of this build, with a lot of prompt and pipeline iteration to get consistent answers.",
    improvement:
      "Insights are currently text-first. Native charting and graph visualizations for the AI's findings are the planned next step, so answers render visually, not just as prose.",
    index: "04",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
