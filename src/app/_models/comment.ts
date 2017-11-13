import { User } from './user';

export class Comment {
    id: number;
    created: Date;
    content: string;
    author: User;
}
