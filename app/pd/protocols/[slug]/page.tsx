import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProtocolBySlug, getAllProtocolSlugs } from "@/lib/protocolsConfig";

export async function generateStaticParams() {
  const slugs = getAllProtocolSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProtocolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = getProtocolBySlug(params.slug);

  if (!protocol) {
    notFound();
  }

  const tierLabels: Record<string, string> = {
    max: "Maximum Resources",
    average: "Average Resources",
    limited: "Limited Resources",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8 optimize-rendering">
      <div>
        <Link href="/pd">
          <Button variant="outline" className="mb-6">
            ← Back to Protocols
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{protocol.name}</h1>
        <p className="text-lg text-muted-foreground mb-4">{protocol.summary}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {protocol.tiers.map((tier) => (
            <span
              key={tier}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tierLabels[tier]}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Importance: {protocol.importance}/10</span>
          <span>Cost: {protocol.cost}/10</span>
          <span>Ease: {protocol.ease}/10</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {protocol.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What the Evidence Says</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-green-700">Supportive Findings</h3>
            <ul className="list-disc pl-6 space-y-2">
              {protocol.evidence.supportive.map((finding, index) => (
                <li key={index}>{finding}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-amber-700">Uncertainties and Limitations</h3>
            <ul className="list-disc pl-6 space-y-2">
              {protocol.evidence.limitations.map((limitation, index) => (
                <li key={index}>{limitation}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {protocol.risks && protocol.risks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Risks & Contraindications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {protocol.risks.map((risk, index) => (
                <li key={index}>{risk}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {protocol.slug === "nad" && (
        <Card>
          <CardHeader>
            <CardTitle>NAD+ Deep Dive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Why NAD+ Matters in PD</h3>
              <p>
                NAD+ (nicotinamide adenine dinucleotide) is essential for mitochondrial function, energy production, and cellular repair. In Parkinson's, mitochondrial dysfunction is a core feature, and NAD+ levels may be depleted. Supporting NAD+ levels may help:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Improve mitochondrial ATP production</li>
                <li>Activate sirtuins (SIRT1, SIRT3) which support cellular repair and longevity</li>
                <li>Support DNA repair mechanisms</li>
                <li>Enhance cellular energy in neurons</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Forms of NAD+ Support</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>NR (Nicotinamide Riboside):</strong> Well-absorbed precursor, typically 500-1000mg 1-2x/day</li>
                <li><strong>NMN (Nicotinamide Mononucleotide):</strong> Direct precursor, similar dosing to NR</li>
                <li><strong>IV NAD+:</strong> Direct administration, requires medical supervision, higher cost</li>
                <li><strong>Liposomal forms:</strong> May improve absorption of oral precursors</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Dosing Strategy Examples</h3>
              <p className="mb-2">Starting protocols (consult with healthcare provider):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>NR: 250-500mg once daily, increasing to 500-1000mg 1-2x/day as tolerated</li>
                <li>NMN: Similar dosing to NR, typically 250-500mg 1-2x/day</li>
                <li>IV NAD+: Typically administered in clinical settings, dosing varies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">How It Stacks With Other Interventions</h3>
              <p>
                NAD+ support may work synergistically with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Exercise:</strong> Exercise increases NAD+ demand; supplementation may support recovery and adaptation</li>
                <li><strong>Hydrogen therapy:</strong> Both target mitochondrial function and oxidative stress</li>
                <li><strong>Ketogenic diet:</strong> May support mitochondrial function alongside NAD+</li>
                <li><strong>Other mitochondrial support:</strong> CoQ10, PQQ, and other mitochondrial nutrients</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Risks & Considerations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>NAD+ precursors may deplete methyl donors; consider B vitamin support (B12, folate)</li>
                <li>High doses may cause flushing or digestive upset</li>
                <li>IV NAD+ requires medical supervision</li>
                <li>Not a standalone cure; should be part of a comprehensive approach</li>
                <li>Long-term safety data still emerging</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Summary</p>
              <p>
                NAD+ support is an adjunct therapy that may help address mitochondrial dysfunction and support cellular repair in Parkinson's. It works best as part of a comprehensive protocol that includes exercise, diet, and other evidence-based interventions. It is not a replacement for core therapies but may provide additional support for brain health and energy production.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Selected References</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {protocol.references.map((ref, index) => (
              <li key={index} className="text-sm">
                <strong>{ref.label}:</strong> {ref.citation}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="pt-6">
        <Link href="/pd">
          <Button variant="outline">
            ← Back to Protocols
          </Button>
        </Link>
      </div>
    </div>
  );
}

