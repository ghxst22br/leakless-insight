import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const maturity = [
  { key: "baixa", label: "Pouco controle", rate: 0.09 },
  { key: "media", label: "Controle parcial", rate: 0.06 },
  { key: "alta", label: "Bem controlado", rate: 0.035 },
] as const;

export function Calculator() {
  const [spend, setSpend] = useState(70000);
  const [level, setLevel] = useState<(typeof maturity)[number]["key"]>("media");

  const rate = maturity.find((m) => m.key === level)?.rate ?? 0.06;

  const { monthly, yearly } = useMemo(
    () => ({ monthly: Math.round(spend * rate), yearly: Math.round(spend * rate * 12) }),
    [spend, rate],
  );

  return (
    <section id="calculadora" className="border-y border-border bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Calculadora
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Estime quanto a sua empresa pode recuperar.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ajuste a despesa mensal e o nível de controle atual. O cálculo usa a faixa de economia
            que encontramos com mais frequência em análises reais.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-panel rounded-3xl p-6 sm:p-8">
            <label className="block text-sm font-medium" htmlFor="spend">
              Despesa mensal da empresa
            </label>
            <p className="font-display mt-2 text-3xl font-semibold">{brl(spend)}</p>
            <Slider
              id="spend"
              className="mt-5"
              value={[spend]}
              min={10000}
              max={1000000}
              step={5000}
              onValueChange={(v) => setSpend(v[0] ?? 10000)}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>R$ 10 mil</span>
              <span>R$ 1 milhão</span>
            </div>

            <p className="mt-8 text-sm font-medium">Nível de controle das despesas hoje</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {maturity.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setLevel(m.key)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-xs font-medium transition-all",
                    level === m.key
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted-foreground hover:border-accent/40",
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3 rounded-2xl bg-secondary/70 p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted-foreground">Economia potencial / mês</p>
                <p className="font-display mt-1 text-2xl font-semibold text-accent">
                  {brl(monthly)}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Economia potencial / ano</p>
                <p className="font-display mt-1 text-2xl font-semibold">{brl(yearly)}</p>
              </div>
            </div>

            <Button variant="hero" size="xl" className="mt-6 w-full" asChild>
              <a href="#contato">Quero uma análise da minha empresa</a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Estimativa ilustrativa. O valor real é confirmado após a primeira análise.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
