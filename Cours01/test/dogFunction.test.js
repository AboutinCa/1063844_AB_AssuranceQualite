import { describe, it } from "node:test";
import assert from "node:assert";


describe("test des fcts de dogs", () => {
    it('dog eats, stomac goes to 100', () => {
        assert.strictEqual(dogEat(), 100);
    });
});