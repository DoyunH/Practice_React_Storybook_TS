import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "clicked" } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue",
  backgroundColor: "blue",
  size: "md",
};
