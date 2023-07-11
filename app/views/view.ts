import { Negociacoes } from "../models/negociacoes";

export abstract class View<T> {

    // protected permite que as classes filhas possam acessar a propriedade
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

}