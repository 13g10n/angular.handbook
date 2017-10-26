import { User } from './user';

export class Comment {
    id: number;
    date: Date;
    body: string;
    user: User;
}
