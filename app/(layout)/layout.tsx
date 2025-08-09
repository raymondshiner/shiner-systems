import { NavBar } from "@/app/(layout)/NavBar";
import "styles/globals.css";
import { MouseLight } from "./MouseLight";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <MouseLight />
            <header className="top-bar" role="banner">
                <div className="top-bar__inner">
                    <a href="/" className="brand" aria-label="Home">
                        Shiner Systems
                    </a>
                    <NavBar />
                </div>
            </header>
            {children}
        </>
    );
}
