class MemoriaView {
  #kep;
  #imgElem;
  #divElem;
  constructor(szulElm, kepid, index, hater) {
    this.index = index;
    this.hater = hater;
    this.#kep = kepid;
    console.log(this.#kep);
    this.szulElm = szulElm;
    for (let index = 0; index < 2; index++) {
      this.#htmlcreate();
    }
    this.#divElem = $(".kartya:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.setKep(hater);
    this.#divElem.on("click", () => {
      this.setKep(this.#kep);
      this.trigger();
    });
  }
  #htmlcreate() {
    let txt = "<div class=' kartya'>";
    txt += `<img src="${this.#kep}" id='${this.index}'>`;
    txt += "</div>";
    this.szulElm.append(txt);
  }

  trigger(nev) {
    const EV = new CustomEvent(nev, { detail: this });
    window.dispatchEvent(EV);
  }
  setKep(ertek) {
    this.#imgElem.attr("src", ertek);
  }
}
export default MemoriaView;
