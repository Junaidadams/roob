import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full shadow-lg bg-[#00000046] 
      `}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 " color="#f5f5f5 " />
      ) : (
        <LuAlignLeft className="h-6 w-6" color="#f5f5f5" />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
