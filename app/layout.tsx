import { NavBar } from "@app/(home)/NavBar";
import "styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className="top-bar" role="banner">
                    <div className="top-bar__inner">
                        <a href="/" className="brand" aria-label="Home">
                            Shiner Systems
                        </a>
                        <NavBar />
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
