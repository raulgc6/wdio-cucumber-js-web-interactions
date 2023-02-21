import { Given } from "@wdio/cucumber-framework"
import { Homepage }  from "../page-objects/homepage.page"
 
Given ('the following URL is opened: {string}', async  function (url){
    await browser.url(url)
    browser.debug(); 
})

Given ('the user accept cookies', async function (){
    const homePage = new Homepage()
    await homePage.acceptCookies.click()
    await browser.pause(5000);
})