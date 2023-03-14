import PropiedadesProducto from "../model/propiedadesProducto"

class Bano{
    get totalProduct  () { return $$('.plp-product-grid-box-tile__wrapper')}
    //¿como definir el tipo totalProduct para pasarlo a la funcion obtenerpropiedades baño?

   async obtenerPropiedadesBaño (){  
    //esto que significa??  (this.totalProduct): Promise<PropiedadesProducto[]> 
    //¿como pasar el totalProducts como parametro en la función?
        const totalProductos = this.totalProduct
        const propiedadesBaño : PropiedadesProducto[] = []
        const countOfProducts = await this.totalProduct.length
        for (let i=0; i<countOfProducts-1; i++){  //
            let elemProp: PropiedadesProducto = new PropiedadesProducto()
            if (this.hasCompraOnline(this.totalProduct[i])){
                elemProp.TieneCompraOnline=true
            }
            if (this.hasCompraTienda(this.totalProduct[i])){
                elemProp.TieneCompraTienda=true
            }
            if (this.hasValoracion(this.totalProduct[i])){
                elemProp.TieneValoracion=true
            }
            if (this.hasDescuento(this.totalProduct[i])){
                elemProp.TieneDescuento=true
            }
            propiedadesBaño.push(elemProp)
        }
        //for
        //crear un objeto de PropiedadesProducto
        //Buscar elemento de compra online
        //si existe, cambiar la propiedad de objeto de PropiedadesProducto (set)
        //agregar a propiedadesBaño
        return propiedadesBaño
    }

    async hasCompraOnline (product){
        const compraOnline = await product.$('.pdp-availability-buy-online')
        return compraOnline.isExisting()
    }
    async hasCompraTienda (product){
        const compraTienda = await product.$('.pdp-availability-available-in-store')
        return compraTienda.isExisting()
    }
    async hasValoracion (product){
        const valoracion = await product.$('.ratings')
        return valoracion.isExisting()
    }
    async hasDescuento (product){
        const descuento = await product.$('.price-height').$('<em>')
        return descuento.isExisting()
    }

}

export default new Bano