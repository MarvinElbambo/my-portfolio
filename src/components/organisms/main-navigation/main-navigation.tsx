import Container from "@/components/utilities/container/container";
import styles from "./main-navigation.module.scss";
import Image from "@/components/atoms/image/image";
import Typography from "@/components/atoms/typography/typography";
import Button from "@/components/atoms/button/button";
import Icon from "@/components/atoms/icon-svg/icon-svg";

export interface MainNavigationProps {}

const MainNavigation = ({}: MainNavigationProps) => {
  return (
    <nav className={styles["component"]}>
      <Container className={styles["component__container"]}>
        <div className={styles["component__logo"]}>
          <Image
            className={styles["component__image"]}
            src="/images/marvin-elbambo.jpg"
            alt="Marvin Elbambo image"
            fill={true}
          />

          <Typography
            tagStyle="headlineXSmall"
            text="Marvin Elbambo"
            variant="bold"
          />
        </div>

        <a
          className={styles["component__email-link"]}
          href="mailto:marvinelbambo99@gmail.com"
        >
          <Icon name="Email" />
        </a>

        <Button
          className={styles["component__email-button"]}
          type="link"
          href="mailto:marvinelbambo99@gmail.com"
          text="Contact me"
          variant="light"
        />
      </Container>
    </nav>
  );
};

MainNavigation.displayName = "MainNavigation";

export default MainNavigation;
