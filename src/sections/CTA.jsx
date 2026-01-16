import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CTA() {
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
              <div>
                <Label>Company</Label>
                <Input className="mt-2" placeholder="Company name" />
              </div>
              <div>
                <Label>Email</Label>
                <Input className="mt-2" placeholder="hello@company.com" />
              </div>
              <div>
                <Label>Project summary</Label>
                <Input className="mt-2" placeholder="What do you need to theme, dimensions, environment..." />
              </div>

              <Button className="w-full rounded-2xl">Send request</Button>

              <p className="text-xs text-foreground/50">
                This form can connect to email, a CRM, or your preferred workflow once ready.
              </p>
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
