import { Router } from 'express';

import AgencyController from './app/controllers/AgencyController';
import ImageController from './app/controllers/ImageController';
import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.post('/project', ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.get('/project/:slug', ProjectController.show);
routes.put('/project/:id', ProjectController.update);
routes.delete('/project/:id', ProjectController.destroy);

routes.post('/agency', AgencyController.store);
routes.get('/agencies', AgencyController.index);
routes.get('/agency/:id', AgencyController.show);
routes.put('/agency/:id', AgencyController.update);
routes.delete('/agency/:id', AgencyController.destroy);

routes.post('/image', ImageController.store);
routes.get('/images', ImageController.index);
routes.get('/image/:name', ImageController.show);
routes.delete('/image/:id', ImageController.destroy);

export default routes;
