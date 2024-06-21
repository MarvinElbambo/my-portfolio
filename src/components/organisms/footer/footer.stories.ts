import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";
import { defaultArg } from "./footer.stub";

const meta: Meta<typeof Footer> = {
  args: defaultArg,
  parameters: {
    layout: "centered",
  },
  title: "organisms/footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
