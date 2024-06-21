import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./typography";
import { defaultArg } from "./typography.stub";
import { WithFourColumnsCentered } from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof Typography> = {
  args: defaultArg,
  argTypes: {
    tag: {
      control: {
        type: "select",
        options: [
          "a",
          "div",
          "span",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "small",
          "label",
        ],
      },
    },
    tagStyle: {
      control: {
        type: "select",
        options: [
          "bodySmall",
          "bodyMedium",
          "bodyLarge",
          "headlineXSmall",
          "headlineSmall",
          "headlineMedium",
          "headlineLarge",
          "headlineXLarge",
          "headlineXXLarge",
        ],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["light", "regular", "medium", "bold"],
      },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithFourColumnsCentered],
  title: "atoms/typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
