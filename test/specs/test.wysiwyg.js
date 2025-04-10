import { expect } from '@wdio/globals';
import landingPage from '../pageobjects/landing.page.js';

describe('Wysiwyg testing', () => {
    
    it('Access wysiwyg in an iFrame', async () => {
        await landingPage.open();
        await landingPage.wysiwygAccessIframe();
    })
});
