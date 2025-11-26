import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProtocolsByTier, type ResourceTier, type Protocol } from "@/lib/protocolsConfig";

interface ProtocolFilterProps {
  initialTier?: ResourceTier;
  initialSort?: "importance" | "cost" | "ease";
}

export default function ProtocolFilter({ 
  initialTier = "max",
  initialSort = "importance"
}: ProtocolFilterProps) {
  const [tier, setTier] = useState<ResourceTier>(initialTier);
  const [sortBy, setSortBy] = useState<"importance" | "cost" | "ease">(initialSort);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const currentList = useMemo(() => {
    const protocols = getProtocolsByTier(tier);
    const sorted = [...protocols];
    
    const multiplier = sortDirection === "desc" ? -1 : 1;
    
    if (sortBy === "importance") {
      sorted.sort((a, b) => multiplier * (b.importance - a.importance));
    } else if (sortBy === "cost") {
      sorted.sort((a, b) => multiplier * (a.cost - b.cost));
    } else if (sortBy === "ease") {
      sorted.sort((a, b) => multiplier * (b.ease - a.ease));
    }
    
    return sorted;
  }, [tier, sortBy, sortDirection]);

  const handleTierChange = useCallback((newTier: ResourceTier) => {
    setTier(newTier);
  }, []);

  const handleSortChange = useCallback((value: string) => {
    setSortBy(value as typeof sortBy);
  }, []);

  return (
    <div className="space-y-8">
      <section className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Select a Protocol</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => handleTierChange("max")}
            className={`inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              tier === "max"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            Maximum Resources
          </button>
          <button
            onClick={() => handleTierChange("average")}
            className={`inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              tier === "average"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            Average Resources
          </button>
          <button
            onClick={() => handleTierChange("limited")}
            className={`inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              tier === "limited"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            Limited Resources
          </button>
        </div>
      </section>

      <section className="space-y-6 text-center">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">Rank Therapies By</h3>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <button
            onClick={() => {
              setSortBy("importance");
            }}
            className={`inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              sortBy === "importance"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            Importance
          </button>
          <button
            onClick={() => {
              setSortBy("cost");
            }}
            className={`inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              sortBy === "cost"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            Cost
          </button>
          <button
            onClick={() => {
              setSortBy("ease");
            }}
            className={`inline-flex items-center justify-center rounded-full px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
              sortBy === "ease"
                ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10"
            }`}
          >
            <span className="hidden sm:inline">Ease of Implementation</span>
            <span className="sm:hidden">Ease</span>
          </button>
          
          <button
            onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
            className="inline-flex items-center justify-center rounded-full px-3 py-2 sm:py-2.5 bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/10 transition-all"
            aria-label={sortDirection === "asc" ? "Sort high to low" : "Sort low to high"}
          >
            {sortDirection === "desc" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 16 4 4 4-4"></path>
                <path d="M7 20V4"></path>
                <path d="m21 8-4-4-4 4"></path>
                <path d="M17 4v16"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
                <path d="m21 16-4 4-4-4"></path>
                <path d="M17 20V4"></path>
              </svg>
            )}
          </button>
        </div>
      </section>

      <section className="pb-8">
        <div className="grid gap-4">
          {currentList.map((item, index) => (
            <a
              key={item.slug}
              href={`/pd/protocols/${item.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-slate-200/60 p-4 sm:p-6 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-2">
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-slate-400 mr-2 text-xs sm:text-sm group-hover:text-slate-600 transition-colors">
                    {index + 1}.
                  </span>
                  <span className="text-sm sm:text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-1.5 sm:gap-3 text-[10px] sm:text-xs font-medium text-slate-600 flex-shrink-0">
                  <span className="bg-slate-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md whitespace-nowrap">Imp: {item.importance}</span>
                  <span className="bg-slate-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md whitespace-nowrap">Cost: {item.cost}</span>
                  <span className="bg-slate-100 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md whitespace-nowrap">Ease: {item.ease}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

