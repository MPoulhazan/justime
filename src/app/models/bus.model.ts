export class Bus {
    arret: string;
    dernierDepart: string;
    numLigne: string;
    typeLigne: string;
    sens: number;
    temps: string;
    tempsReel: string;
    terminus: string;


    constructor(
        arret: string,
        dernierDepart: string,
        numLigne: string,
        typeLigne: string,
        sens: number,
        temps: string,
        tempsReel: string,
        terminus: string,
    ) {
        this.arret = arret;
        this.dernierDepart = dernierDepart;
        this.numLigne = numLigne;
        this.typeLigne = typeLigne;
        this.sens = sens;
        this.temps = temps;
        this.tempsReel = tempsReel;
        this.terminus = terminus;
    }

}

export interface BusPayload {
    arret: { codeArret: string };
    dernierDepart: string;
    infotrafic: true;
    ligne: { numLigne: string, typeLigne: string };
    sens: number;
    temps: string;
    tempsReel: string;
    terminus: string;
}

export class BusCard {
    bus: Bus;
    nextHours: string[];

    constructor(
        bus: Bus,
        nextHours: string[]
    ) {
        this.bus = bus;
        this.nextHours = nextHours;
    }
}

export interface BusDetailsPayload {
    arret: { codeArret: string, libelle: string, accessible: boolean };
    codeCouleur: string;
    infotrafic: true;
    horaires: [{ heure: string, passage: string[] }];
    ligne: {directionSens1: string, directionSens2: string};
    notes: [{code: string, libelle: string}];
    plageDeService: string;
    prochainsHoraires: [{ heure: string, passage: string[] }];
}
