import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./project-card";
import { defaultArg } from "./project-card.stub";

const meta: Meta<typeof ProjectCard> = {
  args: defaultArg,
  parameters: {
    layout: "centered",
  },
  title: "molecules/project-card",
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {};
