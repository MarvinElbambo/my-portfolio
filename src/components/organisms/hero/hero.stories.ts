import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./hero";
import { defaultArg } from "./hero.stub";

const meta: Meta<typeof Hero> = {
  args: defaultArg,
  parameters: {
    layout: "fullscreen",
  },
  title: "organisms/hero",
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
