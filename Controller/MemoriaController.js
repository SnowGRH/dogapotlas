import MemoriaModel from "../Model/MemoriaModel.js"; 
import MemoriaView from "../View/MemoriaView.js";

class MemoriaController {
    #kepLista =[];
    constructor() {

        const MODEL = new MemoriaModel();
        this.#kepLista = MODEL.getKepLista();
        this.hater = MODEL.hater;
        console.log(this.#kepLista)
        console.log(MODEL.getID())
        for (let index = 0; index < this.#kepLista.length; index++) {
           new MemoriaView($("article"),this.#kepLista[index],index,this.hater)
            
        }

    }


}
export default MemoriaController