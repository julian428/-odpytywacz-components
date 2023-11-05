import type { Meta, StoryObj } from "@storybook/react";

import Card from "../components/Card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    coverUrl: { control: "text" },
    color: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    description: "This is the card description",
    coverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPMUri8dNX9YTtOkpqCyMWVxcW2IRwhtU81rWPYFoTw&s",
    color: "#e6159f",
  },
};

export const NoImage: Story = {
  args: {
    title: "title",
    description: "This is the card description",
  },
};
