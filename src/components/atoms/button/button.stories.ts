import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import { defaultArg } from "./button.stub";
import { WithFourColumnsCentered } from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof Button> = {
  args: defaultArg,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset", "link"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithFourColumnsCentered],
  title: "atoms/button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
