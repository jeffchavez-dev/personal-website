export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">© {new Date().getFullYear()} Jeff Chavez</p>
        <div className="flex gap-5 font-mono">
          <a
            href="mailto:jeffchavez.ai@gmail.com"
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jefffchavez1689/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
