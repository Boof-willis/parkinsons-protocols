export type ResourceTier = "max" | "average" | "limited";

export interface Protocol {
  name: string;
  slug: string;
  importance: number; // 1-10, higher = more important
  cost: number; // 1-10, higher = more expensive
  ease: number; // 1-10, higher = easier to implement
  tiers: ResourceTier[]; // Which resource tiers this protocol appears in
  summary: string;
  benefits: string[];
  evidence: {
    supportive: string[];
    limitations: string[];
  };
  risks?: string[];
  references: Array<{
    label: string;
    citation: string;
  }>;
}

export const protocolsConfig: Record<string, Protocol> = {
  fmt: {
    name: "Fecal Microbiota Transplant",
    slug: "fmt",
    importance: 9,
    cost: 9,
    ease: 3,
    tiers: ["max"],
    summary: "Fecal Microbiota Transplant (FMT) involves transferring healthy gut bacteria from a carefully screened donor to restore a balanced microbiome. Research suggests that gut dysbiosis may play a significant role in Parkinson's progression, and FMT could potentially help restore beneficial bacteria, including hydrogen-producing species that may be depleted in PD patients.",
    benefits: [
      "May restore beneficial gut bacteria, including hydrogen-producing species",
      "Could improve gut-brain axis communication",
      "May reduce inflammation and improve digestive health",
      "Potential to slow disease progression by addressing root causes"
    ],
    evidence: {
      supportive: [
        "Animal studies show FMT from healthy donors can improve motor symptoms in PD models",
        "Human case reports suggest improvements in constipation and some motor symptoms",
        "Gut microbiome changes are consistently observed in PD patients"
      ],
      limitations: [
        "Limited large-scale clinical trials in PD",
        "Long-term safety and efficacy not fully established",
        "Requires careful donor screening and medical supervision",
        "Regulatory status varies by country"
      ]
    },
    risks: [
      "Infection risk if donor screening is inadequate",
      "Potential for adverse reactions",
      "Requires medical supervision and proper protocols"
    ],
    references: [
      {
        label: "Sampson et al., 2016",
        citation: "Gut microbiota regulate motor deficits and neuroinflammation in a model of Parkinson's disease. Science, 353(6307), 1246-1256."
      },
      {
        label: "Huang et al., 2019",
        citation: "Fecal microbiota transplantation to treat Parkinson's disease with constipation: A case report. Medicine, 98(26), e16163."
      }
    ]
  },
  "stem-cells": {
    name: "Autologous Stem Cell Therapy",
    slug: "stem-cells",
    importance: 8,
    cost: 10,
    ease: 2,
    tiers: ["max"],
    summary: "Autologous stem cell therapy involves harvesting a patient's own stem cells (typically from bone marrow or adipose tissue), processing them, and reintroducing them to potentially regenerate damaged neurons and support brain repair. This experimental approach aims to replace lost dopaminergic neurons and provide neurotrophic support.",
    benefits: [
      "Potential to regenerate dopaminergic neurons",
      "May provide neurotrophic factors that support brain health",
      "Autologous approach reduces rejection risk",
      "Could address root cause of dopamine depletion"
    ],
    evidence: {
      supportive: [
        "Preclinical studies show stem cells can differentiate into dopaminergic neurons",
        "Some early-phase clinical trials show safety and potential efficacy signals",
        "Stem cells may provide trophic support to existing neurons"
      ],
      limitations: [
        "Still largely experimental with limited long-term data",
        "High cost and limited availability",
        "Optimal cell type, delivery method, and dosing not established",
        "Regulatory approval varies significantly by jurisdiction"
      ]
    },
    risks: [
      "Surgical risks from harvesting procedures",
      "Potential for uncontrolled cell growth (though rare with autologous cells)",
      "Infection risk",
      "High cost with uncertain outcomes"
    ],
    references: [
      {
        label: "Barker et al., 2015",
        citation: "Cell-based therapies for Parkinson disease—past insights and future potential. Nature Reviews Neurology, 11(9), 492-503."
      },
      {
        label: "Venkatesh et al., 2019",
        citation: "Stem cell therapy for Parkinson's disease: A systematic review and meta-analysis. Cell Transplantation, 28(9-10), 1123-1132."
      }
    ]
  },
  "ketogenic-diet": {
    name: "Ketogenic Diet",
    slug: "ketogenic-diet",
    importance: 8,
    cost: 4,
    ease: 5,
    tiers: ["max", "average", "limited"],
    summary: "A ketogenic diet is a high-fat, very low-carbohydrate diet that shifts metabolism to burn ketones instead of glucose. This may benefit Parkinson's by improving mitochondrial function, reducing inflammation, and potentially addressing insulin resistance in the brain (sometimes called 'type 3 diabetes').",
    benefits: [
      "May improve mitochondrial function and energy production",
      "Could reduce brain inflammation",
      "May address insulin resistance in the brain",
      "Potential neuroprotective effects through ketone bodies",
      "May improve motor symptoms and reduce medication needs"
    ],
    evidence: {
      supportive: [
        "Small clinical trials show improvements in motor symptoms and quality of life",
        "Ketones may provide alternative fuel for neurons with mitochondrial dysfunction",
        "Animal models show neuroprotective effects",
        "May improve insulin sensitivity, which is often impaired in PD"
      ],
      limitations: [
        "Larger, longer-term studies needed",
        "Dietary adherence can be challenging",
        "Potential side effects include constipation, fatigue during adaptation",
        "Not suitable for everyone (e.g., those with certain metabolic conditions)"
      ]
    },
    risks: [
      "Constipation and digestive issues during adaptation",
      "Potential nutrient deficiencies if not carefully planned",
      "May interact with medications",
      "Requires medical supervision for some individuals"
    ],
    references: [
      {
        label: "Phillips et al., 2018",
        citation: "Low-fat versus ketogenic diet in Parkinson's disease: A pilot randomized controlled trial. Movement Disorders, 33(8), 1306-1314."
      },
      {
        label: "Vanitallie et al., 2005",
        citation: "Treatment of Parkinson disease with diet-induced hyperketonemia: A feasibility study. Neurology, 64(4), 728-730."
      },
      {
        label: "Athauda & Foltynie, 2016",
        citation: "The glucagon-like peptide 1 (GLP-1) receptor as a therapeutic target in Parkinson's disease: Mechanisms of action. Drug Discovery Today, 21(5), 802-818."
      }
    ]
  },
  nad: {
    name: "NAD+ Support (NR/NMN/IV)",
    slug: "nad",
    importance: 7,
    cost: 6,
    ease: 6,
    tiers: ["max", "average", "limited"],
    summary: "NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme involved in energy production, DNA repair, and cellular signaling. Levels decline with age and may be particularly low in Parkinson's. Supplementation with NAD+ precursors like NR (nicotinamide riboside) or NMN (nicotinamide mononucleotide), or IV NAD+, may support mitochondrial function and cellular repair mechanisms.",
    benefits: [
      "Supports mitochondrial function and ATP production",
      "Activates sirtuins, which play roles in cellular repair and longevity",
      "May support DNA repair mechanisms",
      "Could improve cellular energy in neurons",
      "May have neuroprotective effects"
    ],
    evidence: {
      supportive: [
        "NAD+ levels are reduced in PD brain tissue",
        "Animal studies show NAD+ precursors can improve mitochondrial function",
        "Some human studies suggest benefits for age-related conditions",
        "May work synergistically with exercise and other interventions"
      ],
      limitations: [
        "Direct evidence in PD is limited",
        "Optimal dosing and form (NR vs NMN vs IV) not established",
        "Long-term safety data still emerging",
        "Effects may be modest and require combination with other therapies"
    ]
    },
    risks: [
      "May require methyl donors (B vitamins) to prevent depletion",
      "High doses may cause flushing or digestive upset",
      "IV NAD+ requires medical supervision",
      "Not a standalone cure; should be part of comprehensive approach"
    ],
    references: [
      {
        label: "Schondorf et al., 2018",
        citation: "The NAD+ precursor nicotinamide riboside rescues mitochondrial defects and neuronal loss in iPSC and fly models of Parkinson's disease. Cell Reports, 23(10), 2976-2988."
      },
      {
        label: "Zhou et al., 2020",
        citation: "NAD+ metabolism and diseases: Implications for therapeutic interventions. Signal Transduction and Targeted Therapy, 5(1), 1-13."
      }
    ]
  },
  hydrogen: {
    name: "Hydrogen Therapy (Water & Inhalation)",
    slug: "hydrogen",
    importance: 7,
    cost: 5,
    ease: 7,
    tiers: ["max", "average", "limited"],
    summary: "Molecular hydrogen (H₂) is a selective antioxidant that may reduce oxidative stress, a key driver of Parkinson's progression. Hydrogen can be consumed via hydrogen-rich water or inhaled as gas. Some research suggests that beneficial gut bacteria produce hydrogen, and PD patients may have reduced hydrogen-producing bacteria.",
    benefits: [
      "Selective antioxidant that targets harmful free radicals",
      "May reduce neuroinflammation",
      "Could improve mitochondrial function",
      "Generally safe with minimal side effects",
      "May work synergistically with other interventions"
    ],
    evidence: {
      supportive: [
        "Animal studies show hydrogen can protect dopaminergic neurons",
        "Small human trials suggest improvements in motor symptoms and quality of life",
        "Hydrogen is a selective antioxidant, reducing only harmful radicals",
        "Some evidence for anti-inflammatory effects"
      ],
      limitations: [
        "Larger, longer-term clinical trials needed",
        "Optimal dosing and delivery method (water vs inhalation) not fully established",
        "Mechanisms of action still being elucidated",
        "Effects may be modest and require consistent use"
      ]
    },
    risks: [
      "Generally very safe",
      "Hydrogen gas inhalation requires proper equipment and safety measures",
      "Quality of hydrogen water products varies"
    ],
    references: [
      {
        label: "Ito et al., 2012",
        citation: "Hydrogen-rich water improves neurological functional recovery in experimental autoimmune encephalomyelitis mice. NeuroReport, 23(8), 480-484."
      },
      {
        label: "Yoritaka et al., 2013",
        citation: "Pilot study of H2 therapy in Parkinson's disease: A randomized double-blind placebo-controlled trial. Movement Disorders, 28(6), 836-839."
      },
      {
        label: "Fu et al., 2009",
        citation: "Molecular hydrogen is protective against 6-hydroxydopamine-induced nigrostriatal degeneration in a rat model of Parkinson's disease. Neuroscience Letters, 453(2), 81-85."
      }
    ]
  },
  "mito-stack": {
    name: "Mitochondrial Support Stack",
    slug: "mito-stack",
    importance: 7,
    cost: 6,
    ease: 7,
    tiers: ["max"],
    summary: "A combination of supplements targeting mitochondrial health, including CoQ10 (ubiquinol), PQQ (pyrroloquinoline quinone), alpha-lipoic acid, and other mitochondrial support nutrients. Mitochondrial dysfunction is a core feature of Parkinson's, and supporting mitochondrial function may slow disease progression.",
    benefits: [
      "Supports ATP production and energy metabolism",
      "May reduce oxidative stress in mitochondria",
      "Could improve cellular energy production",
      "May have neuroprotective effects",
      "Components may work synergistically"
    ],
    evidence: {
      supportive: [
        "CoQ10 has shown some promise in PD clinical trials, though results are mixed",
        "Mitochondrial dysfunction is well-established in PD",
        "Animal studies support mitochondrial-targeted interventions",
        "PQQ may support mitochondrial biogenesis"
      ],
      limitations: [
        "Large-scale trials of combination stacks are limited",
        "Individual components show mixed results",
        "Optimal dosing and combinations not fully established",
        "Effects may be modest"
      ]
    },
    risks: [
      "Generally safe at recommended doses",
      "May interact with blood thinners (CoQ10)",
      "Quality and bioavailability of supplements varies"
    ],
    references: [
      {
        label: "Shults et al., 2002",
        citation: "Effects of coenzyme Q10 in early Parkinson disease: Evidence of slowing of the functional decline. Archives of Neurology, 59(10), 1541-1550."
      },
      {
        label: "Storch et al., 2007",
        citation: "Randomized, double-blind, placebo-controlled trial on symptomatic effects of coenzyme Q10 in Parkinson disease. Archives of Neurology, 64(7), 938-944."
      }
    ]
  },
  chelation: {
    name: "Heavy Metal Detoxification",
    slug: "chelation",
    importance: 6,
    cost: 7,
    ease: 4,
    tiers: ["max", "average", "limited"],
    summary: "Heavy metals like lead, mercury, and manganese may contribute to Parkinson's risk and progression. Chelation therapy uses agents that bind to metals to facilitate their removal from the body. This should only be done under medical supervision with proper testing.",
    benefits: [
      "May reduce toxic metal burden",
      "Could reduce oxidative stress from metals",
      "May improve overall detoxification capacity",
      "Potential to address environmental contributors"
    ],
    evidence: {
      supportive: [
        "Epidemiological studies link heavy metal exposure to increased PD risk",
        "Some PD patients show elevated metal levels",
        "Animal studies show metals can damage dopaminergic neurons",
        "Chelation may reduce metal burden"
      ],
      limitations: [
        "Direct evidence that chelation improves PD symptoms is limited",
        "Requires careful medical supervision",
        "Not all PD patients have elevated metals",
        "Optimal protocols and patient selection not fully established"
      ]
    },
    risks: [
      "Can remove essential minerals if not done carefully",
      "Requires medical supervision",
      "Potential for side effects",
      "Should be based on testing, not done prophylactically"
    ],
    references: [
      {
        label: "Gorell et al., 1997",
        citation: "Occupational exposures to metals as risk factors for Parkinson's disease. Neurology, 48(3), 650-658."
      },
      {
        label: "Weisskopf et al., 2010",
        citation: "Prospective study of chemical exposures and the risk of Parkinson's disease. Neurology, 74(13), 1055-1061."
      }
    ]
  },
  movement: {
    name: "Functional Movement & Exercise",
    slug: "movement",
    importance: 9,
    cost: 3,
    ease: 6,
    tiers: ["max", "average", "limited"],
    summary: "Regular exercise and functional movement training are among the most evidence-based interventions for Parkinson's. Exercise can improve motor symptoms, balance, strength, and may have neuroprotective effects through mechanisms like BDNF (brain-derived neurotrophic factor) production.",
    benefits: [
      "Improves motor symptoms, balance, and coordination",
      "May slow disease progression",
      "Increases BDNF, which supports brain health",
      "Improves cardiovascular health",
      "May reduce depression and improve quality of life",
      "Cost-effective and accessible"
    ],
    evidence: {
      supportive: [
        "Extensive research supports exercise benefits in PD",
        "May increase BDNF and support neuroplasticity",
        "Can improve motor symptoms and reduce falls",
        "Some evidence suggests it may slow progression",
        "Multiple exercise modalities show benefits (aerobic, resistance, balance, dance)"
      ],
      limitations: [
        "Optimal type, intensity, and frequency still being refined",
        "Benefits may plateau or require ongoing commitment",
        "Some patients may have limitations due to advanced disease"
      ]
    },
    risks: [
      "Risk of falls or injury if not done appropriately",
      "May need adaptation for individual limitations",
      "Should be supervised initially for some patients"
    ],
    references: [
      {
        label: "Ahlskog, 2011",
        citation: "Does vigorous exercise have a neuroprotective effect in Parkinson disease? Neurology, 77(3), 288-294."
      },
      {
        label: "Schenkman et al., 2018",
        citation: "Effect of high-intensity treadmill exercise on motor symptoms in patients with de novo Parkinson disease: A phase 2 randomized clinical trial. JAMA Neurology, 75(2), 219-226."
      },
      {
        label: "Fisher et al., 2008",
        citation: "The effect of exercise training in improving motor performance and corticomotor excitability in people with early Parkinson's disease. Archives of Physical Medicine and Rehabilitation, 89(7), 1221-1229."
      }
    ]
  },
  "sauna-cold": {
    name: "Sauna & Cold Exposure",
    slug: "sauna-cold",
    importance: 6,
    cost: 5,
    ease: 5,
    tiers: ["max", "average"],
    summary: "Regular sauna use (heat stress) and cold exposure may provide hormetic benefits, potentially improving cardiovascular health, reducing inflammation, increasing heat shock proteins, and supporting recovery. These practices may complement other PD interventions.",
    benefits: [
      "May reduce inflammation",
      "Could improve cardiovascular health",
      "May increase heat shock proteins (cellular protection)",
      "Cold exposure may reduce inflammation and improve recovery",
      "May improve mood and well-being"
    ],
    evidence: {
      supportive: [
        "Sauna use associated with cardiovascular benefits in general population",
        "Heat shock proteins may have neuroprotective effects",
        "Cold exposure may reduce inflammation",
        "Some evidence for benefits in neurodegenerative conditions"
      ],
      limitations: [
        "Direct evidence in PD is limited",
        "Optimal protocols (temperature, duration, frequency) not established",
        "May not be suitable for all patients (cardiovascular concerns)",
        "Effects may be modest"
      ]
    },
    risks: [
      "Risk of overheating or hypothermia if not done safely",
      "May not be suitable for those with cardiovascular issues",
      "Requires proper hydration and safety measures"
    ],
    references: [
      {
        label: "Laukkanen et al., 2015",
        citation: "Association between sauna bathing and fatal cardiovascular and all-cause mortality events. JAMA Internal Medicine, 175(4), 542-548."
      }
    ]
  },
  pbm: {
    name: "Photobiomodulation (Light Therapy)",
    slug: "pbm",
    importance: 6,
    cost: 7,
    ease: 6,
    tiers: ["max"],
    summary: "Photobiomodulation uses specific wavelengths of light (typically red/near-infrared) to stimulate cellular processes, potentially improving mitochondrial function, reducing inflammation, and supporting brain health. Specialized helmets allow targeted brain treatment.",
    benefits: [
      "May improve mitochondrial function",
      "Could reduce neuroinflammation",
      "May support cellular repair mechanisms",
      "Non-invasive approach",
      "Potential for home use with proper equipment"
    ],
    evidence: {
      supportive: [
        "Preclinical studies show potential benefits",
        "May improve mitochondrial function and reduce oxidative stress",
        "Some small human studies suggest improvements",
        "Mechanisms involve cytochrome c oxidase activation"
      ],
      limitations: [
        "Larger clinical trials needed",
        "Optimal parameters (wavelength, intensity, duration) not fully established",
        "Equipment quality and protocols vary",
        "Effects may be modest"
      ]
    },
    risks: [
      "Generally safe when used appropriately",
      "Eye protection important",
      "Quality of equipment matters"
    ],
    references: [
      {
        label: "Hamblin, 2016",
        citation: "Shining light on the head: Photobiomodulation for brain disorders. BBA Clinical, 6, 113-124."
      },
      {
        label: "Hamilton et al., 2019",
        citation: "The effect of photobiomodulation on the brain during wakefulness and sleep. Frontiers in Neuroscience, 13, 447."
      }
    ]
  },
  hbot: {
    name: "Hyperbaric Oxygen Therapy",
    slug: "hbot",
    importance: 5,
    cost: 8,
    ease: 4,
    tiers: ["max"],
    summary: "Hyperbaric Oxygen Therapy (HBOT) involves breathing pure oxygen in a pressurized chamber, increasing oxygen delivery to tissues. This may support healing, reduce inflammation, and potentially benefit brain function in Parkinson's.",
    benefits: [
      "Increases oxygen delivery to brain tissue",
      "May reduce inflammation",
      "Could support cellular repair",
      "May improve wound healing and recovery"
    ],
    evidence: {
      supportive: [
        "Used successfully for various conditions requiring increased oxygen",
        "Some case reports and small studies suggest potential benefits",
        "May reduce inflammation and support healing"
      ],
      limitations: [
        "Limited large-scale clinical trials in PD",
        "High cost and limited availability",
        "Optimal protocols not established",
        "Evidence is preliminary"
      ]
    },
    risks: [
      "Barotrauma risk (ear/sinus pressure)",
      "Oxygen toxicity risk with excessive use",
      "Requires medical supervision",
      "High cost"
    ],
    references: [
      {
        label: "Harch, 2015",
        citation: "Hyperbaric oxygen therapy for post-concussion syndrome: Contradictory conclusions from a study mischaracterized as sham-controlled. Journal of Neurotrauma, 32(22), 1785-1786."
      }
    ]
  },
  supplements: {
    name: "Daily Targeted Supplementation",
    slug: "supplements",
    importance: 7,
    cost: 5,
    ease: 8,
    tiers: ["max", "average"],
    summary: "A comprehensive daily supplement regimen targeting multiple pathways involved in Parkinson's, including antioxidants, B vitamins, magnesium, omega-3s, and other nutrients that support brain health, mitochondrial function, and overall wellness.",
    benefits: [
      "Supports multiple pathways simultaneously",
      "May address nutrient deficiencies",
      "Could reduce oxidative stress and inflammation",
      "Generally safe when used appropriately",
      "Can be customized to individual needs"
    ],
    evidence: {
      supportive: [
        "Some individual supplements show benefits in studies",
        "Nutrient deficiencies may contribute to symptoms",
        "Antioxidants may reduce oxidative stress",
        "B vitamins important for methylation and energy"
      ],
      limitations: [
        "Large-scale trials of comprehensive stacks are limited",
        "Individual supplement effects may be modest",
        "Quality and bioavailability vary",
        "Optimal combinations not fully established"
      ]
    },
    risks: [
      "May interact with medications",
      "Quality and purity of supplements varies",
      "Can be expensive",
      "Should be guided by testing and medical advice"
    ],
    references: [
      {
        label: "Seidl et al., 2014",
        citation: "Folic acid and vitamin B12 levels in patients with Parkinson's disease. Neurodegenerative Diseases, 14(1), 38-42."
      }
    ]
  },
  microbiome: {
    name: "Microbiome Mapping & Modulation",
    slug: "microbiome",
    importance: 7,
    cost: 6,
    ease: 6,
    tiers: ["max"],
    summary: "Comprehensive microbiome testing to identify dysbiosis, missing beneficial bacteria (including hydrogen-producing species), and overgrowth of harmful organisms. This information guides targeted interventions like probiotics, prebiotics, and dietary changes.",
    benefits: [
      "Identifies specific microbiome imbalances",
      "Guides targeted interventions",
      "May reveal missing beneficial bacteria",
      "Can track changes over time",
      "Personalized approach"
    ],
    evidence: {
      supportive: [
        "PD patients consistently show microbiome changes",
        "Gut-brain axis is increasingly recognized in PD",
        "Targeted interventions may be more effective than generic probiotics",
        "May identify specific bacterial species to target"
      ],
      limitations: [
        "Optimal microbiome composition not fully defined",
        "Interventions based on testing still being refined",
        "Testing methods and interpretation vary",
        "Long-term outcomes of targeted interventions need more study"
      ]
    },
    risks: [
      "Testing can be expensive",
      "Interpretation requires expertise",
      "May lead to unnecessary interventions if over-interpreted"
    ],
    references: [
      {
        label: "Scheperjans et al., 2015",
        citation: "Gut microbiota are related to Parkinson's disease and clinical phenotype. Movement Disorders, 30(3), 350-358."
      },
      {
        label: "Hill-Burns et al., 2017",
        citation: "Parkinson's disease and Parkinson's disease medications have distinct signatures of the gut microbiome. Movement Disorders, 32(5), 739-749."
      }
    ]
  },
  "oral-infection": {
    name: "Oral/Dental Infection Screening",
    slug: "oral-infection",
    importance: 6,
    cost: 5,
    ease: 5,
    tiers: ["max", "average", "limited"],
    summary: "Chronic oral infections, gum disease, and dental issues may contribute to systemic inflammation and potentially impact Parkinson's. Screening and treating oral infections, optimizing oral hygiene, and addressing dental health may reduce inflammation.",
    benefits: [
      "May reduce systemic inflammation",
      "Could improve overall health",
      "Addresses potential chronic infection source",
      "Relatively accessible intervention"
    ],
    evidence: {
      supportive: [
        "Chronic oral infections linked to systemic inflammation",
        "Some studies suggest links between oral health and neurodegenerative diseases",
        "Reducing inflammation may benefit PD",
        "Oral health is important for overall wellness"
      ],
      limitations: [
        "Direct evidence in PD is limited",
        "Causal relationship not fully established",
        "May be one of many contributing factors"
      ]
    },
    risks: [
      "Generally safe",
      "Dental procedures may have risks for some individuals",
      "Costs can add up"
    ],
    references: [
      {
        label: "Chen et al., 2017",
        citation: "Periodontal inflammation and the risk of cardiovascular disease. Current Atherosclerosis Reports, 19(7), 27."
      }
    ]
  },
  "iv-antioxidants": {
    name: "IV Antioxidant Therapy",
    slug: "iv-antioxidants",
    importance: 6,
    cost: 7,
    ease: 4,
    tiers: ["max", "average"],
    summary: "Intravenous administration of high-dose antioxidants like vitamin C, glutathione, and other nutrients may provide more direct delivery to tissues than oral supplements, potentially reducing oxidative stress more effectively.",
    benefits: [
      "Higher bioavailability than oral supplements",
      "May provide more direct delivery to tissues",
      "Could reduce oxidative stress more effectively",
      "May support detoxification"
    ],
    evidence: {
      supportive: [
        "Oxidative stress is a key feature of PD",
        "IV delivery may achieve higher tissue levels",
        "Some studies suggest benefits for various conditions",
        "May support glutathione production"
      ],
      limitations: [
        "Limited large-scale trials in PD",
        "Optimal protocols and dosing not fully established",
        "Requires medical supervision",
        "Cost and accessibility limitations"
      ]
    },
    risks: [
      "Requires IV access and medical supervision",
      "Potential for infection or complications",
      "Cost can be significant",
      "Quality and protocols vary by provider"
    ],
    references: [
      {
        label: "Sechi et al., 1996",
        citation: "Reduced intravenous glutathione in the treatment of early Parkinson's disease. Progress in Neuro-Psychopharmacology and Biological Psychiatry, 20(7), 1159-1170."
      }
    ]
  },
  probiotics: {
    name: "Probiotic & Prebiotic Support",
    slug: "probiotics",
    importance: 6,
    cost: 4,
    ease: 8,
    tiers: ["average", "limited"],
    summary: "Targeted probiotics and prebiotics to support a healthy gut microbiome. While generic probiotics may have limited effects, specific strains and combinations, along with prebiotic fibers, may help restore beneficial bacteria and support gut health.",
    benefits: [
      "May support beneficial gut bacteria",
      "Could improve digestive health",
      "Relatively accessible and affordable",
      "May reduce inflammation",
      "Easy to implement"
    ],
    evidence: {
      supportive: [
        "Gut microbiome is altered in PD",
        "Some studies suggest probiotic benefits for digestive symptoms",
        "May support overall gut health",
        "Prebiotics feed beneficial bacteria"
      ],
      limitations: [
        "Generic probiotics may have limited effects",
        "Optimal strains and combinations not fully established",
        "Effects may be modest",
        "May not address root causes"
      ]
    },
    risks: [
      "Generally safe",
      "May cause digestive upset in some",
      "Quality and strains vary significantly",
      "May not be sufficient alone"
    ],
    references: [
      {
        label: "Tamtaji et al., 2019",
        citation: "Probiotic and selenium co-supplementation, and the effects on clinical, metabolic and genetic status in Parkinson's disease: A randomized, double-blind, placebo-controlled trial. Clinical Nutrition, 38(4), 1779-1785."
      }
    ]
  },
  sleep: {
    name: "Sleep Hygiene & Optimization",
    slug: "sleep",
    importance: 7,
    cost: 2,
    ease: 6,
    tiers: ["average", "limited"],
    summary: "Optimizing sleep quality through proper sleep hygiene, addressing sleep disorders, and ensuring adequate restorative sleep. Poor sleep is common in PD and may worsen symptoms, while good sleep supports brain health and recovery.",
    benefits: [
      "May improve cognitive function and mood",
      "Supports brain health and recovery",
      "May reduce daytime fatigue",
      "Cost-effective intervention",
      "Addresses common PD symptom"
    ],
    evidence: {
      supportive: [
        "Sleep disturbances are common in PD",
        "Poor sleep may worsen symptoms",
        "Good sleep supports brain health and recovery",
        "Sleep hygiene interventions can be effective"
      ],
      limitations: [
        "May not address underlying sleep disorders",
        "Effects may be modest if other issues present",
        "Requires consistent implementation"
      ]
    },
    risks: [
      "Generally safe",
      "May need evaluation for sleep disorders",
      "Some sleep aids may have side effects"
    ],
    references: [
      {
        label: "Chahine et al., 2016",
        citation: "Sleep in Parkinson's disease. npj Parkinson's Disease, 2, 15025."
      }
    ]
  },
  "mind-body": {
    name: "Mind-Body Practices",
    slug: "mind-body",
    importance: 5,
    cost: 2,
    ease: 7,
    tiers: ["average", "limited"],
    summary: "Mind-body practices like meditation, yoga, tai chi, and breathwork may help manage stress, improve mood, support neuroplasticity, and complement other PD interventions. These practices are generally safe and accessible.",
    benefits: [
      "May reduce stress and improve mood",
      "Could support neuroplasticity",
      "Generally safe and accessible",
      "May improve quality of life",
      "Low cost"
    ],
    evidence: {
      supportive: [
        "Stress management may benefit PD",
        "Some studies show benefits for mood and quality of life",
        "May support overall well-being",
        "Tai chi and yoga show benefits for balance and mobility"
      ],
      limitations: [
        "Direct effects on disease progression unclear",
        "Effects may be modest",
        "Requires consistent practice"
      ]
    },
    risks: [
      "Generally very safe",
      "May need adaptation for mobility limitations",
      "Should be done appropriately for individual capabilities"
    ],
    references: [
      {
        label: "Li et al., 2012",
        citation: "Tai chi and postural stability in patients with Parkinson's disease. New England Journal of Medicine, 366(6), 511-519."
      }
    ]
  },
  electrolytes: {
    name: "Magnesium & Electrolyte Support",
    slug: "electrolytes",
    importance: 5,
    cost: 2,
    ease: 9,
    tiers: ["limited"],
    summary: "Adequate magnesium and electrolyte balance is important for muscle function, nerve health, and overall cellular function. Many people are deficient in magnesium, and ensuring adequate intake may support basic cellular processes.",
    benefits: [
      "Supports muscle and nerve function",
      "May reduce muscle cramps",
      "Important for basic cellular processes",
      "Very affordable and accessible",
      "Easy to implement"
    ],
    evidence: {
      supportive: [
        "Magnesium is essential for many cellular processes",
        "Deficiency may contribute to symptoms",
        "Important for muscle and nerve function",
        "Generally safe when used appropriately"
      ],
      limitations: [
        "Direct evidence in PD is limited",
        "May have modest effects",
        "Not a primary intervention"
      ]
    },
    risks: [
      "Generally safe at recommended doses",
      "High doses may cause digestive issues",
      "May interact with some medications"
    ],
    references: [
      {
        label: "Barbagallo & Dominguez, 2010",
        citation: "Magnesium and aging. Current Pharmaceutical Design, 16(7), 832-839."
      }
    ]
  },
  "anti-inflammatories": {
    name: "Budget Anti-Inflammatory Support",
    slug: "anti-inflammatories",
    importance: 5,
    cost: 3,
    ease: 8,
    tiers: ["limited"],
    summary: "Affordable anti-inflammatory supplements and dietary approaches, such as curcumin, omega-3s, and anti-inflammatory foods, to help reduce chronic inflammation that may contribute to Parkinson's progression.",
    benefits: [
      "May reduce chronic inflammation",
      "Relatively affordable",
      "Easy to implement",
      "May support overall health",
      "Generally safe"
    ],
    evidence: {
      supportive: [
        "Inflammation is a key feature of PD",
        "Some anti-inflammatory compounds show promise",
        "Dietary approaches may support inflammation reduction",
        "May complement other interventions"
      ],
      limitations: [
        "Direct evidence in PD is limited",
        "Effects may be modest",
        "Quality and bioavailability vary",
        "Not a primary intervention"
      ]
    },
    risks: [
      "Generally safe",
      "May interact with blood thinners (curcumin, omega-3s)",
      "Quality of supplements varies"
    ],
    references: [
      {
        label: "Mishra & Palanivelu, 2008",
        citation: "The effect of curcumin (turmeric) on Alzheimer's disease: An overview. Annals of Indian Academy of Neurology, 11(1), 13-19."
      }
    ]
  }
};

// Helper to get protocols by tier
export function getProtocolsByTier(tier: ResourceTier): Protocol[] {
  return Object.values(protocolsConfig).filter(p => p.tiers.includes(tier));
}

// Helper to get protocol by slug
export function getProtocolBySlug(slug: string): Protocol | undefined {
  return protocolsConfig[slug];
}

// Helper to get all protocol slugs
export function getAllProtocolSlugs(): string[] {
  return Object.keys(protocolsConfig);
}

