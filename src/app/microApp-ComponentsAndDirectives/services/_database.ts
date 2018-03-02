import { Injectable } from '@angular/core';
import { Rating } from '../models/rating.model';
import { ServiceComment } from '../models/service.comment.model';
import { Service } from '../models/service.model';
import { Comment } from '@angular/compiler';
import { DbCollection } from '../../re-usables/services/db-collection';
import { IDb } from '../../re-usables/services/abstract/i-db';

@Injectable()
export class Database implements IDb {

    public services: DbCollection<Service>;

    constructor() {
        this.seed();
    }

    public seed(): void {
        // comments
        const designComment1: ServiceComment = new ServiceComment();
        designComment1.text = `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`;
        designComment1.likeCounter = 0;
        designComment1.isFlattered = false;

        const designComment2: ServiceComment = new ServiceComment();
        designComment2.text = `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`;
        designComment2.likeCounter = 5;
        designComment2.isFlattered = true;

        const designComment3: ServiceComment = new ServiceComment();
        designComment3.text = `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`;
        designComment3.likeCounter = 12;
        designComment3.isFlattered = true;

        const interiorFinishingComment1: ServiceComment = new ServiceComment();
        interiorFinishingComment1.text = `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`;
        interiorFinishingComment1.likeCounter = 2;
        interiorFinishingComment1.isFlattered = true;

        const interiorFinishingComment2: ServiceComment = new ServiceComment();
        interiorFinishingComment2.text = `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`;
        interiorFinishingComment2.likeCounter = 1;
        interiorFinishingComment2.isFlattered = false;

        const interiorFinishingComment3: ServiceComment = new ServiceComment();
        interiorFinishingComment3.text = `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`;
        interiorFinishingComment3.likeCounter = 0;
        interiorFinishingComment3.isFlattered = false;

        const warrantyComment1: ServiceComment = new ServiceComment();
        warrantyComment1.text = `Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed semper dolor quis diam ornare, in facilisis elit blandit.`;
        warrantyComment1.likeCounter = 0;
        warrantyComment1.isFlattered = true;

        const warrantyComment2: ServiceComment = new ServiceComment();
        warrantyComment2.text = `Nullam sagittis varius viverra. Cras sollicitudin mattis eros,
                vel facilisis mi fringilla ut. Cras bibendum semper mollis.`;
        warrantyComment2.likeCounter = 1;
        warrantyComment2.isFlattered = true;

        const warrantyComment3: ServiceComment = new ServiceComment();
        warrantyComment3.text = `Nullam venenatis, nibh et ullamcorper iaculis, nulla purus blandit enim,
                vitae ullamcorper quam risus vitae lectus. Vestibulum a ultricies augue, sed iaculis odio.`;
        warrantyComment3.likeCounter = 2;
        warrantyComment3.isFlattered = true;


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
        const designServiceRating: Rating = new Rating();
        designServiceRating.bad = 1;
        designServiceRating.good = 2;

        const interiorFinishingRating: Rating = new Rating();
        interiorFinishingRating.bad = 2;
        interiorFinishingRating.good = 1;

        const warrantyRating: Rating = new Rating();
        warrantyRating.bad = 0;
        warrantyRating.good = 3;

        // services
        const designService: Service = {
            id: 1,
            bannerImagePath: '/assets/images/microApp-ComponentsAndDirectives/sketch-huge.png',
            comments: designServiceComments,
            description: 'Wonderful apartment designs!',
            link: ['./service', 'apartment-design'],
            miniImagePath: 'assets/images/microApp-ComponentsAndDirectives/sketch-small.png',
            rating: designServiceRating,
            themeColor: 'theme-blue'
        };

        const interiorFinishingService: Service = {
            id: 2,
            bannerImagePath: '/assets/images/microApp-ComponentsAndDirectives/paint-roller-huge.png',
            comments: designServiceComments,
            description: 'Astonishing interior finishing!',
            link: ['./service', 'interior-finishing'],
            miniImagePath: 'assets/images/microApp-ComponentsAndDirectives/paint-roller-small.png',
            rating: interiorFinishingRating,
            themeColor: 'theme-green'
        };

        const warrantyService: Service = {
            id: 2,
            bannerImagePath: '/assets/images/microApp-ComponentsAndDirectives/medal-huge.png',
            comments: warrantyComments,
            description: 'Lifelong warranty!',
            link: ['./service', 'warranty'],
            miniImagePath: 'assets/images/microApp-ComponentsAndDirectives/medal-small.png',
            rating: warrantyRating,
            themeColor: 'theme-orange'
        };

        this.services = new DbCollection<Service>();
        this.services.add(designService);
        this.services.add(interiorFinishingService);
        this.services.add(warrantyService);
    }
}
