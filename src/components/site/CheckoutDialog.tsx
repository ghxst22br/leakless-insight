import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, CreditCard, Lock, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type CheckoutPlan = { name: string; price: string; period: string } | null;

const companySchema = z.object({
  company: z.string().trim().min(2, "Informe o nome da empresa").max(120),
  email: z.string().trim().email("E-mail inválido").max(255),
  cnpj: z.string().trim().min(11, "Informe um CNPJ válido").max(20),
});

const paymentSchema = z.object({
  holder: z.string().trim().min(2, "Informe o nome impresso no cartão").max(120),
  card: z
    .string()
    .trim()
    .regex(/^[0-9 ]{13,23}$/, "Número de cartão inválido"),
  expiry: z.string().trim().regex(/^\d{2}\/\d{2}$/, "Use o formato MM/AA"),
  cvv: z.string().trim().regex(/^\d{3,4}$/, "CVV inválido"),
});

const steps = ["Empresa", "Pagamento", "Confirmação"];

export function CheckoutDialog({
  plan,
  onOpenChange,
}: {
  plan: CheckoutPlan;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    company: "",
    email: "",
    cnpj: "",
    holder: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const close = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(() => {
        setStep(0);
        setErrors({});
      }, 200);
    }
  };

  const next = () => {
    const schema = step === 0 ? companySchema : paymentSchema;
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  return (
    <Dialog open={plan !== null} onOpenChange={close}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {step === 2 ? "Assinatura confirmada" : `Assinar plano ${plan?.name ?? ""}`}
          </DialogTitle>
          <DialogDescription>
            {step === 2
              ? "Enviamos os próximos passos por e-mail."
              : `${plan?.price ?? ""} ${plan?.period ?? ""} · cancele quando quiser`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  i <= step ? "bg-accent" : "bg-secondary",
                )}
              />
            </div>
          ))}
        </div>

        {step === 0 && (
          <div className="grid gap-4 pt-2">
            <Field
              id="company"
              label="Empresa"
              value={form.company}
              onChange={set("company")}
              error={errors["company"]}
              placeholder="Razão social"
            />
            <Field
              id="email"
              label="E-mail corporativo"
              type="email"
              value={form.email}
              onChange={set("email")}
              error={errors["email"]}
              placeholder="financeiro@empresa.com.br"
            />
            <Field
              id="cnpj"
              label="CNPJ"
              value={form.cnpj}
              onChange={set("cnpj")}
              error={errors["cnpj"]}
              placeholder="00.000.000/0001-00"
            />
            <Button variant="hero" size="lg" onClick={next}>
              Continuar para pagamento
            </Button>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 pt-2">
            <Field
              id="holder"
              label="Nome no cartão"
              value={form.holder}
              onChange={set("holder")}
              error={errors["holder"]}
              placeholder="Como impresso no cartão"
            />
            <Field
              id="card"
              label="Número do cartão"
              inputMode="numeric"
              value={form.card}
              onChange={set("card")}
              error={errors["card"]}
              placeholder="0000 0000 0000 0000"
            />
            <div className="grid grid-cols-2 gap-4">
              <Field
                id="expiry"
                label="Validade"
                value={form.expiry}
                onChange={set("expiry")}
                error={errors["expiry"]}
                placeholder="MM/AA"
              />
              <Field
                id="cvv"
                label="CVV"
                inputMode="numeric"
                value={form.cvv}
                onChange={set("cvv")}
                error={errors["cvv"]}
                placeholder="123"
              />
            </div>
            <div className="flex items-start gap-2 rounded-xl bg-secondary/70 p-3 text-xs text-muted-foreground">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Ambiente de demonstração: nenhum pagamento real é processado e nenhum dado de cartão é
              armazenado.
            </div>
            <div className="flex flex-col gap-2 sm:flex-row-reverse">
              <Button variant="hero" size="lg" className="sm:flex-1" onClick={next}>
                <CreditCard className="h-4 w-4" /> Confirmar assinatura
              </Button>
              <Button variant="ghost" size="lg" onClick={() => setStep(0)}>
                Voltar
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 pt-2 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/12 text-accent">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <p className="text-sm text-muted-foreground">
              O plano <strong className="text-foreground">{plan?.name}</strong> está reservado para{" "}
              <strong className="text-foreground">{form.company}</strong>. Nosso time entra em
              contato em até 1 dia útil para liberar o envio dos primeiros documentos.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" /> Dados tratados conforme a LGPD
            </div>
            <Button variant="hero" size="lg" onClick={() => close(false)}>
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error?: string | undefined }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} aria-invalid={!!error} maxLength={140} {...props} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
