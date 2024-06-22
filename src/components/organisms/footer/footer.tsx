import Row from "@/components/utilities/grid/row/row";
import styles from "./footer.module.scss";
import Column from "@/components/utilities/grid/column/column";
import Typography from "@/components/atoms/typography/typography";
import Container from "@/components/utilities/container/container";
import Icon from "@/components/atoms/icon-svg/icon-svg";

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles["component"]}>
      <Container>
        <Row>
          <Column className={styles["component__column"]} width={{ tablet: 4 }}>
            <Typography
              tag="p"
              tagStyle="bodyLarge"
              variant="bold"
              text="Contact"
            />

            <div className={styles["component__content"]}>
              <a className={styles["component__link"]} href="tel:+639270763354">
                <Typography
                  tag="p"
                  tagStyle="bodyMedium"
                  text="Globe: +639270763354"
                />
              </a>

              <a className={styles["component__link"]} href="tel:+639922412008">
                <Typography
                  tag="p"
                  tagStyle="bodyMedium"
                  text="Dito: +639922412008"
                />
              </a>

              <a
                className={styles["component__link"]}
                href="mailto:marvinelbambo@gmail.com"
              >
                <Typography
                  tag="p"
                  tagStyle="bodyMedium"
                  text="Email: marvinelbambo99@gmail.com"
                />
              </a>
            </div>
          </Column>

          <Column className={styles["component__column"]} width={{ tablet: 4 }}>
            <Typography
              tag="p"
              tagStyle="bodyLarge"
              variant="bold"
              text="Address"
            />

            <div className={styles["component__content"]}>
              <Typography
                tag="p"
                tagStyle="bodyMedium"
                text="Stall 32 Acces road"
              />

              <Typography
                tag="p"
                tagStyle="bodyMedium"
                text="Brgy. Pulung Cacutud, Angeles City"
              />

              <Typography
                tag="p"
                tagStyle="bodyMedium"
                text="Pampanga, Philippines"
              />
            </div>
          </Column>

          <Column className={styles["component__column"]} width={{ tablet: 4 }}>
            <Typography
              tag="p"
              tagStyle="bodyLarge"
              variant="bold"
              text="Social Media"
            />

            <div className={styles["component__social-media"]}>
              <a
                href="https://www.facebook.com/profile.php?id=100074017205583&mibextid=qi2Omg"
                target="_blank"
              >
                <Icon name="Facebook" />
              </a>

              <a
                href="https://www.linkedin.com/in/marvin-elbambo-4186a22a7"
                target="_blank"
              >
                <Icon name="LinkedIn" />
              </a>

              <a href="mailto:marvinelbambo99@gmail.com" target="_blank">
                <Icon name="Gmail" />
              </a>
            </div>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
