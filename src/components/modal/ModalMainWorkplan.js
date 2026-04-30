import React, { useEffect } from "react";

const ModalMainWorkplan = ({
  openModal,
  WorkplanName,
  WorkplanDescription,
  handleModalDescription,
  accentStyle = "linear-gradient(to right, #FFCF0B, #f5a623)",
  accentColor = "#FFCF0B",
  index = 0,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

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
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
        onClick={handleModalDescription}
      />

      {/* Dialog */}
      <div
        className="relative z-10 w-full max-w-lg overflow-hidden"
        style={{
          animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          backgroundColor: "#0c0c0c",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "4px",
        }}
      >
        {/* Top gold line */}
        <div style={{ height: "1px", background: "linear-gradient(to right, #FFCF0B, transparent)" }} />

        {/* Header */}
        <div style={{ padding: "24px 24px 16px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <span style={{
              display: "block",
              fontSize: "9px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(255,207,11,0.6)",
              marginBottom: "8px",
              fontFamily: "sans-serif",
            }}>
              Workplan {String(index + 1).padStart(2, "0")}
            </span>
            <h2 style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: "1.4",
              margin: 0,
              fontFamily: "Georgia, serif",
            }}>
              {WorkplanName}
            </h2>
          </div>

          <button
            onClick={handleModalDescription}
            aria-label="Close"
            style={{
              width: "30px", height: "30px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#FFCF0B";
              e.currentTarget.style.color = "#FFCF0B";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.4)";
            }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div style={{ margin: "0 24px", height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} />

        {/* Body */}
        <div
          className="custom-scrollbar"
          style={{ padding: "20px 24px 24px", maxHeight: "52vh", overflowY: "auto" }}
        >
          <p style={{
            fontSize: "14px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            fontFamily: "sans-serif",
            fontWeight: 300,
          }}>
            {WorkplanDescription}
          </p>
        </div>

        {/* Footer */}
        <div style={{
          padding: "12px 24px 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.1em",
            fontFamily: "sans-serif",
          }}>
            PUSB 2025 · Voxaris Cabinet
          </span>

          <button
            onClick={handleModalDescription}
            style={{
              padding: "6px 18px",
              borderRadius: "2px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
              background: "#FFCF0B",
              border: "none",
              cursor: "pointer",
              fontFamily: "sans-serif",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.95) translateY(8px) } to { opacity:1; transform:scale(1) translateY(0) } }
        .custom-scrollbar::-webkit-scrollbar { width: 3px }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,207,11,0.15); border-radius: 99px }
      `}</style>
    </div>
  );
};

export default ModalMainWorkplan;