import 'expect-webdriverio'
import { Then } from "@wdio/cucumber-framework"
import bañoPage from '../page-objects/baño.page'
import PropiedadesProducto from '../model/propiedadesProducto'

Then ('the URL contains {string}', async (partialUrl)=>{
    expect(browser).toHaveUrlContaining(partialUrl)
})

Then ('{string} products in store are displayed in the section', async (countProducts)=>{
    const propiedadesBaño: PropiedadesProducto[]  = await bañoPage.obtenerPropiedadesBaño()
    let productosTienda : PropiedadesProducto[] = propiedadesBaño.filter((producto)=>{
        return producto.TieneCompraTienda === true
    })  
    expect(productosTienda.length).toEqual(Number.parseInt(countProducts))
})
