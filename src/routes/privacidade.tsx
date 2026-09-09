import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Política de Privacidade | LeakLess";
const description =
  "Como a LeakLess coleta, protege e trata os documentos e dados financeiros enviados pelas empresas clientes, em conformidade com a LGPD.";

export const Route = createFileRoute("/privacidade")({
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
  component: Privacidade,
});

function Privacidade() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="setembro de 2026"
      sections={[
        {
          heading: "1. Dados que coletamos",
          body: "Coletamos dados de identificação da empresa e do responsável (nome, e-mail, telefone, CNPJ) e os documentos financeiros que você envia para análise, como contratos, notas fiscais, faturas e extratos.",
        },
        {
          heading: "2. Como usamos os dados",
          body: "Os documentos são usados exclusivamente para identificar divergências, desperdícios e oportunidades de economia na sua operação, e para gerar os relatórios e alertas da plataforma.",
        },
        {
          heading: "3. Segurança",
          body: "Os dados são criptografados em trânsito e em repouso, o acesso é restrito por perfil e registrado em log de auditoria. Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.",
        },
        {
          heading: "4. Retenção e exclusão",
          body: "Mantemos os documentos enquanto a assinatura estiver ativa. A qualquer momento você pode solicitar a exportação ou a exclusão definitiva dos dados pelo e-mail contato@leakless.com.br.",
        },
        {
          heading: "5. Seus direitos (LGPD)",
          body: "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade e exclusão dos dados pessoais, conforme a Lei Geral de Proteção de Dados.",
        },
      ]}
    />
  );
}
