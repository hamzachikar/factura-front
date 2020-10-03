export class Product{
    constructor(
        public id:number,
        public nameP:string,
        public prixAchat:number,
        public prixVente:number,
        public quantite:number,
        public reference:string,
        public active:boolean,       
        public imageP:any,       
    ){}
}