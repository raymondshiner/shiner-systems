const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^@app/(.*)$": "<rootDir>/app/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
        "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

module.exports = createJestConfig(customJestConfig);
