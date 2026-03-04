import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import historicalDanceImg from '../../assets/2c2e6af4a180c9e607316cab3ab7d6dfe4792681.png';
import ceremonyBoatsImg from '../../assets/f76f47964816fe0e87c7767389e16cae7cdfd0ef.png';
import portraitTwoImg from '../../assets/6061f294e93a1a5c39cdb191c889eec40c56f17e.png';
import profileHeaddressImg from '../../assets/4c33ea8791115f2a0d14847c8f854cc6ce17dcd7.png';
import { ImageModal } from '@/app/components/ImageModal';
import { useState } from 'react';
import { Image as ImageIcon, Calendar, Sparkles } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

interface GallerySection {
  title: string;
  period: string;
  description: string;
  images: GalleryImage[];
}

export const GalleryPage = () => {
  const gallerySections: GallerySection[] = [
    {
      title: "Pre-Colonial Rwanda",
      period: "Before 1885",
      description: "Rwanda's pre-colonial era was marked by a centralized monarchy, rich cultural traditions, and sophisticated governance systems.",
      images: [
        {
          src: historicalDanceImg,
          alt: "Traditional Intore Dancers",
          caption: "Intore Dancers",
          description: "Traditional Intore warriors performed ceremonial dances representing Rwanda's ancient military and cultural heritage. These dances continue to be an important part of Rwandan identity."
        },
        {
          src: ceremonyBoatsImg,
          alt: "Traditional Ceremony",
          caption: "Royal Ceremonies",
          description: "Pre-colonial Rwanda featured elaborate royal ceremonies and gatherings that brought communities together, strengthening social bonds and cultural identity."
        },
        {
          src: portraitTwoImg,
          alt: "Pre-Colonial Rwandans",
          caption: "Ancient Portraits",
          description: "Historical photographs capturing the dignity and traditional appearance of Rwandans before colonial influence altered cultural practices."
        },
        {
          src: profileHeaddressImg,
          alt: "Traditional Headdress",
          caption: "Royal Adornments",
          description: "Traditional headdresses and ornaments were symbols of status and cultural identity in pre-colonial Rwandan society, reflecting sophisticated craftsmanship."
        },
        {
          src: "https://images.unsplash.com/photo-1507427254987-7be33d0321d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjB0cmFkaXRpb25hbCUyMGRhbmNlJTIwY3VsdHVyZXxlbnwxfHx8fDE3Njk1MjY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional Rwandan Culture",
          caption: "Royal Court Traditions",
          description: "The Kingdom of Rwanda had elaborate court ceremonies and traditions that reinforced the authority of the Mwami (King) and maintained social cohesion."
        },
        {
          src: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBhbmNpZW50JTIwa2luZ2RvbSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2OTg3NzE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional Basketry",
          caption: "Traditional Crafts",
          description: "Rwandan artisans developed sophisticated crafts including intricate basket weaving, which served both practical and ceremonial purposes in pre-colonial society."
        },
        {
          src: "https://images.unsplash.com/photo-1678225894217-ec0de2dc0548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjB0cmFkaXRpb25hbCUyMHBvdHRlcnklMjBjcmFmdHN8ZW58MXx8fHwxNzY5OTY0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional Pottery",
          caption: "Ancient Pottery",
          description: "Pottery-making was an essential craft in pre-colonial Rwanda, with distinct styles passed down through generations, serving both functional and artistic purposes."
        },
        {
          src: "https://images.unsplash.com/photo-1625994761169-bf23651dfb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjZXJlbW9ueSUyMGRydW1zfGVufDF8fHx8MTc2OTk2NDcwOXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional Drums",
          caption: "Royal Drums",
          description: "The Ingoma (royal drums) held sacred significance in Rwanda's monarchy, used in ceremonies to announce royal decrees and celebrate important occasions."
        },
        {
          src: "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBsYWtlJTIwa2l2dSUyMG5hdHVyZXxlbnwxfHx8fDE3Njk5NjQ3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Lake Kivu",
          caption: "Sacred Waters",
          description: "Lake Kivu and Rwanda's waterways have been central to life and spirituality since ancient times, providing sustenance and serving as important trade routes."
        }
      ]
    },
    {
      title: "Colonial Period",
      period: "1885-1962",
      description: "The colonial era under Germany and Belgium brought profound changes to Rwandan society, economy, and political structures.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjb2xvbmlhbCUyMGVyYSUyMGhpc3RvcmljfGVufDF8fHx8MTc2OTg3NzE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Colonial Era Architecture",
          caption: "Colonial Legacy",
          description: "European colonial architecture and institutions were introduced, fundamentally altering Rwanda's urban landscape and administrative systems."
        },
        {
          src: "https://images.unsplash.com/photo-1758592112679-d73165845e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjdWx0dXJlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY5NzkyNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional and Colonial Influences",
          caption: "Cultural Resistance",
          description: "Despite colonial pressures, Rwandans maintained many traditional practices and cultural expressions, adapting to new circumstances while preserving their heritage."
        }
      ]
    },
    {
      title: "Independence & Revolution",
      period: "1962-1994",
      description: "Rwanda's path to independence was marked by political upheaval, the Hutu Revolution, and ultimately the tragic 1994 genocide.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1702726960399-9959e199937f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBpbmRlcGVuZGVuY2UlMjBjZWxlYnJhdGlvbiUyMGZsYWd8ZW58MXx8fHwxNzY5ODc3MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Independence Celebration",
          caption: "Independence Day 1962",
          description: "On July 1, 1962, Rwanda gained independence from Belgium, marking the beginning of a new chapter in the nation's history, though challenges lay ahead."
        },
        {
          src: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc2OTUyNjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Mountain Gorillas",
          caption: "National Heritage",
          description: "Throughout political turmoil, Rwanda's natural heritage, including the endangered mountain gorillas, remained a symbol of hope and national pride."
        },
        {
          src: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtZW1vcmlhbCUyMHBlYWNlfGVufDF8fHx8MTc2OTk2NDcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Memorial and Remembrance",
          caption: "Never Forget",
          description: "Memorials across Rwanda honor the victims of the 1994 genocide and serve as powerful reminders of the importance of unity and reconciliation."
        }
      ]
    },
    {
      title: "Modern Rwanda",
      period: "1994-Present",
      description: "Post-genocide Rwanda has undergone remarkable transformation, focusing on reconciliation, development, and becoming a model for African progress.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1648708511872-5426c0f29c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBLaWdhbGklMjBjaXR5JTIwbW9kZXJufGVufDF8fHx8MTc2OTUyNjYxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Modern Kigali",
          caption: "Kigali's Transformation",
          description: "Kigali has become one of Africa's cleanest and most organized cities, with modern infrastructure and impressive urban planning symbolizing Rwanda's rebirth."
        },
        {
          src: "https://images.unsplash.com/photo-1706978116093-7b8cd429d6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBLaWdhbGklMjBjaXR5fGVufDF8fHx8MTc2OTc5MjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Kigali Development",
          caption: "Economic Growth",
          description: "Rwanda has achieved remarkable economic growth, with emphasis on technology, tourism, and service industries driving development and poverty reduction."
        },
        {
          src: "https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5ODc3MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Rwanda Innovation",
          caption: "Tech Hub of Africa",
          description: "Rwanda is emerging as Africa's technology hub, with initiatives in innovation, digital infrastructure, and becoming the first country to use commercial delivery drones."
        },
        {
          src: "https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjB3b21lbiUyMGVtcG93ZXJtZW50JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2OTk2NDcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Women Empowerment",
          caption: "Gender Equality Leadership",
          description: "Rwanda leads globally in gender equality, with the highest percentage of women in parliament worldwide and strong policies supporting women's empowerment."
        }
      ]
    }
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getSectionColor = (index: number) => {
    const colors = [
      { bg: 'from-purple-600 to-indigo-700', border: 'border-purple-600', badge: 'bg-purple-600' },
      { bg: 'from-amber-600 to-orange-700', border: 'border-amber-600', badge: 'bg-amber-600' },
      { bg: 'from-red-600 to-rose-700', border: 'border-red-600', badge: 'bg-red-600' },
      { bg: 'from-emerald-600 to-green-700', border: 'border-emerald-600', badge: 'bg-emerald-600' }
    ];
    return colors[index] || colors[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="py-8 md:py-16 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header with icon */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 md:p-6 rounded-2xl shadow-2xl">
              <ImageIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 text-slate-900 font-bold">
            Historical Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Journey through Rwanda's history from pre-colonial kingdoms to modern transformation
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {gallerySections.map((section, sectionIndex) => {
            const colors = getSectionColor(sectionIndex);
            
            return (
            <section key={sectionIndex} className="space-y-6 md:space-y-8">
              {/* Section Header with Gradient */}
              <div className="relative">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-gradient-to-b ${colors.bg} rounded-full`}></div>
                <div className="pl-6 md:pl-8">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <h2 className="text-2xl md:text-4xl text-slate-900 font-bold">
                      {section.title}
                    </h2>
                    <span className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r ${colors.bg} text-white rounded-full text-xs md:text-sm font-semibold shadow-lg`}>
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      {section.period}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm md:text-lg max-w-4xl leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm text-slate-500">
                    <Sparkles className="w-4 h-4" />
                    <span>{section.images.length} photos in this period</span>
                  </div>
                </div>
              </div>

              {/* Horizontal Scrolling Images */}
              <div className="relative">
                <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide px-2">
                  {section.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="flex-shrink-0 w-72 md:w-96 snap-start group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                        <ImageWithFallback
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Period badge on image */}
                        <div className={`absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r ${colors.bg} text-white rounded-lg text-xs font-semibold shadow-md`}>
                          {sectionIndex + 1}/{gallerySections.length}
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                          <div className={`text-white text-sm md:text-base bg-gradient-to-r ${colors.bg} px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold shadow-lg flex items-center gap-2`}>
                            <ImageIcon className="w-4 h-4" />
                            Click to enlarge
                          </div>
                        </div>
                      </div>
                      <div className="p-4 md:p-6 bg-gradient-to-br from-white to-slate-50">
                        <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${colors.bg} transition-all duration-300 font-semibold">
                          {image.caption}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-3">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Scroll indicator */}
                <div className="text-center mt-4 text-xs md:text-sm text-slate-500 flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">←</span>
                    <span>Scroll</span>
                  </div>
                  <span className="text-slate-400">•</span>
                  <div className="flex items-center gap-1">
                    <span>to explore</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </section>
          )})}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          caption={selectedImage.caption}
          description={selectedImage.description}
        />
      )}

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-200 mt-12 md:mt-16">
        <p className="text-xs text-slate-500">
          Designed by <span className="font-semibold text-slate-700">JULIUS ISHIMWE</span>
        </p>
      </footer>

      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </div>
  );
};