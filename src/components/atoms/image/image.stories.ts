import type { Meta, StoryObj } from "@storybook/react";
import Image from "./image";
import { defaultArg, fillArg } from "./image.stub";
import {
  WithFourColumnsCentered,
  WithSixColumnsCentered,
} from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof Image> = {
  parameters: {
    layout: "fullscreen",
  },
  title: "atoms/image",
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: defaultArg,
  decorators: [WithSixColumnsCentered],
};

export const Fill: Story = {
  args: fillArg,
  decorators: [WithFourColumnsCentered],
};
