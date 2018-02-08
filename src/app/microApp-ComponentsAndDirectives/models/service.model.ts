import { ServiceComment } from './service.comment.model';
import { Rating } from './rating.model';
import { DbEntity } from '../../re-usables/services/db-entity';

export class Service extends DbEntity {
    public bannerImagePath: string;
    public miniImagePath: string;
    public description: string;
    public link: string;
    public themeColor: string;
    public comments: Array<ServiceComment>;
    public rating: Rating;
}
