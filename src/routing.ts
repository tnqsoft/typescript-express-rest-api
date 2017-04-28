import { NextFunction, Request, Response, Router } from 'express';
import * as express from 'express';
import { HelloRouting } from './components/hello/routing';
import { Firewall } from './app/firewall';

export function appRouting(): Router {
  let router: Router;
  router = express.Router();

  // REGISTER ROUTING OF COMPONENTS HERE BEGIN ----------------------------------

  let firewall: Firewall = new Firewall();
  router.use(firewall.authenticate);

  let helloRouting: HelloRouting = new HelloRouting(router);
  helloRouting.registerRouting();

  // REGISTER ROUTING OF COMPONENTS HERE END ------------------------------------

  return router;
}
