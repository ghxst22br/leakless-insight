import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Reveal } from "./Reveal";

const findings = [
  { label: "Licenças não utilizadas", detail: "R$600 por mês", value: 7200 },
  { label: "Cobranças duplicadas", detail: "2 × R$1.200", value: 2400 },
  { label: "Plano de telefonia", detail: "R$450 acima do necessário", value: 5400 },
  { label: "Reajuste contratual", detail: "Aplicado incorretamente", value: 3800 },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function CaseStudy() {
  return (
    <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Caso ilustrativo
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Quanto sua empresa pode estar perdendo?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma clínica que gasta R$70.000 por mês envia seus dados dos últimos 12 meses para
            análise. Veja o que a LeakLess identificou.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <ul className="grid h-full gap-3">
              {findings.map((f) => (
                <li
                  key={f.label}
                  className="surface-panel grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-5 py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{f.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{f.detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {brl(f.value)}/ano
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel h-full rounded-3xl p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    Economia estimada no primeiro ano
                  </p>
                  <p className="font-display mt-1 text-3xl font-semibold text-accent sm:text-4xl">
                    R$ 10.000+
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  12 meses analisados
                </span>
              </div>

              <div className="mt-8 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={findings} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                      tickFormatter={(v: string) => v.split(" ")[0]}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                      tickFormatter={(v: number) => `${v / 1000}k`}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "var(--secondary)" }}
                      formatter={(v: number) => [brl(v), "Economia/ano"]}
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                        background: "var(--card)",
                        color: "var(--card-foreground)",
                      }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={54}>
                      {findings.map((_, i) => (
                        <Cell key={i} fill={i === 0 ? "var(--accent)" : "var(--primary)"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Valores ilustrativos com base em padrões recorrentes encontrados em análises de
                empresas de porte semelhante.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
