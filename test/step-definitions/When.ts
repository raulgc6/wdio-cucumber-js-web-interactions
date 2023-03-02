import { When } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"


When ('the user clicks in {string}', async function (button){
    await homepage[button].scrollIntoView()
    await homepage[button].click()
})