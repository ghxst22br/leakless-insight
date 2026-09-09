import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Termos de Uso | LeakLess";
const description =
  "Condições de uso da plataforma LeakLess: assinaturas, limites de análise, responsabilidades e cancelamento.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <LegalPage
      title="Termos de Uso"
      updated="setembro de 2026"
      sections={[
        {
          heading: "1. Objeto",
          body: "A LeakLess disponibiliza uma plataforma de análise financeira que identifica cobranças indevidas, desperdícios e oportunidades de redução de custos a partir dos documentos enviados pelo cliente.",
        },
        {
          heading: "2. Assinaturas",
          body: "Os planos são mensais e sem fidelidade. Cada plano possui um limite de transações analisadas; ao ultrapassá-lo, é possível migrar de plano sem perda do histórico.",
        },
        {
          heading: "3. Responsabilidades do cliente",
          body: "O cliente é responsável pela veracidade e pela legitimidade dos documentos enviados e por garantir que possui autorização para compartilhá-los com a LeakLess.",
        },
        {
          heading: "4. Limitação de responsabilidade",
          body: "Os relatórios têm caráter informativo e de recomendação. As decisões de renegociação, cancelamento ou contestação de cobranças são do cliente. Valores de economia divulgados no site são ilustrativos.",
        },
        {
          heading: "5. Cancelamento",
          body: "O cancelamento pode ser solicitado a qualquer momento e passa a valer no fim do ciclo vigente, sem multa.",
        },
      ]}
    />
  );
}
