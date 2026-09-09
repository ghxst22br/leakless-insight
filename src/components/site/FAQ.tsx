import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Como funciona a análise?",
    a: "Você envia contratos, notas fiscais, faturas, extratos e relatórios financeiros. A LeakLess estrutura esses documentos, cruza os lançamentos com os contratos vigentes e devolve um relatório com cada divergência encontrada, o valor envolvido e a ação recomendada.",
  },
  {
    q: "Os dados são seguros?",
    a: "Sim. Os documentos trafegam e ficam armazenados criptografados, o acesso é restrito por perfil e todo o tratamento segue a LGPD. Você pode solicitar a exclusão completa dos seus dados a qualquer momento.",
  },
  {
    q: "Quanto tempo leva?",
    a: "O primeiro relatório costuma sair em até 48 horas após o envio dos documentos. A partir daí, o monitoramento é contínuo e novos vazamentos aparecem como alertas assim que são detectados.",
  },
  {
    q: "Como a cobrança funciona?",
    a: "A assinatura é mensal, sem fidelidade, cobrada por cartão ou boleto conforme o plano escolhido. O limite de transações é do plano; se sua operação crescer, você troca de plano sem perder o histórico.",
  },
  {
    q: "Existe período de teste?",
    a: "Sim. Fazemos uma análise inicial demonstrativa com uma amostra dos seus documentos. Você vê os vazamentos encontrados antes de decidir assinar.",
  },
  {
    q: "Como a IA encontra desperdícios?",
    a: "Os modelos comparam cada cobrança com o contrato correspondente, com o histórico da própria empresa e com faixas de preço de mercado. Padrões como duplicidade, reajuste fora do índice, consumo atípico e licenças ociosas são sinalizados automaticamente e revisados antes de virarem recomendação.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não encontrou o que procurava?{" "}
            <a href="#contato" className="font-medium text-accent underline-offset-4 hover:underline">
              Fale com a gente
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
