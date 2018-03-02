export class ServiceComment {
    text: string;
    likeCounter: number;
    isFlattered: boolean;
    liked: boolean = undefined;

    public like(): void {
        this.liked = true;
        this.likeCounter++;
    }
}
