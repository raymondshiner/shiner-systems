"use client";

import { MouseLight } from "@app/(home)/_useMouseLight";
import { NavBar } from "@app/(home)/NavBar";

export default function Home() {
    return (
        <main className="container">
            <MouseLight />
            <h1 className="title">Shiner Systems</h1>
            <span aria-label="motto">Independent Software Consulting</span>
            {process.env.NODE_ENV === "test" && <NavBar />}
        </main>
    );
}
