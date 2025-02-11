import PropTypes from "prop-types";

const Input = ({ title, type, value, onChange, style = {}, ...props }) => {
  return (
    <>
      <label>{title}</label>
      <input
        type={type}
        style={style}
        value={value}
        onChange={onChange}
        {...props}
      />
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
