"use client";

import { MouseLight } from "@app/(home)/_useMouseLight";

export default function Home() {
    return (
        <main className="container">
            <MouseLight />
            <h1 className="title">Shiner Systems</h1>
            <span aria-label="motto">Independent Software Consulting</span>
        </main>
    );
}
