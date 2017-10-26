import { Step } from './step';
import { User } from './user';
import { Comment } from './comment';

export class Manual {
    id: number;
    title: string;
    meta: string;
    topic: string;
    created: Date;
    tags: string[];
    steps: Step[];
    author: User;
    comments: Comment[];
}
