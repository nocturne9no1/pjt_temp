import React, { Children } from "react";

interface ButtonProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  width: string;
  onClick: () => void;
  radius: string;
}

const Button: React.FC<ButtonProps> = ({
  border,
  color,
  children,
  height,
  width,
  onClick,
  radius,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      style={{
        border,
        backgroundColor: color,
        height,
        width,
        borderRadius: radius,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
