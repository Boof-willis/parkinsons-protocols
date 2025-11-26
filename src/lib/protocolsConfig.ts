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
  products?: Array<{
    category: string;
    name: string;
    description: string;
    pros: string[];
    bestFor: string;
    link: string;
  }>;
  references: Array<{
    label: string;
    citation: string;
    url?: string;
  }>;
}

export const protocolsConfig: Record<string, Protocol> = {
  fmt: {
    name: "Fecal Microbiota Transplant (FMT)",
    slug: "fmt",
    importance: 9,
    cost: 9,
    ease: 3,
    tiers: ["max"],
    summary: "Fecal Microbiota Transplant (FMT) involves transferring a carefully screened donor's healthy gut microbiome into the recipient to restore balance, diversity, and metabolic function. In Parkinson's disease, the gut is believed to play a central role in disease progression. Many PD patients show profound dysbiosis, including loss of hydrogen-producing bacteria, reduced short-chain–fatty-acid (SCFA)-producing species, increased intestinal permeability, and chronic inflammation. FMT aims to correct these foundational gut abnormalities, potentially impacting both motor and non-motor symptoms.",
    benefits: [
      "Restores beneficial gut bacteria — including hydrogen-producing and SCFA-producing species",
      "May improve gut–brain communication via the vagus nerve",
      "Can reduce intestinal inflammation and permeability ('leaky gut')",
      "May reduce systemic inflammation that contributes to neurodegeneration",
      "Can improve chronic constipation, a major PD symptom",
      "Addresses root-level contributors to PD rather than downstream effects",
      "Potential synergy with hydrogen therapy, ketogenic diet, probiotics, and NAD+"
    ],
    evidence: {
      supportive: [
        "Animal PD models show FMT from healthy donors improves motor function, reduces neuroinflammation, and decreases alpha-synuclein aggregation.",
        "Transferring PD patient microbiota into mice induces PD-like motor symptoms — strong evidence of a causal relationship.",
        "Human case reports and small series report improvements in constipation, motor symptoms, mood, sleep, and overall quality of life.",
        "Gut microbiome abnormalities in PD are well-established, including reduced Prevotella (hydrogen-producing), reduced Faecalibacterium and other SCFA-producers, increased Enterobacteriaceae (inflammatory species), and altered bile acid metabolism.",
        "Restores microbial metabolites (butyrate, propionate, hydrogen)",
        "Reduces gut inflammation and intestinal permeability",
        "Decreases lipopolysaccharide (LPS)-driven neuroinflammation",
        "May reduce misfolding or propagation of alpha-synuclein through the gut–brain axis",
        "Improves autonomic function and bowel motility",
        "Enhances nutrient absorption"
      ],
      limitations: [
        "Large randomized clinical trials are still underway.",
        "Long-term durability of microbiome changes is unclear.",
        "Not all donors are equally beneficial.",
        "Professional, medically supervised FMT is difficult to access in many countries.",
        "Some patients may need multiple treatments for sustained benefit.",
        "Microbiome compatibility varies by individual."
      ]
    },
    risks: [
      "Infection risk if donor screening is inadequate",
      "Possible temporary digestive upset",
      "Contraindicated in individuals with severe immune suppression",
      "Requires proper clinical supervision and GMP-level donor stool",
      "Regulatory approval varies: Some countries allow FMT only for Clostridioides difficile; PD usage is generally classified as experimental",
      "DIY FMT is strongly discouraged due to contamination risk"
    ],
    references: [
      {
        label: "Sampson et al., 2016 – PD microbiome transplants induce motor deficits and neuroinflammation in mice",
        citation: "Science.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27708053/"
      },
      {
        label: "Huang et al., 2019 – Human case report: FMT improves constipation and neurological symptoms in PD",
        citation: "Medicine.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31277127/"
      },
      {
        label: "Unger et al., 2016 – PD patients exhibit gut permeability, dysbiosis, and inflammation",
        citation: "NPJ Parkinson's Disease.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27249706/"
      },
      {
        label: "Qian et al., 2020 – Hydrogen-producing bacteria reduced in PD",
        citation: "Frontiers in Cellular Neuroscience.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32221510/"
      },
      {
        label: "Keshavarzian et al., 2015 – PD microbiome differs significantly from controls, especially inflammatory species",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26197340/"
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
    summary: "Autologous stem cell therapy uses a patient's own stem cells—typically harvested from bone marrow or adipose (fat) tissue—which are processed and reintroduced into the body. Because the cells come from the patient, immune rejection risk is extremely low, and safety profiles are generally strong. In Parkinson's disease, stem cell therapy aims to support neuroprotection, reduce inflammation, enhance cellular repair, and (in theory) assist with dopaminergic restoration. However, current evidence suggests benefits come mainly from trophic support, not true neuron replacement. Autologous stem cell therapy remains highly experimental, often expensive, and should be considered supportive rather than curative.",
    benefits: [
      "Provides neurotrophic factors that support dopaminergic neuron survival",
      "Modulates inflammation and oxidative stress",
      "Enhances mitochondrial repair pathways",
      "Very low risk of immune rejection (autologous cells)",
      "May provide symptomatic improvements in some individuals",
      "Potential synergy with metabolic therapies, hydrogen, NAD+, PBM, ketosis, and exercise"
    ],
    evidence: {
      supportive: [
        "Preclinical PD models show autologous stem cells protect dopaminergic neurons, reduce inflammation, and improve motor behavior.",
        "MSCs (bone marrow or adipose-derived) secrete powerful neurotrophic molecules: BDNF, GDNF, VEGF, and anti-inflammatory cytokines.",
        "Early human studies consistently show good safety profiles with occasional improvements in UPDRS scores and quality of life.",
        "Autologous cells can improve mitochondrial function and reduce oxidative stress in PD models.",
        "The therapeutic effect likely results from paracrine signaling (repair factors released by the cells)."
      ],
      limitations: [
        "Very limited long-term human data.",
        "Benefits vary widely by protocol, dosing, and patient health.",
        "True dopaminergic replacement has not been achieved with MSCs.",
        "Potency of autologous cells drops with age.",
        "Delivery methods (IV vs intrathecal vs intrastriatal) lack standardization.",
        "High cost and substantial variability between clinics."
      ]
    },
    risks: [
      "Harvesting procedures carry risks: infection, bruising, anesthesia complications",
      "Risk of contamination or improper processing at unregulated clinics",
      "Theoretical risk of unwanted cell growth (rare with adult autologous cells)",
      "Intrathecal or intracranial delivery carries procedural risks",
      "High financial cost with uncertain benefit",
      "Contraindicated in people with blood cancers or active infections"
    ],
    references: [
      {
        label: "Barker et al., 2015 – Review of cell-based therapies for PD: opportunities and limitations",
        citation: "Nature Reviews Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26289130/"
      },
      {
        label: "Venkatesh et al., 2019 – Meta-analysis: stem cell therapy for PD shows safety and modest potential benefit",
        citation: "Cell Transplantation.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31187608/"
      },
      {
        label: "Weaver et al., 2020 – MSCs show neuroprotective effects in MPTP PD mouse models",
        citation: "Stem Cell Research & Therapy.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32179095/"
      },
      {
        label: "Kefalopoulou et al., 2014 – Fetal dopaminergic grafts survive >20 years, supporting feasibility of neuron replacement",
        citation: "Lancet Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24482514/"
      },
      {
        label: "Xiong et al., 2021 – MSCs modulate inflammation and support neuronal recovery in neurodegenerative models",
        citation: "Frontiers in Cellular Neuroscience.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33371269/"
      }
    ]
  },
  "ketogenic-diet": {
    name: "Ketogenic Diet for Parkinson's Disease",
    slug: "ketogenic-diet",
    importance: 8,
    cost: 4,
    ease: 5,
    tiers: ["max", "average", "limited"],
    summary: "A ketogenic diet is a high-fat, very low-carbohydrate nutritional approach that shifts the body from relying on glucose to producing and using ketone bodies as its primary fuel. For Parkinson's disease, this metabolic shift may have several therapeutic benefits, including improved mitochondrial function, reduced inflammation, enhanced energy efficiency in damaged neurons, and potential correction of brain insulin resistance ('type 3 diabetes'). Emerging research suggests ketosis may offer both symptomatic improvements and neuroprotective support.",
    benefits: [
      "Supports mitochondrial energy production when glucose metabolism is impaired",
      "Reduces neuroinflammation and oxidative stress",
      "Improves systemic and brain insulin sensitivity",
      "Ketones serve as a cleaner, more efficient fuel for aging/damaged neurons",
      "May improve motor symptoms, energy, and cognitive clarity",
      "Can reduce blood sugar spikes that worsen neurodegeneration",
      "Potential synergy with NAD+, hydrogen therapy, and exercise"
    ],
    evidence: {
      supportive: [
        "Small clinical trials report improvements in motor function, fatigue, mood, and quality of life.",
        "Ketones bypass impaired mitochondrial complex I, offering alternative energy to dopamine neurons.",
        "Animal models show ketogenic diets can reduce neurodegeneration and improve antioxidant capacity.",
        "PD patients often exhibit insulin resistance, even when not diabetic; ketosis improves insulin signaling.",
        "Ketogenic metabolism increases GABA levels, potentially reducing dyskinesias and excitotoxicity.",
        "May enhance levodopa response by stabilizing blood glucose variability.",
        "Enhanced mitochondrial efficiency (ketones generate more ATP per oxygen molecule)",
        "Reduced ROS production relative to glucose metabolism",
        "Upregulation of BDNF, supporting neuronal repair",
        "Stabilization of neuronal firing and protection against excitotoxicity",
        "Lowered systemic and neuroinflammation",
        "Activation of autophagy, clearing damaged proteins"
      ],
      limitations: [
        "Large, long-term randomized trials are still needed.",
        "Dietary adherence can be challenging for some individuals.",
        "Effects vary based on strictness of ketosis and metabolic health.",
        "May require careful monitoring in older adults or those on medications.",
        "Transition phase ('keto adaptation') may involve fatigue or digestive changes.",
        "Not suitable for patients with specific metabolic or pancreatic conditions."
      ]
    },
    risks: [
      "Constipation or digestive slowdown during early stages",
      "Potential nutrient deficiencies without micronutrient planning",
      "Possible medication interactions (especially diabetes drugs)",
      "Should be supervised for people with pancreatitis, liver disease, gallbladder disease, or certain genetic fatty-acid oxidation disorders",
      "Hydration and electrolytes must be managed (magnesium, sodium, potassium)"
    ],
    references: [
      {
        label: "Phillips et al., 2018 – Ketogenic vs low-fat diet trial in PD showing functional improvements",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29920881/"
      },
      {
        label: "Vanitallie et al., 2005 – Feasibility study of ketogenic diet in PD with improved symptoms",
        citation: "Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15728214/"
      },
      {
        label: "Athauda & Foltynie, 2016 – Deep dive into insulin resistance, GLP-1 pathways, and neuroprotection in PD",
        citation: "Drug Discovery Today.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26921641/"
      },
      {
        label: "Newman & Verdin, 2017 – Ketones as signaling metabolites that promote healthspan",
        citation: "Cell Metabolism.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28591631/"
      },
      {
        label: "Tieu et al., 2003 – Ketones protect dopaminergic neurons in MPTP mouse PD model",
        citation: "PNAS.",
        url: "https://pubmed.ncbi.nlm.nih.gov/14668441/"
      }
    ]
  },
  nad: {
    name: "NAD+ Support (NR, NMN, IV NAD+)",
    slug: "nad",
    importance: 7,
    cost: 6,
    ease: 6,
    tiers: ["max", "average", "limited"],
    summary: "NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme involved in mitochondrial energy production, DNA repair, antioxidant defense, and cellular signaling. NAD+ levels decline with age and appear reduced in Parkinson's disease, particularly in neurons with mitochondrial stress. Supporting NAD+ through oral precursors (NR, NMN), liposomal formulations, or IV NAD+ may help improve mitochondrial function and cellular resilience.",
    benefits: [
      "Supports mitochondrial ATP production",
      "Activates sirtuins (SIRT1, SIRT3), which regulate cellular repair and longevity",
      "May improve DNA repair and genomic stability",
      "Enhances neuronal energy metabolism",
      "May reduce oxidative stress and promote neuroprotection",
      "Works synergistically with exercise, metabolic therapy, and hydrogen therapy"
    ],
    evidence: {
      supportive: [
        "NAD+ levels are lower in PD-affected brain regions, especially in stressed dopaminergic neurons.",
        "NAD+ precursors like NR and NMN improve mitochondrial function in cellular, fly, and iPSC-derived PD models.",
        "NAD+ augmentation activates sirtuins, which regulate inflammation, mitochondrial biogenesis, and neuronal repair.",
        "Human studies (non-PD) show NR/NMN can improve metabolic function, mitochondrial markers, and exercise adaptation.",
        "IV NAD+ rapidly raises systemic NAD+ levels, bypassing oral absorption limits.",
        "NR rescued mitochondrial deficits and prevented dopaminergic neuron loss in iPSC and fruit fly PD models (Cell Reports, 2018).",
        "NAD+ metabolism plays a central role in neurodegenerative diseases, including PD-associated mitochondrial dysfunction."
      ],
      limitations: [
        "Few large, controlled human trials of NAD+ precursors in PD exist yet.",
        "Optimal dosing for PD (NR vs NMN vs IV) is not standardized.",
        "Benefits are often modest and typically require combination with lifestyle and mitochondrial therapies.",
        "Long-term high-dose NR/NMN safety data is still emerging.",
        "Some forms on the market are poorly tested or mislabeled."
    ]
    },
    risks: [
      "NR/NMN may increase methylation demand; supporting B12, B6, folate is recommended",
      "High doses may cause flushing, nausea, or digestive discomfort",
      "IV NAD+ may cause temporary chest tightness, nausea, or anxiety if infused too quickly",
      "Should be used cautiously in individuals with active cancer (ongoing debate regarding NAD+ and tumor metabolism)",
      "Not a stand-alone PD therapy—best as part of a broader mitochondrial support protocol"
    ],
    references: [
      {
        label: "Schondorf et al., 2018 – NR rescues mitochondrial defects and dopaminergic neuron loss in iPSC and fly PD models",
        citation: "Cell Reports.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29874587/"
      },
      {
        label: "Zhou et al., 2020 – Review: NAD+ metabolism and therapeutic applications in disease",
        citation: "Signal Transduction and Targeted Therapy.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32908122/"
      },
      {
        label: "Verdin, 2015 – NAD+ and sirtuin pathways in aging and neurodegeneration",
        citation: "Science.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26785480/"
      },
      {
        label: "Grazia et al., 2019 – NAD+ precursors improve mitochondrial and metabolic function in models of neurodegeneration",
        citation: "Frontiers in Neuroscience.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30544558/"
      },
      {
        label: "Martens et al., 2018 – NR raises NAD+ levels in humans and improves blood pressure and arterial health",
        citation: "Nature Communications.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30451853/"
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
    summary: "Molecular hydrogen (H₂) is a unique, selective antioxidant that neutralizes harmful reactive oxygen species without disrupting beneficial redox signaling. Since oxidative stress and mitochondrial dysfunction are core features of Parkinson's disease, hydrogen therapy—via hydrogen-rich water or inhaled hydrogen gas—has gained significant scientific interest. Research also shows Parkinson's patients commonly lack hydrogen-producing gut bacteria, suggesting a potential endogenous deficiency that hydrogen therapy may help replenish.",
    benefits: [
      "Selectively neutralizes harmful radicals such as hydroxyl radicals (•OH)",
      "Reduces neuroinflammation and oxidative stress",
      "Supports mitochondrial efficiency and ATP production",
      "Helps restore antioxidant balance without suppressing beneficial signaling",
      "Very safe, non-toxic, and well-tolerated",
      "Works synergistically with NAD+, exercise, ketogenic diet, and other mitochondrial therapies"
    ],
    evidence: {
      supportive: [
        "Animal models of PD show hydrogen gas or water protects dopaminergic neurons from toxin-induced degeneration.",
        "Hydrogen improves mitochondrial function and reduces oxidative damage in PD models.",
        "Small human trials have shown improvements in motor symptoms (UPDRS scores), fatigue, and overall quality of life.",
        "Hydrogen therapy reduces inflammation and supports cellular stress resistance.",
        "Hydrogen-producing gut bacteria (e.g., Prevotella) are significantly reduced in PD, suggesting hydrogen therapy may help counterbalance this deficit.",
        "Selective antioxidant targeting of •OH and peroxynitrite (ONOO−).",
        "Improves mitochondrial membrane potential and electron transport efficiency.",
        "Reduces neuroinflammation through Nrf2 and NF-κB pathways.",
        "May modulate gut–brain axis signaling via microbiome interactions."
      ],
      limitations: [
        "PD human trials are still limited and require larger sample sizes.",
        "Optimal dosing, inhalation flow rate, and duration are not standardized.",
        "Water vs. gas delivery differences need further investigation.",
        "Benefits are typically modest unless used consistently and combined with lifestyle therapy.",
        "Product quality varies widely."
      ]
    },
    risks: [
      "Very safe overall; no known toxicity",
      "Inhalation devices must meet safety standards to prevent gas buildup",
      "Avoid poorly manufactured hydrogen water machines or tablets with questionable purity",
      "Individuals with implanted medical devices should consult their provider before using inhalation systems"
    ],
    products: [
      {
        category: "Hydrogen Tablets (most accessible option)",
        name: "H2TAB – Molecular Hydrogen Tablets (Magnesium-based)",
        description: "Creates high ppm hydrogen instantly when dropped in water.",
        pros: [
          "Very high concentration",
          "Inexpensive",
          "Easy to use"
        ],
        bestFor: "Limited resources / home use",
        link: "https://www.amazon.com/Molecular-H2TAB-Magnesium-Antioxidants-Unflavored/dp/B0F11WB8VX?th=1"
      },
      {
        category: "Hydrogen Inhalation Device (strongest therapeutic delivery)",
        name: "Inhale H2 – Hydrogen Inhalation System",
        description: "Provides continuous hydrogen gas (higher systemic absorption than water).",
        pros: [
          "Strongest delivery method",
          "Best for PD mitochondrial and neurological support"
        ],
        bestFor: "Maximum resources",
        link: "https://inhaleh2.com/products/inhale-h2-hydrogen-inhalation-system-pre-order-deposit-for-presale"
      }
    ],
    references: [
      {
        label: "Fu et al., 2009 – Hydrogen protects dopaminergic neurons in 6-OHDA PD rat model",
        citation: "Neuroscience Letters.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19348789/"
      },
      {
        label: "Yoritaka et al., 2013 – Randomized, double-blind, placebo-controlled pilot trial of hydrogen therapy in PD",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23580369/"
      },
      {
        label: "Ito et al., 2012 – Hydrogen water improved neurological outcomes in autoimmune neuroinflammation models",
        citation: "NeuroReport.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22561466/"
      },
      {
        label: "Ishibashi et al., 2012 – Hydrogen water reduced oxidative stress in clinical settings",
        citation: "Medical Gas Research.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22952077/"
      },
      {
        label: "Tanaka et al., 2018 – Hydrogen therapy enhances mitochondrial function and reduces inflammation",
        citation: "Scientific Reports.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29773871/"
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
    summary: "Mitochondrial dysfunction is one of the most well-established root mechanisms in Parkinson's disease. Dopaminergic neurons are highly energy-intensive and extremely sensitive to mitochondrial deficits, oxidative stress, and impaired ATP production. A mitochondrial support stack typically includes nutrients such as CoQ10 (ubiquinol), PQQ, alpha-lipoic acid (ALA), acetyl-L-carnitine (ALCAR), magnesium, B-vitamins, and other compounds that enhance mitochondrial energy production, reduce oxidative stress, and support neuronal resilience. This stack is not a cure, but may help stabilize cellular energy metabolism and support broader PD protocols.",
    benefits: [
      "Enhances ATP production and electron transport chain efficiency",
      "Reduces mitochondrial oxidative stress",
      "Supports mitochondrial biogenesis (especially via PQQ)",
      "May improve neuronal survival signaling",
      "Synergizes with NAD+, ketogenic diet, hydrogen therapy, and exercise",
      "Generally safe and well-tolerated"
    ],
    evidence: {
      supportive: [
        "Mitochondrial dysfunction (Complex I deficiency) is a hallmark of PD pathology.",
        "CoQ10 showed early promise in clinical trials, slowing functional decline in early PD, though later trials produced mixed results.",
        "PQQ has demonstrated mitochondrial biogenesis, antioxidant, and neuroprotective effects in preclinical PD models.",
        "Alpha-lipoic acid (ALA) improves redox balance, supports glutathione recycling, and reduces oxidative stress in neuronal models.",
        "Acetyl-L-carnitine (ALCAR) supports fatty acid transport into mitochondria for energy production and has demonstrated neuroprotective effects.",
        "Stacks combining multiple mitochondrial agents may produce additive or synergistic benefits, even if single-agent trials were modest.",
        "↑ ATP production",
        "↑ Mitochondrial biogenesis (PQQ, exercise synergy)",
        "↓ Oxidative stress and ROS damage (CoQ10, ALA, hydrogen)",
        "↑ Neuronal metabolic flexibility",
        "↑ Dopaminergic neuron resilience"
      ],
      limitations: [
        "Combination stacks lack large-scale human trials specifically in PD.",
        "CoQ10 results are mixed, and very high doses may be required.",
        "Individual responses vary widely.",
        "Optimal stack composition and dosing are not standardized.",
        "Effects are generally supportive, not transformative without lifestyle synergy."
      ]
    },
    risks: [
      "Generally safe at recommended doses",
      "CoQ10 may interact with blood thinners (warfarin, etc.)",
      "ALA may lower blood sugar — caution in those on diabetic medications",
      "Carnitine may cause digestive discomfort in sensitive individuals",
      "Supplement quality and bioavailability vary greatly — pharmaceutical-grade preferred"
    ],
    references: [
      {
        label: "Schapira et al., 1989 – Demonstrated Complex I deficiency in PD substantia nigra mitochondria",
        citation: "Lancet.",
        url: "https://pubmed.ncbi.nlm.nih.gov/2570726/"
      },
      {
        label: "Shults et al., 2002 – CoQ10 slowed functional decline in early PD (phase II)",
        citation: "Archives of Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12374491/"
      },
      {
        label: "Storch et al., 2007 – CoQ10 trial assessing symptomatic effects in PD",
        citation: "Archives of Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17620488/"
      },
      {
        label: "Beal et al., 2014 – QE3 Phase III trial showed no significant benefit at lower doses",
        citation: "JAMA Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24722115/"
      },
      {
        label: "Chowanadisai et al., 2010 – PQQ stimulates mitochondrial biogenesis",
        citation: "Journal of Biological Chemistry.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20145227/"
      },
      {
        label: "Zhang et al., 2020 – PQQ protects dopaminergic neurons from oxidative stress",
        citation: "Molecular Neurobiology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32105989/"
      },
      {
        label: "Moini et al., 2002 – ALA reduces oxidative stress and recycles antioxidants",
        citation: "Nutrition Reviews.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12495305/"
      },
      {
        label: "Virmani & Binienda, 2004 – ALCAR protects dopaminergic neurons via mitochondrial pathways",
        citation: "Annals of the New York Academy of Sciences.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15132752/"
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
    summary: "Heavy metals such as manganese, lead, mercury, and copper can contribute to oxidative stress, mitochondrial dysfunction, and dopaminergic neuron vulnerability. While they are not the sole cause of Parkinson's disease, both epidemiological and experimental evidence show that metal exposure can increase risk and accelerate neurodegeneration. Detoxification approaches — including chelation therapy, mineral balancing, and dietary support — should only be done under medical supervision and guided by proper laboratory testing.",
    benefits: [
      "May reduce toxic metal burden in individuals with elevated levels",
      "Can lower oxidative stress associated with metal accumulation",
      "Supports mitochondrial function and cellular repair",
      "Addresses environmental contributors that may worsen progression"
    ],
    evidence: {
      supportive: [
        "Numerous epidemiological studies link occupational or environmental metal exposure (manganese, lead, mercury) to increased PD risk.",
        "Autopsy studies show higher metal accumulation (especially iron and manganese) in the substantia nigra of PD patients.",
        "Animal models demonstrate that metals can cause dopaminergic neuron loss, oxidative stress, and alpha-synuclein aggregation.",
        "Chelation agents like EDTA or DMSA can reduce measurable metal levels in the body.",
        "In Wilson's disease (copper overload), chelation reverses neurological symptoms — suggesting a mechanistic rationale for detox in metal-associated neurodegeneration."
      ],
      limitations: [
        "Very limited clinical trials testing chelation specifically for PD symptoms.",
        "It is unclear which PD patients benefit most — only those with documented elevations should consider detox.",
        "Improper chelation can remove essential minerals (calcium, zinc, magnesium).",
        "Requires careful monitoring and individualized protocols.",
        "Chelation is a supportive therapy, not a standalone PD treatment."
      ]
    },
    risks: [
      "Can deplete essential minerals if improperly dosed",
      "Should not be done without medical oversight",
      "Potential for gastrointestinal upset, kidney strain, or allergic reactions",
      "Not recommended prophylactically — should always follow lab testing",
      "May interact with medications",
      "Not appropriate in patients with kidney disease or certain metabolic conditions"
    ],
    references: [
      {
        label: "Gorell et al., 1997 – Occupational exposures to iron, copper, and manganese increase PD risk",
        citation: "Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/9065545/"
      },
      {
        label: "Weisskopf et al., 2010 – Prospective study linking lead exposure to PD risk",
        citation: "Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20308654/"
      },
      {
        label: "Calne & Langston, 1983 – Manganese neurotoxicity mimics Parkinsonism (classic mechanistic model)",
        citation: "Lancet.",
        url: "https://pubmed.ncbi.nlm.nih.gov/6138574/"
      },
      {
        label: "Aschner et al., 2009 – Manganese and dopaminergic cell toxicity mechanisms",
        citation: "NeuroToxicology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19577646/"
      },
      {
        label: "Ayton et al., 2013 – Elevated iron correlates with PD progression and neuronal vulnerability",
        citation: "Nature Review Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23388598/"
      },
      {
        label: "Kraynov et al., 2018 – Chelation reduces metal burden in neurodegenerative models and improves mitochondrial function",
        citation: "",
        url: "https://pubmed.ncbi.nlm.nih.gov/29320635/"
      },
      {
        label: "Devos et al., 2014 – Iron chelator deferiprone slowed motor decline in PD (pilot clinical trial)",
        citation: "Lancet Neurology. (The Deferiprone study is especially important — it's one of the few chelation trials directly conducted in PD patients.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/24613370/"
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
    summary: "Exercise is one of the most proven, consistently effective interventions for Parkinson's disease. Unlike many therapies, exercise shows benefits across motor function, cognition, mood, gait, and possibly even disease progression. High-quality research suggests exercise may have neuroprotective effects, partly through increased production of BDNF (brain-derived neurotrophic factor) — a molecule essential for neuronal survival, learning, and plasticity. From aerobic training and resistance work to balance training, dance, and functional mobility exercises, nearly all forms of structured movement show meaningful benefits for PD.",
    benefits: [
      "Improves gait, balance, mobility, and motor symptoms",
      "Enhances strength, posture, and coordination",
      "May slow disease progression through neuroprotective pathways",
      "Increases BDNF and supports neuroplasticity and brain repair",
      "Improves cardiovascular fitness and metabolic health",
      "Reduces depression, anxiety, and cognitive slowdown",
      "Increases levodopa effectiveness (movement 'priming')",
      "Accessible, scalable, and low-cost"
    ],
    evidence: {
      supportive: [
        "Decades of research confirm exercise improves motor symptoms, gait, balance, and functional capacity.",
        "High-intensity aerobic exercise may help slow progression in early PD by protecting dopamine neurons.",
        "Exercise increases BDNF, promoting neuronal resilience and synaptic plasticity.",
        "Both aerobic and resistance training improve UPDRS motor scores.",
        "Dance-based therapies (e.g., tango) improve balance, dual-tasking, and cognitive performance.",
        "Boxing-style and functional movement programs improve agility, footwork, and fall resilience."
      ],
      limitations: [
        "Optimal intensity, duration, and frequency are still being studied.",
        "Benefits reduce if exercise stops — consistency is crucial.",
        "Advanced PD patients may require supervision and adaptation.",
        "No single exercise 'wins' — the best routine is one the patient can sustain.",
        "Some individuals may need physical therapy evaluation for safety."
      ]
    },
    risks: [
      "Risk of falls without proper supervision",
      "Overexertion may worsen fatigue in some individuals",
      "Medication timing may be needed to maximize safe movement",
      "Individuals with cardiovascular disease may need medical clearance",
      "Programs should be tailored to the person's stage of PD"
    ],
    references: [
      {
        label: "Ahlskog, 2011 – Review demonstrating exercise may have neuroprotective effects in PD",
        citation: "Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21775761/"
      },
      {
        label: "Schenkman et al., 2018 – High-intensity treadmill exercise showed slowed progression in early PD",
        citation: "JAMA Neurology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29235628/"
      },
      {
        label: "Fisher et al., 2008 – Aerobic exercise improved motor function and corticomotor excitability in early PD",
        citation: "Archives of PM&R.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18586131/"
      },
      {
        label: "Cruise et al., 2011 – Progressive resistance training improved strength and motor performance",
        citation: "Neurorehabilitation and Neural Repair.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21222622/"
      },
      {
        label: "Hackney & Earhart, 2009 – Argentine tango improved disease severity and balance",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19304985/"
      }
    ]
  },
  "sauna-cold": {
    name: "Sauna Therapy (Heat Exposure)",
    slug: "sauna-cold",
    importance: 6,
    cost: 5,
    ease: 5,
    tiers: ["max", "average"],
    summary: "Regular sauna use exposes the body to controlled heat stress, triggering physiological responses that improve circulation, support detoxification, enhance mitochondrial function, and activate heat shock proteins (HSPs)—molecules that help protect cells under stress. While saunas are not a direct treatment for Parkinson's disease, their systemic benefits may complement other PD-focused interventions.",
    benefits: [
      "Reduces systemic inflammation",
      "Improves cardiovascular function and blood flow",
      "Increases heat shock proteins (HSP70, HSP90), which may protect neurons from stress",
      "Supports mitochondrial resilience and cellular repair",
      "Promotes relaxation, reduces stress, and improves mood",
      "Enhances detoxification through sweating"
    ],
    evidence: {
      supportive: [
        "Large population studies link frequent sauna use to lower inflammation, better cardiovascular health, and reduced risk of neurodegenerative mortality.",
        "Heat exposure increases heat shock proteins, which help prevent protein misfolding and may offer neuroprotective effects relevant to conditions like PD.",
        "Sauna use improves endothelial function and circulation, which may support brain health and recovery.",
        "Some evidence suggests sauna bathing improves sleep, stress resilience, and autonomic function—all areas often affected in PD."
      ],
      limitations: [
        "Direct clinical trials of sauna therapy specifically in Parkinson's disease are very limited.",
        "Benefits are likely supportive, not disease-modifying.",
        "Optimal protocols for neurological benefit (temperature, duration, frequency) remain unestablished.",
        "Individuals with cardiovascular, autonomic, or blood pressure-related issues must use caution.",
        "Effects may be modest unless combined with dietary, metabolic, or exercise-based therapies."
      ]
    },
    risks: [
      "Risk of overheating, dehydration, or dizziness if overused",
      "Not suitable for individuals with uncontrolled cardiovascular disease",
      "Blood pressure may temporarily drop during sessions",
      "Requires appropriate hydration and cooling-off periods",
      "Avoid alcohol or sedatives before sauna use",
      "Consult a physician if you have autonomic dysfunction, a common PD symptom"
    ],
    references: [
      {
        label: "Laukkanen et al., 2015 – Frequent sauna use associated with lower cardiovascular and all-cause mortality",
        citation: "JAMA Internal Medicine.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25663225/"
      },
      {
        label: "Laukkanen & Laukkanen, 2018 – Review: Sauna bathing improves inflammation, vascular function, and neurocognitive health",
        citation: "",
        url: "https://pubmed.ncbi.nlm.nih.gov/29726554/"
      },
      {
        label: "Heinonen et al., 2011 – Heat exposure increases heat shock proteins and may protect against neurodegenerative stress",
        citation: "",
        url: "https://pubmed.ncbi.nlm.nih.gov/21888667/"
      },
      {
        label: "Hussain & Cohen, 2018 – Sauna therapy improves autonomic nervous system balance and stress response",
        citation: "",
        url: "https://pubmed.ncbi.nlm.nih.gov/29769534/"
      }
    ]
  },
  pbm: {
    name: "Photobiomodulation (Red & Near-Infrared Light Therapy)",
    slug: "pbm",
    importance: 6,
    cost: 7,
    ease: 6,
    tiers: ["max"],
    summary: "Photobiomodulation (PBM) uses red and near-infrared (NIR) wavelengths of light to stimulate cellular energy production, reduce inflammation, and support tissue repair. In neurological applications, PBM is often delivered through specialized helmets or headsets designed to target brain tissue. Preclinical and early clinical evidence suggests potential benefits for Parkinson's disease, particularly through effects on mitochondria and neural inflammation.",
    benefits: [
      "Enhances mitochondrial function via cytochrome-c-oxidase activation",
      "Reduces neuroinflammation and oxidative stress",
      "Supports neuronal repair and survival pathways",
      "Non-invasive and generally well tolerated",
      "Home-treatment systems are increasingly accessible",
      "May improve motor symptoms, cognitive function, or sleep in small studies"
    ],
    evidence: {
      supportive: [
        "Animal models of Parkinson's consistently show PBM reduces dopaminergic neuron loss, improves motor behavior, and enhances mitochondrial resilience.",
        "PBM increases ATP production and improves mitochondrial dysfunction, a key mechanism involved in PD.",
        "Small human pilot trials have shown improvements in motor symptoms, cognitive performance, sleep quality, mood and quality of life.",
        "PBM activates cytochrome c oxidase and influences nitric oxide signaling, both of which support neuroprotective pathways."
      ],
      limitations: [
        "Larger, placebo-controlled human trials in PD are still needed.",
        "The ideal wavelength, irradiance, pulse frequency, and treatment duration remain unclear.",
        "Commercial devices vary widely in quality, depth penetration, and true irradiance.",
        "Benefits are generally modest unless combined with metabolic or behavioral therapies.",
        "Some consumer products exaggerate penetration depth or power."
      ]
    },
    risks: [
      "Generally considered very safe when proper wavelengths and intensities are used",
      "Avoid shining NIR light directly into the eyes — eye protection recommended",
      "Overheating from poor-quality devices is possible but rare",
      "Caution in individuals with photosensitivity disorders or those on photosensitizing medications",
      "Device quality matters — avoid non-certified or untested manufacturers"
    ],
    references: [
      {
        label: "Hamblin, 2016 – Review of PBM mechanisms and applications in brain disorders",
        citation: "BBA Clinical.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27446641/"
      },
      {
        label: "Hamilton et al., 2019 – PBM affects brain activity during wakefulness and sleep",
        citation: "Frontiers in Neuroscience.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31156350/"
      },
      {
        label: "Stone et al., 2013 – PBM protected dopaminergic neurons in MPTP model of PD",
        citation: "Brain Research.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23774129/"
      },
      {
        label: "Liebert et al., 2021 – Pilot clinical trial: PBM improved mobility, cognition, and fine motor function in PD patients",
        citation: "Scientific Reports.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33820838/"
      },
      {
        label: "Johnstone et al., 2016 – PBM reduced neuroinflammation and improved motor function in PD animal models",
        citation: "Journal of Photochemistry & Photobiology B.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26944602/"
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
    summary: "Hyperbaric Oxygen Therapy involves breathing close-to-pure oxygen inside a pressurized chamber. The increased pressure allows oxygen to dissolve more deeply into blood plasma, potentially improving cellular energy production, reducing inflammation, and supporting tissue repair. Research in Parkinson's disease is still early, with mixed results.",
    benefits: [
      "Increases oxygen delivery to brain and peripheral tissues",
      "May reduce systemic and neural inflammation",
      "Supports mitochondrial energy pathways",
      "Can enhance general recovery and wound healing",
      "Potential neuroprotective effects suggested in preclinical PD models"
    ],
    evidence: {
      supportive: [
        "In PD animal models, HBOT has shown reduced neuroinflammation and improved mitochondrial enzyme activity.",
        "Some small human studies suggest modest improvements in motor symptoms, sleep quality, and fatigue.",
        "Meta-analyses show HBOT may help PD patients with sleep dysfunction, improving sleep quality scores.",
        "HBOT is widely used for other conditions requiring enhanced oxygenation, demonstrating a strong safety record when supervised properly."
      ],
      limitations: [
        "Large-scale, well-controlled PD studies are limited and results are inconsistent.",
        "Improvements seen in small studies are often modest, not transformative.",
        "Benefits may be due to indirect effects (inflammation reduction) rather than direct neural repair.",
        "Optimal pressure, session length, and total treatment course for PD are not established.",
        "High cost and accessibility issues limit practical usage."
      ]
    },
    risks: [
      "Ear or sinus barotrauma (pressure-related injury)",
      "Claustrophobia in enclosed chambers",
      "Oxygen toxicity at improper pressures or durations",
      "Not suitable for individuals with certain lung diseases",
      "High cost with uncertain benefit for PD"
    ],
    references: [
      {
        label: "Hyperbaric Oxygen Therapy Improves Parkinson's Disease by Promoting Mitochondrial Biogenesis via the SIRT‑1/PGC‑1α Pathway (2022)",
        citation: "HBOT led to improved mitochondrial biogenesis and function, reduced neurodegeneration markers, and motor improvements in a PD-model (MPTP-induced) mouse study.",
        url: "https://doi.org/10.3390/biom12050661"
      },
      {
        label: "Efficacy of hyperbaric oxygen therapy as an adjunct therapy in the treatment of sleep disorders among patients with Parkinson's disease: a meta‑analysis (2024)",
        citation: "A meta-analysis of RCTs showing HBOT, when added to standard care, improved sleep quality, total sleep time, slow-wave and REM sleep, and modestly improved motor scores (UPDRS III) in PD patients with sleep disturbances.",
        url: "https://www.frontiersin.org/articles/10.3389/fneur.2024.1328911/full"
      },
      {
        label: "Hyperbaric oxygen therapy improves Parkinson's disease in a 1‑Methyl‑4‑phenyl‑1,2,3,6-tetrahydropyridine (MPTP) mouse model (2022)",
        citation: "Demonstrated protective effect of HBOT on dopaminergic neurons and motor performance in MPTP mouse model of PD.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35625589/"
      },
      {
        label: "Hyperbaric Oxygen Treatment: Effects on Mitochondrial Function in Neurodegenerative Models (2021)",
        citation: "In animal models, HBOT was shown to improve mitochondrial function, reduce oxidative stress, and support cell survival; relevant even beyond classical PD models.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8699286/"
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
    summary: "A targeted daily supplement regimen can support multiple biological pathways implicated in Parkinson's disease, including mitochondrial function, oxidative stress defense, inflammation, methylation, neurotransmitter synthesis, and gut health. While no supplement alone can treat PD, a structured combination can help correct deficiencies, support neuronal resilience, and enhance outcomes when integrated with broader evidence-based therapies.",
    benefits: [
      "Supports multiple cellular and neurological pathways simultaneously",
      "Helps correct nutrient deficiencies common in PD (B12, D, magnesium, omega-3s)",
      "Reduces oxidative stress and systemic inflammation",
      "Enhances mitochondrial energy production and neuronal metabolism",
      "Generally safe and accessible",
      "Easily customizable to symptoms, lab findings, and individual needs"
    ],
    evidence: {
      supportive: [
        "PD patients frequently exhibit lower levels of B12, folate, vitamin D, magnesium, and other essential nutrients.",
        "B vitamins—especially B12 and folate—are required for methylation and homocysteine regulation; elevated homocysteine is linked to faster cognitive decline in PD.",
        "Omega-3 fatty acids have anti-inflammatory and potential neuroprotective effects, and may improve mood and motor symptoms in some studies.",
        "Antioxidants (e.g., vitamins C & E, ALA) reduce oxidative stress—one of the central mechanisms driving dopaminergic neuron loss.",
        "Magnesium supports sleep, muscle relaxation, mitochondrial ATP production, and may reduce symptoms of anxiety or rigidity.",
        "Vitamin D deficiency is common in PD and associated with poorer motor performance, falls, mood changes, and lower bone density.",
        "Probiotics and gut-support nutrients may support microbiome balance—which is increasingly recognized as relevant in PD pathophysiology.",
        "↓ Oxidative stress (vitamins C, E, ALA, glutathione precursors)",
        "↓ Homocysteine and better methylation (B12, folate, B6)",
        "↑ Mitochondrial ATP production (magnesium, CoQ10, ALA, PQQ)",
        "↑ Neurotrophic support (omega-3 DHA/EPA)",
        "↑ Gut–brain axis support (probiotics, prebiotics)",
        "↑ Overall nervous system resilience"
      ],
      limitations: [
        "Comprehensive supplement 'stacks' have limited large-scale trials in PD.",
        "Effects of individual supplements may be modest on their own.",
        "Benefits often require months of consistent use.",
        "Quality, purity, and absorption vary widely by brand.",
        "Ideal combinations and dosing protocols are not standardized.",
        "Should not replace core therapies such as medication, exercise, or metabolic support."
      ]
    },
    risks: [
      "Potential interactions with prescription medications (especially MAO-B inhibitors, blood thinners, or levodopa metabolism)",
      "Over-supplementation can cause imbalances or toxicity (e.g., excess B6 causing neuropathy)",
      "Poor-quality supplements may contain contaminants or underdosed ingredients",
      "Cost may accumulate with larger stacks",
      "Should be guided by lab testing and medical supervision"
    ],
    references: [
      {
        label: "Seidl et al., 2014 – Low folate and B12 associated with PD progression and cognitive decline",
        citation: "Neurodegenerative Diseases.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24731923/"
      },
      {
        label: "Christine et al., 2018 – Vitamin D impacts motor and non-motor symptoms in PD",
        citation: "Journal of Parkinson's Disease.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29480159/"
      },
      {
        label: "Samadi et al., 2014 – Omega-3 fatty acids reduce inflammation and may improve mood/motor symptoms in PD",
        citation: "Nutritional Neuroscience.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24375393/"
      },
      {
        label: "Jing et al., 2015 – Antioxidant supplementation improves oxidative stress markers in PD",
        citation: "Neuroscience Letters.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25660390/"
      },
      {
        label: "Vasquez et al., 2012 – B vitamins reduce homocysteine, supporting neurological health",
        citation: "Alternative Medicine Review.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22295886/"
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
    summary: "Parkinson's disease is increasingly recognized as a condition involving not only the brain, but also the gut–brain axis. Many patients show profound microbiome changes, including reduced diversity, inflammation-associated bacteria, and a loss of beneficial hydrogen-producing and short-chain–fatty-acid–producing species. Comprehensive microbiome testing provides a detailed view of these imbalances, helping to guide targeted interventions such as probiotics, prebiotics, fiber strategies, fermented foods, dietary protocols, and advanced gut therapies.",
    benefits: [
      "Identifies specific bacterial deficiencies and overgrowth patterns",
      "Reveals loss of beneficial species (including hydrogen-producing bacteria)",
      "Helps target therapy to the individual rather than guesswork",
      "Tracks progress and response to interventions over time",
      "Can guide diet, probiotics, butyrate support, and gut-focused therapies",
      "Supports a personalized, root-cause approach"
    ],
    evidence: {
      supportive: [
        "PD patients consistently show distinct microbiome signatures, including reduced levels of Prevotella, Faecalibacterium, and hydrogen-producing bacteria, and increased inflammatory species such as Enterobacteriaceae.",
        "Altered short-chain fatty acid metabolism (butyrate deficiency) is common in PD.",
        "Gut dysbiosis correlates with constipation and GI dysfunction (often decades before motor symptoms), systemic inflammation and immune activation, disrupted intestinal permeability ('leaky gut'), and potential alpha-synuclein misfolding and spread via the vagus nerve.",
        "Microbiome changes may influence medication response (levodopa metabolism).",
        "Targeted interventions—probiotics, prebiotics, butyrate, diet shifts—show early promise in reducing constipation, inflammation, and non-motor symptoms.",
        "Species like Prevotella generate endogenous hydrogen gas, which acts as a natural selective antioxidant.",
        "PD patients have significantly lower abundance of hydrogen-producing species, potentially contributing to increased oxidative stress.",
        "Hydrogen therapy and microbiome support may be synergistic."
      ],
      limitations: [
        "Ideal 'PD-friendly microbiome' composition is not fully defined.",
        "Testing methods (16S, shotgun metagenomics) vary in depth, accuracy, and interpretation.",
        "Beneficial species may differ across individuals—personalization is key.",
        "Clinical trials testing microbiome-directed therapies are ongoing.",
        "Results depend on compliance with dietary/gut protocols."
      ]
    },
    risks: [
      "High-quality testing can be expensive",
      "Over-interpretation can lead to unnecessary or excessive supplementation",
      "Requires expertise in gut analysis and PD-specific patterns",
      "Probiotics may cause temporary digestive discomfort in sensitive individuals",
      "Some interventions (e.g., herbal antimicrobials) require caution with medications"
    ],
    references: [
      {
        label: "Scheperjans et al., 2015 – Landmark study linking gut microbiota composition to PD phenotype",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25476529/"
      },
      {
        label: "Hill-Burns et al., 2017 – PD and PD medications create distinct gut microbiome signatures",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28398611/"
      },
      {
        label: "Unger et al., 2016 – PD patients show increased gut permeability and inflammatory gut signatures",
        citation: "NPJ Parkinson's Disease.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27249706/"
      },
      {
        label: "Qian et al., 2020 – Reduced Prevotella linked to PD and hydrogen deficiency",
        citation: "Parkinsonism & Related Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32221510/"
      },
      {
        label: "Keshavarzian et al., 2015 – Gut microbiota of PD patients differs significantly from controls; inflammatory patterns identified",
        citation: "Movement Disorders.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26197340/"
      }
    ]
  },
  "oral-infection": {
    name: "Oral & Dental Infection Screening",
    slug: "oral-infection",
    importance: 6,
    cost: 5,
    ease: 5,
    tiers: ["max", "average", "limited"],
    summary: "Chronic oral infections—including periodontal disease, gum inflammation, root canal infections, and dysbiosis of the oral microbiome—can drive persistent systemic inflammation. Emerging research suggests that chronic inflammatory load from oral pathogens may contribute to neuroinflammation, altered gut microbiota, and increased risk of neurodegenerative disease. While oral infections are not a direct cause of Parkinson's, addressing dental health may help reduce inflammatory burden and support overall systemic resilience.",
    benefits: [
      "Reduces systemic inflammation associated with chronic oral infections",
      "May lower circulating inflammatory markers relevant to neurodegeneration",
      "Addresses a potential long-term infection reservoir (gum pockets, root canals)",
      "Improves overall metabolic and cardiovascular health",
      "Accessible intervention for most individuals"
    ],
    evidence: {
      supportive: [
        "Chronic periodontal disease increases systemic inflammation, elevating markers such as CRP, IL-6, and TNF-α, all implicated in PD progression.",
        "Oral pathogens (e.g., Porphyromonas gingivalis, Fusobacterium nucleatum) are associated with neuroinflammatory and cognitive disorders.",
        "Some studies show periodontal treatment reduces systemic inflammatory load and improves metabolic function.",
        "Oral bacteria can translocate to the gut, potentially contributing to microbiome imbalance—relevant because PD patients often display gut dysbiosis.",
        "Systemic inflammation from oral disease is linked to higher risk of cardiovascular, metabolic, and neurodegenerative conditions."
      ],
      limitations: [
        "Direct causal evidence linking oral infections to PD symptoms is limited.",
        "No clinical trials show oral treatment directly improves PD motor outcomes.",
        "Oral disease may be one of many contributing inflammatory factors, not a root cause.",
        "Benefits may be indirect—by reducing inflammation, improving sleep, and lowering overall immune activation."
      ]
    },
    risks: [
      "Generally safe when performed by licensed dental professionals",
      "Dental procedures (deep cleaning, extractions, addressing root canals) may involve temporary discomfort or risk of infection",
      "Costs can accumulate depending on procedure complexity",
      "Individuals with cardiovascular disease may require antibiotic prophylaxis (per dentist recommendation)",
      "Overuse of antiseptic mouthwashes may harm beneficial oral microbiota"
    ],
    references: [
      {
        label: "Chen et al., 2017 – Periodontal inflammation linked to systemic inflammation and cardiovascular risk",
        citation: "Current Atherosclerosis Reports.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28578417/"
      },
      {
        label: "Dominy et al., 2019 – Porphyromonas gingivalis (gum disease pathogen) found in Alzheimer's brains; associated with neuroinflammation",
        citation: "Science Advances.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30746447/"
      },
      {
        label: "Nazir, 2017 – Comprehensive review: periodontal disease contributes to systemic inflammation",
        citation: "International Journal of Health Sciences.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28936105/"
      },
      {
        label: "Preshaw et al., 2012 – Periodontal therapy reduces systemic inflammatory markers (IL-6, CRP)",
        citation: "Journal of Clinical Periodontology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22845872/"
      },
      {
        label: "Sampson et al., 2020 – Oral–gut–brain axis: oral dysbiosis may influence neuroinflammatory pathways",
        citation: "Journal of Oral Microbiology.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33029254/"
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
    summary: "IV antioxidant therapy delivers high concentrations of compounds such as glutathione, vitamin C, N-acetyl-cysteine (NAC), and other nutrients directly into the bloodstream. Since oxidative stress and impaired antioxidant defenses are hallmark features of Parkinson's disease, IV delivery offers a way to bypass digestive limitations and rapidly increase plasma and tissue levels of key antioxidants. While IV antioxidants are not a standalone treatment for PD, they may help reduce oxidative burden and support mitochondrial and cellular function.",
    benefits: [
      "Achieves higher blood and tissue concentrations than oral supplements",
      "Supports glutathione levels, a critical antioxidant often depleted in PD",
      "May reduce oxidative stress and inflammatory signaling",
      "Potentially supports detoxification and mitochondrial resilience",
      "Rapid onset due to direct bloodstream delivery"
    ],
    evidence: {
      supportive: [
        "Oxidative stress and reduced glutathione (GSH) levels are well-documented features of Parkinson's pathology.",
        "IV glutathione temporarily improves motor symptoms in some small studies and case reports.",
        "IV antioxidants can bypass poor absorption and first-pass metabolism, achieving higher levels than oral dosing.",
        "Vitamin C and NAC may support mitochondrial function and reduce neuroinflammation in PD-related models.",
        "Some studies report transient improvements in rigidity, tremor, and dyskinesia following IV glutathione."
      ],
      limitations: [
        "Very limited large-scale clinical trials testing IV antioxidants in PD.",
        "Benefits may be short-lived unless therapy is repeated or paired with metabolic support.",
        "Long-term efficacy and optimal dosing schedules are unclear.",
        "Not all clinics use pharmaceutical-grade compounds or validated protocols.",
        "Some improvements reported may be due to placebo effects or transient changes in redox balance."
      ]
    },
    risks: [
      "Requires venous access; risk of infection, irritation, or bruising",
      "Individuals with kidney disease or certain metabolic disorders must use caution with high-dose antioxidants",
      "Vitamin C at high doses may pose risks for those with G6PD deficiency or kidney stones",
      "Glutathione IVs may cause flushing or lightheadedness in some individuals",
      "Must be performed by trained medical personnel using sterile technique",
      "Variability between clinics in dosing, purity, and safety standards"
    ],
    references: [
      {
        label: "Sechi et al., 1996 – Early clinical study showing IV glutathione improved PD symptoms temporarily",
        citation: "Progress in Neuro-Psychopharmacology & Biological Psychiatry.",
        url: "https://pubmed.ncbi.nlm.nih.gov/8938815/"
      },
      {
        label: "Perry et al., 1982 – Evidence that glutathione is depleted in the substantia nigra of PD patients",
        citation: "Journal of Neurochemistry.",
        url: "https://pubmed.ncbi.nlm.nih.gov/7126335/"
      },
      {
        label: "Bárcena et al., 2019 – Antioxidant therapies improve mitochondrial function and oxidative balance in neurological models",
        citation: "Antioxidants.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30669567/"
      },
      {
        label: "Monti et al., 2016 – IV vitamin C improves fatigue and quality of life in oxidative-stress conditions; mechanistically relevant to PD",
        citation: "Nutrients.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27548116/"
      },
      {
        label: "Berman et al., 2011 – NAC (a glutathione precursor) improves dopamine transporter binding in PD patients (MRI biomarkers)",
        citation: "Clinical pharmacology and therapeutics.",
        url: "https://pubmed.ncbi.nlm.nih.gov/21305243/"
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

