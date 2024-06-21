import Container from "@/components/utilities/container/container";
import styles from "./main-navigation.module.scss";
import Image from "@/components/atoms/image/image";
import Typography from "@/components/atoms/typography/typography";
import Button from "@/components/atoms/button/button";
import Icon from "@/components/atoms/icon-svg/icon-svg";
import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";

export interface MainNavigationProps {}

const MainNavigation = ({}: MainNavigationProps) => {
  const { width } = useWindowSize();
  const isTablet = useMemo(() => {
    return width >= parseInt(styles["breakpoint-tablet"] ?? 768);
  }, [width]);

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

        {!isTablet && (
          <a
            className={styles["component__email"]}
            href="mailto:marvinelbambo99@gmail.com"
          >
            <Icon name="Email" />
          </a>
        )}

        {isTablet && (
          <Button
            type="link"
            href="mailto:marvinelbambo99@gmail.com"
            text="Contact me"
            variant="light"
          />
        )}
      </Container>
    </nav>
  );
};

MainNavigation.displayName = "MainNavigation";

export default MainNavigation;
