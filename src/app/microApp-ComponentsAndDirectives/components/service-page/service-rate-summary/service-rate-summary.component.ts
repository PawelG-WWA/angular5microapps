import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../../models/rating.model';

@Component({
    selector: 'app-serivce-rate-summary',
    templateUrl: './service-rate-summary.component.html',
    styleUrls: ['./service-rate-summary.component.css']
})
export class ServiceRateSummaryComponent implements OnInit {
    @Input() rating: Rating;
    @Input() theme: string;
    @Input() serviceDescription: string;

    public currentLikeImage: string;
    public currentDislikeImage: string;

    ngOnInit() {
        if (this.rating.getUserVote()) {
            this.currentLikeImage = this.rating.likeImage;
            this.currentDislikeImage = this.rating.dislikeImageNotSelected;
        } else if (this.rating.getUserVote() === false) {
            this.currentDislikeImage = this.rating.dislikeImage;
            this.currentLikeImage = this.rating.likeImageNotSelected;
        } else {
            this.currentLikeImage = this.rating.likeImageNotSelected;
            this.currentDislikeImage = this.rating.dislikeImageNotSelected;
        }
    }

    public dislikeClicked(): void {
        if (!this.rating.voted) {
            this.rating.dislike();
            this.currentDislikeImage = this.rating.dislikeImage;
        }
    }

    public likeClicked(): void {
        if (!this.rating.voted) {
            this.rating.like();
            this.currentLikeImage = this.rating.likeImage;
        }
    }
}
