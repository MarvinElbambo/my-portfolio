import { Decorator } from "@storybook/react";
import Row from "../grid/row/row";
import Column from "../grid/column/column";
import styles from "./decorators.module.scss";
import classNames from "classnames";

export const WithFourColumnsCentered: Decorator = (Story) => {
  return (
    <Row
      className={classNames(styles.decorator, styles.withFourColumnsCentered)}
    >
      <Column width={{ laptop: 4 }} />
      <Column className={styles.column} width={{ laptop: 4 }}>
        <Story />
      </Column>
    </Row>
  );
};

export const WithSixColumnsCentered: Decorator = (Story) => {
  return (
    <Row
      className={classNames(styles.decorator, styles.withSixColumnsCentered)}
    >
      <Column width={{ laptop: 3 }} />
      <Column className={styles.column} width={{ laptop: 6 }}>
        <Story />
      </Column>
    </Row>
  );
};
