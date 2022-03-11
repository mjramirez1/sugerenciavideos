// clase padre
class Multimedia {
    constructor(url) {
        // En el constructor(función) agregar los parámetros
        let _url = url
        this._getUrl = () => _url
    }
    getUrl() {
        return this._getUrl()
    }
    setInicio() {
        // Método
        return "Este método es para realizar un cambio en la URL del video"
    }
}

// Clase hija
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url) // accede a los parametros de la clase padre (Multimedia)
        this._id = document.getElementById(id) // atributo agregado
    } // getters y setters (modificar atributos sin alterar los datos iniciales)
    setId(id) {
        this._id = id
    }
    getId() {
        return this._id
    }
    playMultimedia() {
        // método, revisar
        this._id.src = this.getUrl()
    }
    setInicio(tiempo) {
        // Método
        this._id.setAttribute('src', this._id.src + `?start=${tiempo}`)
    }
}

// instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe, por lo que se deben crear tres instancias, una para música, otra para película y otra para serie, con sus respectivas URL.
const miVideo = (() => {
    const musica = new Reproductor("https://www.youtube.com/embed/4Lb1G0QHxyE", 'musica')
    const peliculas = new Reproductor("https://www.youtube.com/embed/uYUa4SN29RM", 'peliculas')
    const series = new Reproductor("https://www.youtube.com/embed/2docezZl574", 'series')

    return {
        ejecucionVideos: () => {
            musica.playMultimedia()
            musica.setInicio(60)
            peliculas.playMultimedia()
            peliculas.setInicio(60)
            series.playMultimedia()
            series.setInicio(60)
        },
    }
})()
miVideo.ejecucionVideos()