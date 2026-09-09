import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Findings } from "@/components/site/Findings";
import { CaseStudy } from "@/components/site/CaseStudy";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Benefits } from "@/components/site/Benefits";
import { Calculator } from "@/components/site/Calculator";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "LeakLess — Pare de perder dinheiro sem perceber";
const description =
  "A LeakLess usa IA para analisar contratos, contas, assinaturas e despesas, encontrar desperdícios ocultos e gerar economia real para sua empresa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LeakLess",
    applicationCategory: "BusinessApplication",
    description,
    offers: [
      { "@type": "Offer", name: "Starter", price: "199", priceCurrency: "BRL" },
      { "@type": "Offer", name: "Business", price: "599", priceCurrency: "BRL" },
    ],
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Findings />
        <CaseStudy />
        <DashboardPreview />
        <Benefits />
        <Calculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLd)}
      </script>
    </div>
  );
}
