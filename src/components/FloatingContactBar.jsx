import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhatsAppIcon = ({ size = 26, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const FloatingContactBar = () => {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <aside data-component="floating-contact-bar" className="fixed right-5 top-1/2 z-[90] flex -translate-y-1/2 flex-col gap-4 sm:right-8">
        <button
          type="button"
          onClick={() => navigate('/contact-us')}
          aria-label="Open inquiry page"
          className="floating-contact-button floating-contact-inquiry group"
        >
          <Mail size={27} strokeWidth={2.1} />
          <span>INQUIRY</span>
        </button>
        <button
          type="button"
          onClick={() => setShowQR(true)}
          aria-label="Open WhatsApp contact"
          className="floating-contact-button floating-contact-whatsapp group"
        >
          <WhatsAppIcon size={29} />
          <span>WHATSAPP</span>
        </button>
      </aside>

      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal-content text-center" onClick={event => event.stopPropagation()}>
            <button onClick={() => setShowQR(false)} className="absolute right-5 top-5 text-gray-400 transition-colors hover:text-gray-900" aria-label="Close WhatsApp dialog"><X size={24} /></button>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-green-500/20"><WhatsAppIcon size={32} /></div>
            <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-[var(--secondary)]">Direct WhatsApp</h3>
            <p className="mb-8 px-4 text-xs font-medium text-gray-500">Scan to start a priority conversation with our manufacturing team.</p>
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-inner">
              <img src="https://sc04.alicdn.com/kf/A8eee21827e8b42db9639a5317c5ecc52k.jpg" alt="WhatsApp contact QR code" className="h-full w-full object-contain" />
            </div>
            <div className="mt-8 border-t border-gray-100 pt-6"><span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary-bright)]">Available 24/7 Global Support</span></div>
          </div>
        </div>
      )}
    </>
  );
};
