import Link from "next/link";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonAttribute
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
}

interface AnchorAttribute
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  type: "link";
}

export type ButtonProps = {
  text?: String;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
} & (ButtonAttribute | AnchorAttribute);

const Button = ({
  className,
  children,
  text,
  variant = "primary",
  ...props
}: ButtonProps) => {
  if (props.type === "link") {
    const isExternal = props.href?.startsWith("http") ? true : false;

    if (isExternal) {
      return (
        <a
          {...props}
          href={props.href}
          className={classNames(
            styles["component"],
            variant && styles[`component--${variant}`],
            className
          )}
        >
          <span> {text ? text : children}</span>
        </a>
      );
    }

    return (
      <Link
        {...props}
        href={props.href}
        className={classNames(
          styles["component"],
          variant && styles[`component--${variant}`],
          className
        )}
      >
        <span> {text ? text : children}</span>
      </Link>
    );
  } else {
    return (
      <button
        {...props}
        className={classNames(
          styles["component"],
          variant && styles[`component--${variant}`],
          className
        )}
      >
        {text ? text : children}
      </button>
    );
  }
};

Button.displayName = "Button";

export default Button;
