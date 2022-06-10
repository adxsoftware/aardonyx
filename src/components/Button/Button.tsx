import React from "react";

// export is needed to remove the privacy error in storybook
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
