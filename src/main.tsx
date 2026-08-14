import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initDatabase } from './lib/db.ts';

// Initialize Dexie IndexedDB
initDatabase();

// Register PWA Service Worker safely
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (navigator.onLine) {
      navigator.serviceWorker.register('/sw.js').then(
        (reg) => {
          console.log('PWA ServiceWorker registered with scope:', reg.scope);
          if (navigator.onLine && reg) {
            reg.update().catch(() => {});
          }
        },
        (err) => console.log('ServiceWorker registration failed:', err)
      );
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
