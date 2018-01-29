import { Rating } from './rating.model';
import { ServiceComment } from './service.comment.model';
import { Service } from './service.model';
import { Comment } from '@angular/compiler';

export class DbContext {

    public services: Array<Service>;

    constructor() {
        this.seed();
    }

    private seed(): void {
        // comments
        const designComment1: ServiceComment = {
            text: `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`,
            likeCounter: 0,
            isFlattered: false
        };

        const designComment2: ServiceComment = {
            text: `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`,
            likeCounter: 5,
            isFlattered: true
        };

        const designComment3: ServiceComment = {
            text: `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`,
            likeCounter: 12,
            isFlattered: true
        };

        const interiorFinishingComment1: ServiceComment = {
            text: `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`,
            likeCounter: 2,
            isFlattered: true
        };

        const interiorFinishingComment2: ServiceComment = {
            text: `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`,
            likeCounter: 1,
            isFlattered: false
        };

        const interiorFinishingComment3: ServiceComment = {
            text: `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`,
            likeCounter: 0,
            isFlattered: false
        };

        const warrantyComment1: ServiceComment = {
            text: `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`,
            likeCounter: 0,
            isFlattered: true
        };

        const warrantyComment2: ServiceComment = {
            text: `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`,
            likeCounter: 1,
            isFlattered: true
        };

        const warrantyComment3: ServiceComment = {
            text: `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`,
            likeCounter: 2,
            isFlattered: true
        };

        const designServiceComments = new Array<ServiceComment>();
        designServiceComments.push(designComment1);
        designServiceComments.push(designComment2);
        designServiceComments.push(designComment3);

        const interiorFinishingComments = new Array<ServiceComment>();
        interiorFinishingComments.push(interiorFinishingComment1);
        interiorFinishingComments.push(interiorFinishingComment2);
        interiorFinishingComments.push(interiorFinishingComment3);

        const warrantyComments = new Array<ServiceComment>();
        warrantyComments.push(warrantyComment1);
        warrantyComments.push(warrantyComment2);
        warrantyComments.push(warrantyComment3);

        // ratings
        const designServiceRating: Rating = { bad: 1, good: 2 };
        const interiorFinishingRating: Rating = { bad: 2, good: 1};
        const warrantyRating: Rating = { bad: 0, good: 3};

        // services
        const designService: Service = {
            bannerImagePath: './assets/images/microApp-ComponentsAndDirectives/sketch-huge.png',
            comments: designServiceComments,
            description: 'Wonderful apartment designs!',
            link: 'apartment-design',
            miniImagePath: '.assets/images/microApp-ComponentsAndDirectives/sketch-small.png',
            rating: designServiceRating,
            themeColor: 'theme-yellow'
        };

        const interiorFinishingService: Service = {
            bannerImagePath: './assets/images/microApp-ComponentsAndDirectives/paint-roller-huge.png',
            comments: designServiceComments,
            description: 'Astonishing interior finishing!',
            link: 'interior-finishing',
            miniImagePath: '.assets/images/microApp-ComponentsAndDirectives/paint-roller-small.png',
            rating: interiorFinishingRating,
            themeColor: 'theme-green'
        };

        const warrantyService: Service = {
            bannerImagePath: './assets/images/microApp-ComponentsAndDirectives/medal-huge.png',
            comments: warrantyComments,
            description: 'Lifelong warranty!',
            link: 'warranty',
            miniImagePath: '.assets/images/microApp-ComponentsAndDirectives/medal-small.png',
            rating: warrantyRating,
            themeColor: 'theme-red'
        };
    }
}
