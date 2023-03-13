import { Given } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"
 
Given ('the following URL is opened: {string}', async  function (url){
    await browser.url(url)
    browser.debug(); 
    await browser.maximizeWindow()
})

Given ('the user accept cookies', async function (){
    await homepage.acceptCookies.click()
})