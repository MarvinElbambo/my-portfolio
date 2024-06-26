import { ReactNode } from "react";
import styles from "./module-wrapper.module.scss";
import classNames from "classnames";

export interface ModuleWrapperProps {
  className?: string;
  children?: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const ModuleWrapper = ({
  className,
  children,
  variant,
}: ModuleWrapperProps) => {
  return (
    <section
      className={classNames(
        styles["component"],
        variant && styles[`component--${variant}`],
        className
      )}
    >
      {children}
    </section>
  );
};

ModuleWrapper.displayName = "ModuleWrapper";

export default ModuleWrapper;
