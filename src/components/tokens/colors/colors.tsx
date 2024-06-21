import Container from "components/utilities/container/container";
import styles from "./colors.module.scss";
import Row from "components/utilities/grid/row/row";
import { toUpperCase } from "lib/functions/string-functions";
import Column, {
  ColumnBreakpoints,
} from "components/utilities/grid/column/column";
import classNames from "classnames";
import Typography from "components/atoms/typography/typography";

interface Colors {
  name: string;
  width: ColumnBreakpoints;
}

export interface ColorsProps {}

const Colors = ({}: ColorsProps) => {
  const colors: Colors[] = [
    {
      name: "primary",
      width: { tablet: 6 },
    },
    {
      name: "secondary",
      width: { tablet: 6 },
    },
    {
      name: "success",
      width: { tablet: 6 },
    },
    {
      name: "danger",
      width: { tablet: 6 },
    },
    {
      name: "warning",
      width: { tablet: 6 },
    },
    {
      name: "info",
      width: { tablet: 6 },
    },

    {
      name: "light",
      width: { tablet: 6 },
    },

    {
      name: "dark",
      width: { tablet: 6 },
    },
  ];

  return (
    <Container className={styles["component"]}>
      <Row>
        {colors.map((colorValue, colorKey) => (
          <Column
            key={colorKey}
            className={classNames(
              styles[`card`],
              styles[`card--${colorValue.name}`]
            )}
            width={colorValue.width}
          >
            <Typography
              className={styles[`card__name`]}
              tag="h1"
              tagStyle="headlineXSmall"
              text={colorValue.name}
            />

            <Typography
              className={styles[`card__contrast`]}
              tag="p"
              tagStyle="bodyMedium"
              text="Contrast"
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

Colors.displayName = "Colors";

export default Colors;
