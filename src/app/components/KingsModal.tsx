import { X, Crown, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface King {
  name: string;
  kinyarwanda: string;
  reign: string;
  dynasty: string;
  contributions: string[];
  significance: string;
  order: number;
}

const rwandanKings: King[] = [
  {
    order: 1,
    name: "Gihanga",
    kinyarwanda: "Gihanga Ngomijana",
    reign: "c. 1081-1114",
    dynasty: "Founder",
    contributions: [
      "Founded the Kingdom of Rwanda",
      "Established the monarchy system and royal court",
      "Introduced cattle herding practices (Inka)",
      "Created the administrative structure of chiefs",
      "Established the sacred fire (Ishyiga) tradition"
    ],
    significance: "Legendary founder and father of Rwanda, considered the cultural hero who established the kingdom's foundations and traditions that lasted nearly 900 years."
  },
  {
    order: 2,
    name: "Kazi",
    kinyarwanda: "Kazi",
    reign: "c. 1114-1136",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Consolidated the kingdom founded by his father",
      "Expanded territorial control",
      "Strengthened the royal army",
      "Maintained the sacred traditions"
    ],
    significance: "Son of Gihanga who continued building the kingdom's foundations and military strength."
  },
  {
    order: 3,
    name: "Gahima I",
    kinyarwanda: "Gahima I",
    reign: "c. 1136-1158",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Enhanced agricultural systems",
      "Promoted cattle breeding",
      "Developed trade relationships",
      "Strengthened clan structures"
    ],
    significance: "Focused on economic development and agricultural advancement of the kingdom."
  },
  {
    order: 4,
    name: "Yuhi I Musindi",
    kinyarwanda: "Yuhi I Musindi",
    reign: "c. 1158-1180",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Expanded kingdom's borders",
      "Enhanced military organization",
      "Developed diplomatic relations",
      "Promoted cultural practices"
    ],
    significance: "Known for territorial expansion and strengthening Rwanda's military capabilities."
  },
  {
    order: 5,
    name: "Ndahiro I Ruyange",
    kinyarwanda: "Ndahiro I Ruyange",
    reign: "c. 1180-1210",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Reformed administrative systems",
      "Enhanced justice system",
      "Promoted iron working and crafts",
      "Developed water management"
    ],
    significance: "Known for administrative reforms and promoting artisan crafts throughout the kingdom."
  },
  {
    order: 6,
    name: "Ndoba",
    kinyarwanda: "Ndoba",
    reign: "c. 1210-1235",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Maintained territorial integrity",
      "Strengthened defense systems",
      "Promoted cultural unity",
      "Enhanced royal ceremonies"
    ],
    significance: "Focused on maintaining the kingdom's stability and cultural cohesion."
  },
  {
    order: 7,
    name: "Samembe",
    kinyarwanda: "Samembe",
    reign: "c. 1235-1266",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Expanded western territories",
      "Developed taxation systems",
      "Enhanced royal authority",
      "Promoted trade networks"
    ],
    significance: "Known for territorial expansion to the west and economic reforms."
  },
  {
    order: 8,
    name: "Nsoro Samukondo",
    kinyarwanda: "Nsoro Samukondo",
    reign: "c. 1266-1296",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Strengthened central authority",
      "Reformed land distribution",
      "Enhanced military training",
      "Promoted livestock management"
    ],
    significance: "Consolidated royal power and improved land management systems."
  },
  {
    order: 9,
    name: "Ruganzu I Bwimba",
    kinyarwanda: "Ruganzu I Bwimba",
    reign: "c. 1296-1312",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Major territorial conquests",
      "Reformed military structure",
      "Introduced new weapons and tactics",
      "Expanded royal influence"
    ],
    significance: "Great warrior king who significantly expanded Rwanda's territory through military campaigns."
  },
  {
    order: 10,
    name: "Cyilima I Rugwe",
    kinyarwanda: "Cyilima I Rugwe",
    reign: "c. 1312-1345",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Consolidated conquered territories",
      "Developed administrative integration",
      "Enhanced cultural assimilation policies",
      "Promoted peace and stability"
    ],
    significance: "Focused on integrating newly conquered lands and maintaining internal peace."
  },
  {
    order: 11,
    name: "Kigeli I Mukobanya",
    kinyarwanda: "Kigeli I Mukobanya",
    reign: "c. 1345-1378",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Expanded territorial control significantly",
      "Strengthened the monarchy's power",
      "Developed comprehensive administrative systems",
      "Enhanced military organization and training"
    ],
    significance: "One of the great expansion kings who consolidated royal power and greatly expanded Rwanda's influence and territory."
  },
  {
    order: 12,
    name: "Mibambwe I Mutabazi",
    kinyarwanda: "Mibambwe I Mutabazi",
    reign: "c. 1378-1411",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Reformed the royal court system",
      "Promoted agricultural development and innovation",
      "Established diplomatic relations with neighboring kingdoms",
      "Enhanced cultural practices and royal ceremonies",
      "Promoted education of nobles"
    ],
    significance: "Known for peaceful and prosperous reign focused on cultural advancement, diplomacy, and internal development rather than conquest."
  },
  {
    order: 13,
    name: "Yuhi II Gahima",
    kinyarwanda: "Yuhi II Gahima",
    reign: "c. 1411-1444",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Expanded kingdom borders significantly to the north",
      "Introduced new military strategies and formations",
      "Developed extensive trade routes with distant regions",
      "Strengthened the Ubuhake system (patron-client relationships)",
      "Enhanced cattle distribution networks"
    ],
    significance: "Major expansion king known for doubling Rwanda's territory and establishing Rwanda as a major regional power."
  },
  {
    order: 14,
    name: "Ndahiro II Cyamatare",
    kinyarwanda: "Ndahiro II Cyamatare",
    reign: "c. 1444-1477",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Maintained expanded territories",
      "Reformed judicial systems",
      "Promoted justice and fairness",
      "Enhanced royal protocol",
      "Developed succession procedures"
    ],
    significance: "Known for establishing stronger legal frameworks and ensuring smooth royal succession."
  },
  {
    order: 15,
    name: "Ruganzu II Ndoli",
    kinyarwanda: "Ruganzu II Ndoli",
    reign: "c. 1477-1510",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Restored the kingdom after period of crisis",
      "Defeated external enemies and invaders",
      "Reformed the royal army completely",
      "Introduced the Intore (elite warriors) tradition",
      "Reestablished royal authority and prestige"
    ],
    significance: "Legendary hero king who saved Rwanda from collapse, defeated enemies, and restored the kingdom's glory. One of the most celebrated kings in Rwandan oral tradition."
  },
  {
    order: 16,
    name: "Cylima II Rujugira",
    kinyarwanda: "Cylima II Rujugira",
    reign: "c. 1510-1543",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Massive territorial expansion in all directions",
      "Reformed administrative divisions (provinces)",
      "Introduced new taxation systems",
      "Developed royal ideology and symbolism",
      "Enhanced the power of royal drums (Ingoma)"
    ],
    significance: "One of the greatest expansion kings who established Rwanda's classical administrative structure and greatly extended its borders."
  },
  {
    order: 17,
    name: "Kigeli II Nyamuheshera",
    kinyarwanda: "Kigeli II Nyamuheshera",
    reign: "c. 1543-1576",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Consolidated vast territories",
      "Enhanced regional integration",
      "Promoted cultural unity across diverse regions",
      "Developed communication systems",
      "Strengthened provincial administration"
    ],
    significance: "Focused on unifying and administering the greatly expanded kingdom his predecessors had created."
  },
  {
    order: 18,
    name: "Mibambwe II Gisanura",
    kinyarwanda: "Mibambwe II Gisanura",
    reign: "c. 1576-1609",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Promoted justice and law throughout the kingdom",
      "Developed the royal court protocol and etiquette",
      "Enhanced the role of advisors and councils",
      "Supported artisan communities and crafts",
      "Maintained internal peace and stability"
    ],
    significance: "Peaceful ruler focused on internal stability, justice, and cultural refinement rather than expansion."
  },
  {
    order: 19,
    name: "Yuhi III Mazimpaka",
    kinyarwanda: "Yuhi III Mazimpaka",
    reign: "c. 1609-1642",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Expanded western territories significantly",
      "Reformed taxation and tribute system",
      "Promoted iron working and metalwork",
      "Enhanced royal ceremonies and rituals",
      "Developed military logistics"
    ],
    significance: "Known for western expansion and economic development, especially promoting iron production and craftsmanship."
  },
  {
    order: 20,
    name: "Mutara I Semugeshi",
    kinyarwanda: "Mutara I Semugeshi",
    reign: "c. 1642-1675",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Maintained kingdom's territorial integrity",
      "Enhanced defensive capabilities",
      "Promoted agricultural productivity",
      "Developed food security systems",
      "Strengthened clan relationships"
    ],
    significance: "Focused on consolidation and internal development, ensuring food security and defensive strength."
  },
  {
    order: 21,
    name: "Kigeli III Ndabarasa",
    kinyarwanda: "Kigeli III Ndabarasa",
    reign: "c. 1675-1708",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Reformed land distribution systems comprehensively",
      "Enhanced cattle tribute system (Ubuhake)",
      "Promoted poetry and oral traditions extensively",
      "Strengthened and reorganized the royal army",
      "Developed the institution of royal poets (Abasizi)"
    ],
    significance: "Known for major administrative reforms, cultural patronage, and establishing the golden age of Rwandan oral literature and poetry."
  },
  {
    order: 22,
    name: "Cyilima III Rujugira",
    kinyarwanda: "Cyilima III Rujugira",
    reign: "c. 1708-1741",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Greatest territorial expansion in Rwandan history",
      "Conquered territories in all four directions",
      "Reformed entire administrative structure",
      "Established the classical three-chief system",
      "Created permanent provincial administration",
      "Developed the royal ideology to its peak"
    ],
    significance: "Considered one of the two or three greatest kings of Rwanda. Expanded the kingdom to nearly its modern borders and created the sophisticated administrative system that defined classical Rwanda."
  },
  {
    order: 23,
    name: "Kigeli IV Rwabugiri",
    kinyarwanda: "Kigeli IV Rwabugiri",
    reign: "1853-1895",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Completed Rwanda's territorial expansion to maximum extent",
      "Reformed administrative divisions into comprehensive system",
      "Strengthened central authority over provinces",
      "Resisted early European colonization attempts",
      "Unified diverse regions under firm royal control",
      "Enhanced royal ceremonies to unprecedented levels",
      "Developed sophisticated intelligence networks"
    ],
    significance: "The most powerful and last great traditional king of Rwanda. Expanded the kingdom to its greatest extent and made Rwanda one of the most centralized and powerful states in the Great Lakes region. His death marked the beginning of the colonial period."
  },
  {
    order: 24,
    name: "Mibambwe IV Rutarindwa",
    kinyarwanda: "Mibambwe IV Rutarindwa",
    reign: "1895-1896",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Brief transitional reign during crisis period",
      "Attempted to maintain royal traditions",
      "Faced succession disputes"
    ],
    significance: "Very short reign of less than one year that ended in conflict during a major succession crisis following Rwabugiri's death. His deposition marked the beginning of instability."
  },
  {
    order: 25,
    name: "Yuhi V Musinga",
    kinyarwanda: "Yuhi V Musinga",
    reign: "1896-1931",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Navigated the transition from German to Belgian colonial rule",
      "Maintained traditional authority under colonial system",
      "Preserved royal institutions despite colonial pressure",
      "Resisted Christian conversion for decades",
      "Attempted to balance tradition with colonial demands"
    ],
    significance: "Led Rwanda through the difficult colonial transition period. Worked with Germans and initially with Belgians to maintain some royal authority, but was eventually exiled by Belgian authorities for refusing to fully cooperate and convert to Christianity."
  },
  {
    order: 26,
    name: "Mutara III Rudahigwa",
    kinyarwanda: "Mutara III Rudahigwa",
    reign: "1931-1959",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Converted to Christianity (Catholic) in 1943",
      "Modernized Rwanda's institutions under colonial rule",
      "Promoted education and healthcare development",
      "Advocated for independence from Belgium",
      "Abolished the Ubuhake system in 1954",
      "Consecrated Rwanda to Christ the King in 1946",
      "Pushed for social reforms"
    ],
    significance: "Modernizing king who transformed Rwanda by embracing Christianity and modern education while advocating for independence. His mysterious death in 1959 occurred at a critical moment, just before independence, and remains controversial."
  },
  {
    order: 27,
    name: "Kigeli V Ndahindurwa",
    kinyarwanda: "Kigeli V Ndahindurwa",
    reign: "1959-1961",
    dynasty: "Nyiginya Dynasty",
    contributions: [
      "Last ruling Mwami (King) of Rwanda",
      "Attempted to maintain monarchy during revolutionary period",
      "Advocated for national unity and reconciliation",
      "Opposed ethnic division and violence",
      "Lived in exile after 1961, continuing to advocate for Rwanda",
      "Maintained cultural and historical legacy until his death in 2016"
    ],
    significance: "The last king of Rwanda whose reign ended when the monarchy was abolished during the 1961 revolution. Spent 55 years in exile, primarily in the United States, where he continued to advocate for Rwandan unity and reconciliation until his death in 2016."
  }
];

interface KingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KingsModal({ isOpen, onClose }: KingsModalProps) {
  const [expandedKing, setExpandedKing] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleKing = (order: number) => {
    setExpandedKing(expandedKing === order ? null : order);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-700 text-white p-6 md:p-8 rounded-t-xl flex justify-between items-start z-10 shadow-lg">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Crown className="w-8 h-8 md:w-10 md:h-10" />
              <h2 className="text-2xl md:text-4xl font-bold">All Kings of Rwanda</h2>
            </div>
            <p className="text-yellow-100 text-sm md:text-base">
              The Complete Nyiginya Dynasty - 27 Rulers Across 900 Years (c. 1081-1961)
            </p>
            <p className="text-yellow-200 text-xs md:text-sm mt-2">
              {rwandanKings.length} Kings • Click each king to expand details
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8">
          <div className="mb-6 md:mb-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-600 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Rwanda's Royal Heritage
            </h3>
            <p className="text-sm md:text-base text-amber-800 leading-relaxed">
              The Kingdom of Rwanda was ruled by the Nyiginya dynasty for approximately 900 years, from the 11th century until the monarchy was abolished in 1961. These kings (known as <strong>"Mwami"</strong> in Kinyarwanda) played crucial roles in building, expanding, and modernizing the nation. The dynasty produced some of Africa's most sophisticated systems of governance, with powerful rulers like Ruganzu II Ndoli, Cyilima III Rujugira, and Kigeli IV Rwabugiri creating one of the region's most centralized and well-organized kingdoms. Each king contributed unique innovations and reforms that shaped Rwanda's culture, governance, and identity across the centuries.
            </p>
          </div>

          {/* Kings List */}
          <div className="space-y-3 md:space-y-4">
            {rwandanKings.map((king) => (
              <div
                key={king.order}
                className="bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-md hover:shadow-xl transition-all border border-amber-100 overflow-hidden"
              >
                {/* King Header - Always Visible */}
                <button
                  onClick={() => toggleKing(king.order)}
                  className="w-full p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:bg-amber-50 transition-colors text-left"
                >
                  <div className="bg-gradient-to-br from-yellow-600 to-amber-700 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 shadow-lg font-bold text-sm md:text-base">
                    {king.order}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                          {king.name}
                        </h3>
                        <p className="text-xs md:text-sm text-amber-700 italic">
                          {king.kinyarwanda}
                        </p>
                      </div>
                      <div className="text-amber-600">
                        {expandedKing === king.order ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-2 text-xs md:text-sm text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">{king.reign}</span>
                      </div>
                      <span className="text-slate-400">•</span>
                      <div className="flex items-center gap-1.5">
                        <Crown className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{king.dynasty}</span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedKing === king.order && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-amber-200">
                    <div className="mt-4">
                      <div className="mb-4 bg-white p-3 md:p-4 rounded-lg border-l-4 border-amber-600">
                        <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                          {king.significance}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
                          <h4 className="text-base md:text-lg font-semibold text-slate-900">
                            Major Contributions & Achievements
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {king.contributions.map((contribution, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-slate-700 bg-white p-2 md:p-3 rounded-lg"
                            >
                              <span className="bg-amber-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 p-4 md:p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border-l-4 border-slate-600 shadow-md">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              <strong>Historical Note:</strong> The monarchy played a central role in Rwanda's history for nearly 900 years, from approximately 1081 to 1961. While the institution ended during the 1961 revolution, the cultural and historical legacy of the Nyiginya dynasty remains an important part of Rwanda's heritage. These kings built one of Africa's most sophisticated pre-colonial kingdoms, with advanced administrative systems, military organization, and cultural traditions that continue to influence Rwanda today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
