export interface Comment {
    id?: number;
    postId: number;
    userLogin: string;
    content: string;
    type: string;
}