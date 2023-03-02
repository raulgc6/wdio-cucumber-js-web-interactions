import { When } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"


When ('the user clicks in {string}', async function (button){
    await browser.maximizeWindow()
    await homepage[button].scrollIntoView()
    await homepage[button].click()
    await browser.pause(5000)
})

When ('the user hover in {string} category', async function (category){
    await homepage.hogar.click()
})
