import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const nav = [
  { label: "Sobre", href: "#topo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export function SiteFooter() {
  return (
    <footer className="ink-panel">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Encontramos dinheiro que sua empresa está perdendo sem perceber.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold">Navegação</h2>
            <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="transition-colors hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Documentos legais">
            <h2 className="text-sm font-semibold">Legal</h2>
            <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/70">
              <li>
                <Link to="/privacidade" className="transition-colors hover:text-accent">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="transition-colors hover:text-accent">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55">
          © 2026 LeakLess. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
