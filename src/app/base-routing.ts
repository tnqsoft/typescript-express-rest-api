import { NextFunction, Request, Response, Router } from 'express';

/**
 * @export
 * @class BaseRouting
 */
export abstract class BaseRouting {

  protected router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  abstract registerRouting(): void;
}
