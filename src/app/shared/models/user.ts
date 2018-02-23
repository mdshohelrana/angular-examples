// best way to domain declarations

export class User {
    id: number;
    email: string;

    // Both the passwords are in a single object
    password: {
        pwd: string;
        confirmPwd: string;
    };

    gender: string;
    terms: boolean;

    constructor(options: {
        id?: number,
        email?: string,
        password?: { pwd?: string, confirmPwd?: string },
        gender?: string,
        terms?: boolean
    } = {}) {
        this.id = options.id || 0;
        this.email = options.email || '';
        this.password.pwd = options.password.pwd;
        this.password.confirmPwd = options.password.confirmPwd;
        this.gender = options.gender || '';
        this.terms = !!options.terms;
    }
}
