
const variants = {
  primary: "bg-[#090909] text-white border border-black",
  secondary:
    "bg-transparent text-[#111111] border border-[#111111]/70 hover:border-black",
  green:
    "bg-[#a1ff63] text-black border border-[#a1ff63] shadow-[0_10px_30px_rgba(161,255,99,0.3)]",
};

export default function WaveButton({
  children,
  label,
  href = "#contact",
  variant = "primary",
  className = "",
  showArrow = true,
  onClick,
  target,
  rel,
}) {
  const text = label ?? children;
  const primary = variant === "primary";
  const green = variant === "green";

  const letters = (value) =>
    Array.from(String(value)).map((char, index) => ({
      char,
      index,
    }));

  const arrowStyles = primary
    ? "bg-white text-black"
    : green
      ? "bg-black text-white"
      : "bg-[#111111] text-white";

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`wave-button group inline-flex items-center gap-3 rounded-full
        ${showArrow ? "py-2 pl-6 pr-2" : "px-7 py-[17px]"}
        whitespace-nowrap font-medium
        transition-all duration-300
        ${variants[variant] ?? variants.primary}
        ${className}`}
    >
      <span className="wave-label relative inline-grid overflow-hidden">
        <span className="wave-line flex">
          {letters(text).map(({ char, index }) => (
            <span
              key={`old-${index}`}
              className="wave-char"
              style={{ "--i": index }}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
        </span>

        <span
          aria-hidden="true"
          className="wave-line wave-line-new absolute inset-0 flex"
        >
          {letters(text).map(({ char, index }) => (
            <span
              key={`new-${index}`}
              className="wave-char"
              style={{ "--i": index }}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
        </span>
      </span>

      {showArrow && (
        <span
          className={`flex size-10 shrink-0 items-center justify-center
            rounded-full transition-transform duration-300
            group-hover:rotate-45 ${arrowStyles}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-5"
            aria-hidden="true"
          >
            <path
              d="M7 17 17 7M7 7h10v10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </a>
  );
}
