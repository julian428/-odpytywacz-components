import type { Meta, StoryObj } from "@storybook/react";

import Form from "../components/Form";

const meta = {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
