import React, { useState } from "react";
import ModalMainWorkplan from "../../../components/modal/ModalMainWorkplan";

const CardWorkplan = ({ Workplan, description, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#131310" : "#0e0e0e",
          border: `1px solid ${hovered ? "rgba(255,207,11,0.3)" : "rgba(255,255,255,0.1)"}`,
          padding: 0,
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          transition: "all 0.35s ease",
          overflow: "hidden",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            height: "3px",
            background: hovered
              ? "linear-gradient(to right, #FFCF0B, #f5a623)"
              : "linear-gradient(to right, #FFCF0B40, transparent)",
            transition: "all 0.35s ease",
          }}
        />

        {/* Body */}
        <div
          style={{
            padding: "24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Index */}
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: hovered ? "rgba(255,207,11,0.8)" : "rgba(255,207,11,0.45)",
              marginBottom: "20px",
              fontFamily: "sans-serif",
              transition: "color 0.35s ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: hovered ? "#ffffff" : "rgba(255,255,255,0.8)",
              lineHeight: "1.55",
              flex: 1,
              margin: 0,
              fontFamily: "Georgia, serif",
              transition: "color 0.35s ease",
            }}
          >
            {Workplan}
          </h3>

          {/* Description slide in */}
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.38)",
              lineHeight: "1.75",
              fontFamily: "sans-serif",
              maxHeight: hovered ? "80px" : "0px",
              opacity: hovered ? 1 : 0,
              overflow: "hidden",
              marginTop: hovered ? "14px" : "0px",
              transition: "max-height 0.4s ease, opacity 0.3s ease, margin 0.3s ease",
            }}
          >
            {description}
          </p>

          {/* Footer */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#FFCF0B",
                opacity: hovered ? 0.9 : 0.4,
                transition: "opacity 0.35s ease",
              }}
            />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: hovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                fontFamily: "sans-serif",
                transition: "color 0.35s ease",
              }}
            >
              Read More
            </span>
          </div>
        </div>
      </div>

      {openModal && (
        <ModalMainWorkplan
          openModal={openModal}
          WorkplanName={Workplan}
          WorkplanDescription={description}
          handleModalDescription={() => setOpenModal(false)}
          accentStyle="linear-gradient(to right, #FFCF0B, #f5a623)"
          accentColor="#FFCF0B"
          index={index}
        />
      )}
    </>
  );
};

export default CardWorkplan;