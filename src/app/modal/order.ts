export class Order {
    id: string;
    name: string;
    product: string;
    address: string;
    total: number;

    constructor(id: string, name: string, product: string, address: string, total: number) {
        this.id = id;
        this.name = name;
        this.product = product;
        this.address = address;
        this.total = total;
    }
}
