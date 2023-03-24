import 'expect-webdriverio'
import { Then } from "@wdio/cucumber-framework"
import homepage  from "../page-objects/homepage.page"
import bañoPage from '../page-objects/baño.page'
import PropiedadesProducto from '../model/propiedadesProducto'

Then ('the URL contains {string}', async (partialUrl)=>{
    expect(browser).toHaveUrlContaining(partialUrl)
})

Then ('{string} products are displayed in the section', async (countProducts)=>{
    const propiedadesBaño: PropiedadesProducto[]  = await bañoPage.obtenerPropiedadesBaño()
    const total = propiedadesBaño.length
    expect(total).toEqual(Number.parseInt(countProducts))
    for (let i=0; i< propiedadesBaño.length; i++){
        console.log(propiedadesBaño[i].id + ': Tiene compra online: ' +propiedadesBaño[i].TieneCompraOnline)
        console.log(propiedadesBaño[i].id + ': Tiene ratings: ' +propiedadesBaño[i].TieneValoracion)
    }
})
