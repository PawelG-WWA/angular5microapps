import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceComment } from '../../../models/service.comment.model';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
    @Output() onCancel: EventEmitter<boolean>;
    @Output() onSave: EventEmitter<ServiceComment>;
    @Input() theme: string;
    public dislikeState: string;
    public likeState: string;
    private stateInitialValue = 'grayed';

    constructor() {
        this.onCancel = new EventEmitter();
        this.onSave = new EventEmitter();
        this.dislikeState = this.stateInitialValue;
        this.likeState = this.stateInitialValue;
    }

    public cancelClicked(): void {
        this.onCancel.emit(false);
    }

    public toggleDislike(): void {
        if (this.dislikeState !== this.theme) {
            this.dislikeState = this.theme;
            this.likeState = this.stateInitialValue;
        }
    }

    public toggleLike(): void {
        if (this.likeState !== this.theme) {
            this.likeState = this.theme;
            this.dislikeState = this.stateInitialValue;
        }
    }

    public onSubmit(formValue: FormGroup): void {
        const comment = new ServiceComment();
        comment.text = formValue['commentText'];
        comment.isFlattered = this.likeState === this.theme;
        comment.liked = false;
        comment.likeCounter = 0;
        
        this.onSave.emit(comment);
    }
}
