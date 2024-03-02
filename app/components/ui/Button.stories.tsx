import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "ButtonShadcn",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Medium: Story = {
  args: { children: "Button", className: "" },
};
