export class Product {
    public productName: string;
    public productPrice: string;
    public productQuantity: string;
    public total: string;

    constructor( options: any = {} ) {
        this.productName = options.productName;
        this.productPrice = options.productPrice;
        this.productQuantity = options.productQuantity;
        this.total = options.total;
    }
}