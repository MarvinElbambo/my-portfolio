import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./carousel";
import { defaultArg } from "./carousel.stub";
import { WithSixColumnsCentered } from "components/utilities/storybook-decorator/decorators";

const meta: Meta<typeof Carousel> = {
  args: defaultArg,
  argTypes: {
    slidesToShow: {
      control: {
        type: "range",
        min: 1,
        max: defaultArg.images?.length || 1,
      },
    },
  },
  decorators: [WithSixColumnsCentered],
  title: "molecules/carousel",
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
