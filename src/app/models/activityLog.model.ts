import { User } from './user.model';

export class ActivityLog{
    constructor(
        public id:number,
        public date:Date,
        public user:User,
        public action:string,
        public detail:string
    ){}
}