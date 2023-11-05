import type { Meta, StoryObj } from "@storybook/react";

import Input from "../components/Input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      options: ["bordered", "ghost"],
      control: "radio",
    },
    colorVariant: {
      options: ["primary", "secondary", "neutral", "accent"],
      control: "select",
    },
    sizeVariant: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
    required: false,
    variant: "bordered",
    colorVariant: "neutral",
    sizeVariant: "md",
  },
};
