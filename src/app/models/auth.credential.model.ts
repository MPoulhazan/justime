export class AuthCredentialModel {

    private username: string;
    private password: string;


    constructor(objId: string, appCode: string) {
        this.username = objId;
        this.password = appCode;
    }


    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}

