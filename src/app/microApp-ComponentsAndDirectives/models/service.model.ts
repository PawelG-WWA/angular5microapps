import { ServiceComment } from './service.comment.model';
import { Rating } from './rating.model';

export class Service {
    public bannerImagePath: string;
    public miniImagePath: string;
    public description: string;
    public link: string;
    public themeColor: string;
    public comments: Array<ServiceComment>;
    public rating: Rating;
}
