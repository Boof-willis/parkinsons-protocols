"use client";

import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { getProtocolsByTier, type ResourceTier, type Protocol } from "@/lib/protocolsConfig";

export default function PDProtocol() {
  const [tier, setTier] = useState<ResourceTier>("max");
  const [sortBy, setSortBy] = useState<"importance" | "cost" | "ease">("importance");

  const currentList = useMemo(() => {
    const protocols = getProtocolsByTier(tier);
    
    // Create a copy to avoid mutating the original
    const sorted = [...protocols];
    
    // Sort based on selected criteria
    if (sortBy === "importance") {
      sorted.sort((a, b) => b.importance - a.importance);
    } else if (sortBy === "cost") {
      sorted.sort((a, b) => a.cost - b.cost);
    } else if (sortBy === "ease") {
      sorted.sort((a, b) => b.ease - a.ease);
    }
    
    return sorted;
  }, [tier, sortBy]);

  const handleTierChange = useCallback((newTier: ResourceTier) => {
    setTier(newTier);
  }, []);

  const handleSortChange = useCallback((value: string) => {
    setSortBy(value as typeof sortBy);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <section>
        <h1 className="text-3xl font-bold mb-4">Healing Protocols for Parkinson's</h1>
        <div className="space-y-3 text-lg text-muted-foreground">
          <p>
            Parkinson's disease is a neurodegenerative disorder characterized by the progressive loss of dopaminergic neurons in the brain, leading to motor symptoms like tremors, rigidity, and bradykinesia. However, research increasingly suggests that PD involves far more than just the brain.
          </p>
          <p>
            The gut-brain axis, microbiome shifts, loss of hydrogen-producing bacteria, insulin resistance (sometimes called "type 3 diabetes" in the brain), heavy metal exposure, and chronic infections (oral and gut) may all contribute to disease progression. This page organizes evidence-based protocols by resource level and allows you to dynamically rank them by importance, cost, or ease of implementation.
          </p>
          <p>
            Each protocol includes detailed information about the evidence, benefits, risks, and practical considerations. Use the buttons below to filter by resource level and the tabs to sort protocols according to your priorities.
          </p>
        </div>
        <Link 
          href="/pd/learn-more" 
          className="text-blue-600 hover:text-blue-800 hover:underline mt-4 inline-block font-medium"
        >
          Learn more about the science →
        </Link>
      </section>

      <section className="flex flex-wrap gap-3">
        <Button 
          onClick={() => handleTierChange("max")}
          variant={tier === "max" ? "default" : "outline"}
        >
          Maximum Resources
        </Button>
        <Button 
          onClick={() => handleTierChange("average")}
          variant={tier === "average" ? "default" : "outline"}
        >
          Average Resources
        </Button>
        <Button 
          onClick={() => handleTierChange("limited")}
          variant={tier === "limited" ? "default" : "outline"}
        >
          Limited Resources
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Protocol List</h2>
        <div className="grid gap-3">
          {currentList.map((item, index) => (
            <Link
              key={item.slug}
              href={`/pd/protocols/${item.slug}`}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-border smooth-transition optimize-rendering hover:scale-[1.005] active:scale-[0.995]"
              style={{ transform: 'translateZ(0)' }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-medium text-muted-foreground mr-2">
                    {index + 1}.
                  </span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span>Imp: {item.importance}</span>
                  <span>Cost: {item.cost}</span>
                  <span>Ease: {item.ease}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Rank Protocols By:</h3>
        <Tabs value={sortBy} onValueChange={handleSortChange} className="w-full">
          <TabsList>
            <TabsTrigger value="importance">Importance</TabsTrigger>
            <TabsTrigger value="cost">Cost</TabsTrigger>
            <TabsTrigger value="ease">Ease of Implementation</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
    </div>
  );
}

