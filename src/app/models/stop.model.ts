export class Stop {

    codeLieu: string;
    distance: any;
    libelle: string;
    ligne: object[];

    constructor(codeLieu: string, distance: any, libelle: string, ligne: object[]) {
        this.codeLieu = codeLieu;
        this.distance = distance;
        this.libelle = libelle;
        this.ligne = ligne;
    }
}
