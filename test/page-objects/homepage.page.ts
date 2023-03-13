class Homepage {
    get acceptCookies() { return $('button=ACEPTAR')    }
   // get verTodasOfertas() { return $('#ros-content-carousel-button')    }
    get verTodasOfertas() { return $('a[href="es/todas-las-ofertas/s2597"]')}
    get menu () { return $('div.burgermenu-button').$('i.icon-menu')}
    get hogar () { return $('#burger-menu').$('a[title="Hogar"]')}
    // get baño() { return $('a[href="bano/c2545"]')}
    get baño() { return $('//a[@href="bano/c2545"]')}

    
    

}

export default new Homepage