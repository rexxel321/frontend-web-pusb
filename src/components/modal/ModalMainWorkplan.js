import React, { useEffect } from "react";

const ModalMainWorkplan = ({
  openModal,
  WorkplanName,
  WorkplanDescription,
  handleModalDescription,
  accentStyle = "linear-gradient(to right, #2B6130, #FFCF0B)",
  accentColor = "#2B6130",
  index = 0,
}) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") handleModalDescription(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleModalDescription]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-vox-black/80 backdrop-blur-md"
        onClick={handleModalDescription}
      />

      {/* Dialog */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden
                   bg-[#0d1a0e] border border-vox-cream/10 shadow-2xl"
        style={{
          animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: `0 0 60px ${accentColor}30`,
        }}
      >
        {/* Top gradient bar */}
        <div className="h-1 w-full" style={{ background: accentStyle }} />

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-6 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-vox-cream/40 font-body">
              Workplan {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-2xl font-display tracking-wider text-vox-cream leading-tight">
              {WorkplanName}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={handleModalDescription}
            className="flex items-center justify-center w-8 h-8 rounded-full
                       bg-vox-cream/5 hover:bg-vox-cream/15 border border-vox-cream/10
                       text-vox-cream/50 hover:text-vox-cream
                       transition-all duration-200 shrink-0 mt-1"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-7 h-px bg-vox-cream/8" />

        {/* Body */}
        <div className="px-7 py-5 max-h-[55vh] overflow-y-auto custom-scrollbar">
          <p className="text-sm text-vox-cream/65 leading-relaxed font-body">
            {WorkplanDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="px-7 py-4 flex items-center justify-between border-t border-vox-cream/8">
          <span className="text-xs text-vox-cream/30 font-footer">
            PUSB 2025 · Voxaris Cabinet
          </span>
          <button
            onClick={handleModalDescription}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-vox-black font-body
                       hover:opacity-80 transition-opacity duration-200"
            style={{ background: accentStyle }}
          >
            Close
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.92) translateY(12px) } to { opacity:1; transform:scale(1) translateY(0) } }
        .custom-scrollbar::-webkit-scrollbar { width:4px }
        .custom-scrollbar::-webkit-scrollbar-track { background:transparent }
        .custom-scrollbar::-webkit-scrollbar-thumb { background:rgba(246,229,202,0.15); border-radius:99px }
      `}</style>
    </div>
  );
};

export default ModalMainWorkplan;
