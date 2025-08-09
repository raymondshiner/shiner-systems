"use client";

import { NavBar } from "@/app/(layout)/NavBar";

export default function Home() {
    return (
        <main className="container">
            <h1 className="title">Shiner Systems</h1>
            <span aria-label="motto">Independent Software Consulting</span>
            {process.env.NODE_ENV === "test" && <NavBar />}
        </main>
    );
}
