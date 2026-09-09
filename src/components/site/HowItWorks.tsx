import { BrainCircuit, FileUp, PiggyBank, Radar } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: FileUp,
    title: "Envie seus documentos",
    text: "Contratos, notas fiscais, contas, assinaturas e relatórios financeiros.",
  },
  {
    icon: BrainCircuit,
    title: "A IA realiza a análise",
    text: "O sistema verifica milhares de registros automaticamente.",
  },
  {
    icon: Radar,
    title: "Encontramos vazamentos financeiros",
    text: "Detectamos cobranças indevidas, desperdícios e oportunidades de redução de custos.",
  },
  {
    icon: PiggyBank,
    title: "Você economiza",
    text: "Receba relatórios claros mostrando exatamente onde agir.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-border bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Quatro etapas entre os seus dados e a economia.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem planilhas, sem auditoria manual, sem meses de projeto. A análise roda sozinha e
            devolve o que precisa de ação.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <div className="surface-panel h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
