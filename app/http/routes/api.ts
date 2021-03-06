import { Router } from "ahrakio";

Router.get('/users/:id', {
    target: 'UserController@try',
    middlewares: ['UserMiddleware']
});

Router.get('/organizations/:id/events', 'UserController@try');
Router.get('/businesses/:business_id/sales/:sale_id/edit', 'UserController@try');
//Router.get('/businesses/:business_id/sales/:sale_id/edit', 'UserController@try');
//Router.get('/users/id', 'UserController@try');
// Blipblop
Router.get('/events.:ending.il', 'UserController@try');




