import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @class HelloController
 */
export class HelloController {

  /**
   * Demo Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  demoAction(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({ say: 'Hello Demo Action.' });
  }

  /**
   * Demo Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  postDemoAction(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send(req.body);
  }

}
