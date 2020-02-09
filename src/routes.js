import { Router } from 'express';

import AgencyController from './app/controllers/AgencyController';
import ImageController from './app/controllers/ImageController';
import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.post('/project', ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.get('/project/:slug', ProjectController.show);
routes.put('/project/:id', ProjectController.update);

routes.post('/agency', AgencyController.store);
routes.get('/agencies', AgencyController.index);
routes.get('/agency/:id', AgencyController.show);
routes.put('/agency/:id', AgencyController.update);

routes.post('/image', ImageController.store);

export default routes;
