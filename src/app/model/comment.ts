export interface Comment {
    id?: number;
    postId: number;
    postTitle: string;
    postUser: string;
    userLogin: string;
    content: string;
    type: string;
}