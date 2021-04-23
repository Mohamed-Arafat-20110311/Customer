export class User {
    id: number;
    name: string;
    phone: string;
    country: string;
    validity: string;
    constructor(public _id: number, public _name: string, public _phone: string,public _country: string, public _validity: string) {
        this.id = _id;
        this.name = _name;
        this.phone = _phone;
        this.country = _country;
        this.validity = _validity;
    }
}