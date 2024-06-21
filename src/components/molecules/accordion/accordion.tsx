"use client";

import { ReactNode, use, useState } from "react";
import styles from "./accordion.module.scss";
import classNames from "classnames";
import Typography from "components/atoms/typography/typography";
import Icon from "components/atoms/icon-svg/icon-svg";

export interface AccordionProps {
  children?: ReactNode;
  className?: string;
  content?: ReactNode;
  header?: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
}

const Accordion = ({
  children,
  className,
  content,
  header,
  headerClassName,
  contentClassName,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        styles["component"],
        isOpen && styles[`component--open`],
        className
      )}
    >
      <header
        className={classNames(styles["component__header"], headerClassName)}
      >
        <div className={styles["header__text"]}>{header}</div>

        <Icon
          className={styles["header__icon"]}
          name="ChevronUp"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </header>

      <div
        className={classNames(styles["component__content"], contentClassName)}
      >
        {children ? children : content}
      </div>
    </div>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;
