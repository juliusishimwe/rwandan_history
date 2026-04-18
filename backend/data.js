const timelineEvents = [
  {
    year: "1096",
    title: "Founding of the Kingdom of Rwanda",
    description: "Legendary king Gihanga establishes the earliest royal lineage and formalizes the kingdom’s institutions.",
    category: "founding",
  },
  {
    year: "1450",
    title: "Centralization under King Ruganzu II",
    description: "Rwanda becomes a more centralized kingdom through military organization and administrative reforms.",
    category: "political",
  },
  {
    year: "1894",
    title: "German Colonial Rule Begins",
    description: "Germany declares a protectorate over Rwanda, marking the start of European colonial control.",
    category: "colonial",
  },
  {
    year: "1916",
    title: "Belgian Occupation",
    description: "Belgium takes control of Rwanda during World War I and later administers it under a League of Nations mandate.",
    category: "colonial",
  },
  {
    year: "1962",
    title: "Rwanda Gains Independence",
    description: "Rwanda becomes an independent republic on July 1, ending colonial rule and beginning a new era.",
    category: "independence",
  },
  {
    year: "1994",
    title: "Genocide Against the Tutsi",
    description: "The genocide shakes the nation and the world, killing an estimated 800,000 people in 100 days.",
    category: "conflict",
  },
  {
    year: "2000",
    title: "Post-Genocide Recovery Begins",
    description: "Rwanda begins rebuilding national institutions, promoting reconciliation, and investing in development.",
    category: "recovery",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Rwanda accelerates its technology and innovation agenda, advancing digital governance and smart city initiatives.",
    category: "modernization",
  },
];

const kings = [
  {
    id: "gihanga",
    name: "Gihanga Ngomijana",
    reign: "c. 1081-1114",
    dynasty: "Founder",
    contributions: [
      "Founded the Kingdom of Rwanda",
      "Established centralized royal authority",
      "Introduced cattle herding and sacred traditions",
    ],
    significance: "Regarded as the legendary founder of Rwanda and the first cultural hero of the royal line.",
  },
  {
    id: "ruganzu-ii",
    name: "Ruganzu II Ndoli",
    reign: "c. 1438-1485",
    dynasty: "Nyiginya",
    contributions: [
      "Expanded territorial control across Rwanda",
      "Strengthened the monarchy through military campaigns",
      "Improved administration and royal institutions",
    ],
    significance: "One of Rwanda’s most celebrated medieval kings, credited with unifying the kingdom.",
  },
  {
    id: "mwami-rema",
    name: "Mwami Rema",
    reign: "c. 1520-1550",
    dynasty: "Nyiginya",
    contributions: [
      "Modernized tribute collection",
      "Promoted agricultural growth",
      "Protected customs and royal ceremonies",
    ],
    significance: "Helped sustain royal authority and preserve cultural identity during early state expansion.",
  },
];

module.exports = { timelineEvents, kings };