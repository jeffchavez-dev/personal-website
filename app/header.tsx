import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#services", label: "~/services" },
  { href: "#work", label: "~/work" },
  { href: "#about", label: "~/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="#"
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Jeff Chavez
        </Link>
        <nav className="flex items-center gap-1 font-mono text-[13px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-sm px-3 py-1.5 text-muted transition-colors hover:text-foreground sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-sm border border-border px-3 py-1.5 text-accent transition-colors hover:border-accent"
          >
            ~/contact
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
