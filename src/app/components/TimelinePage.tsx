import {
  Calendar,
  Flag,
  Users,
  Award,
  Heart,
  Crown,
} from "lucide-react";
import { ShufflingBackground } from "@/app/components/ShufflingBackground";
import { useState } from "react";
import { eventTranslations } from "@/app/timelineTranslations";
import type { Language } from "@/app/context/LanguageContext";
import { KingsModal } from "@/app/components/KingsModal";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category:
    | "political"
    | "cultural"
    | "conflict"
    | "development";
  icon: "flag" | "users" | "award" | "heart";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "15th Century",
    title: "Kingdom of Rwanda Established",
    description:
      "The Kingdom of Rwanda consolidates under a centralized monarchy with the umwami (King) as the supreme authority. The Kingdom of Rwanda was established around the 14th–15th century in the Great Lakes region of Africa and began as a small centralized state founded by King Gihanga, who is regarded as the cultural founder of the kingdom. Over time, Rwanda grew through strong leadership, military expansion, and effective administration under a series of powerful kings known as Abami. The king, called the Mwami, held supreme political, military, and religious authority and ruled with the help of chiefs responsible for land, cattle, and the army. The kingdom expanded by conquering neighboring territories and integrating them into one centralized state. Rwanda developed a strong social structure based on clans rather than ethnicity, which helped maintain unity. Cattle ownership played a central role in the kingdom’s economy and social life. Because of its organized system of governance, Rwanda became one of the most powerful and well-structured kingdoms in the region. The monarchy maintained stability and continuity for centuries through established traditions and institutions. The Kingdom of Rwanda survived colonial influence in modified form during the late 19th and early 20th centuries. It finally came to an end in 1961 when the monarchy was abolished and Rwanda became a republic.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1885",
    title: "Berlin Conference",
    description:
      "European powers divide Africa. Rwanda falls under German sphere of influence during the Scramble for Africa. In 1884 and 1885, European leaders gathered in Germany for the Berlin Conference, organized by Otto von Bismarck. They met to discuss how Africa would be colonized and controlled by Europe. No African leaders were invited to take part in these important decisions. Their goal was to prevent conflict among European powers while expanding their influence. During the meeting, Africa was divided into colonies with borders drawn on maps. These borders ignored African ethnic groups, cultures, and kingdoms. As a result, many communities were split apart or forced together. This division caused political, social, and economic problems across the continent. European imperialism increased rapidly after the conference. Even today, Africa continues to feel the lasting effects of those decisions.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1894",
    title: "German Colonial Rule Begins",
    description:
      "Germany establishes colonial administration in Rwanda, ruling indirectly through the existing monarchy. Germany entered colonialism later than other European powers, mainly after its unification in 1871. Under Chancellor Otto von Bismarck, Germany joined the Berlin Conference (1884–1885) and claimed several African territories, including German East Africa (present-day Tanzania, Rwanda, and Burundi), German South-West Africa (Namibia), Cameroon, and Togo. German colonial rule focused on economic exploitation, using forced labor, heavy taxation, and harsh military control. Resistance by Africans was met with extreme violence, such as the genocide of the Herero and Nama in Namibia.Germany’s colonial rule did not last long. After World War I, Germany was defeated and lost all its colonies under the Treaty of Versailles in 1919. These colonies were then taken over by other European powers such as Britain, France, and Belgium under the League of Nations mandate system. As a result, German colonial administration ended, and new colonial rulers replaced it, continuing European control over African territories under different flags.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1916",
    title: "Belgian Takeover",
    description:
      "Belgian forces occupy Rwanda during World War I, beginning Belgian colonial administration. Germany entered African colonialism late, after its unification in 1871, and gained territories such as German East Africa, South-West Africa, Cameroon, and Togo following the Berlin Conference. German rule was harsh and focused on economic exploitation through forced labor, taxation, and military control. African resistance was violently suppressed, most notably in the Herero and Nama genocide. Germany’s colonial rule ended after its defeat in World War I, and in 1919 all German colonies were taken away under the Treaty of Versailles and handed to other European powers. Belgium took over some former German territories, including Rwanda and Burundi (Ruanda-Urundi), and already controlled the Congo. Belgian rule relied on strict administration, indirect rule through local leaders, and policies that deepened ethnic divisions, especially in Rwanda and Burundi. Economic exploitation was central, while Africans were denied political power. After World War II, nationalist movements grew stronger, leading to independence in the early 1960s: Congo in 1960 and Rwanda and Burundi in 1962. Belgium’s rapid withdrawal left lasting political and social challenges.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1933-1934",
    title: "Identity Cards Introduced",
    description:
      "During the Belgian colonial period in Rwanda, identity cards were introduced in the early 1930s, specifically around 1933–1935. The Belgian colonial administration, working closely with Catholic missionaries, carried out a national census of the population. During this census, every Rwandan was classified as Hutu, Tutsi, or Twa, and this identity was written on official identity cards. The Belgians based these classifications on factors such as cattle ownership, physical appearance, and social status, even though these identities had been more flexible before colonial rule. Once recorded, the identity became fixed and was passed down through generations.The introduction of identity cards deeply changed Rwandan society. The Belgians favored the Tutsi minority for education, leadership, and administrative roles, while the Hutu majority was largely excluded from power. This policy institutionalized ethnic divisions and created long-lasting inequality and resentment. After independence, these identity cards remained in use and were later misused to identify and target people during periods of violence, especially the 1994 Genocide against the Tutsi.",
    category: "conflict",
    icon: "users",
  },
  {
    year: "1959",
    title: "Hutu Revolution",
    description:
      "The Hutu Revolution, also called the Social Revolution, began in 1959 in Rwanda during the late Belgian colonial period. It started after decades of inequality created by Belgian rule, which favored the Tutsi minority in education, administration, and political power while excluding the Hutu majority. Tensions increased as educated Hutu elites began demanding political rights and social equality. The immediate trigger was an attack on a Hutu political leader, Dominique Mbonyumutwa, in November 1959, which sparked widespread violence. The revolution was caused mainly by colonial policies that deepened ethnic divisions, especially the introduction of ethnic identity cards and unequal access to power. As Belgium shifted its support from Tutsi elites to Hutu leaders in the late 1950s, violence spread across the country. Many Tutsi were killed, and hundreds of thousands fled into exile in neighboring countries. The revolution led to the end of the monarchy, the rise of Hutu-led governments, and Rwanda’s independence in 1962. While it brought political power to the Hutu majority, it also planted the seeds of long-term conflict by normalizing ethnic-based violence and exclusion.",
    category: "conflict",
    icon: "users",
  },
  {
    year: "July 1, 1962",
    title: "Independence from Belgium",
    description:
      "Rwanda gains independence with Grégoire Kayibanda as the first president of the Republic of Rwanda. Rwanda’s independence from Belgium was the result of a long colonial process that deeply affected the country’s social and political life. After Germany lost World War I, Rwanda was taken over by Belgium in 1916 and later placed under a United Nations trusteeship. Belgium was expected to prepare Rwanda for self-government, but instead it strengthened its control by ruling indirectly through the existing monarchy.During Belgian rule, the colonial administration favored the Tutsi minority, believing they were more suited to leadership. Tutsis were given better access to education, administrative jobs, and political power, while the Hutu majority was largely excluded. To formalize these divisions, Belgium introduced ethnic identity cards, which fixed social identities and increased tension between communities that had previously been more flexible.By the late 1950s, dissatisfaction among the Hutu population grew stronger. Hutu intellectuals and political leaders began demanding equality, representation, and an end to the monarchy. In 1959, tensions erupted into what became known as the Hutu Revolution. Violence spread across Rwanda, many Tutsi homes were destroyed, the monarchy collapsed, and tens of thousands of Tutsis fled into exile in neighboring countries.As the situation changed, Belgium shifted its support from the Tutsi monarchy to Hutu political movements. Belgium organized local and national elections, which brought Hutu leaders to power. Rwanda gradually moved toward self-rule, first gaining internal autonomy before full independence.On 1 July 1962, Rwanda officially gained independence from Belgium. The country became a republic, and Grégoire Kayibanda was elected as the first president. Independence marked the end of colonial rule and foreign control. However, the ethnic divisions and political inequalities created and intensified during Belgian rule continued to influence Rwanda’s politics and society long after independence.Rwanda’s independence was therefore not only a moment of freedom but also the beginning of new challenges, as the country struggled to build unity and stability after decades of colonial manipulation.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1973",
    title: "Military Coup",
    description:
      "Juvénal Habyarimana seizes power in a military coup, establishing a one-party state. The 1973 military coup in Rwanda was led by Juvénal Habyarimana, who overthrew President Grégoire Kayibanda due to political instability and regional tensions. The coup was bloodless and led to the start of the Second Republic under Habyarimana’s rule.",
    category: "political",
    icon: "flag",
  },
  {
    year: "1990",
    title: "Rwandan Civil War Begins",
    description:
      "Rwandan Patriotic Front (RPF) invades from Uganda, starting a civil war that would last four years.The Rwandan Civil War began on 1 October 1990 when the RPF, formed by Tutsi refugees in Uganda, attacked Rwanda demanding political reform and the right to return home. The war lasted until 1994 and deeply affected Rwanda’s history. ",
    category: "conflict",
    icon: "users",
  },
  {
    year: "April 6, 1994",
    title: "Assassination of President",
    description:
      "President Habyarimana's plane is shot down, triggering the genocide against the Tutsi. On 6 April 1994, President Juvénal Habyarimana was killed when his plane was shot down near Kigali. His assassination ended the peace process and immediately led to widespread violence, marking the beginning of the 1994 Genocide against the Tutsi.",
    category: "conflict",
    icon: "users",
  },
  {
    year: "April-July 1994",
    title: "Genocide Against the Tutsi",
    description:
      "Approximately 1 million Tutsi and moderate Hutu are killed in 100 days of systematic genocide.The Genocide Against the Tutsi took place from April to July 1994 after the assassination of President Habyarimana. Around 800,000 people were killed in about 100 days. The genocide ended when the RPF took control of the country in July 1994. ",
    category: "conflict",
    icon: "heart",
  },
  {
    year: "July 1994",
    title: "RPF Victory",
    description:
      "The RPF captures Kigali, ending the genocide. A new government of national unity is formed. The RPF victory in July 1994 ended the genocide and the civil war. After capturing Kigali and defeating government forces, the RPF formed a new government and began rebuilding Rwanda.",
    category: "political",
    icon: "flag",
  },
  {
    year: "2000",
    title: "Paul Kagame Becomes President",
    description:
      "Paul Kagame is elected president, beginning Rwanda's transformation and reconciliation period. Paul Kagame became President of Rwanda in 2000 after the resignation of Pasteur Bizimungu. Before that, he had served as Vice President after the RPF victory in 1994. Since becoming president, he has focused on rebuilding Rwanda, promoting unity, and developing the country.",
    category: "political",
    icon: "flag",
  },
  {
    year: "2003",
    title: "New Constitution",
    description:
      "Rwanda adopts a new constitution emphasizing unity, democracy, and banning ethnicity-based politics. The 2003 Constitution of Rwanda was created after the genocide to promote unity, democracy, and equality. It established a multi-party system, term limits, and gender equality. It remains the supreme law of Rwanda, with amendments made in 2015.",
    category: "political",
    icon: "flag",
  },
  {
    year: "2008",
    title: "Gender Equality Milestone",
    description:
      "Rwanda becomes the first country where women hold a majority of parliamentary seats (56%). In 2008, Rwanda became the first country in the world where women made up the majority of parliament members. This was made possible by the 2003 Constitution, government support, and efforts to promote gender equality.",
    category: "development",
    icon: "award",
  },
  {
    year: "2009",
    title: "Commonwealth Membership",
    description:
      "Rwanda joins the Commonwealth of Nations, strengthening international partnerships. Rwanda became a member of the Commonwealth of Nations on 29 November 2009 during the Commonwealth Heads of Government Meeting held in Trinidad and Tobago. Although Rwanda was colonized by Germany and Belgium and had no historical ties to Britain, it joined the Commonwealth to strengthen international relations, expand trade opportunities, and promote the use of English in government and education. The country later hosted the Commonwealth meeting (CHOGM) in Kigali in 2022. The Commonwealth is a voluntary association of 56 countries that cooperate to promote democracy, development, trade, and global partnership. ",
    category: "development",
    icon: "award",
  },
  {
    year: "2016",
    title: "Universal Healthcare",
    description:
      "Rwanda achieves 90% health insurance coverage, becoming a model for African healthcare systems. After 2009, Rwanda strengthened its development through Universal Healthcare by expanding the Mutuelles de Santé system. This community-based health insurance made medical services affordable and accessible to most citizens, improved public health, and reduced child and maternal mortality rates. Rwanda’s healthcare system is now considered one of the most successful in Africa.",
    category: "development",
    icon: "award",
  },
  {
    year: "2020",
    title: "Technology Hub Status",
    description:
      "Rwanda emerges as Africa's leading tech hub with widespread internet access and innovation centers. After improving healthcare, Rwanda worked to become a technology hub by investing in internet infrastructure, digital services, and innovation centers like Kigali Innovation City. The country promoted e-government, cashless payments, and tech startups, making Rwanda one of Africa’s leaders in digital transformation.",
    category: "development",
    icon: "award",
  },
  {
    year: "Present",
    title: "Continued Transformation",
    description:
      "Rwanda continues its journey as one of Africa's fastest-growing economies with focus on sustainability and innovation. In summary, Rwanda has continued its transformation by investing in international cooperation, universal healthcare, and technology. These efforts have improved living standards and made Rwanda one of Africa’s fastest-growing and most innovative countries.",
    category: "development",
    icon: "award",
  },
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "flag":
      return <Flag className="w-6 h-6" />;
    case "users":
      return <Users className="w-6 h-6" />;
    case "award":
      return <Award className="w-6 h-6" />;
    case "heart":
      return <Heart className="w-6 h-6" />;
    default:
      return <Calendar className="w-6 h-6" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "political":
      return "bg-blue-600";
    case "cultural":
      return "bg-purple-600";
    case "conflict":
      return "bg-red-600";
    case "development":
      return "bg-green-600";
    default:
      return "bg-slate-600";
  }
};

export function TimelinePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");
  const [eventLanguages, setEventLanguages] = useState<
    Record<number, Language>
  >({});
  const [isKingsModalOpen, setIsKingsModalOpen] = useState(false);

  const getEventLanguage = (index: number): Language => {
    return eventLanguages[index] || "en";
  };

  const setEventLanguage = (index: number, lang: Language) => {
    setEventLanguages((prev) => ({ ...prev, [index]: lang }));
  };

  const filteredEvents =
    selectedCategory === "all"
      ? timelineEvents
      : timelineEvents.filter(
          (event) => event.category === selectedCategory,
        );

  const categories = [
    {
      value: "all",
      label: "All Events",
      color: "bg-slate-600",
    },
    {
      value: "political",
      label: "Political",
      color: "bg-blue-600",
    },
    {
      value: "conflict",
      label: "Conflict",
      color: "bg-red-600",
    },
    {
      value: "development",
      label: "Development",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="py-8 md:py-16 px-4 md:px-6 max-w-5xl mx-auto relative">
        <ShufflingBackground />
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <Calendar className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 text-slate-900">
            Rwanda Timeline
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Key moments in Rwanda's journey from ancient kingdom
            to modern nation
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8 md:mb-12">
          <h3 className="text-base md:text-lg mb-3 md:mb-4 text-slate-900">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  setSelectedCategory(category.value)
                }
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all font-medium text-sm md:text-base ${
                  selectedCategory === category.value
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.label}
                {selectedCategory === category.value && (
                  <span className="ml-2">✓</span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-3 md:mt-4 text-xs md:text-sm text-slate-600">
            Showing {filteredEvents.length} of{" "}
            {timelineEvents.length} events
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8 md:mb-12">
          <div className="mb-3 md:mb-4">
            <h3 className="text-base md:text-lg text-slate-900">
              Event Categories
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              <span className="text-xs md:text-sm text-slate-700">
                Political
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-600"></div>
              <span className="text-xs md:text-sm text-slate-700">
                Conflict
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-600"></div>
              <span className="text-xs md:text-sm text-slate-700">
                Development
              </span>
            </div>
          </div>
          
          {/* Kings of Rwanda Button - Moved to bottom */}
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => setIsKingsModalOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-lg hover:from-yellow-700 hover:to-amber-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Crown className="w-5 h-5" />
              <span className="text-sm md:text-base font-medium">View All Kings of Rwanda</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

          {/* Events */}
          <div className="space-y-6 md:space-y-8">
            {filteredEvents.map((event, filteredIndex) => {
              const originalIndex = timelineEvents.findIndex(
                (e) => e.title === event.title,
              );
              const currentLang =
                getEventLanguage(originalIndex);
              const translation =
                eventTranslations[originalIndex];

              return (
                <div
                  key={filteredIndex}
                  className="relative md:pl-20"
                >
                  {/* Icon Circle */}
                  <div
                    className={`md:absolute relative left-0 w-12 h-12 md:w-16 md:h-16 rounded-full ${getCategoryColor(event.category)} text-white flex items-center justify-center shadow-lg z-10 mb-3 md:mb-0`}
                  >
                    {getIcon(event.icon)}
                  </div>

                  {/* Event Card */}
                  <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-start justify-between mb-3 gap-2">
                      <h3 className="text-xl md:text-2xl text-slate-900">
                        {translation
                          ? translation.title[currentLang]
                          : event.title}
                      </h3>
                      <span className="text-xs md:text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700 whitespace-nowrap">
                        {event.year}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                      {translation
                        ? translation.description[currentLang]
                        : event.description}
                    </p>

                    {/* Language Switcher */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                      <button
                        onClick={() =>
                          setEventLanguage(originalIndex, "en")
                        }
                        className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                          currentLang === "en"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        🇬🇧 EN
                      </button>
                      <button
                        onClick={() =>
                          setEventLanguage(originalIndex, "rw")
                        }
                        className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                          currentLang === "rw"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        🇷🇼 RW
                      </button>
                      <button
                        onClick={() =>
                          setEventLanguage(originalIndex, "fr")
                        }
                        className={`px-3 py-1.5 rounded-md text-xs md:text-sm transition-all ${
                          currentLang === "fr"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        🇫🇷 FR
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-sm md:text-base text-slate-600 italic">
            This timeline highlights major events in Rwanda's
            history. Each event has shaped the nation's journey
            and identity.
          </p>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Designed by <span className="font-semibold text-slate-700">JULIUS ISHIMWE</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Kings Modal */}
      <KingsModal 
        isOpen={isKingsModalOpen}
        onClose={() => setIsKingsModalOpen(false)}
      />
    </div>
  );
}