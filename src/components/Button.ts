import PropTypes from "prop-types";

type ButtonPropsType = {
  onClick: () => void;
  label: string;
  size: "sm" | "md" | "lg";
  backgroundColor: string;
};

const Button = ({
  label,
  backgroundColor = "red",
  size = "md",
  onClick,
}: ButtonPropsType) => {
  const buttonStyle = {
    backgroundColor,
    padding: "10px",
    borderRadius: "5px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    width: size === "md" ? "200px" : "100px",
    height: size === "md" ? "50px" : "30px",
  };

  return;
};
