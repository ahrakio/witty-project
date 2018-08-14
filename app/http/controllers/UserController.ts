import {Controller} from "ahrakio";

export class UserController extends Controller {
    
    constructor() {
        super();
    }

    public try() {
        console.log('tryout');
        if (1 == 1) {
            console.log(this.request);
            return this.response.json(this.request.Route.Params, 200);
        }



        console.log('indeed');
    }
}