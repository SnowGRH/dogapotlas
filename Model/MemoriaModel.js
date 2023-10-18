import { Adat } from "./Adat.js";
import { HATER } from "./Adat.js";
class MemoriaModel{
    #kepLista =[];
    #id;
    #hater=[];
    constructor() {
        this.#kepLista = Adat;
        this.#hater = HATER;
        console.log(this.#kepLista)
        this.#id = 0;
      }
      get hater(){
        return this.#hater;
      }
      getKepLista(){
        return this.#kepLista;
      }
      getID(){
        return this.#kepLista[this.#id];
      }
}
export default MemoriaModel