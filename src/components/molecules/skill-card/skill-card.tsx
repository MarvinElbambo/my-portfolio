import Typography from "@/components/atoms/typography/typography";
import styles from "./skill-card.module.scss";
import Image, { ImageProps } from "@/components/atoms/image/image";

export interface SkillCardProps {
  image: ImageProps;
  title: string;
  link: string;
  experience: number;
}

const SkillCard = ({ image, title, experience, link }: SkillCardProps) => {
  return (
    <div className={styles["component"]}>
      <Image
        className={styles["component__image"]}
        {...image}
        alt={image.alt}
        fill
      />

      <div className={styles["component__content"]}>
        <a className={styles["component__link"]} href={link} target="_blank">
          <Typography tagStyle="bodyLarge" text={title} variant="bold" />
        </a>

        <Typography text={`exp: ${experience} yrs`} />
      </div>
    </div>
  );
};

SkillCard.displayName = "SkillCard";

export default SkillCard;
