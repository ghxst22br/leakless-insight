import { ArrowRight, ShieldCheck, Sparkles, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import heroImg from "@/assets/hero-dashboard.jpg";

const stats = [
  { value: "R$ 42M+", label: "em vazamentos identificados" },
  { value: "7,4%", label: "de economia média sobre o custo fixo" },
  { value: "48h", label: "para o primeiro relatório" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="halo pointer-events-none absolute inset-x-0 top-0 h-[560px]" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Inteligência financeira com IA para reduzir custos
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Pare de perder dinheiro <span className="text-gradient-accent">sem perceber.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A LeakLess analisa contratos, contas, assinaturas e despesas para encontrar
              desperdícios ocultos e gerar economia real para sua empresa.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="ink" size="xl" asChild>
                <a href="#contato">
                  Solicitar demonstração <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="#planos">Assinar agora</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" /> Dados criptografados e LGPD
              </span>
              <span className="inline-flex items-center gap-1.5">
                <TrendingDown className="h-4 w-4 text-accent" /> Sem auditoria manual
              </span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-accent/8 blur-3xl" />
          <img
            src={heroImg}
            width={1408}
            height={1104}
            alt="Painel da LeakLess exibindo gráficos de despesas, alertas de economia e análise de contratos por IA"
            className="relative w-full drop-shadow-[0_40px_60px_rgba(15,30,60,0.18)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
