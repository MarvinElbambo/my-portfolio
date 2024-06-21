import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon-svg";
import { defaultArg } from "./icon-svg.stub";
import * as Icons from "assets/icons/index";

const meta: Meta<typeof Icon> = {
  args: defaultArg,
  argTypes: {
    name: {
      options: Object.keys(Icons),
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
  title: "atoms/icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
