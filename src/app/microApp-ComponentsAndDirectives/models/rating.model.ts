export class Rating {
    good: number;
    bad: number;
    voted: boolean;
    liked: boolean = undefined;
    likeImageNotSelected = 'assets/images/microApp-ComponentsAndDirectives/like-not-selected.svg';
    dislikeImageNotSelected = 'assets/images/microApp-ComponentsAndDirectives/dislike-not-selected.svg';
    likeImage = 'assets/images/microApp-ComponentsAndDirectives/like.svg';
    dislikeImage = 'assets/images/microApp-ComponentsAndDirectives/dislike.svg';

    public like(): void {
        this.good++;
        this.voted = !this.voted;
        this.liked = true;
    }

    public dislike(): void {
        this.bad++;
        this.voted = !this.voted;
        this.liked = false;
    }

    public getUserVote(): boolean {
        return this.liked;
    }
}
