import { $, expect } from "@wdio/globals";
import Page from './page.js';

const table1ColumnNames = {
    LAST_NAME: "Last Name"
}

const table1SortOrders = {
    byLastName: {

    },
    byFirstName: {

    }
}

class LandingPage extends Page {

    // Elements

    // tables
    get tableLink() { return $("[href='/tables']") }
    get table1() { return $("#table1") }
    async table1Column(name) { return $(`//*[@ID='table1'] //span[.='${name}']`)}

    // status codes elements
    get statusCodesLink() { return $("[href='/status_codes']") }
    get statusCodesList() { return $(".example ul") }
    get statusCodesCompleteListLink() { return $("[href='http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml']") }

    // typos elements
    get typosLink() { return $("[href='/typos']") }
    get typosContent() { return $(".example")}

    // wysiwyg elements
    get wysiwygLink() { return $("[href='/tinymce']") }
    get wysiwygEditorBody() { return $("body#tinymce") }
    get wysiwygIframe() { return $("#mce_0_ifr") }


    // Functions

    // tables functions

    async veriyTable1Sort() {
        await this.open();
        await this.tableLink.waitForDisplayed({ timeout: 2000 });
        await this.tableLink.click();
        await this.table1.waitForDisplayed({ timeout: 2000 });
        await expect(this.table1).toMatchElementSnapshot("table1");

        await (await this.table1Column("Last Name")).click();
        await expect(this.table1).toMatchElementSnapshot("table1LastName");

        await (await this.table1Column("First Name")).click();
        await expect(this.table1).toMatchElementSnapshot("table1FirstName");

        await (await this.table1Column("Email")).click();
        await expect(this.table1).toMatchElementSnapshot("table1Email");

        await (await this.table1Column("Due")).click();
        await expect(this.table1).toMatchElementSnapshot("table1Due");

        await (await this.table1Column("Web Site")).click();
        await expect(this.table1).toMatchElementSnapshot("table1WebSite");

        await (await this.table1Column("Action")).click();
        await expect(this.table1).toMatchElementSnapshot("table1");

    }
    // status_codes functions
    async verifyStatusCodes() {
        await this.statusCodesLink.click();
        await this.statusCodesList.waitForDisplayed({ timeout: 2000 });
        await expect(this.statusCodesList).toHaveText("200\n301\n404\n500");
    }

    async verifyStatusCodesLink() {
        await this.statusCodesLink.click();
        await this.statusCodesCompleteListLink.click();
        await expect(await browser.getUrl()).toBe("https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml");
    }

    // typos functions
    async verifyNoTypos() {
        await this.typosLink.click();
        await this.typosContent.waitForDisplayed({ timeout: 2000 });
        await expect(this.typosContent).toHaveText(
            "Typos" + "\n" +
            "This example demonstrates a typo being introduced. It does it randomly on each page load." + "\n" +
            "Sometimes you'll see a typo, other times you won't.",
            { wait: 2000 }
        )
    }

    // wysiwyg functions
    async wysiwygAccessIframe() {
        await this.wysiwygLink.click();
        await this.wysiwygIframe.waitForDisplayed({ timeout: 2000 })
        await browser.switchFrame(() => Boolean(document.querySelector("#tinymce")))
        await expect(this.wysiwygEditorBody).toBeDisplayed({ wait: 2000 })
    }

    open () {
        return super.open('');
    }
}

export default new LandingPage();
