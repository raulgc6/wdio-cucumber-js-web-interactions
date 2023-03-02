class Homepage {
    get acceptCookies() { return $('button=ACEPTAR')    }
   // get verTodasOfertas() { return $('#ros-content-carousel-button')    }
    get verTodasOfertas() { return $('a[href="es/todas-las-ofertas/s2597"]')    }
    

}

export default new Homepage