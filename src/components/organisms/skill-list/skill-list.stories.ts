import type { Meta, StoryObj } from "@storybook/react";
import SkillList from "./skill-list";
import { defaultArg } from "./skill-list.stub";

const meta: Meta<typeof SkillList> = {
  args: defaultArg,
  parameters: {
    layout: "fullscreen",
  },
  title: "organisms/skill-list",
  component: SkillList,
};

export default meta;
type Story = StoryObj<typeof SkillList>;

export const Default: Story = {};
