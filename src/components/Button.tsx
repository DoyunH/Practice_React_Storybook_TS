import PropTypes from "prop-types";

export interface ButtonProps {
  handleClick: () => void;
  label: string;
  size: "sm" | "md" | "lg";
  backgroundColor: string;
}

function Button({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
}: ButtonProps) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
