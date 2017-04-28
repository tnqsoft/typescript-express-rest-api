import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouting } from '../../app/base-routing';
import { UserController } from './controller';

/**
 * @export
 * @class UserRouting
 */
export class UserRouting extends BaseRouting {

  registerRouting(): void {
    let controller: UserController = new UserController();

    this.router.post('/login', (req: Request, res: Response, next: NextFunction) => {
      controller.loginAction(req, res, next);
    });

    this.router.get('/user/me', (req: Request, res: Response, next: NextFunction) => {
      controller.getMeAction(req, res, next);
    });
  }

}
