import { Book, ExternalLink, Globe, Users, Languages, MapPin, TrendingUp, Award as AwardIcon } from "lucide-react";
import { ShufflingBackground } from "@/app/components/ShufflingBackground";
import { HeroBackground } from "@/app/components/HeroBackground";
import { useState } from "react";
import { homeSectionTranslations } from "@/app/homeTranslations";
import type { Language } from "@/app/context/LanguageContext";

interface HistorySection {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

const historySections: HistorySection[] = [
  {
    id: "pre-colonial",
    title: "Pre-Colonial Rwanda",
    period: "Before 1885",
    description:
      "Rwanda was a centralized kingdom with a sophisticated social and political structure long before European colonization.",
    highlights: [
      "The Kingdom of Rwanda was ruled by a Mwami (King)",
      "Complex social hierarchy with Tutsi, Hutu, and Twa groups",
      "Rich oral traditions and cultural practices",
      "Advanced agricultural systems",
    ],
  },
  {
    id: "colonial",
    title: "Colonial Period",
    period: "1885-1962",
    description:
      "Rwanda was colonized first by Germany, then Belgium after World War I. Colonial policies dramatically altered Rwandan society.",
    highlights: [
      "German colonization began in 1885",
      "Belgium took control after WWI in 1916",
      "Introduction of identity cards that hardened ethnic divisions",
      "Indirect rule through traditional Rwandan structures",
    ],
  },
  {
    id: "independence",
    title: "Independence & Revolution",
    period: "1962-1994",
    description:
      "Rwanda gained independence in 1962, but ethnic tensions escalated, leading to periodic violence and ultimately the 1994 genocide.",
    highlights: [
      "Independence achieved on July 1, 1962",
      "Hutu Revolution of 1959-1961",
      "Civil war beginning in 1990",
      "1994 Genocide against the Tutsi - approximately 1 million killed",
    ],
  },
  {
    id: "modern",
    title: "Modern Rwanda",
    period: "1994-Present",
    description:
      "After the genocide, Rwanda has focused on reconciliation, reconstruction, and development, becoming one of Africa's most stable nations.",
    highlights: [
      "RPF victory ended the genocide in July 1994",
      "Focus on national unity and reconciliation",
      "Remarkable economic growth and development",
      "Leader in gender equality and technology adoption in Africa",
    ],
  },
];

const externalLinks = [
  {
    title: "Kigali Genocide Memorial",
    url: "https://www.kgm.rw/",
    description: "Official memorial and museum in Kigali",
    details:
      "The Kigali Genocide Memorial honors the memory of the more than one million Rwandans killed in 1994. It serves as a place of remembrance, education, and peace-building. The memorial includes exhibition spaces, burial grounds, and educational programs that document the genocide and promote reconciliation.",
  },
  {
    title: "Rwanda - UNESCO",
    url: "https://whc.unesco.org/en/statesparties/rw",
    description: "UNESCO World Heritage Sites in Rwanda",
    details:
      "Explore Rwanda's cultural and natural heritage sites recognized by UNESCO, including information about conservation efforts, historical significance, and the country's commitment to preserving its unique biodiversity and cultural traditions for future generations.",
  },
  {
    title: "Government of Rwanda",
    url: "https://www.gov.rw/",
    description: "Official government website",
    details:
      "The official portal of the Government of Rwanda provides comprehensive information about government services, policies, national development programs, and official statistics. Learn about Rwanda's Vision 2050, current initiatives in technology, healthcare, education, and economic development.",
  },
  {
    title: "Rwanda History - Britannica",
    url: "https://www.britannica.com/place/Rwanda",
    description: "Comprehensive historical overview",
    details:
      "Encyclopedia Britannica offers an authoritative, detailed account of Rwanda's history from ancient times to the present. This resource includes information on geography, culture, economy, government, and detailed historical analysis written by expert scholars and historians.",
  },
  {
    title: "BBC Country Profile",
    url: "https://www.bbc.com/news/world-africa-14093322",
    description: "Rwanda country profile and timeline",
    details:
      "BBC News provides an accessible overview of Rwanda including key facts, timeline of major events, political system, media landscape, and current affairs. The profile is regularly updated and includes multimedia content and expert analysis of contemporary Rwanda.",
  },
  {
    title: "African Studies Center",
    url: "https://www.africa.upenn.edu/NEH/rwhistory.htm",
    description: "Academic resources on Rwanda history",
    details:
      "The University of Pennsylvania's African Studies Center offers scholarly resources, research papers, and educational materials on Rwandan history. This academic resource provides in-depth analysis of historical events, cultural studies, and contemporary issues.",
  },
  {
    title: "Rwanda National Museum",
    url: "https://www.rwandaheritage.gov.rw/en/visit-national-museums",
    description: "National museum and cultural heritage",
    details:
      "Discover Rwanda's rich cultural heritage through the National Museum's collections of traditional artifacts, royal regalia, and ethnographic materials. Learn about traditional Rwandan society, crafts, music, and the evolution of Rwandan culture through the centuries.",
  },
  {
    title: "UNHCR Rwanda",
    url: "https://www.unhcr.org/rw/",
    description: "UN refugee and humanitarian information",
    details:
      "The UN Refugee Agency provides information about humanitarian efforts in Rwanda, refugee support programs, and the country's role in hosting refugees from neighboring nations. Learn about ongoing humanitarian work and Rwanda's contributions to regional stability.",
  },
  {
    title: "Visit Rwanda",
    url: "https://visitrwanda.com/",
    description: "Tourism, investment, and development",
    details:
      "The Visit Rwanda , investment, and economic development. Discover information about Rwanda's gorilla tourism, national parks, business opportunities, and the country's strategic initiatives to become a middle-income nation.",
  },
];

export function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [sectionLanguages, setSectionLanguages] = useState<Record<string, Language>>({
    'preColonial': 'en',
    'colonial': 'en',
    'independence': 'en',
    'modern': 'en'
  });

  const handleMediaClick = (index: number) => {
    setSelectedMedia(selectedMedia === index ? null : index);
  };

  const setSectionLanguage = (sectionKey: string, lang: Language) => {
    setSectionLanguages(prev => ({ ...prev, [sectionKey]: lang }));
  };

  const getTranslationKey = (sectionId: string): keyof typeof homeSectionTranslations => {
    const keyMap: Record<string, keyof typeof homeSectionTranslations> = {
      'pre-colonial': 'preColonial',
      'colonial': 'colonial',
      'independence': 'independence',
      'modern': 'modern'
    };
    return keyMap[sectionId] || 'preColonial';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
        <HeroBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4 md:mb-6">
            <Book className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4">History of Rwanda: From Ancient Kingdoms to Modern Transformation</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200">
            Discover Rwanda's fascinating history from pre-colonial kingdoms and African heritage to the 1994 genocide and today's fastest-growing economy in Africa. Learn about Rwanda's culture, independence, and transformation.
          </p>
        </div>
      </header>

      {/* Rwanda Fast Facts */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl mb-4 text-slate-900">What is Rwanda? Fast Facts</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Rwanda is a landlocked country in East/Central Africa, known for its stunning landscapes, rich culture, and remarkable recovery from tragedy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-lg font-semibold mb-1">Location</h3>
            <p className="text-slate-600">East/Central Africa, bordered by Uganda, Tanzania, Burundi, and DRC</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-lg font-semibold mb-1">Population</h3>
            <p className="text-slate-600">About 13 million people</p>
          </div>
          <div className="text-center">
            <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-lg font-semibold mb-1">Capital</h3>
            <p className="text-slate-600">Kigali</p>
          </div>
          <div className="text-center">
            <Languages className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="text-lg font-semibold mb-1">Languages</h3>
            <p className="text-slate-600">Kinyarwanda, English, French, Swahili</p>
          </div>
        </div>
      </section>

      {/* History Sections */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 relative">
        <ShufflingBackground />
        <div className="space-y-8 md:space-y-12">
          {historySections.map((section, index) => {
            const translationKey = getTranslationKey(section.id);
            const currentLang = sectionLanguages[translationKey];
            const translation = homeSectionTranslations[translationKey];
            
            return (
            <section
              key={section.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 md:p-8">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl mb-2">
                      {translation.title[currentLang]}
                    </h2>
                    <p className="text-blue-600 text-base md:text-lg">
                      {translation.period[currentLang]}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  {translation.description[currentLang]}
                </p>

                <div className="bg-slate-50 rounded-lg p-4 md:p-6 mb-4">
                  <h3 className="text-base md:text-lg mb-3 md:mb-4 text-slate-900">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {translation.highlights[currentLang].map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-slate-700"
                      >
                        <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Language Switcher */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2 mr-2">
                    <Languages className="w-4 h-4 text-slate-600" />
                    <span className="text-xs md:text-sm text-slate-600 font-medium">Translate:</span>
                  </div>
                  <button
                    onClick={() => setSectionLanguage(translationKey, "en")}
                    className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                      currentLang === "en"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => setSectionLanguage(translationKey, "rw")}
                    className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                      currentLang === "rw"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    🇷🇼 Kinyarwanda
                  </button>
                  <button
                    onClick={() => setSectionLanguage(translationKey, "fr")}
                    className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                      currentLang === "fr"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    🇫🇷 Français
                  </button>
                </div>
              </div>
            </section>
          )})}
        </div>

        {/* Interactive Media Section */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 text-center text-slate-900">
            Rwanda Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => handleMediaClick(0)}
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1706978116093-7b8cd429d6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBLaWdhbGklMjBjaXR5fGVufDF8fHx8MTc2OTc5MjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kigali City"
                  className={`w-full h-48 md:h-64 object-cover transition-all duration-500 ${
                    selectedMedia === 0 ? 'brightness-110 scale-105' : 'brightness-100'
                  }`}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent transition-opacity duration-300 ${
                  selectedMedia === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    {selectedMedia === 0 ? (
                      <div className="space-y-2 animate-fade-in">
                        <p className="text-sm md:text-base font-semibold">🏙️ Modern Kigali</p>
                        <p className="text-xs md:text-sm">One of Africa's cleanest and most organized cities, featuring modern infrastructure, tech innovation centers, and impressive urban development.</p>
                        <p className="text-xs italic">Click again to close</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full pb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white">
                <p className="text-sm md:text-base text-slate-700 font-medium">
                  Modern Kigali - Rwanda's Capital
                </p>
              </div>
            </div>

            <div
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => handleMediaClick(1)}
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1758592112679-d73165845e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjdWx0dXJlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY5NzkyNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rwandan Culture"
                  className={`w-full h-48 md:h-64 object-cover transition-all duration-500 ${
                    selectedMedia === 1 ? 'brightness-110 scale-105' : 'brightness-100'
                  }`}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent transition-opacity duration-300 ${
                  selectedMedia === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    {selectedMedia === 1 ? (
                      <div className="space-y-2 animate-fade-in">
                        <p className="text-sm md:text-base font-semibold">🎭 Traditional Culture</p>
                        <p className="text-xs md:text-sm">Rwanda preserves its rich cultural heritage through traditional dances like Intore, music, crafts, and ceremonies that celebrate unity and national identity.</p>
                        <p className="text-xs italic">Click again to close</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full pb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4 bg-white">
                <p className="text-sm md:text-base text-slate-700 font-medium">
                  Traditional Rwandan Culture
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="mt-12 md:mt-16 bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <h2 className="text-2xl md:text-3xl text-slate-900">
              Learn More
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 md:p-6 border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-2 md:gap-3 mb-3">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-3">
                      {link.description}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {link.details}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 mt-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What language do Rwandans speak?</h3>
              <p className="text-slate-600">The official languages are Kinyarwanda, English, and French. Kinyarwanda is the most widely spoken.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What is Rwanda known for?</h3>
              <p className="text-slate-600">Rwanda is known for its natural beauty, gorilla safaris, recovery from the 1994 genocide, and rapid economic development.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is Rwanda safe?</h3>
              <p className="text-slate-600">Yes, Rwanda is one of the safest countries in Africa, with low crime rates and a stable government.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Who rules Rwanda?</h3>
              <p className="text-slate-600">Rwanda is led by President Paul Kagame, who has been in power since 2000.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center text-slate-600 pb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5" />
            <p className="text-sm md:text-base">
              Unity, Work, Patriotism - Rwanda's National Motto
            </p>
          </div>
          <p className="text-xs md:text-sm">
            This website provides educational information about
            Rwandan history.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Designed by <span className="font-semibold text-slate-700">JULIUS ISHIMWE</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}