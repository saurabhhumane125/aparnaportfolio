import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    label: "Software",
    items: "AutoCAD · Revit · Bluebeam · Primavera P6 · Adobe Design Suite · MS Office",
  },
  {
    label: "CAD & Drafting",
    items:
      "2D Plans · Sections · Elevations · Technical Detailing · Revisions & Version Control · Layering & Annotation",
  },
  {
    label: "Coordination",
    items:
      "Design Interpretation · Drawing Control · Site Feedback Updates · Quantity Take-offs · QA Procedures",
  },
];

const roles = [
  {
    company: "3K Architects",
    title: "Freelance CAD Technician",
    date: "Jan 2025 — Present",
    location: "India / Remote",
    bullets: [
      "Producing 2D AutoCAD drawings for residential villas, refurbishments, and small commercial interiors.",
      "Converting hand sketches and concept designs into structured, buildable CAD packages.",
      "Managing revisions and coordinating interior layout detailing for timely delivery.",
    ],
  },
  {
    company: "Military Engineering Services",
    title: "CAD Technician / Junior Engineer",
    date: "Nov 2022 — Dec 2023",
    location: "India",
    bullets: [
      "Produced and revised 50+ detailed drawings for government residential and infrastructure works.",
      "Translated engineering sketches and site data into accurate construction-ready outputs.",
      "Coordinated with engineers and project teams to resolve layout and buildability issues.",
    ],
  },
  {
    company: "ERY Spaces",
    title: "Trainee CAD Technician",
    date: "Sep 2021 — Oct 2022",
    location: "India",
    bullets: [
      "Prepared layout, working, and coordination drawings for residential and refurbishment projects.",
      "Updated drawings from site feedback and maintained organised revision tracking.",
      "Supported tender documentation and approval submissions.",
    ],
  },
  {
    company: "Anuman",
    title: "Internship — Civil Engineer",
    date: "Jun 2021 — Aug 2021",
    location: "India",
    bullets: [
      "Assisted with basic CAD drawings and layouts for residential construction projects.",
      "Supported site engineers in measurements, documentation, and progress tracking.",
    ],
  },
];

const projects = [
  { type: "Residential", software: "AutoCAD · Revit", span: "wide" },
  { type: "Government Infrastructure", software: "AutoCAD · Bluebeam", span: "narrow" },
  { type: "Interior Layout", software: "AutoCAD", span: "narrow" },
  { type: "Refurbishment", software: "AutoCAD · Revit", span: "wide" },
  { type: "Residential Villa", software: "Revit", span: "narrow" },
  { type: "Office Facility", software: "AutoCAD", span: "narrow" },
];

const education = [
  {
    degree: "MSc Construction Management",
    school: "Ulster University, Belfast",
    detail: "2024 — 2025 · Commendation",
  },
  {
    degree: "BE Civil Engineering",
    school: "University of Mumbai",
    detail: "2017 — 2021 · 7.24 CGPA",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-rule">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 flex items-center justify-between h-16">
          <a href="#top" className="font-serif text-lg">
            Aparna Humane
          </a>
          <nav className="hidden md:flex items-center gap-9">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`block w-5 h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-rule">
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 pt-20 md:pt-32 pb-24 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <p className="smallcaps mb-8">Portfolio · 2025</p>
              <h1 className="font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
                Aparna
                <br />
                Humane.
              </h1>
              <p className="mt-8 text-base md:text-lg font-light text-muted-foreground">
                CAD Technician · Belfast, NI
              </p>
              <p className="mt-6 max-w-xl italic text-foreground/80 text-lg leading-relaxed">
                Translating sketches, site data, and design intent into precise, buildable drawings —
                with a methodical eye for detail.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <a href="#" className="text-link">
                  Download CV <span aria-hidden>↓</span>
                </a>
                <a href="#contact" className="text-link">
                  Get in touch <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] w-full bg-surface-alt border border-rule flex items-center justify-center">
                <span className="smallcaps text-center px-4">Profile Photo<br />Add Image</span>
              </div>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-3">
              <p className="section-num">01 — About</p>
            </Reveal>
            <Reveal className="lg:col-span-9 lg:pl-8" delay={120}>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.35] max-w-3xl">
                A detail-oriented CAD Technician with hands-on experience producing precise 2D
                technical drawings across residential, refurbishment, and infrastructure projects —
                holding an MSc in Construction Management from Ulster University, with a methodical,
                drawing-first approach to design coordination.
              </p>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-2xl">
                <div className="border-t border-rule py-6 sm:pr-8">
                  <p className="font-serif text-4xl md:text-5xl">3+</p>
                  <p className="smallcaps mt-2">Years Experience</p>
                </div>
                <div className="border-t border-rule py-6 sm:pl-8 sm:border-l">
                  <p className="font-serif text-4xl md:text-5xl">50+</p>
                  <p className="smallcaps mt-2">Technical Drawings</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS — alt surface */}
        <section id="skills" className="bg-surface-alt border-y border-rule">
          <div className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
              <Reveal className="lg:col-span-3">
                <p className="section-num">02 — Skills</p>
              </Reveal>
              <Reveal className="lg:col-span-9 lg:pl-8" delay={120}>
                <h2 className="font-serif text-3xl md:text-4xl max-w-2xl leading-tight">
                  Tools and disciplines used daily on live drawing packages.
                </h2>
              </Reveal>
            </div>

            <div className="space-y-0">
              {skills.map((s) => (
                <div
                  key={s.label}
                  className="border-t border-rule py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                >
                  <p className="md:col-span-3 smallcaps pt-1">{s.label}</p>
                  <p className="md:col-span-9 text-base md:text-lg leading-relaxed">{s.items}</p>
                </div>
              ))}
              <div className="border-t border-rule" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <Reveal className="lg:col-span-3">
              <p className="section-num">03 — Experience</p>
            </Reveal>
            <Reveal className="lg:col-span-9 lg:pl-8" delay={120}>
              <h2 className="font-serif text-3xl md:text-4xl max-w-2xl leading-tight">
                Four years across architectural, government, and refurbishment teams.
              </h2>
            </Reveal>
          </div>

          <div className="lg:pl-[25%]">
            <ol className="border-l border-foreground/80">
              {roles.map((r, i) => (
                <Reveal as="li" key={i} className="pl-8 md:pl-12 pr-2 pb-16 last:pb-0 relative" delay={i * 80}>
                  <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-foreground rounded-full" />
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6">
                    <div className="md:col-span-9">
                      <p className="font-serif text-2xl md:text-3xl leading-tight">{r.company}</p>
                      <p className="text-base text-muted-foreground mt-1">
                        {r.title} · {r.location}
                      </p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <p className="smallcaps md:pt-2">{r.date}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 max-w-2xl">
                    {r.bullets.map((b, bi) => (
                      <li key={bi} className="text-foreground/85 leading-relaxed flex gap-3">
                        <span className="text-muted-foreground select-none">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECT WORK — alt surface */}
        <section id="work" className="bg-surface-alt border-y border-rule">
          <div className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
              <Reveal className="lg:col-span-3">
                <p className="section-num">04 — Selected Work</p>
              </Reveal>
              <Reveal className="lg:col-span-9 lg:pl-8" delay={120}>
                <h2 className="font-serif text-3xl md:text-4xl max-w-2xl leading-tight">
                  Drawing packages across residential, government infrastructure, and interior layout.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
              {projects.map((p, i) => {
                const span = p.span === "wide" ? "md:col-span-2" : "md:col-span-1";
                return (
                  <article key={i} className={span}>
                    <div className="aspect-[16/9] w-full bg-foreground/[0.06] border border-rule flex items-center justify-center">
                      <span className="smallcaps">CAD Drawing — Add Image</span>
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-6">
                      <p className="smallcaps">{p.type}</p>
                      <p className="text-sm text-muted-foreground">{p.software}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
            <Reveal className="lg:col-span-3">
              <p className="section-num">05 — Education</p>
            </Reveal>
            <Reveal className="lg:col-span-9 lg:pl-8" delay={120}>
              <h2 className="font-serif text-3xl md:text-4xl max-w-2xl leading-tight">
                Academic foundations in civil engineering and construction management.
              </h2>
            </Reveal>
          </div>

          <div>
            {education.map((e, i) => (
              <div
                key={i}
                className="border-t last:border-b border-rule py-7 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
              >
                <p className="md:col-span-5 font-serif text-xl md:text-2xl">{e.degree}</p>
                <p className="md:col-span-4 text-base text-foreground/80">{e.school}</p>
                <p className="md:col-span-3 md:text-right smallcaps">{e.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-10">
            <Reveal className="lg:col-span-3">
              <p className="section-num">06 — Certifications</p>
            </Reveal>
          </div>
          <div>
            <div className="border-t border-rule py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <p className="md:col-span-9 text-lg">Institute of Civil Engineers (ICE)</p>
              <p className="md:col-span-3 md:text-right smallcaps">Graduate Member</p>
            </div>
            <div className="border-t border-b border-rule py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <p className="md:col-span-9 text-lg">Construction Skills Certification Scheme</p>
              <p className="md:col-span-3 md:text-right smallcaps">CSCS · AQP</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-surface-alt border-t border-rule">
          <div className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <p className="section-num mb-8">07 — Contact</p>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                  Let's
                  <br />
                  Connect.
                </h2>
                <p className="mt-8 max-w-md text-foreground/80 italic">
                  Open to CAD Technician roles, drawing packages, and design coordination work
                  across the UK and Ireland.
                </p>
              </Reveal>
              <div className="lg:col-span-5">
                <dl className="space-y-5">
                  {[
                    ["Email", "aparnahumane23@mail.com"],
                    ["Location", "Belfast, Northern Ireland"],
                    ["Phone", "+44 7741 897970"],
                    ["LinkedIn", "Aparna B Humane"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-12 gap-4 border-b border-rule pb-4">
                      <dt className="col-span-4 smallcaps pt-1">{k}</dt>
                      <dd className="col-span-8 text-base md:text-lg">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-4xl"
            >
              <div>
                <label className="smallcaps">Name</label>
                <input className="underline-input" placeholder="Your name" />
              </div>
              <div>
                <label className="smallcaps">Email</label>
                <input type="email" className="underline-input" placeholder="you@studio.com" />
              </div>
              <div className="md:col-span-2 mt-6">
                <label className="smallcaps">Message</label>
                <textarea
                  rows={3}
                  className="underline-input resize-none"
                  placeholder="Tell me about the project…"
                />
              </div>
              <div className="md:col-span-2 mt-8">
                <button type="submit" className="text-link">
                  Send message <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-rule">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20 lg:px-24 py-8 flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2025 Aparna Humane</p>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
