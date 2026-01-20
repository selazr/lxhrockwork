import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
  // TODO: Replace these placeholder values with your EmailJS credentials.
  // You can create them at https://www.emailjs.com/ (service ID, template ID, public key).
  const EMAILJS_SERVICE_ID = "REPLACE_WITH_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "REPLACE_WITH_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "REPLACE_WITH_PUBLIC_KEY";

  const [formValues, setFormValues] = useState({
    company: "",
    email: "",
    summary: "",
  });
  const [status, setStatus] = useState("idle");

  const isComplete = Object.values(formValues).every((value) => value.trim().length > 0);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isComplete) {
      setStatus("missing");
      return;
    }
    setStatus("sending");

    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        company: formValues.company,
        email: formValues.email,
        summary: formValues.summary,
      },
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("EmailJS request failed");
      }

      setStatus("sent");
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
                  />
                </div>

                <Button className="w-full rounded-2xl" type="submit" disabled={!isComplete}>
                  Send request
                </Button>

                <p className="text-xs text-foreground/50">
                  {status === "sent"
                    ? "Thanks! Your request is on its way."
                    : "We use EmailJS to send this form. Add your service/template/key in the CTA component."}
                </p>
                {status === "missing" && (
                  <p className="text-xs text-amber-500" role="alert">
                    Please complete all fields before sending the request.
                  </p>
                )}
                {status === "sending" && (
                  <p className="text-xs text-foreground/60">Sending...</p>
                )}
                {status === "error" && (
                  <p className="text-xs text-red-500" role="alert">
                    Something went wrong. Please try again after configuring EmailJS.
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
