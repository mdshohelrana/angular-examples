// best way to domain declarations

export class User {
    id: number;
    email: string;
    pwd: string;
    confirmPwd: string;
    gender: string;
    terms: boolean;

    constructor(options: {
        id?: number,
        email?: string,
        pwd?: string,
        confirmPwd?: string
        gender?: string,
        terms?: boolean
    } = {}) {
        this.id = options.id || 0;
        this.email = options.email || null;
        this.pwd = options.pwd || null;
        this.confirmPwd = options.confirmPwd || null;
        this.gender = options.gender || null;
        this.terms = !!options.terms;
    }
}
