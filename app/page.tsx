import Image from "next/image";
import { Header } from "./header";
import { Footer } from "./footer";
import { ServicesTabs } from "./services-tabs";
import { WorkGrid } from "./work-grid";

const stats = [
  { number: "5+", label: "Years of experience" },
  { number: "50+", label: "Clients supported" },
  { number: "30+", label: "Events coordinated" },
  { number: "10+", label: "Tools integrated" },
];

const problems = [
  {
    id: "01",
    title: "An inbox that manages you, not the other way around",
    body: "At Athena I rebuilt email triage from scratch across Gmail, Outlook, and Superhuman. Sorting, tagging, and routing incoming messages shouldn't take human time — it should just happen.",
  },
  {
    id: "02",
    title: "A CRM that's always one step behind",
    body: "Contact records drift, pipeline stages go stale, and follow-ups depend on someone's memory. A CRM should update itself as work happens — until it's wired that way, it won't.",
  },
  {
    id: "03",
    title: "Content that takes longer to repurpose than to create",
    body: "A solid recording or article shouldn't require hours of manual reformatting. The AI-assisted pipelines I build at Athena turn source material into multi-format outputs automatically.",
  },
  {
    id: "04",
    title: "Client issues with no clear path to resolution",
    body: "Managing 50+ monthly client issues at Servio taught me that the difference between chaos and clarity is always the same thing: a workflow with defined ownership at every step.",
  },
];

const process = [
  {
    num: "01",
    title: "I listen before I map",
    body: "Most workflow problems look technical on the surface. Underneath they're usually about communication, ownership, or habit. I spend the first phase understanding the actual problem — not just what you think needs to be automated.",
  },
  {
    num: "02",
    title: "I design it on paper before touching any tool",
    body: "I map out what connects to what, where automation handles it, and where a human needs to make a call. You see the whole picture and sign off before a single workflow gets built — no surprises mid-build.",
  },
  {
    num: "03",
    title: "I test with real data, not sample data",
    body: "Workflows tested only in ideal conditions break in real ones. I run builds with actual inputs from your process, catch the edge cases before they catch you, and write documentation in plain English — not a technical manual.",
  },
  {
    num: "04",
    title: "I check back in after it's live",
    body: "A workflow that works on day one doesn't always work on day ninety. Real processes evolve, tools update, edge cases appear. I stay available to adjust — because a system should grow with your work, not fall behind it.",
  },
];

const work = [
  {
    company: "Athena",
    year: "2025",
    title: "Executive Inbox Rebuilt from Scratch",
    body: "The team was manually sorting incoming messages across three platforms every morning. I mapped their routing logic, rebuilt it in Make and Zapier, and wired it to Gmail, Outlook, and Superhuman — so priority, client, and urgency tagging happens the moment a message arrives.",
    result: "Manual inbox triage eliminated across 3 platforms",
  },
  {
    company: "Personal Build",
    year: "2026",
    title: "AI-Powered Facebook Messenger Support Agent",
    body: "Facebook Pages get buried in repetitive questions — pricing, availability, policies — that eat hours of manual reply time. I built a self-hosted n8n workflow that listens for Messenger events via webhook, pulls a live knowledge base from a connected Google Doc, and uses an AI agent to reply in seconds — strictly grounded in that source material, with de-duplication logic to hold up under Meta's retry behavior.",
    result: "24/7 Messenger support grounded in a live knowledge base, zero hallucinated replies",
    detail: {
      image: "/n8n-messenger-workflow.png",
      imageWidth: 2512,
      imageHeight: 1486,
      problem:
        "Businesses running a Facebook Page get a steady stream of repetitive customer questions — pricing, availability, policies, FAQs — that eat up hours of manual reply time and slow down response times outside business hours.",
      solutionIntro:
        "I built an automated Messenger agent that:",
      solutionPoints: [
        "Listens for incoming messages on a Facebook Page in real time via webhook",
        "Retrieves the business's up-to-date knowledge base (pulled live from a connected Google Doc, so the client can edit answers without touching any code)",
        "Uses an AI agent to generate accurate, on-brand responses — strictly limited to the provided knowledge base, so it never invents information",
        "Replies to the customer directly in Messenger within seconds",
        "Maintains short-term conversation memory, so follow-up questions stay in context",
      ],
      highlights: [
        "Workflow automation: n8n, self-hosted for full control and no per-message platform fees",
        "AI integration: configurable LLM backend (tested with Google Gemini and OpenRouter), with prompt engineering to constrain responses to verified source material and reduce hallucination",
        "Live knowledge base: Google Docs integration means non-technical team members can update what the bot knows without any developer involvement",
        "Reliability engineering: webhook verification, event filtering, and de-duplication logic to prevent duplicate replies under Meta's retry behavior",
        "Cost-conscious architecture: built to run on free-tier AI model quotas where possible, with clear guidance for scaling up as usage grows",
      ],
      resultText:
        "A responsive, always-on support assistant that reduces manual reply workload, keeps answers consistent and accurate, and can be extended to other channels (Instagram, WhatsApp, web chat) using the same core architecture.",
      tools: [
        "n8n",
        "Facebook Messenger",
        "Google Docs",
        "Google Gemini",
        "OpenRouter",
      ],
    },
  },
];

const tags = [
  "Make",
  "Zapier",
  "Airtable",
  "Attio CRM",
  "HubSpot",
  "Asana",
  "Fibery",
  "Claude AI",
  "SEO",
  "Google Workspace",
  "n8n",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[13px] text-muted">{children}</p>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6">
          {/* HERO */}
          <section className="flex flex-col-reverse items-start gap-10 border-b border-border py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28">
            <div>
              <SectionLabel>whoami</SectionLabel>
              <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl">
                I close the gap between how your team works and how it
                should.
              </h1>
              <p className="mt-3 font-mono text-[14px] text-accent">
                Operations &amp; Automation Specialist
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
                I came up through education, technical support, and customer
                success before landing in operations and automation — which
                means I find where friction starts, not just where it shows
                up.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[13px] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Let&apos;s work together
                </a>
                <a
                  href="#work"
                  className="rounded-sm border border-border px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
                >
                  See my work
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-mono text-xl font-semibold text-foreground">
                      {s.number}
                    </span>
                    <span className="mt-1 text-[12px] text-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/jeff-photo.png"
              alt="Jeff Chavez"
              width={288}
              height={288}
              priority
              className="h-28 w-28 flex-shrink-0 rounded-full border border-border object-cover object-top sm:h-36 sm:w-36"
            />
          </section>

          {/* PROBLEMS */}
          <section id="problems" className="border-b border-border py-20">
            <SectionLabel>cat ./problems.log</SectionLabel>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              Things I&apos;ve seen firsthand
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
              These aren&apos;t hypothetical pain points. They&apos;re
              patterns I&apos;ve dealt with directly across every role
              I&apos;ve held.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p.id} className="bg-background p-6">
                  <p className="font-mono text-[12px] text-accent">{p.id}</p>
                  <h3 className="mt-3 text-[15px] font-medium leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="border-b border-border py-20">
            <SectionLabel>ls ./services</SectionLabel>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              Where I can help
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
              Four areas I&apos;ve done real work in — not services I&apos;ve
              listed because they sound good.
            </p>
            <div className="mt-10">
              <ServicesTabs />
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="border-b border-border py-20">
            <SectionLabel>./run-process.sh</SectionLabel>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              How I actually approach this
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
              Nothing clever here — just the four things I&apos;ve learned
              matter most after years of building workflows that outlast the
              project.
            </p>
            <div className="mt-10 flex flex-col">
              {process.map((step, i) => (
                <div
                  key={step.num}
                  className={`grid grid-cols-[40px_1fr] gap-x-5 py-6 ${
                    i !== process.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-mono text-[13px] text-accent">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="border-b border-border py-20">
            <SectionLabel>ls ./work --selected</SectionLabel>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              Things I&apos;ve actually built
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-muted">
              A few projects that show how I work — the problem, what I did,
              and what came out the other end.
            </p>
            <WorkGrid work={work} />
          </section>

          {/* ABOUT */}
          <section id="about" className="border-b border-border py-20">
            <SectionLabel>cat ./about.md</SectionLabel>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              Not the typical path
            </h2>
            <div className="mt-8 max-w-2xl">
              <p className="text-[14px] leading-relaxed text-muted">
                I studied English education, moved into technical support for
                surveillance hardware, then into customer success for an HR
                software platform, and eventually into executive operations
                and automation. That path is unusual — and it&apos;s the
                reason I approach process problems differently than someone
                who came up through engineering. I&apos;ve been on the broken
                end of a workflow before I ever built one.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                Because I&apos;ve handled support tickets, managed a busy
                executive&apos;s calendar and inbox, and sat on the client
                side of a CRM that wasn&apos;t working, I tend to find the
                actual friction point quickly. Most automation problems
                aren&apos;t technical. They&apos;re communication problems
                wearing a technical disguise.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                I&apos;m based in Cavite, Philippines and work remotely
                across time zones. Outside work: I&apos;m slowly learning to
                bind books by hand, picking up languages when something
                interesting comes up, and reading more than I probably
                should.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2.5 py-1 font-mono text-[12px] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* CONTACT */}
        <section id="contact" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <p className="flex justify-center font-mono text-[13px] text-muted">
              contact --send
            </p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight sm:text-3xl">
              Say hello
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
              Open to freelance projects, consulting, and full-time remote
              roles. Email is the fastest way to reach me — I check it
              religiously.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:jeff.chavez0828@gmail.com"
                className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[13px] text-accent-foreground transition-opacity hover:opacity-90"
              >
                jeff.chavez0828@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jefffchavez1689/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-6 font-mono text-[12px] text-muted">
              Cavite, Philippines
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
