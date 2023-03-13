import 'expect-webdriverio'
import { Then } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"
import bañoPage from '../page-objects/baño.page'

Then ('the URL contains {string}', async (partialUrl)=>{
    expect(browser).toHaveUrlContaining(partialUrl)
})

Then ('{string} products are displayed in the section', async (countProducts)=>{
    const total = await bañoPage.totalProduct.length
    expect(total).toEqual(Number.parseInt(countProducts))
    const propiedadesBaño  = bañoPage.obtenerPropiedadesBaño()
    for (let i=0; i<(await propiedadesBaño).length; i++){
        console.log('Tiene compra online: ' +propiedadesBaño[i].TieneCompraOnline)
    }
})
