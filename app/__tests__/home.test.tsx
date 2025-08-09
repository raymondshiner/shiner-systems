import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
    beforeEach(() => {
        render(<Home />);
    });

    it("renders the title", () => {
        screen.getByText("Shiner Systems");
    });

    it("renders the motto", () => {
        screen.getByLabelText("motto");
    });
});
