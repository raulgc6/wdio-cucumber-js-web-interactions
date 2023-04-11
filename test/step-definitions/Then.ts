import 'expect-webdriverio'
import { Then } from "@wdio/cucumber-framework"
import bañoPage from '../page-objects/baño.page'
import PropiedadesProducto from '../model/propiedadesProducto'

Then ('the URL contains {string}', async (partialUrl)=>{
    expect(browser).toHaveUrlContaining(partialUrl)
})

Then ('{string} products in store are displayed in the section', async (countProducts)=>{
    const propiedadesBaño: PropiedadesProducto[]  = await bañoPage.obtenerPropiedadesBaño()
    const total = propiedadesBaño.length
    let productosTienda = 0
    for (let i=0; i < total; i++){
        let producto: PropiedadesProducto = propiedadesBaño[i]
        if (producto.TieneCompraTienda === true){
            productosTienda++
        }
    }
    expect(productosTienda).toEqual(Number.parseInt(countProducts))
})
