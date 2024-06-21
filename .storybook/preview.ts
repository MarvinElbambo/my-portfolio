import type { Preview } from "@storybook/react";
import "styles/app.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            height: "667px",
            width: "375px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            height: "1024px",
            width: "768px",
          },
        },
        laptop: {
          name: "Laptop",
          styles: {
            height: "768px",
            width: "1280px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            height: "1080px",
            width: "1920px",
          },
        },
      },
    },
  },
};

export default preview;
