import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CustomDropdown({
  id,
  value,
  onChange,
  options = [],
  className = "",
  placeholder = "Select an option",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${className} flex w-full items-center justify-between
          gap-3 text-left outline-none`}
      >
        <span className={value ? "" : "text-white/40"}>
          {value || placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 top-[calc(100%+8px)] z-50
            max-h-64 w-full overflow-y-auto rounded-2xl
            border border-white/15 bg-[#111511] p-2
            shadow-xl shadow-black/20"
        >
          {options.map((option) => {
            const selected = value === option;

            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between
                    gap-3 rounded-xl px-4 py-3 text-left text-sm
                    transition-colors ${
                      selected
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/[0.07] hover:text-white"
                    }`}
                >
                  <span>{option}</span>

                  {selected && (
                    <Check size={16} className="shrink-0 text-[#a1ff63]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}