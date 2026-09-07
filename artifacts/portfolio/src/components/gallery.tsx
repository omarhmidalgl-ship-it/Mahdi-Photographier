import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

type WorkCategory = 'weddings' | 'events' | 'sports' | 'portraits' | 'commercial';

type WorkImage = {
  id: number;
  src: string;
  category: WorkCategory;
  alt: string;
  className?: string;
};

const images: WorkImage[] = [
  { id: 1, src: '/images/work/basketball-air.jpg', category: 'sports', alt: 'Basketball athlete in mid-air', className: 'md:row-span-2' },
  { id: 2, src: '/images/work/wedding-walk.jpg', category: 'weddings', alt: 'Wedding couple walking through an arcade' },
  { id: 3, src: '/images/work/event-stage.jpg', category: 'events', alt: 'Live stage performance' },
  { id: 4, src: '/images/work/paintball-action.jpg', category: 'sports', alt: 'Paintball players in action' },
  { id: 5, src: '/images/work/wedding-architecture.jpg', category: 'weddings', alt: 'Wedding couple framed by architecture' },
  { id: 6, src: '/images/work/boxing.jpg', category: 'sports', alt: 'Boxing portrait under dramatic blue light' },
  { id: 7, src: '/images/work/hospitality-couple.jpg', category: 'commercial', alt: 'Couple dining at a waterfront restaurant' },
  { id: 8, src: '/images/work/live-singer.jpg', category: 'events', alt: 'Singer performing on stage' },
  { id: 9, src: '/images/work/paintball-portrait.jpg', category: 'sports', alt: 'Paintball portrait in colored smoke' },
  { id: 10, src: '/images/work/wedding-portrait.jpg', category: 'weddings', alt: 'Wedding couple portrait' },
  { id: 11, src: '/images/work/food-salad.jpg', category: 'commercial', alt: 'Restaurant food photography' },
  { id: 12, src: '/images/work/event-wide.jpg', category: 'events', alt: 'Wide view of a live performance' },
  { id: 13, src: '/images/work/cinematic-car.jpg', category: 'portraits', alt: 'Cinematic portrait sequence inside a car' },
  { id: 14, src: '/images/work/fig-basket.webp', category: 'portraits', alt: 'Lifestyle detail with a basket of fresh figs' },
  { id: 15, src: '/images/work/portrait-ladder.webp', category: 'portraits', alt: 'Outdoor portrait framed by a rustic wooden ladder' },
];

export function Gallery() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | WorkCategory>('all');
  const [activeImage, setActiveImage] = useState<WorkImage | null>(null);
  const portfolioTranslations = t('portfolio');

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10 border-b border-border/60 pb-5">
        {Object.entries(portfolioTranslations.categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setFilter(key as 'all' | WorkCategory)}
            className={`text-[11px] md:text-xs uppercase tracking-[0.2em] transition-colors ${
              filter === key ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {value as string}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.button
              layout
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.16) }}
              onClick={() => setActiveImage(img)}
              className="group relative overflow-hidden bg-muted text-left aspect-[4/5] md:aspect-auto md:min-h-[420px]"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-[11px] uppercase tracking-[0.22em]">
                  {portfolioTranslations.categories[img.category]}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
            >
              <X className="w-7 h-7" />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-[94vw] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
