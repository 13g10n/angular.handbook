import { Step } from './step';
import { User } from './user';
import { Comment } from './comment';
import { Topic } from './topic';
import { Rating } from './rating';

export class Manual {
    id: number;
    title: string;
    content: string;
    topic: Topic;
    created: Date;
    tags: string[];
    steps: Step[];
    author: User;
    rating: Rating;
    comments: Comment[];
    cover: string;
}
