import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from "./App";

describe("App", () => {
    it("Test render", () => {
        TestRenderer.create(<App />);
        expect(2+2).toBe(4);
    })
})