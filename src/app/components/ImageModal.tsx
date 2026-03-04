import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  description: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, caption, description }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-slate-900" />
        </button>

        {/* Image */}
        <div className="relative bg-slate-900">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption and Description */}
        <div className="p-6 bg-white">
          <h3 className="text-2xl mb-3 text-slate-900">{caption}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
