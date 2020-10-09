export class User{
    constructor(
        public id:number,
        public email:string,
        public name:string,
        public phone:string,
        public role:string,
        public cin:string,
        public password:string,
        public specialty:string,
        public active:boolean,
        public avatar:any,
        public adminUser?:User
    ){}
   
}