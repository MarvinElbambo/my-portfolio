import type { Meta, StoryObj } from "@storybook/react";
import Colors from "./colors";
import { defaultArg } from "./colors.stub";

const meta: Meta<typeof Colors> = {
  args: defaultArg,
  parameters: {
    layout: "fullscreen",
  },
  title: "tokens/colors",
  component: Colors,
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Default: Story = {};
