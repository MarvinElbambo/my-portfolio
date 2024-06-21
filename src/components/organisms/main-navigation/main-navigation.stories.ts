import type { Meta, StoryObj } from "@storybook/react";
import MainNavigation from "./main-navigation";
import { defaultArg } from "./main-navigation.stub";

const meta: Meta<typeof MainNavigation> = {
  args: defaultArg,
  parameters: {
    layout: "fullscreen",
  },
  title: "organisms/main-navigation",
  component: MainNavigation,
};

export default meta;
type Story = StoryObj<typeof MainNavigation>;

export const Default: Story = {};
