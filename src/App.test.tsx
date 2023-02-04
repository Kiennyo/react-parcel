import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from "./App";

describe("App", () => {
    it("Test render", () => {
        const r = TestRenderer.create(<App />);
        const h1 = r.root.findByType("h1");
        expect(h1.props.children).toBe("Hello!")
    })
})