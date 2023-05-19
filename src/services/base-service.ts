import { EventBus } from '../plugins/event-bus';

export class BaseService {
    baseUrl = "/";
    // resource;

    // constructor(resource: any) {
    constructor() {
        // if (!resource) throw new Error("Resource is not provided");
        // this.resource = resource;
    }

    // getUrl(id = "") {
    //     return `${this.baseUrl}/${this.resource}/${id}`;
    // }

    public static handleError(err: any): Promise<void> {
        return new Promise(() => {
            EventBus.$emit('show-dialog', { title: 'Error', text: err.message || 'An error occurred' });
        });
    }
}