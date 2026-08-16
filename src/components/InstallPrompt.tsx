import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X, Sparkles, Smartphone, ArrowDown, CheckCircle2 } from 'lucide-react';

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showAndroidPrompt, setShowAndroidPrompt] = useState(false);
  const [showIosPrompt, setShowIosPrompt] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Проверка Standalone-режима (уже установлено и запущено с экрана Домой)
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');
    
    setIsStandalone(standalone);
    if (standalone) return;

    // 2. Точное определение iOS (iPhone, iPad, iPod, iPadOS на Mac)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    setIsIos(isIosDevice);

    // 3. Автоматический показ окна для iOS Safari
    if (isIosDevice) {
      const dismissed = localStorage.getItem('pwa_ios_modal_dismissed');
      // Если еще не закрывали или открыли повторно
      if (!dismissed) {
        const timer = setTimeout(() => {
          setShowIosPrompt(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }

    // 4. Android/Chrome beforeinstallprompt
    const handleInstallable = () => {
      if ((window as any).deferredInstallPrompt) {
        setDeferredPrompt((window as any).deferredInstallPrompt);
        if (!localStorage.getItem('pwa_android_prompt_dismissed')) {
          setShowAndroidPrompt(true);
        }
      }
    };

    if ((window as any).deferredInstallPrompt) {
      handleInstallable();
    }

    window.addEventListener('pwa-installable', handleInstallable);
    const beforeInstallHandler = (e: any) => {
      e.preventDefault();
      (window as any).deferredInstallPrompt = e;
      setDeferredPrompt(e);
      if (!localStorage.getItem('pwa_android_prompt_dismissed')) {
        setShowAndroidPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', beforeInstallHandler);

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    const promptEvent = deferredPrompt || (window as any).deferredInstallPrompt;
    if (!promptEvent) return;

    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      (window as any).deferredInstallPrompt = null;
      setDeferredPrompt(null);
      setShowAndroidPrompt(false);
    }
  };

  const dismissAndroid = () => {
    localStorage.setItem('pwa_android_prompt_dismissed', 'true');
    setShowAndroidPrompt(false);
  };

  const dismissIos = () => {
    localStorage.setItem('pwa_ios_modal_dismissed', 'true');
    setShowIosPrompt(false);
  };

  if (isStandalone) return null;

  return (
    <>
      {/* Android / Chrome Auto Install Banner */}
      {showAndroidPrompt && (
        <div id="pwa-android-install-banner" className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="rounded-2xl p-4 shadow-2xl border border-[#B6CEBE] flex items-center justify-between gap-3 bg-white/95 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5E8A6E] to-[#7AA58B] flex items-center justify-center text-white shrink-0 shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-[#23372B] flex items-center gap-1">
                  <span>Установить «Палитру вкусов»</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#5E8A6E]" />
                </h4>
                <p className="text-[11px] text-[#556E5F]">
                  Офлайн-доступ без интернета и запуск с экрана
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                id="btn-install-pwa-android"
                onClick={handleInstallClick}
                className="px-3.5 py-1.5 rounded-xl glass-button-primary text-white font-semibold text-xs shadow hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Установить</span>
              </button>
              <button
                onClick={dismissAndroid}
                className="p-1.5 rounded-lg text-[#556E5F] hover:bg-black/5 transition-colors cursor-pointer"
                title="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS Safari Automatic Install Modal (Bottom Sheet + Backdrop) */}
      {showIosPrompt && isIos && (
        <div id="pwa-ios-modal-overlay" className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-300">
          <div 
            id="pwa-ios-modal-sheet"
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border-t sm:border border-[#B6CEBE] space-y-4 animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 pb-2 border-b border-[#DAE8DF]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5E8A6E] to-[#7AA58B] flex items-center justify-center text-white shadow-md shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#23372B] flex items-center gap-1.5">
                    <span>Установка на iPhone</span>
                    <Sparkles className="w-4 h-4 text-[#5E8A6E]" />
                  </h3>
                  <p className="text-xs text-[#556E5F]">
                    Работает автономно без интернета
                  </p>
                </div>
              </div>
              <button
                id="btn-close-ios-pwa-modal"
                onClick={dismissIos}
                className="p-2 rounded-full text-[#556E5F] hover:bg-[#E8F1EB] transition-colors cursor-pointer"
                title="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3 pt-1">
              {/* Step 1 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F4F8F5] border border-[#DAE8DF]">
                <div className="w-6 h-6 rounded-full bg-[#5E8A6E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-[#23372B] space-y-1">
                  <p className="font-semibold">
                    Нажмите кнопку «Поделиться» внизу экрана Safari:
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg shadow-xs border border-[#B6CEBE] text-[#345741] font-bold">
                    <Share className="w-4 h-4 text-[#5E8A6E]" />
                    <span>Поделиться (квадрат со стрелкой)</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F4F8F5] border border-[#DAE8DF]">
                <div className="w-6 h-6 rounded-full bg-[#5E8A6E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-[#23372B] space-y-1">
                  <p className="font-semibold">
                    Прокрутите вниз и выберите пункт:
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg shadow-xs border border-[#DAE8DF] text-[#23372B] font-bold">
                    <PlusSquare className="w-4 h-4 text-[#5E8A6E]" />
                    <span>На экран «Домой»</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#E8F1EB] border border-[#B6CEBE]">
                <div className="w-6 h-6 rounded-full bg-[#345741] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-[#23372B]">
                  <p className="font-semibold">
                    В правом верхнем углу нажмите <span className="font-bold text-[#345741]">«Добавить»</span>
                  </p>
                  <p className="text-[11px] text-[#556E5F] mt-0.5">
                    Иконка появится на рабочем столе вашего iPhone!
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-2">
              <button
                id="btn-understand-ios-pwa"
                onClick={dismissIos}
                className="w-full py-3 rounded-2xl glass-button-primary text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Понятно, установить</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button to re-open iOS guide anytime */}
      {isIos && !showIosPrompt && (
        <button
          id="btn-reopen-ios-install-guide"
          onClick={() => setShowIosPrompt(true)}
          className="fixed bottom-24 right-4 z-40 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#B6CEBE] text-[#345741] rounded-full shadow-lg hover:bg-white active:scale-95 transition-all flex items-center gap-2 text-xs font-bold cursor-pointer"
          title="Инструкция по установке на iPhone"
        >
          <Smartphone className="w-4 h-4 text-[#5E8A6E]" />
          <span>Установить на iPhone</span>
        </button>
      )}
    </>
  );
};

