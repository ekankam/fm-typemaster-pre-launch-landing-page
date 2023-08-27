import PropTypes from "prop-types";

export default function Button({ className, label }) {
  return (
    <button
      type="button"
      className={`py-[11px] px-[14.5px] font-bold text-cc-black rounded-lg md:py-4 md:px-[27px] transition-all duration-75 ease-in-out uppercase ${className}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};
