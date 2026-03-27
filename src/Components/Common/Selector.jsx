import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

/**
 * A premium, reusable Selector component.
 * 
 * @param {Array} options - Array of objects: { value, label, icon: IconComponent }
 * @param {any} value - Currently selected value
 * @param {function} onChange - Callback when selection changes
 * @param {string} placeholder - Placeholder text when no value is selected
 * @param {string} label - Optional label above the selector
 * @param {string} className - Additional CSS classes for the container
 * @param {React.ReactNode} trigger - Optional custom trigger element
 * @param {string} position - Dropdown position class (default: "w-full mt-2")
 * @param {React.ReactNode} children - Additional custom content in the dropdown
 */
const Selector = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  trigger,
  position = "w-full mt-2",
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Normalize options to a consistent format
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return {
      value: opt.value,
      label: opt.label || opt.value,
      icon: opt.icon,
      iconClassName: opt.iconClassName,
    };
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
          {label}
        </label>
      )}

      {/* Selector Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={trigger ? "" : `w-full flex items-center justify-between gap-3 px-4 py-3 bg-white border rounded-2xl transition-all duration-200 group ${isOpen
          ? "border-[#32694e] ring-4 ring-[#32694e]/10 shadow-lg"
          : "border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
      >
        {trigger ? (
          trigger
        ) : (
          <>
            <div className="flex items-center gap-3 truncate">
              {selectedOption?.icon && (
                <span className={`text-lg ${isOpen ? "text-[#32694e]" : "text-gray-400"} transition-colors`}>
                  <selectedOption.icon />
                </span>
              )}
              <span className={`truncate text-sm font-medium ${selectedOption ? "text-gray-800" : "text-gray-400"}`}>
                {selectedOption ? selectedOption.label : placeholder}
              </span>
            </div>
            <FiChevronDown
              size={18}
              className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#32694e]" : "group-hover:text-gray-600"}`}
            />
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute z-[100] bg-white border border-gray-100 rounded-2xl shadow-xl py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-xl bg-white/95 ${position}`}>
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {normalizedOptions.length > 0 ? (
              normalizedOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${value === option.value
                    ? "bg-[#32694e]/10 text-[#32694e] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    {option.icon && (
                      <span className={`text-lg transition-colors ${value === option.value
                        ? "text-[#32694e]"
                        : option.iconClassName || "text-gray-400"
                        }`}>
                        <option.icon />
                      </span>
                    )}
                    <span className="truncate">{option.label}</span>
                  </div>
                  {value === option.value && (
                    <FiCheck size={16} className="shrink-0" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-gray-400 italic">
                No options available
              </div>
            )}
          </div>
          {children && (
            <div className="border-t border-gray-100 mt-1 pb-1">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Selector;
