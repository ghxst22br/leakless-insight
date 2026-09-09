import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AlertTriangle, ArrowDownRight, CheckCircle2, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const trend = [
  { m: "Jan", custo: 70000, economia: 0 },
  { m: "Fev", custo: 69400, economia: 600 },
  { m: "Mar", custo: 68200, economia: 1800 },
  { m: "Abr", custo: 67500, economia: 2500 },
  { m: "Mai", custo: 66100, economia: 3900 },
  { m: "Jun", custo: 65300, economia: 4700 },
  { m: "Jul", custo: 64200, economia: 5800 },
  { m: "Ago", custo: 63400, economia: 6600 },
];

const split = [
  { name: "Assinaturas", value: 34 },
  { name: "Fornecedores", value: 26 },
  { name: "Bancário", value: 21 },
  { name: "Utilidades", value: 19 },
];

const pieColors = ["var(--accent)", "var(--primary)", "var(--chart-3)", "var(--chart-4)"];

const alerts = [
  {
    icon: AlertTriangle,
    title: "Cobrança duplicada detectada",
    detail: "Fornecedor Alfa · R$ 1.200 · 2 lançamentos idênticos",
    tone: "warn" as const,
  },
  {
    icon: Clock,
    title: "Licenças ociosas há 60 dias",
    detail: "12 assentos sem login · R$ 600/mês",
    tone: "warn" as const,
  },
  {
    icon: CheckCircle2,
    title: "Reajuste corrigido",
    detail: "Contrato de limpeza · crédito de R$ 3.480",
    tone: "ok" as const,
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function DashboardPreview() {
  const [tab, setTab] = useState<"visao" | "alertas">("visao");

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Dashboard demonstrativo
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Sua operação financeira em uma única tela.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="ink-panel mt-12 rounded-[2rem] p-3 sm:p-5">
            <div className="rounded-[1.5rem] bg-card p-5 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">Rede Vitalis · Visão consolidada</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Últimos 8 meses · atualizado hoje
                  </p>
                </div>
                <div className="flex shrink-0 gap-1 rounded-full bg-secondary p-1">
                  {(
                    [
                      ["visao", "Visão geral"],
                      ["alertas", "Alertas"],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTab(key)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                        tab === key
                          ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Custo fixo mensal", value: brl(63400), sub: "-9,4% vs. janeiro" },
                  { label: "Economia acumulada", value: brl(25900), sub: "8 meses" },
                  { label: "Vazamentos abertos", value: "7", sub: "3 de alta prioridade" },
                ].map((k) => (
                  <div key={k.label} className="rounded-2xl bg-secondary/60 p-4">
                    <p className="text-xs text-muted-foreground">{k.label}</p>
                    <p className="font-display mt-1 text-xl font-semibold">{k.value}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-accent">
                      <ArrowDownRight className="h-3.5 w-3.5" />
                      {k.sub}
                    </p>
                  </div>
                ))}
              </div>

              {tab === "visao" ? (
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trend} margin={{ top: 8, right: 8, left: -14, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gCusto" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.28} />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="gEcon" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="var(--border)"
                        />
                        <XAxis
                          dataKey="m"
                          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                          tickFormatter={(v: number) => `${Math.round(v / 1000)}k`}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          formatter={(v: number, n: string) => [brl(v), n]}
                          contentStyle={{
                            borderRadius: 12,
                            border: "1px solid var(--border)",
                            fontSize: 12,
                            background: "var(--card)",
                            color: "var(--card-foreground)",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="custo"
                          stroke="var(--primary)"
                          strokeWidth={2}
                          fill="url(#gCusto)"
                        />
                        <Area
                          type="monotone"
                          dataKey="economia"
                          stroke="var(--accent)"
                          strokeWidth={2}
                          fill="url(#gEcon)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={split}
                          dataKey="value"
                          nameKey="name"
                          innerRadius="58%"
                          outerRadius="86%"
                          paddingAngle={3}
                          stroke="none"
                        >
                          {split.map((_, i) => (
                            <Cell key={i} fill={pieColors[i % pieColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(v: number, n: string) => [`${v}%`, n]}
                          contentStyle={{
                            borderRadius: 12,
                            border: "1px solid var(--border)",
                            fontSize: 12,
                            background: "var(--card)",
                            color: "var(--card-foreground)",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ) : (
                <ul className="mt-6 grid gap-3">
                  {alerts.map((a) => (
                    <li
                      key={a.title}
                      className="flex items-start gap-4 rounded-2xl border border-border p-4"
                    >
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                          a.tone === "ok"
                            ? "bg-accent/12 text-accent"
                            : "bg-destructive/10 text-destructive",
                        )}
                      >
                        <a.icon className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{a.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{a.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
