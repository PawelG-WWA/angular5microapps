import { Component, Input } from '@angular/core';
import { ServiceComment } from '../../../models/service.comment.model';

@Component({
    selector: 'app-service-comment',
    templateUrl: 'service-comment.component.html',
    styleUrls: ['./service-comment.component.css']
})
export class ServiceCommentComponent {
    @Input() comment: ServiceComment;
    @Input() theme: string;

    public isFlattering(): boolean {
        return this.comment.isFlattered;
    }

    public likeComment(currentComment: ServiceComment): void {
        if (!currentComment.liked) {
            currentComment.like();
        }
    }
    public isLiked(currentComment: ServiceComment): string {
        return currentComment.liked ? this.theme : 'not-clicked';
    }
}
