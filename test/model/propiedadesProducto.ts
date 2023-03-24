export default class PropiedadesProducto {
public id: string
private tieneCompraOnline: boolean;
private tieneCompraTienda: boolean;
private tieneValoracion: boolean;
private tieneDescuento: boolean;
private importeDescuento: boolean;

//metodos get y set de las propiedades
//compra online
public get TieneCompraOnline(): boolean{
    return this.tieneCompraOnline
}
public set TieneCompraOnline(param :boolean){
    this.tieneCompraOnline= param
}
//compra en tienda
public get TieneCompraTienda(): boolean{
    return this.tieneCompraTienda
}
public set TieneCompraTienda(param :boolean){
    this.tieneCompraTienda= param
}

//Tiene Valoracion
public get TieneValoracion(): boolean{
    return this.tieneValoracion
}
public set TieneValoracion(param :boolean){
    this.tieneValoracion= param
}

//Tiene descuento
public get TieneDescuento(): boolean{
    return this.tieneDescuento
}
public set TieneDescuento(param :boolean){
    this.tieneDescuento= param
}

//Importe descuento
public get ImporteDescuento(): boolean{
    return this.importeDescuento
}
public set ImporteDescuento(param :boolean){
    this.importeDescuento= param
}

}