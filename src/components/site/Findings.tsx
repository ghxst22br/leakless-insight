import {
  AlarmClock,
  Building2,
  Copy,
  Droplets,
  FileWarning,
  Landmark,
  LayoutGrid,
  PackageX,
  RefreshCcw,
  UserMinus,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Copy, title: "Cobranças duplicadas ou incorretas" },
  { icon: LayoutGrid, title: "Assinaturas sem uso" },
  { icon: RefreshCcw, title: "Planos mais caros do que o necessário" },
  { icon: FileWarning, title: "Reajustes acima do contrato" },
  { icon: AlarmClock, title: "Multas e juros evitáveis" },
  { icon: Landmark, title: "Tarifas bancárias excessivas" },
  { icon: PackageX, title: "Serviços pagos mas não entregues" },
  { icon: Building2, title: "Fornecedores acima do preço de mercado" },
  { icon: Droplets, title: "Consumo anormal de água, energia ou telefonia" },
  { icon: UserMinus, title: "Licenças de software pagas para ex-funcionários" },
];

export function Findings() {
  return (
    <section id="solucoes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            O que a LeakLess encontra
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Os vazamentos financeiros que passam despercebidos todo mês.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
              <div className="group surface-panel flex h-full items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <p className="min-w-0 text-sm leading-snug font-medium">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
