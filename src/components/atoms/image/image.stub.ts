import { ImageProps } from "./image";

export const defaultArg: ImageProps = {
  alt: "alt Text",
  src: "https://via.placeholder.com/500x500.webp",
  width: 500,
  height: 500,
  placeholder: "blur",
  blurDataURL: "https://via.placeholder.com/864x864.webp",
};

export const fillArg: ImageProps = {
  alt: "alt Text",
  src: "https://via.placeholder.com/500x500.webp",
  fill: true,
  placeholder: "blur",
  blurDataURL: "https://via.placeholder.com/864x864.webp",
};
