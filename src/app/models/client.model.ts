import { MatNativeDateModule } from '@angular/material/core';

export class Client{
    constructor(
        public id:number,
        public email:string,
        public name:string,
        public phoneNum:string,
        public city:string,
        public cin:string,
        public postalCode:number,
        public address:string
    ){}
}