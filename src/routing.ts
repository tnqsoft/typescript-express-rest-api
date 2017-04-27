import { NextFunction, Request, Response, Router } from 'express';
import * as express from 'express';
import { HelloRouting } from './components/hello/routing';

export function appRouting(): Router {
  let router: Router;
  router = express.Router();

  // REGISTER ROUTING OF COMPONENTS HERE BEGIN ----------------------------------

  let helloRouting: HelloRouting = new HelloRouting(router);
  helloRouting.registerRouting();

  // REGISTER ROUTING OF COMPONENTS HERE END ------------------------------------

  return router;
}
