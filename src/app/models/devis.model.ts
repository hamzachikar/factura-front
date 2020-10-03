import { Client } from './client.model';
import { ProdDevis } from './prodDevis.model';
import { User } from './user.model';

export class Devis{
    constructor(
        public id:number,
        public createDate:Date,
        public client:Client,
        public user:User,
        public products:ProdDevis[],
        public reference:string,
        public tva:number,
        public totalTTC:number,
        public totalHT:number,
        public status:string
    ){}
}