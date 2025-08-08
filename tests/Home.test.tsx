/**
 * @jest-environment jsdom
 */
import Home from "@/components/Home";
import { render, screen } from "@testing-library/react";

test("Home Renders", () => {
  render(<Home />);
  screen.getByText("Raymond Shiner");
});
