import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CheckoutDialog, type CheckoutPlan } from "./CheckoutDialog";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "R$199",
    period: "/mês",
    description: "Para empresas que estão começando a organizar as despesas.",
    features: ["Até 500 transações analisadas", "Relatórios mensais", "Alertas básicos"],
    cta: "Assinar plano",
    featured: false,
  },
  {
    name: "Business",
    price: "R$599",
    period: "/mês",
    description: "Para operações que precisam de monitoramento contínuo.",
    features: [
      "Até 5.000 transações",
      "IA avançada",
      "Alertas em tempo real",
      "Comparação com mercado",
      "Dashboard completo",
    ],
    cta: "Assinar plano",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para grupos com múltiplas unidades e contratos complexos.",
    features: [
      "Transações ilimitadas",
      "Integrações personalizadas",
      "Suporte prioritário",
      "Consultoria especializada",
    ],
    cta: "Falar com vendas",
    featured: false,
  },
];

export function Pricing() {
  const [checkout, setCheckout] = useState<CheckoutPlan>(null);

  return (
    <section id="planos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Planos e assinaturas
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Um custo previsível para uma economia recorrente.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1",
                  p.featured
                    ? "ink-panel shadow-[var(--shadow-lift)] lg:-mt-4 lg:pb-10"
                    : "surface-panel",
                )}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <h3 className="truncate text-lg font-semibold">{p.name}</h3>
                  {p.featured && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-semibold text-accent-foreground">
                      <Sparkles className="h-3 w-3" /> Mais escolhido
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    p.featured ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {p.description}
                </p>

                <p className="font-display mt-6 flex items-baseline gap-1 text-3xl font-semibold">
                  {p.price}
                  <span
                    className={cn(
                      "text-sm font-normal",
                      p.featured ? "text-primary-foreground/60" : "text-muted-foreground",
                    )}
                  >
                    {p.period}
                  </span>
                </p>

                <ul className="mt-6 grid flex-1 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span
                        className={cn(
                          p.featured ? "text-primary-foreground/85" : "text-foreground/85",
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={p.featured ? "hero" : p.name === "Enterprise" ? "outline" : "default"}
                  size="xl"
                  className="mt-8 w-full"
                  asChild={p.name === "Enterprise"}
                  onClick={
                    p.name === "Enterprise"
                      ? undefined
                      : () => setCheckout({ name: p.name, price: p.price, period: p.period })
                  }
                >
                  {p.name === "Enterprise" ? <a href="#contato">{p.cta}</a> : <span>{p.cta}</span>}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Todos os planos incluem onboarding guiado, criptografia dos documentos e cancelamento a
          qualquer momento.
        </p>
      </div>

      <CheckoutDialog plan={checkout} onOpenChange={(o) => !o && setCheckout(null)} />
    </section>
  );
}
