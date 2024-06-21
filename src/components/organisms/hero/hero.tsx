import Container from "@/components/utilities/container/container";
import styles from "./hero.module.scss";
import Row from "@/components/utilities/grid/row/row";
import Column from "@/components/utilities/grid/column/column";
import Image from "@/components/atoms/image/image";
import Typography from "@/components/atoms/typography/typography";
import Button from "@/components/atoms/button/button";

export interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <Container className={styles["component"]}>
      <Row>
        <Column width={{ tablet: 6 }}>
          <Image
            className={styles["component__image"]}
            src="/images/marvin-elbambo.jpg"
            alt="Marvin Elbambo image"
            fill={true}
          />
        </Column>

        <Column
          className={styles["component__right-column"]}
          width={{ tablet: 6 }}
        >
          <Typography
            tag="h1"
            tagStyle="headlineXLarge"
            text="Marvin Elbambo"
          />

          <Typography tag="h2" tagStyle="headlineMedium" text="Web Developer" />

          <Typography
            className={styles["component__objective"]}
            tag="p"
            tagStyle="bodyMedium"
            text="To continuously develop my skills in programming, as well as gaining knowledge and experience to render better performance, service and value to the company."
          />

          <Button
            type="link"
            href="mailto:marvinelbambo99@gmail.com"
            text="Contact me"
            variant="dark"
          />
        </Column>
      </Row>
    </Container>
  );
};

Hero.displayName = "Hero";

export default Hero;
