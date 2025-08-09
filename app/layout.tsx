import { PropsWithChildren } from "react";
import "styles/globals.css";
import { MouseLight } from "./_components/MouseLight";
import { NavBar } from "./_components/NavBar";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}

export const MainLayout = ({ children }: PropsWithChildren) => {
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
};
