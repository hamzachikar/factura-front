import { Product } from './product.model';

export class ProdDevis{
    constructor(
        public id:number,
        public produit:Product,
        public quantite:number,
        public unite:string 
    ){}
}