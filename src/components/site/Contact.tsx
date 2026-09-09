import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Máximo de 100 caracteres"),
  company: z.string().trim().min(2, "Informe a empresa").max(120, "Máximo de 120 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(20, "Telefone inválido")
    .regex(/^[0-9()+\-.\s]+$/, "Use apenas números e símbolos de telefone"),
  message: z.string().trim().min(10, "Conte um pouco mais").max(1000, "Máximo de 1000 caracteres"),
});

const empty = { name: "", company: "", email: "", phone: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set =
    (k: keyof typeof empty) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Revise os campos destacados.");
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm(empty);
      toast.success("Mensagem enviada!", {
        description: "Respondemos em até 1 dia útil.",
      });
    }, 700);
  };

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Contato</p>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Fale diretamente com os criadores da LeakLess.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conte o tamanho da sua operação e mostramos, em uma conversa de 20 minutos, onde
            costumamos encontrar dinheiro parado.
          </p>

          <ul className="mt-8 grid gap-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Mail className="h-4 w-4" />
              </span>
              contato@leakless.com.br
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <MessageSquare className="h-4 w-4" />
              </span>
              Resposta em até 1 dia útil
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              São Paulo · atendimento remoto em todo o Brasil
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} noValidate className="surface-panel rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={set("name")}
                  maxLength={100}
                  placeholder="Seu nome"
                />
                {errors["name"] && <p className="text-xs text-destructive">{errors["name"]}</p>}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={set("company")}
                  maxLength={120}
                  placeholder="Nome da empresa"
                />
                {errors["company"] && (
                  <p className="text-xs text-destructive">{errors["company"]}</p>
                )}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  maxLength={255}
                  placeholder="voce@empresa.com.br"
                />
                {errors["email"] && <p className="text-xs text-destructive">{errors["email"]}</p>}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  inputMode="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  maxLength={20}
                  placeholder="(11) 90000-0000"
                />
                {errors["phone"] && <p className="text-xs text-destructive">{errors["phone"]}</p>}
              </div>
            </div>

            <div className="mt-4 grid gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={set("message")}
                maxLength={1000}
                placeholder="Qual o gasto mensal aproximado e onde você suspeita de desperdício?"
              />
              {errors["message"] && <p className="text-xs text-destructive">{errors["message"]}</p>}
            </div>

            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full" disabled={sending}>
              <Send className="h-4 w-4" />
              {sending ? "Enviando..." : "Enviar mensagem"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Seus dados são usados apenas para este contato comercial.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
