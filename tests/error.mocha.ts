import $error, { Exception } from "../lib/index";
import { expect } from "chai";

describe("library", () => {
    describe("ValidationFailed", () => {
        const VALIDATION_FAILED = $error.ValidationError();

        it("has a stack trace", () => {
            expect(VALIDATION_FAILED).to.haveOwnProperty("stack");
        });

        it("has a name", () => {
            expect(VALIDATION_FAILED.name).to.eq("ValidationFailed");
        });
    });
});
