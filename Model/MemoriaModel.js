import { Adat } from "./Adat.js";
class MemoriaModel{
    #kepLista =[];
    #id;
    constructor() {
        this.#kepLista = Adat;
        this.#id = 0;
      }
      getKepLista(){
        return this.#kepLista;
      }
      getID(){
        return this.#kepLista[this.#id];
      }
}
export default MemoriaModel