import { WittyApp, AppAbstract } from 'ahrakio';
import {EventController} from './app/http/controllers/EventController';
import {UserController} from './app/http/controllers/UserController';
import { UserMiddleware } from './app/http/middlewares/UserMiddleware';

@WittyApp({
    controllers: [
        UserController,
        EventController
    ],
    middlewares: [
        UserMiddleware
    ]
})
export class App extends AppAbstract {
    constructor() {
        super();
    }
}