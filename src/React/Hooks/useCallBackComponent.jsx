import React from "react";
import PropTypes from "prop-types";

export const UseCallBackComponent = React.memo(({ handleClick }) => {
  console.log("called every time");
  return (
    <div>
      <button onClick={handleClick}>Increment from child</button>
    </div>
  );
});

UseCallBackComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

UseCallBackComponent.displayName = "UseCallBackComponent";

export default React.memo(UseCallBackComponent);
