import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, MapPin, Play, Video, Camera, Clapperboard, Sparkles } from 'lucide-react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { useI18n } from '@/hooks/use-i18n';
import { Gallery } from '@/components/gallery';
import { Nav } from '@/components/nav';

const reelFiles = [
  '/videos/valentine-social-reel.mp4',
  '/videos/spark-reel.mp4',
  '/videos/done-sofien-gym.mp4',
  '/videos/ferrari-f488-spider-done.mp4',
];

const reelPosters = [
  '/images/reels/valentine-social-reel.jpg',
  '/images/reels/spark-reel.jpg',
  '/images/reels/done-sofien-gym.jpg',
  '',
];

const serviceIcons = [Video, Camera, Clapperboard, Sparkles];

function SectionLabel({ children }: { children: string }) {
  return <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-primary mb-4">{children}</p>;
}

export default function Home() {
  const { t, dir } = useI18n();
  const hero = t('hero');
  const portfolio = t('portfolio');
  const services = t('services');
  const reels = t('reels');
  const about = t('about');
  const contact = t('contact');
  const footer = t('footer');

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground" dir={dir}>
      <Nav />

      <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-black text-white">
        <img
          src="/images/hero-cover.jpeg"
          alt="Photography and videography equipment used by Mahdi Abdul Karimi"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%] scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8 min-h-[100svh] flex items-end pb-16 md:pb-20 pt-28">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 w-full items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/70 mb-5"
              >
                {hero.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(3.6rem,9vw,9.8rem)] leading-[0.78] tracking-[-0.065em] max-w-6xl"
              >
                {hero.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="mt-7 max-w-3xl text-xs md:text-sm uppercase tracking-[0.17em] text-white/80 leading-relaxed"
              >
                {hero.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="lg:border-l lg:border-white/25 lg:pl-8"
            >
              <p className="text-base md:text-lg text-white/78 leading-relaxed mb-7">{hero.statement}</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo('work')} className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-primary transition-colors">
                  {hero.viewWork} <ArrowDownRight className="w-4 h-4" />
                </button>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 border border-white/35 px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:border-white transition-colors">
                  {hero.contact} <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 md:py-36 px-5 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 mb-14 md:mb-20"
          >
            <div>
              <SectionLabel>{portfolio.eyebrow}</SectionLabel>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.04em]">{portfolio.title}</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl self-end">{portfolio.intro}</p>
          </motion.div>
          <Gallery />
        </div>
      </section>

      <section id="services" className="border-y border-border/70 bg-muted/20">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionLabel>{services.eyebrow}</SectionLabel>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em] max-w-xl">{services.title}</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 border-t border-l border-border/70">
              {services.items.map((item: { title: string; text: string }, index: number) => {
                const Icon = serviceIcons[index];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    className="p-7 md:p-9 border-r border-b border-border/70 min-h-64 flex flex-col"
                  >
                    <Icon className="w-5 h-5 text-primary mb-auto" strokeWidth={1.5} />
                    <div className="pt-10">
                      <h3 className="font-serif text-2xl md:text-3xl mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="reels" className="py-24 md:py-36 px-5 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid lg:grid-cols-2 gap-10 mb-14 md:mb-18 items-end">
            <div>
              <SectionLabel>{reels.eyebrow}</SectionLabel>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em]">{reels.title}</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl lg:justify-self-end">{reels.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {reelFiles.map((src, index) => (
              <motion.article
                key={src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[9/16] bg-black overflow-hidden">
                  <video
                    src={src}
                    poster={reelPosters[index] || undefined}
                    controls
                    preload="metadata"
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white flex items-center gap-2">
                    <Play className="w-3 h-3 fill-current" /> Reel {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="pt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl">{reels.items[index].title}</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">{reels.items[index].type}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#0d0d0d] text-white">
        <div className="grid lg:grid-cols-2 min-h-[760px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[560px] lg:min-h-full overflow-hidden"
          >
            <img src="/images/mehdi-studio.png" alt="Mahdi Abdul Karimi in a photography studio" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/75">
              <MapPin className="w-4 h-4" /> {about.location}
            </div>
          </motion.div>

          <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 flex items-center">
            <motion.div initial={{ opacity: 0, x: dir === 'rtl' ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="max-w-2xl">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-primary mb-4">{about.eyebrow}</p>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em] mb-9">{about.title}</h2>
              <div className="space-y-5 text-white/65 text-base leading-relaxed">
                <p>{about.story1}</p>
                <p>{about.story2}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mt-12 pt-10 border-t border-white/15">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">{about.educationLabel}</p>
                  <p className="text-sm leading-relaxed text-white/80">{about.education}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">{about.skillsLabel}</p>
                  <p className="text-sm leading-relaxed text-white/80">{about.skills}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-28 md:py-40 px-5 md:px-8">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(circle_at_70%_30%,currentColor_0,transparent_44%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-5xl text-center relative"
        >
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.05em] mb-8">{contact.title}</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12">{contact.subtitle}</p>
          <a
            href="https://wa.me/21650797970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {contact.cta} <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="mt-16 pt-8 border-t border-border/70 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <a href="https://wa.me/21650797970" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><SiWhatsapp /> WhatsApp</a>
            <a href="https://www.instagram.com/mehdi_krimiii/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><SiInstagram /> Instagram</a>
            <a href="https://www.facebook.com/mehdi.krimi.14" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors"><SiFacebook /> Facebook</a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-border/70 px-5 md:px-8 py-7">
        <div className="mx-auto max-w-[1500px] flex flex-col md:flex-row gap-3 items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Mahdi Abdul Karimi — Visual Creator</span>
          <span>© {new Date().getFullYear()} {footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}
