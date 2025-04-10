import landingPage from "../pageobjects/landing.page";

describe('Typos tests', () => {
    it('Displays the text with no typos', async() => {
        await landingPage.open();
        await landingPage.verifyNoTypos();
    })
})