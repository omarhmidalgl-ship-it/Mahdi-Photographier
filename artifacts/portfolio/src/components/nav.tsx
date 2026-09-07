import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export function Nav() {
  const { language, setLanguage, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = t('nav');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    ['work', nav.work],
    ['reels', nav.reels],
    ['about', nav.about],
    ['contact', nav.contact],
  ] as const;

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/88 backdrop-blur-xl border-b border-border/60' : 'bg-gradient-to-b from-black/55 to-transparent text-white'
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 h-20 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="group flex items-center gap-3 text-left" aria-label="Back to top">
          <img
            src="/images/brand-mark.png"
            alt="Mahdi Abdul Karimi logo"
            className="h-11 w-[62px] object-cover object-center bg-black"
          />
          <span className={`hidden lg:block h-4 w-px ${isScrolled ? 'bg-border' : 'bg-white/35'}`} />
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.24em] opacity-70">Visual Creator</span>
        </button>

        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-[11px] uppercase tracking-[0.2em] hover:text-primary transition-colors">
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.15em]">
          {(['en', 'fr', 'ar'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-1.5 py-1 transition-colors ${language === lang ? 'text-primary' : 'opacity-55 hover:opacity-100'}`}
            >
              {lang === 'ar' ? 'ع' : lang}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background text-foreground border-t border-border/60"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left text-xl font-serif">
                  {label}
                </button>
              ))}
              <div className="pt-5 border-t border-border flex gap-5 text-sm uppercase tracking-widest">
                <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</button>
                <button onClick={() => setLanguage('fr')} className={language === 'fr' ? 'text-primary' : 'text-muted-foreground'}>FR</button>
                <button onClick={() => setLanguage('ar')} className={language === 'ar' ? 'text-primary' : 'text-muted-foreground'}>عربي</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
