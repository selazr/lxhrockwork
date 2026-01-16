import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isComplete) {
      setStatus("missing");
      return;
    }

    const mailRecipient = "hello@lxhrockwork.com";
    const subject = `Proposal request from ${formValues.company}`;
    const body = [
      `Company: ${formValues.company}`,
      `Email: ${formValues.email}`,
      `Project summary: ${formValues.summary}`,
    ].join("\n");

    const mailto = `mailto:${mailRecipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-4xl border border-foreground/10 bg-foreground/5 p-6 shadow-2xl shadow-black/20 md:p-10">
        <SectionHeader
          eyebrow="Contact"
          title="Request a proposal"
          desc="Share your project details and our rockwork team will follow up with scope, timeline, and budget guidance."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-foreground/10 bg-foreground/5">
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
                    ? "We opened your email app with the proposal details ready to send."
                    : "This form opens your email app so you can send the request right away."}
                </p>
                {status === "missing" && (
                  <p className="text-xs text-amber-500" role="alert">
                    Please complete all fields before sending the request.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6">
            <p className="text-sm font-semibold">What to include</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>• Location: indoor/outdoor/wet</li>
              <li>• Approximate dimensions</li>
              <li>• Visual references (rock style)</li>
              <li>• Target timeline</li>
            </ul>

            <div className="mt-6">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="#configurator">Back to configurator</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
