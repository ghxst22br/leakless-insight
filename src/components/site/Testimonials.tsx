import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Descobrimos R$8.400 por ano em licenças de software de gente que já tinha saído da empresa. Em duas semanas o custo da plataforma já tinha se pagado.",
    name: "Marina Duarte",
    role: "CFO — Rede Vitalis (clínicas)",
    initials: "MD",
    highlight: "R$ 8.400/ano recuperados",
  },
  {
    quote:
      "A LeakLess achou um reajuste contratual aplicado errado por 11 meses seguidos. Renegociamos com o fornecedor e recebemos o crédito de volta.",
    name: "Rafael Menezes",
    role: "Diretor Financeiro — Grupo Ancora Log",
    initials: "RM",
    highlight: "R$ 26.700 em crédito",
  },
  {
    quote:
      "Tarifas bancárias e telefonia eram um ponto cego. Hoje recebo alerta no mesmo dia em que uma cobrança sai do padrão.",
    name: "Camila Ferraz",
    role: "Sócia-fundadora — Estúdio Norte",
    initials: "CF",
    highlight: "9% de corte no custo fixo",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Depoimentos
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Dinheiro que voltou para o caixa.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="article" key={t.name} delay={i * 100}>
              <figure className="surface-panel flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <span className="mt-6 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {t.highlight}
                </span>
                <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-5">
                  <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {t.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
