import type { Meta, StoryObj } from "@storybook/react";
import ProjectList from "./project-list";
import { defaultArg } from "./project-list.stub";

const meta: Meta<typeof ProjectList> = {
  args: defaultArg,
  parameters: {
    layout: "centered",
  },
  title: "organisms/project-list",
  component: ProjectList,
};

export default meta;
type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {};
