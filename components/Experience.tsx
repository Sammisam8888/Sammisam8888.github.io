"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, ChevronDown, Network } from "lucide-react";

import Image from "next/image";
import {
  SiReact,
  SiDjango,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiAmazon,
  SiNextdotjs,
  SiAngular,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiFlutter,
  SiOpenai,
  SiWhatsapp,
  SiGoogle,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiRedis,
  SiDocker,
  SiNginx,
  SiNestjs,
  SiGithubactions,
  SiPrisma,
} from "react-icons/si";
import { Bot, Database, Workflow } from "lucide-react";

const AzureIcon = () => (
  <div className="relative w-6 h-6">
    <Image
      src="/tech/azure.svg"
      alt="Azure"
      fill
      className="object-contain"
    />
  </div>
);

type TechItem = {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

type Experience = {
  id: string;
  dateLabel: string;
  shortLabel: string;
  role: string;
  company: string;
  location: string;
  statement: string;
  responsibilities: string[];
  tech: TechItem[];
};

const experiences: Experience[] = [
  {
    id: "exp1",
    dateLabel: "Apr 2026 — Present",
    shortLabel: "NerveBase AI",
    role: "Lead Full-Stack Engineer · AI Document Intelligence",
    company: "NerveBase AI",
    location: "Mumbai, India",
    statement:
      "Architecting a production-grade, multi-tenant document intelligence platform end-to-end — owning the AI extraction pipeline, hybrid semantic search, and tenant-isolated cloud backup as a primary author across the core system layers.",
    responsibilities: [
      "Designed and shipped the end-to-end AI extraction pipeline (PDF ingestion → LLM-driven field extraction → vector embedding → searchable Postgres row), engineered as idempotent pg-boss workers with classified retry, dead-letter escalation, and append-only tenant-isolated audit logging on every status transition.",
      "Architected hybrid semantic + full-text search using pgvector with 1536-dim Azure OpenAI embeddings and HNSW indexing — defended the in-database vector strategy against dedicated vector stores on hybrid-query correctness and operational simplicity.",
      "Drove foundational architectural decisions under pressure: Azure region selection (Sweden Central) defended with model-availability and latency baselining, multi-tenant document modeling, and invoice/receipt linkage with priority-chain matching for out-of-order document arrival.",
      "Authored the inter-service job contract — versioned payload schemas, retry policies, exponential backoff, and graceful shutdown — alongside the structured logging stack (pino with secret redaction) and Zod-validated environment configuration adopted across the codebase.",
      "Caught a silent vision-OCR corruption bug on legally-significant tax identifiers (GSTIN/PAN) through controlled extraction-strategy A/B testing; produced the architecture decision record that locked the team's primary extraction path and validator gate.",
      "Established prompt versioning, deterministic field validators, and end-to-end persistence verifiers proving full field round-trip integrity across multi-document and multi-currency execution paths.",
    ],
    tech: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Azure OpenAI", icon: AzureIcon, color: "#007FFF" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "PostgreSQL + pgvector", icon: SiPostgresql, color: "#336791" },
      { name: "pg-boss", icon: Workflow, color: "#a855f7" },
      { name: "Upstash Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "Zod + pino", icon: Bot, color: "#facc15" },
      { name: "RAG / MCP / Embeddings", icon: Brain, color: "#16a34a" },
    ],
  },
  {
    id: "exp2",
    dateLabel: "Feb 2026 — Mar 2026",
    shortLabel: "NoDevBuild",
    role: "Backend & DevOps Engineer · High-Load Systems",
    company: "NoDevBuild",
    location: "Delhi NCR (Remote)",
    statement:
      "Owned production backend, infrastructure, and DevOps for a high-load food-tech platform — re-architecting an unscalable read path into a containerized, observable, sub-second system under live SLA pressure.",
    responsibilities: [
      "Re-architected the read path under SLA failure (multi-second p95, double-digit failure rate at concurrent load): moved sorting from the application tier to PostgreSQL, designed compound indexes, added cursor-based pagination, and introduced a Redis caching layer with explicit invalidation contracts — restoring sub-second p95.",
      "Containerized the full stack with multi-stage Docker builds (NestJS + Next.js + Nginx) and a production-grade Nginx reverse proxy with SSL termination, gzip, security headers, and WebSocket routing for real-time order flows.",
      "Built the deployment pipeline end-to-end on AWS EC2 + ECR with a GitHub Actions CI/CD workflow, automated Prisma migrations, and a build-validation gate that blocks broken artifacts from ever reaching production.",
      "Engineered secure auth and payment flows: JWT + Google OAuth with cross-domain cookie handling, and Razorpay integration with signature verification and idempotent webhook reconciliation.",
      "Resolved deep production incidents across reverse proxy routing, container networking, AWS outbound connectivity, OAuth callback domains, and Git history corruption — owning debugging from L7 networking down to container runtime.",
    ],
    tech: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "currentColor" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "AWS (EC2, ECR)", icon: SiAmazon, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Razorpay + OAuth", icon: Database, color: "#3395FF" },
    ],
  },
  {
    id: "exp3",
    dateLabel: "Aug 2025 — Dec 2025",
    shortLabel: "OPM Corporation",
    role: "SDE 2 · Project Lead (Full-Stack & DevOps)",
    company: "OPM Corporation Pvt. Ltd.",
    location: "Bhubaneswar, India",
    statement:
      "Led client-facing full-stack delivery as Project Lead — owning backend architecture, DevOps strategy, and cross-team execution for production systems on AWS and Azure infrastructure.",
    responsibilities: [
      "Architected scalable backend systems with Django and Express across MongoDB and PostgreSQL, deployed on AWS EC2 and Azure with environment-isolated configuration and zero-downtime release flow.",
      "Owned production-grade React Native deployments to Android and iOS, controlling the full release pipeline from build signing through app-store submission and rollout monitoring.",
      "Designed and integrated WhatsApp Business API automation and a conversational chatbot, embedding it into the customer engagement loop for client onboarding and lifecycle messaging.",
      "Drove DevOps strategy across the engineering org — standardizing environment configuration, secret management, and deployment workflows — materially improving release reliability and team velocity.",
      "Mentored peers, reviewed architectural decisions, and held end-to-end delivery accountability as the technical Project Lead across multiple client engagements.",
    ],
    tech: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Django", icon: SiDjango, color: "#0C4B33" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "Flask", icon: SiFlask, color: "currentColor" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "AWS (EC2, S3, Amplify, Lightsail)", icon: SiAmazon, color: "#FF9900" },
      { name: "Azure", icon: AzureIcon, color: "#007FFF" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "WhatsApp Business API", icon: SiWhatsapp, color: "#25D366" },
      { name: "WhatsApp Chatbot", icon: Bot, color: "#22c55e" },
    ],
  },
  {
    id: "exp4",
    dateLabel: "Jul 2025 — Aug 2025",
    shortLabel: "WNS Global",
    role: "AI Full-Stack Engineer · Healthcare Automation",
    company: "WNS Global Services",
    location: "Pune, India (Remote)",
    statement:
      "Architected a healthcare prior-authorization automation platform built on multi-agent AI orchestration — production-deployed end-to-end inside an 8-week engagement.",
    responsibilities: [
      "Designed end-to-end agentic AI architecture using LangChain and LangGraph orchestrators over OpenAI and Gemini models for clinical decision-support reasoning chains.",
      "Owned full-stack delivery across Angular, React, and Next.js front-ends and Flask + Express service tiers, with secure REST APIs, JWT-based role authorization, and tenant-aware data flows.",
      "Engineered CI/CD pipelines for automated build, test, and deployment across cloud environments with secret-managed credentials and observability instrumentation.",
      "Defined the system architecture, data flow, and prompt-orchestration contracts that became the production pattern for the engagement.",
    ],
    tech: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Flask", icon: SiFlask, color: "currentColor" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "Gemini API", icon: SiGoogle, color: "#4285F4" },
      { name: "LangChain", icon: Brain, color: "#16a34a" },
      { name: "LangGraph", icon: Network, color: "#9333ea" },
      { name: "System Architecture", icon: Bot, color: "#facc15" },
    ],
  },
  {
    id: "exp5",
    dateLabel: "May 2025 — Jul 2025",
    shortLabel: "Inovaare Clouds",
    role: "Cloud Platform Developer · PaaS & MLOps",
    company: "Inovaare Clouds",
    location: "Bhubaneswar, India",
    statement:
      "Built modular PaaS primitives for healthcare-insurance automation on AWS-native infrastructure, enabling internal product teams to compose new offerings on a shared cloud platform.",
    responsibilities: [
      "Engineered serverless OCR and ML inference pipelines on AWS Lambda + S3 for high-volume claims document processing with intelligent field extraction.",
      "Designed MLOps workflows for model deployment, monitoring, and lifecycle management — enabling repeatable, observable production rollouts.",
      "Architected modular PaaS service primitives so internal product teams could assemble new offerings without re-implementing core platform infrastructure.",
      "Authored KPI and API documentation and operational runbooks adopted across downstream product teams.",
    ],
    tech: [
      { name: "AWS Lambda", icon: SiAmazon, color: "#FF9900" },
      { name: "AWS S3", icon: SiAmazon, color: "#FF9900" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "OCR", icon: Bot, color: "#22d3ee" },
      { name: "Machine Learning", icon: Bot, color: "#a855f7" },
      { name: "MLOps", icon: Bot, color: "#10b981" },
      { name: "PaaS Architecture", icon: Bot, color: "#eab308" },
    ],
  },
  {
    id: "exp6",
    dateLabel: "Jan 2025 — Mar 2025",
    shortLabel: "Codecis AI",
    role: "Backend Engineer · Fintech Infrastructure",
    company: "Codecis AI",
    location: "San Francisco, US (Remote)",
    statement:
      "Built containerized fintech infrastructure with multi-database storage and dual-cloud deployment strategy for a customer-facing fintech CRM and employee-management platform.",
    responsibilities: [
      "Built backend services on Flask, FastAPI, and Next.js with a hybrid PostgreSQL + MongoDB + MySQL data layer optimized per workload (transactional, document, analytical).",
      "Containerized backend services with Docker and orchestrated dual-cloud deployments across AWS and Azure for production-grade reliability.",
      "Designed scalable API contracts and request-handling patterns powering the company's customer-facing fintech and internal operations platforms.",
    ],
    tech: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "currentColor" },
      { name: "Django", icon: SiDjango, color: "#0C4B33" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiPostgresql, color: "#00758F" },
    ],
  },
];

export default function ExperienceTimeline() {
  const [active, setActive] = useState("exp1");
  const [openId, setOpenId] = useState<string | null>(null);
  const refs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = refs.current[id];
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 2 +
      element.offsetHeight / 2;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="experience" className="py-16 md:py-32 px-4 md:px-6 relative">
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-24">
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3 md:mb-4">
          — Career Trajectory
        </p>
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          Work Experience
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-5 max-w-2xl mx-auto px-2">
          Full-Stack Engineering · Cloud Architecture · AI Systems · DevOps Leadership
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-[260px_1fr] md:gap-20">
        {/* Sticky Timeline — desktop only */}
        <div className="relative hidden md:block">
          <div className="sticky top-1/2 -translate-y-1/2 space-y-3">
            {experiences.map((exp) => {
              const isActive = active === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => scrollToSection(exp.id)}
                  className={`w-full text-left px-5 py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-secondary/40 text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-mono font-semibold uppercase tracking-[0.18em] ${
                        isActive ? "opacity-80" : "opacity-70"
                      }`}
                    >
                      {exp.dateLabel}
                    </span>
                    <span className="text-base font-bold tracking-tight mt-1">
                      {exp.shortLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Timeline Line — desktop only */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[2px] bg-border" />

          {experiences.map((exp) => {
            const isOpen = openId === exp.id;
            return (
              <div
                key={exp.id}
                id={exp.id}
                data-tour-pause
                ref={(el) => {
                  refs.current[exp.id] = el;
                }}
                className="relative md:pl-20 mb-4 md:mb-12"
              >
                {/* Timeline Dot — desktop only */}
                <div className="hidden md:block absolute left-[23px] top-9 w-5 h-5 bg-foreground rounded-full ring-4 ring-background" />

                <div className="backdrop-blur-xl bg-card border border-border p-5 md:p-10 rounded-xl md:rounded-2xl shadow-sm relative overflow-hidden transition-all duration-500 hover:border-foreground/20">
                  {/* Subtle gradient accent in corner */}
                  <div className="absolute -top-px -right-px w-32 md:w-48 h-32 md:h-48 bg-gradient-to-bl from-foreground/[0.04] via-foreground/[0.02] to-transparent pointer-events-none" />

                  {/* Date · Location */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 relative">
                    <p className="text-[11px] md:text-[13px] font-mono font-semibold uppercase tracking-[0.2em] md:tracking-[0.22em] text-foreground">
                      {exp.dateLabel}
                    </p>
                    <span className="text-muted-foreground/40 text-xs">·</span>
                    <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>

                  {/* Role & Company */}
                  <h2 className="mt-3 md:mt-4 text-lg md:text-[28px] font-semibold tracking-tight leading-snug md:leading-tight">
                    {exp.role}
                  </h2>
                  <p className="mt-0.5 md:mt-1 text-sm md:text-base text-muted-foreground">
                    {exp.company}
                  </p>

                  {/* Statement — always visible, kept short for glimpse view */}
                  <p className="mt-4 md:mt-5 text-[13.5px] md:text-[15px] text-foreground/80 leading-relaxed max-w-3xl">
                    {exp.statement}
                  </p>

                  {/* Stack — always visible (the "glance" view) */}
                  <div className="mt-5 md:mt-7">
                    <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground mb-3 md:mb-4">
                      — Stack
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-2.5">
                      {exp.tech.map((tech, idx) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center justify-center gap-1.5 bg-secondary/40 border border-border px-2 py-2.5 md:py-3 rounded-md md:rounded-lg hover:bg-secondary hover:border-foreground/20 transition-all duration-200"
                          >
                            <div className="flex items-center justify-center h-5 w-5 md:h-6 md:w-6">
                              <Icon
                                className="w-5 h-5 md:w-6 md:h-6 text-xl md:text-2xl"
                                style={{ color: tech.color }}
                              />
                            </div>
                            <p className="text-[9.5px] md:text-[10.5px] text-muted-foreground font-medium text-center leading-tight line-clamp-2">
                              {tech.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scope of Ownership — collapsed by default on every breakpoint */}
                  {isOpen && (
                    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-border/60">
                      <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground mb-4 md:mb-5">
                        — Scope of Ownership
                      </p>
                      <ul className="space-y-3 md:space-y-3.5">
                        {exp.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="flex gap-3 md:gap-3.5 text-[13px] md:text-[14.5px] text-foreground/75 leading-relaxed"
                          >
                            <span className="mt-1.5 md:mt-2.5 inline-block w-1.5 h-1.5 rounded-full bg-foreground/50 flex-shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Read More / Hide trigger — visible at every breakpoint */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    className="mt-5 md:mt-6 inline-flex items-center gap-2 text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{isOpen ? "Read Less" : "Read More"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
