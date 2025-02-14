import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ title, type, value, onChange, ...props }) => {
  return (
    <>
      <label>{title}</label>
      <input type={type} value={value} onChange={onChange} {...props} />
    </>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export { Input };
