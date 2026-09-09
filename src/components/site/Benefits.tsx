import { Activity, BrainCircuit, ClipboardCheck, Gauge, Timer, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: Wallet,
    title: "Economia imediata",
    text: "Recupere recursos que já estão sendo desperdiçados.",
  },
  {
    icon: Activity,
    title: "Monitoramento contínuo",
    text: "Acompanhe despesas em tempo real.",
  },
  {
    icon: Timer,
    title: "Sem auditorias demoradas",
    text: "Processo automatizado de ponta a ponta.",
  },
  {
    icon: BrainCircuit,
    title: "IA especializada",
    text: "Análise financeira inteligente treinada em contratos e despesas.",
  },
  {
    icon: ClipboardCheck,
    title: "Relatórios acionáveis",
    text: "Mostramos exatamente o que corrigir.",
  },
  {
    icon: Gauge,
    title: "ROI rápido",
    text: "A economia encontrada normalmente supera o custo da plataforma.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Benefícios
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Feito para quem responde pelo resultado financeiro.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80}>
              <div className="h-full bg-card p-7 transition-colors duration-300 hover:bg-secondary/50">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
