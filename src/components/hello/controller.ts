import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @class HelloController
 */
export class HelloController {

  demoAction(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({ say: 'Hello Demo Action.' });
  }

  postDemoAction(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({ say: 'Hello Demo Action.' });
  }

}
