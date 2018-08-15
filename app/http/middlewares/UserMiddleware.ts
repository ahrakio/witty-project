import { Middleware } from "ahrakio";

export class UserMiddleware extends Middleware {
    handle(): boolean | Promise<boolean> {
        return this.request.Route.Params.get('id') === '2';
    }
}