import PropiedadesProducto from "../model/propiedadesProducto";

class Bano {
  get totalProduct() {
    return $$(".plp-product-grid-box-tile__wrapper");
  }
  //¿como definir el tipo totalProduct para pasarlo a la funcion obtenerpropiedades baño?

  async obtenerPropiedadesBaño(): Promise<PropiedadesProducto[]> {
    //esto que significa??  (this.totalProduct): Promise<PropiedadesProducto[]>
    //¿como pasar el totalProducts como parametro en la función?
    const propiedadesBaño: PropiedadesProducto[] = [];
    const products = await this.totalProduct;
    const countOfProducts = products.length;
    for (let i = 0; i < countOfProducts; i++) {
      let elemProp: PropiedadesProducto = new PropiedadesProducto();
      elemProp.id = products[i].elementId;
      elemProp.TieneCompraOnline = await this.hasCompraOnline(products[i]);
      elemProp.TieneCompraTienda = await this.hasCompraTienda(products[i]);
      elemProp.TieneValoracion = await this.hasValoracion(products[i]);
      elemProp.TieneDescuento = await this.hasDescuento(this.totalProduct[i]);
      propiedadesBaño.push(elemProp);
    }
    return propiedadesBaño;
  }

  async hasCompraOnline(product) {
    const compraOnline = await product.$(
      ".hide-phone .pdp-availability-buy-online"
    );
    return await compraOnline.isExisting();
  }
  async hasCompraTienda(product) {
    const compraTienda = await product.$(
      ".hide-phone .pdp-availability-available-in-store"
    );
    return await compraTienda.isExisting();
  }
  async hasValoracion(product) {
    const valoracion = await product.$(".hide-phone .ratings");
    return await valoracion.isExisting();
  }
  async hasDescuento(product) {
    const descuento = await product.$(".hide-phone .price-height").$("<em>");
    return await descuento.isExisting();
  }
}

export default new Bano();
