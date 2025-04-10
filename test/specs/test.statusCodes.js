import landingPage from "../pageobjects/landing.page";

describe('Status Codes Test', () => {

    beforeEach(async () => {
        await landingPage.open();
    })

    // it('Shows the status codes', async () => {
    //     await landingPage.verifyStatusCodes();
    // })

    it('Navigates to the correct url when clicking the link', async () => {
        await landingPage.verifyStatusCodesLink();
    })
})