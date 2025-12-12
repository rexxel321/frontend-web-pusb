import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

const DropdownFilter = ({ sections = [], selectedOptions = {}, onChange }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {sections.map((section) => (
        <div key={section.title} className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
            {openSection === section.title ? (
              <FaChevronUp className="ml-2 h-5 w-5" />
            ) : (
              <FaChevronDown className="ml-2 h-5 w-5" />
            )}
          </button>

          {openSection === section.title && (
            <div className="origin-top-right absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1 max-h-64 overflow-auto">
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={selectedOptions[section.title.toLowerCase()]?.includes(option)}
                      onChange={() => onChange(section.title, option)}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

DropdownFilter.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  selectedOptions: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

DropdownFilter.defaultProps = {
  sections: [],
  selectedOptions: {},
};

export default DropdownFilter;
