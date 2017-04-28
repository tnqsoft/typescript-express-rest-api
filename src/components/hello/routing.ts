import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouting } from '../../app/base-routing';
import { HelloController } from './controller';

/**
 * @export
 * @class HelloRouting
 */
export class HelloRouting extends BaseRouting {

  registerRouting(): void {
    let controller: HelloController = new HelloController();

    this.router.get('/hello/demo', (req: Request, res: Response, next: NextFunction) => {
      controller.demoAction(req, res, next);
    });

    this.router.post('/hello/demo', (req: Request, res: Response, next: NextFunction) => {
      controller.postDemoAction(req, res, next);
    });
  }

}
