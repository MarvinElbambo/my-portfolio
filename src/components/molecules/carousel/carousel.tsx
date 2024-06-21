import styles from "./carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as SliderSettings } from "react-slick";
import Image, { ImageProps } from "components/atoms/image/image";
import { ReactNode } from "react";
import classNames from "classnames";

export interface CarouselProps extends SliderSettings {
  children?: ReactNode;
  className?: string;
  items?: ReactNode[];
  images?: ImageProps[];
}

const Carousel = ({
  children,
  className,
  items,
  images,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  ...props
}: CarouselProps) => {
  return (
    <Slider
      {...props}
      className={classNames(styles["component"], className)}
      infinite={infinite}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    >
      {images &&
        images.map((image, index) => (
          <div key={index}>
            <Image {...image} alt={image.alt} />
          </div>
        ))}

      {items && items.map((item) => item)}

      {children && children}
    </Slider>
  );
};

Carousel.displayName = "Carousel";

export default Carousel;
