import $error, { Exception } from "../lib/index";
import { expect } from "chai";

describe("Error", () => {
    const VALIDATION_FAILED = $error.Error("ValidationFailed", "message", 400, {
        foo: "bar",
    });

    it("has a stack trace", () => {
        expect(VALIDATION_FAILED).to.haveOwnProperty("stack");
    });

    it("has a name", () => {
        expect(VALIDATION_FAILED.name).to.eq("ValidationFailed");
    });

    it("has a httpCOde", () => {
        expect(VALIDATION_FAILED.httpCode).to.eq(400);
    });

    it("has a context", () => {
        expect(VALIDATION_FAILED.context).to.deep.eq({
            foo: "bar",
        });
    });
});
