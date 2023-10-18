import MemoriaModel from "../Model/MemoriaModel.js"; 
import MemoriaView from "../View/MemoriaView.js";

class MemoriaController {

    constructor() {
        const MODEL = new MemoriaModel();
        const VIEW = new MemoriaView($("article"),MODEL.getID())
        console.log(VIEW)
    }


}
export default MemoriaController