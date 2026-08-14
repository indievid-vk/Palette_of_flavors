import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 text-[#3D231D] shadow-lg border border-white/80 backdrop-blur-md hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
      title="Наверх"
      aria-label="Вернуться к началу страницы"
    >
      <ArrowUp className="w-5 h-5 text-[#FF758F] group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
