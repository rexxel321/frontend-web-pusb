import React from "react";

const CardWorkplan = ({ Workplan, description, index }) => {
  return (
    <div
      style={{
        background: "#131310",
        border: "1px solid rgba(255,207,11,0.3)",
        padding: 0,
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {/* Gold top bar */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(to right, #FFCF0B, #f5a623)",
        }}
      />

      {/* Body */}
      <div
        style={{
          padding: "32px 24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: "1.55",
            margin: "0 0 16px 0",
            fontFamily: "Georgia, serif",
          }}
        >
          {Workplan}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: "1.75",
            fontFamily: "sans-serif",
            margin: 0,
            maxWidth: "800px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardWorkplan;