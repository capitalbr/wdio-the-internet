import landingPage from "../pageobjects/landing.page";

describe("Testing Tables Page", () => {
    it("Sorts table 1 correctly for all sorting options", async () => {
        await landingPage.veriyTable1Sort();
    })
})