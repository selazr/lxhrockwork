import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
  // Mejor: usar variables de entorno del bundler (Vite/Next/etc.)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formValues, setFormValues] = useState({
    company: "",
    email: "",
    summary: "",
  });
  const [status, setStatus] = useState("idle");

  const isComplete = useMemo(
    () => Object.values(formValues).every((v) => v.trim().length > 0),
    [formValues],
  );

  const isConfigured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
  );

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isComplete) {
      setStatus("missing");
      return;
    }

    if (!isConfigured) {
      setStatus("error");
      console.error("EmailJS is not configured. Missing env vars.");
      return;
    }

    try {
      setStatus("sending");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          company: formValues.company,
          email: formValues.email,
          summary: formValues.summary,
          reply_to: formValues.email, // útil si lo usas en el template
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setStatus("sent");
      setFormValues({ company: "", email: "", summary: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-muted/60 p-6 shadow-2xl shadow-black/20 dark:bg-foreground/5 md:p-10">
        <SectionHeader
          eyebrow="Contact"
          title="Request a proposal"
          desc="Share your project details and our rockwork team will follow up with scope, timeline, and budget guidance."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-foreground/10 bg-muted/50 dark:bg-foreground/5">
            <CardContent className="space-y-4 p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    className="mt-2"
                    placeholder="Company name"
                    autoComplete="organization"
                    value={formValues.company}
                    onChange={handleChange("company")}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-2"
                    placeholder="hello@company.com"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <Label htmlFor="summary">Project summary</Label>
                  <Input
                    id="summary"
                    name="summary"
                    className="mt-2"
                    placeholder="What do you need to theme, dimensions, environment..."
                    value={formValues.summary}
                    onChange={handleChange("summary")}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <Button
                  className="w-full rounded-2xl"
                  type="submit"
                  disabled={!isComplete || status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send request"}
                </Button>

                <p className="text-xs text-foreground/50">
                  {status === "sent"
                    ? "Thanks! Your request is on its way."
                    : !isConfigured
                      ? "Email sending is not configured (missing EmailJS env vars)."
                      : "This form sends the request via EmailJS."}
                </p>

                {status === "missing" && (
                  <p className="text-xs text-amber-500" role="alert">
                    Please complete all fields before sending the request.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-xs text-red-500" role="alert">
                    Something went wrong sending your request. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="rounded-3xl border border-foreground/10 bg-muted/50 p-6 dark:bg-foreground/5">
            <p className="text-sm font-semibold">What to include</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>• Location: indoor/outdoor/wet</li>
              <li>• Approximate dimensions</li>
              <li>• Visual references (rock style)</li>
              <li>• Target timeline</li>
            </ul>

            <div className="mt-6">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="#brands">Back to brands</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
