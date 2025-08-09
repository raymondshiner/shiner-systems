import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Landing Page", () => {
    it("renders the title", () => {
        render(<Home />);

        expect(
            screen.getByRole("heading", { name: /shiner systems/i, level: 1 })
        ).toBeInTheDocument();
        expect(
            screen.getByText("Independent Software Consulting")
        ).toBeInTheDocument();
        expect(screen.getByRole("main")).toBeInTheDocument();
    });
});
