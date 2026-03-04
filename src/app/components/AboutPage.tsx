import { Info, Target, BookOpen, Heart, Users, Globe, Award, Mail, ExternalLink } from 'lucide-react';
import rwandaFistImg from '../../assets/fbe9554b7c323eafbf34e1ee2bbe1d92b8fa452c.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="py-8 md:py-16 px-4 md:px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <Info className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-4 text-slate-900">About This Project</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            An educational resource dedicated to preserving and sharing Rwanda's rich history
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                <h2 className="text-2xl md:text-3xl text-slate-900">Our Mission</h2>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3 md:mb-4">
                This website aims to provide an accessible, comprehensive resource for learning about Rwanda's history—from its ancient kingdoms through the colonial period, the tragic genocide, and its remarkable modern transformation.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                We believe that understanding Rwanda's past is essential to appreciating its present achievements and future potential. Through carefully curated content, historical imagery, and detailed timelines, we strive to honor the memory of those who suffered while celebrating the resilience and progress of the Rwandan people.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-64 mt-4 md:mt-0">
              <img 
                src={rwandaFistImg} 
                alt="Rwanda Unity Symbol" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-xs md:text-sm text-slate-600 mt-3 italic">
                Symbol of Rwanda's unity and strength
              </p>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            <h2 className="text-2xl md:text-3xl text-slate-900">Educational Purpose</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-3 md:gap-4">
              <div className="bg-green-100 rounded-lg p-2 md:p-3 shrink-0">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl mb-2 text-slate-900">Remembrance & Learning</h3>
                <p className="text-sm md:text-base text-slate-700">
                  We document Rwanda's history, including the 1994 genocide against the Tutsi, to ensure these events are never forgotten and to educate future generations about the consequences of hatred and division.
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="bg-blue-100 rounded-lg p-2 md:p-3 shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl mb-2 text-slate-900">Unity & Reconciliation</h3>
                <p className="text-sm md:text-base text-slate-700">
                  We highlight Rwanda's post-genocide journey of reconciliation, demonstrating how a nation can heal, rebuild, and unite after profound trauma.
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="bg-purple-100 rounded-lg p-2 md:p-3 shrink-0">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl mb-2 text-slate-900">Global Awareness</h3>
                <p className="text-sm md:text-base text-slate-700">
                  We aim to increase global understanding of Rwanda's transformation from tragedy to becoming one of Africa's most progressive and stable nations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sources */}
        <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-slate-900">Content & Sources</h2>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-3 md:mb-4">
            Our content is compiled from reputable historical sources, academic research, and official documentation. We have included links to authoritative external resources including:
          </p>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-700">
            <li className="flex items-start gap-2 md:gap-3">
              <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
              <span>Kigali Genocide Memorial</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
              <span>UNESCO World Heritage Sites</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
              <span>Government of Rwanda official resources</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <span className="bg-blue-600 rounded-full w-2 h-2 mt-2 shrink-0"></span>
              <span>Academic institutions and historical archives</span>
            </li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="bg-slate-100 rounded-lg p-4 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl mb-3 md:mb-4 text-slate-900">Important Note</h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            This website is an educational resource and does not claim to be exhaustive. We encourage visitors to explore the linked external resources for more detailed information. The content presented here treats sensitive historical topics with respect and dignity for all who were affected.
          </p>
        </section>

        {/* Vision */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Rwanda's Motto</h2>
          <p className="text-xl md:text-2xl mb-4 md:mb-6 italic">
            "Ubumwe, Umurimo, Gukunda Igihugu"
          </p>
          <p className="text-lg md:text-xl">
            Unity, Work, Patriotism
          </p>
          <p className="text-base md:text-lg mt-4 md:mt-6 text-blue-100">
            These values have guided Rwanda's remarkable journey from tragedy to transformation, inspiring hope across Africa and the world.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-200 mt-8 md:mt-12">
          <p className="text-xs text-slate-500">
            Designed by <span className="font-semibold text-slate-700">JULIUS ISHIMWE</span>
          </p>
        </footer>
      </div>
    </div>
  );
}