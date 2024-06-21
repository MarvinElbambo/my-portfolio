import type { Meta, StoryObj } from "@storybook/react";
import RichText from "./rich-text";
import { defaultArg } from "./rich-text.stub";
import { WithSixColumnsCentered } from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof RichText> = {
  args: defaultArg,
  parameters: {
    layout: "centered",
  },
  decorators: [WithSixColumnsCentered],
  title: "atoms/rich-text",
  component: RichText,
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const Default: Story = {};
