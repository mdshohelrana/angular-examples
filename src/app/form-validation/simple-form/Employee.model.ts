export class Employee {
    public name:string;
    public email:string;
    public password:string;
    public url:string;
    public tel:string;
    public date:string;
    public time:string;
    public dateTime:string;
    public gender:string;
    public address:string;

    constructor( options: any = {} ) {
        this.name = options.name;
        this.email = options.email;
        this.password = options.password;
        this.url = options.url;
        this.tel = options.tel;
        this.date = options.date;
        this.time = options.time;
        this.dateTime = options.dateTime;
        this.gender = options.gender;
        this.address = options.address;
    }
}