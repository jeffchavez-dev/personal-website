"use client";

import { useState } from "react";

type Service = {
  id: string;
  tab: string;
  heading: string;
  body: string;
  benefits: string[];
  tools: string[];
};

const services: Service[] = [
  {
    id: "automation",
    tab: "Workflow Automation",
    heading: "Automation that holds up in the real world",
    body: "Most automations break because they're built for the ideal case. I build for the exceptions — tested with your actual data, documented in plain language, and handed off so your team can maintain it without me.",
    benefits: [
      "Email triage across Gmail, Outlook, and Superhuman",
      "Multi-step Make and Zapier workflows with error handling",
      "Trigger-based task creation, notifications, and routing",
      "Documentation written for the person who inherits it, not for me",
    ],
    tools: ["Make", "Zapier", "Airtable", "Gmail", "Outlook", "Superhuman"],
  },
  {
    id: "crm",
    tab: "CRM Management",
    heading: "A CRM your team will actually use",
    body: "I've worked in Attio, Fibery, and HubSpot at depth — not just initial setup, but building the automations that keep records current, move contacts through stages, and route work without anyone prompting it.",
    benefits: [
      "Pipeline configuration in Attio, Fibery, or HubSpot from scratch",
      "Contact update triggers and automated stage movement",
      "Outreach sequences and follow-up reminders that run themselves",
      "Reporting that reflects what's actually in the pipeline, not what should be",
    ],
    tools: ["Attio", "Fibery", "HubSpot", "Airtable", "Asana"],
  },
  {
    id: "ai",
    tab: "AI Content Systems",
    heading: "Content repurposing that runs without you",
    body: "At Athena I built workflows that take raw source material — recordings, articles, notes — and turn them into social posts and marketing outputs using Claude and Grok. Consistent voice, no manual rewriting, connected to your publishing tools.",
    benefits: [
      "Source-to-multi-format pipelines from a single input",
      "Draft generation via Claude or Grok with human review checkpoints",
      "Brand voice preserved across formats without constant editing",
      "Wired to your publishing stack so nothing sits in a draft folder",
    ],
    tools: ["Claude AI", "Grok", "ChatGPT", "Perplexity", "Make"],
  },
  {
    id: "ops",
    tab: "Operations Support",
    heading: "Operations that don't need you in the room",
    body: "I've coordinated 30+ simultaneous marketing deliverables, run SEO from technical audit to top-3 rankings, and built the SOPs that let recurring work run without a single point of failure. The goal is always a system that outlasts my involvement.",
    benefits: [
      "Asana project setup with automated status updates and ownership rules",
      "Technical and local SEO — structure, schema markup, citation cleanup",
      "Event and campaign coordination with clear accountability at each step",
      "SOPs written plainly enough that someone new can follow them on day one",
    ],
    tools: ["Asana", "SE Ranking", "Ubersuggest", "Google Drive", "OneDrive"],
  },
];

export function ServicesTabs() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {services.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-sm border px-3.5 py-1.5 font-mono text-[13px] transition-colors ${
              active === s.id
                ? "border-accent text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl tracking-tight">
            {current.heading}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-muted">
            {current.body}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {current.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
              >
                <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-fit rounded-sm border border-border bg-surface p-6">
          <p className="font-mono text-[12px] tracking-[0.12em] text-muted uppercase">
            Tools I use
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {current.tools.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-border px-2.5 py-1 font-mono text-[12px] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
