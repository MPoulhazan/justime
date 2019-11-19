export class Bookmark {

    lineId: string;
    stopId: string;
    sens: number;

    constructor(
        lineId: string,
        stopId: string,
        sens: number
    ) {
        this.lineId = lineId;
        this.stopId = stopId;
        this.sens = sens;
    }
}
