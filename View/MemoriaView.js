class MemoriaView {
    #kep;
    constructor(szulElm,kepid) {
        this.#kep = kepid;
        this.szulElm = szulElm;
        this.#htmlcreate();
    }
    #htmlcreate() {
        let txt = "<div>";
        txt += `<img src="${this.#kep}">`;
        txt += "</div>";
        this.szulElm.html(txt);
      }
}
export default MemoriaView