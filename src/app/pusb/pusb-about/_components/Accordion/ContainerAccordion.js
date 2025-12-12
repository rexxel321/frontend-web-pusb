import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import PropTypes from "prop-types";

const ContainerAccordion = ({ missions }) => {
  const [isOpenMission, setIsOpenMission] = useState(null);

  const handleClickOpenMission = (index) => {
    setIsOpenMission(isOpenMission === index ? null : index);
  };

  return (
    <ul style={{ width: "100%" }}>
      {missions.map((mission, index) => (
        <li
          key={index}
          style={{
            marginBottom: "8px",
            cursor: "pointer",
            borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div style={{ padding: "8px 0" }}>
            <button
              onClick={() => handleClickOpenMission(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                fontWeight: "bold",
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span>{mission.vision}</span>
              <FaCaretDown
                style={{
                  transform: isOpenMission === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
            <div
              style={{
                maxHeight: isOpenMission === index ? "100px" : "0",
                opacity: isOpenMission === index ? "1" : "0",
                transition: "max-height 0.3s ease, opacity 0.3s ease",
                overflow: "hidden",
                fontSize: "14px",
                color: "white",
              }}
            >
              {mission.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Prop validation
ContainerAccordion.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      vision: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContainerAccordion;
