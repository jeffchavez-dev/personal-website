"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type WorkDetail = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  problem: string;
  solutionIntro: string;
  solutionPoints: string[];
  highlights: string[];
  resultText: string;
  tools: string[];
};

export type WorkItem = {
  company: string;
  year: string;
  title: string;
  body: string;
  result: string;
  detail?: WorkDetail;
};

export function WorkGrid({ work }: { work: WorkItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? work[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {work.map((w, i) => {
          const clickable = Boolean(w.detail);
          return (
            <div
              key={w.title}
              onClick={clickable ? () => setOpenIndex(i) : undefined}
              role={clickable ? "button" : undefined}
              tabIndex={clickable ? 0 : undefined}
              onKeyDown={
                clickable
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") setOpenIndex(i);
                    }
                  : undefined
              }
              className={`flex flex-col rounded-sm border border-border p-6 transition-colors hover:border-accent/50 ${
                clickable ? "cursor-pointer" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                  {w.company}
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {w.year}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-medium leading-snug">
                {w.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted">
                {w.body}
              </p>
              <div className="mt-5 rounded-sm border border-border px-3 py-2 font-mono text-[12px] text-accent">
                ↑ {w.result}
              </div>
              {clickable && (
                <span className="mt-3 font-mono text-[12px] text-muted transition-colors">
                  View full case study →
                </span>
              )}
            </div>
          );
        })}
      </div>

      {active?.detail && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-sm border border-border bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <X size={16} strokeWidth={1.75} />
            </button>

            <Image
              src={active.detail.image}
              alt={active.title}
              width={active.detail.imageWidth}
              height={active.detail.imageHeight}
              className="w-full rounded-t-sm border-b border-border object-cover"
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">
                  {active.company}
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {active.year}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl tracking-tight">
                {active.title}
              </h3>

              <p className="mt-6 font-mono text-[12px] tracking-[0.12em] text-accent uppercase">
                The Problem
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {active.detail.problem}
              </p>

              <p className="mt-6 font-mono text-[12px] tracking-[0.12em] text-accent uppercase">
                The Solution
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {active.detail.solutionIntro}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {active.detail.solutionPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[12px] tracking-[0.12em] text-accent uppercase">
                Technical Highlights
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {active.detail.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[12px] tracking-[0.12em] text-accent uppercase">
                The Result
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {active.detail.resultText}
              </p>

              <div className="mt-6 rounded-sm border border-border bg-surface p-6">
                <p className="font-mono text-[12px] tracking-[0.12em] text-muted uppercase">
                  Tools I Use
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.detail.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border border-border px-2.5 py-1 font-mono text-[12px] text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
