import Button, { ButtonProps } from "../components/Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
};
