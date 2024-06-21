import type { Meta, StoryObj } from "@storybook/react";
import SkillCard from "./skill-card";
import { defaultArg } from "./skill-card.stub";
import { WithFourColumnsCentered } from "@/components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof SkillCard> = {
  args: defaultArg,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithFourColumnsCentered],
  title: "molecules/skill-card",
  component: SkillCard,
};

export default meta;
type Story = StoryObj<typeof SkillCard>;

export const Default: Story = {};
