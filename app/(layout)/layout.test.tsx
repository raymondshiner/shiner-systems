import { render, screen } from "@testing-library/react";
import Layout from "../(layout)/layout";

beforeEach(() => {
    render(
        <Layout>
            <div />
        </Layout>
    );
});

test("renders a link to home page", () => {
    screen.getByRole("link", { name: /home/i });
});

test("renders links to other pages", () => {
    screen.getByRole("link", { name: /about/i });
    screen.getByRole("link", { name: /services/i });
    screen.getByRole("link", { name: /contact/i });
});

test("renders a topbar", () => {
    screen.getByRole("navigation");
});
