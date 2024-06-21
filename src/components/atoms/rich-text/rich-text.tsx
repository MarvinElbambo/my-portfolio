import styles from "./rich-text.module.scss";
import classNames from "classnames";

export interface RichTextProps {
  className?: string;
  richText: string;
}

const RichText = ({ className, richText }: RichTextProps) => {
  return (
    <div
      className={classNames(styles["component"], className)}
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
};

RichText.displayName = "RichText";

export default RichText;
