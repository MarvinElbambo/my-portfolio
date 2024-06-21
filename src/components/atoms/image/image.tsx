import styles from "./image.module.scss";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import classNames from "classnames";

export interface ImageProps extends NextImageProps {
  alt: string;
  className?: string;
}

const Image = ({ className, fill, ...props }: ImageProps) => {
  return (
    <figure
      className={classNames(
        styles["component"],
        fill && styles[`component--fill`],
        className
      )}
    >
      <NextImage {...props} fill={fill} />
    </figure>
  );
};

Image.displayName = "Image";

export default Image;
