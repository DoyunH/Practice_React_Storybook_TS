import { RedButton } from "./Button.stories";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<RedButton {...RedButton.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Red/i);
});
