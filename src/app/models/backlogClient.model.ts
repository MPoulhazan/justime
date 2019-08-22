export class BacklogClient {

    backlogIncident: number;
    backlogRequest: number;
    date: number;
    incident: number;
    name: string;
    save: number;

    constructor(
        backlogIncident: number,
        backlogRequest: number,
        date: number,
        incident: number,
        name: string,
        save: number
    ) {
        this.backlogIncident = backlogIncident;
        this.backlogRequest = backlogRequest;
        this.date = date;
        this.incident = incident;
        this.name = name;
        this.save = save;
    }
}
