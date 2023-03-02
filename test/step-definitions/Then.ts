import 'expect-webdriverio'
import { Then } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"

Then ('the URL contains {string}', async (partialUrl)=>{
    expect(browser).toHaveUrlContaining(partialUrl)
})