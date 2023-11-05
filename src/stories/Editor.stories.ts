import type { Meta, StoryObj } from "@storybook/react";

import Editor from "../components/Editor";

const meta = {
  title: "UI/Editor",
  component: Editor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Write something...",
  },
};
