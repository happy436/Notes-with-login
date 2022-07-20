import React from "react";
import PropTypes from "prop-types";

function Button({ children, handleClick, type }) {
    return (
        <button
            type={type}
            className="text-violet-600 hover:text-violet-800"
            onClick={(e) => {
                e.stopPropagation();
                handleClick();
            }}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: "button",
    handleClick: () => {}
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    handleClick: PropTypes.func,
    type: PropTypes.string
};

export default Button;
