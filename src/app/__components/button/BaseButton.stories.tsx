import type { Meta, StoryObj } from "@storybook/react";
import BaseButton from "./BaseButton";
import { FiHome } from "react-icons/fi";

const meta: Meta<typeof BaseButton> = {
  title: "Components/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {
    text: "Click Me",
    size: "md",
    bgColor: "primary",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <BaseButton text="XS" size="xs" />
      <BaseButton text="SM" size="sm" />
      <BaseButton text="MD" size="md" />
      <BaseButton text="LG" size="lg" />
      <BaseButton text="XL" size="xl" />
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <BaseButton text="Primary" bgColor="primary" />
      <BaseButton text="Secondary" bgColor="secondary" />
      <BaseButton text="Success" bgColor="success" />
      <BaseButton text="Danger" bgColor="danger" />
      <BaseButton text="Warning" bgColor="warning" />
    </div>
  ),
};

export const WithIconLeft: Story = {
  args: {
    text: "Home",
    icon: <FiHome />,
    iconPosition: "left",
    bgColor: "success",
  },
};

export const IconCenter: Story = {
  args: {
    icon: <FiHome />,
    iconPosition: "center",
    size: "lg",
    bgColor: "danger",
  },
};

export const IconRight: Story = {
  args: {
    text: "Next",
    icon: <FiHome />,
    iconPosition: "right",
    bgColor: "warning",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    isDisabled: true,
    size: "md",
    bgColor: "secondary",
  },
};
