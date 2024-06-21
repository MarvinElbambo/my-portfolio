import { ButtonProps } from "./button";

export const defaultArg: ButtonProps = {
  text: "This is a button",
  href: "https://www.google.com",
  type: "link",
  variant: "primary",
  onClick: () => console.log("Button clicked"),
};
