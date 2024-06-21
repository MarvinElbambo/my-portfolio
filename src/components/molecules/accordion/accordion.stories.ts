import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./accordion";
import { defaultArg } from "./accordion.stub";
import { WithFourColumnsCentered } from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof Accordion> = {
  args: defaultArg,
  decorators: [WithFourColumnsCentered],
  title: "molecules/accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
