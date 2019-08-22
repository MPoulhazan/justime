import { Permission } from './permission.model';

export class TokenModel {

    private readonly mode: string;
    private readonly refUserId: number;
    private readonly perms: Permission[];
    private readonly userName: string;
    private readonly exp: number;
    private readonly userId: string;


    constructor(mode: string, refUserId: number, perms: Permission[], userName: string, exp: number, userId: string) {
        this.mode = mode;
        this.refUserId = refUserId;
        this.perms = perms;
        this.userName = userName;
        this.exp = exp;
        this.userId = userId;
    }



    getMode(): string {
        return this.mode;
    }

    getRefUserId(): number {
        return this.refUserId;
    }

    getPerms(): Permission[] {
        return this.perms;
    }

    getUserName(): string {
        return this.userName;
    }

    getExp(): number {
        return this.exp;
    }

    getUserId(): string {
        return this.userId;
    }
}


