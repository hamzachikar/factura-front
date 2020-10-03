import { User } from './user.model';

export class AuthResponse{
    constructor(
        public user:User,
        public jwt:string,
        public expirationDate:Date
    ){}
    
}