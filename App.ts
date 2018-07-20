import { WittyApp, AppAbstract } from 'ahrakio';
import {EventController} from './app/http/controllers/EventController';
import {UserController} from './app/http/controllers/UserController';

@WittyApp({
    controllers: [
        UserController,
        EventController
    ],
    middlewares: [

    ]
})
export class App extends AppAbstract {
    constructor() {
        super();
    }
}