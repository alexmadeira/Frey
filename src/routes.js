import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ ms: 'oi' }));
routes.post('/project', ProjectController.store);

export default routes;
