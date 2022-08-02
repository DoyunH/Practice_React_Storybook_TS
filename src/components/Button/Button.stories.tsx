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

export const SmButton = Template.bind({});
SmButton.args = {
  label: "Small Button",
  backgroundColor: "gray",
  size: "sm",
};

export const LgButton = Template.bind({});
LgButton.args = {
  label: "Large Button",
  backgroundColor: "gray",
  size: "lg",
};

export const MainButton = Template.bind({});
MainButton.args = {
  label: "Main Button",
  backgroundColor: "brown",
  size: "md",
};
