# react-meetup

### Ejercicio 1

Revisamos el pseudocódigo de la operación getTotal de la clase RegisteredUser y nos preocupa que el su diseño sea un poco frágil ya que no vemos claro si contempla los posibles escenarios futuros y su impacto:
1. Que problemas detectas en la operación y razona la respuesta 

- Si existiera algun otro escenario tal cual como esta, realizaria un calculo que no es correcto.
  Al tratarse de un calculo de precios, esta funcion deberia ser especialmente resiliente para asegurar de que no se esta calculando
  un precio incorrecto.


2. Propón una solución alternativa (también en pseudocódigo del mismo estilo) que corrija los problemas de la
operación getTotal de RegisteredUser que has detectado en la pregunta anterior. Realiza todos los cambios que consideres necesarios en cualquiera de las clases del modelo del enunciado.

- Para evitar calculos erroneos lanzamos una excepcion (throw new Error()) que devolverá un mensaje de error si no se tratara de ninguno de los servicios
  referenciados.

class RegisteredUser {
    constructor(service = []){
        this.service = service;
    }
    getTotal() {
        let total = 0;
        this.services.forEach(service => {
            let multimediaContent = service.getMultimediaContent();

            if(typeof service === StreamingService) {
                total += multimediaContent.streamingPrice;
            } else if(typeof service === DownloadService) {
                total += multimediaContent.downloadPrice;
            } else {
                throw new Error(`Service with type ${typeof service} not supported`);
            }

            if(typeof multimediaContent === PremiumContent){
                total += multimediaContent.additionalFee;
            }
        });
    }
}
