import Row from "@/components/utilities/grid/row/row";
import styles from "./project-card.module.scss";
import Column from "@/components/utilities/grid/column/column";
import Typography from "@/components/atoms/typography/typography";
import Button, { ButtonProps } from "@/components/atoms/button/button";
import classNames from "classnames";

export interface ProjectCardProps {
  iframeURL: string;
  textPosition?: "left" | "right";
  title: string;
  text: string;
  stacks: string[];
  button: ButtonProps;
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

const ProjectCard = ({
  iframeURL,
  textPosition = "right",
  button,
  stacks,
  text,
  title,
  variant = "light",
}: ProjectCardProps) => {
  return (
    <Row
      className={classNames(
        styles["component"],
        styles[`component__text-${textPosition}`],
        styles[`component--${variant}`]
      )}
    >
      <Column
        className={styles["component__column-left"]}
        width={{ tablet: 4 }}
      >
        <iframe className={styles["component__iframe"]} src={iframeURL} />
      </Column>

      <Column
        className={styles["component__column-spacer"]}
        width={{ tablet: 1 }}
      />

      <Column
        className={styles["component__column-right"]}
        width={{ tablet: 7 }}
      >
        <Typography
          tag="p"
          tagStyle="headlineXSmall"
          variant="bold"
          text={title}
        />

        <Typography tag="p" tagStyle="bodyMedium" text={text} />

        <div className={styles["component__stack"]}>
          <Typography tagStyle="bodyMedium" text="stacks :" />

          {stacks.map((stack, index) => (
            <Typography
              key={`${stack}-${index}`}
              className={styles["component__badge"]}
              tagStyle="bodyMedium"
              text={stack}
            />
          ))}
        </div>

        <Button {...button} />
      </Column>
    </Row>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
