import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#topo" className="min-w-0" aria-label="LeakLess — início">
          <Logo />
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-2 hidden items-center gap-2 sm:flex">
            <Button variant="ghost" size="sm" asChild>
              <a href="#contato">Solicitar demo</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#planos">Assinar agora</a>
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 pb-2">
              <Button variant="outline" asChild onClick={() => setOpen(false)}>
                <a href="#contato">Solicitar demonstração</a>
              </Button>
              <Button variant="hero" asChild onClick={() => setOpen(false)}>
                <a href="#planos">Assinar agora</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
