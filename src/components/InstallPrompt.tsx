import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, Sparkles, Smartphone } from 'lucide-react';

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showAndroidPrompt, setShowAndroidPrompt] = useState(false);
  const [showIosPrompt, setShowIosPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as standalone PWA
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    
    setIsStandalone(standalone);
    if (standalone) return;

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iosDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as any).MSStream;
    setIsIos(iosDevice);

    // If iOS and not standalone, show iOS guide banner if not previously dismissed this session
    if (iosDevice && !sessionStorage.getItem('pwa_ios_prompt_dismissed')) {
      setShowIosPrompt(true);
    }

    // Android/Chrome beforeinstallprompt handling
    const handleInstallable = () => {
      if ((window as any).deferredInstallPrompt) {
        setDeferredPrompt((window as any).deferredInstallPrompt);
        if (!sessionStorage.getItem('pwa_android_prompt_dismissed')) {
          setShowAndroidPrompt(true);
        }
      }
    };

    if ((window as any).deferredInstallPrompt) {
      handleInstallable();
    }

    window.addEventListener('pwa-installable', handleInstallable);
    window.addEventListener('beforeinstallprompt', (e) => {
      setDeferredPrompt(e);
      if (!sessionStorage.getItem('pwa_android_prompt_dismissed')) {
        setShowAndroidPrompt(true);
      }
    });

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = deferredPrompt || (window as any).deferredInstallPrompt;
    if (!promptEvent) return;

    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted PWA installation');
      (window as any).deferredInstallPrompt = null;
      setDeferredPrompt(null);
      setShowAndroidPrompt(false);
    }
  };

  const dismissAndroid = () => {
    sessionStorage.setItem('pwa_android_prompt_dismissed', 'true');
    setShowAndroidPrompt(false);
  };

  const dismissIos = () => {
    sessionStorage.setItem('pwa_ios_prompt_dismissed', 'true');
    setShowIosPrompt(false);
  };

  if (isStandalone) return null;

  return (
    <>
      {/* Android / Chrome Auto Install Banner */}
      {showAndroidPrompt && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="glass-modal rounded-2xl p-4 shadow-xl border border-white/80 flex items-center justify-between gap-3 bg-white/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF758F] to-[#E87A90] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-[#3D231D] flex items-center gap-1">
                  <span>Установить «Палитру»</span>
                  <Sparkles className="w-3 h-3 text-[#FF758F]" />
                </h4>
                <p className="text-[11px] text-[#7C5A52]">
                  Для быстрого и полного офлайн-доступа на экране
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstallClick}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF758F] to-[#E87A90] text-white font-semibold text-xs shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Установить</span>
              </button>
              <button
                onClick={dismissAndroid}
                className="p-1.5 rounded-lg text-[#7C5A52] hover:bg-black/5 transition-colors cursor-pointer"
                title="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS Safari Guide FAB / Banner */}
      {showIosPrompt && isIos && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="glass-modal rounded-2xl p-4 shadow-xl border border-white/80 space-y-2 bg-white/95 backdrop-blur-md">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF758F]/20 text-[#FF758F] flex items-center justify-center font-bold">
                  <Share className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-xs text-[#3D231D]">
                  Установка на iPhone / iPad
                </h4>
              </div>
              <button
                onClick={dismissIos}
                className="p-1 rounded-lg text-[#7C5A52] hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] text-[#5A413C] leading-relaxed pl-1 space-y-1">
              <p className="flex items-center gap-1.5">
                <span>1. Нажмите иконку</span>
                <span className="inline-flex items-center justify-center p-1 bg-gray-100 rounded text-blue-600 font-bold">
                  <Share className="w-3 h-3" /> Поделиться
                </span>
                <span>внизу экрана.</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span>2. Выберите</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-gray-100 rounded text-[#3D231D] font-medium">
                  <PlusSquare className="w-3 h-3 text-[#FF758F]" /> На экран «Домой»
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
