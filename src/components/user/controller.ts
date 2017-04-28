import { NextFunction, Request, Response } from 'express';
import * as moment from 'moment';
import * as passwordHash from 'password-hash';
import * as jwt from 'jsonwebtoken';
import * as ip from 'ip';
import { Connection, Repository, getConnection } from 'typeorm';
import { User } from '../../app/entity/user';
import { UserRepository } from '../../app/repository/user-repository';
import { appConfig } from '../../configs';

/**
 * @export
 * @class UserController
 */
// @Service()
export class UserController {

  /**
   * Login Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  async loginAction(req: Request, res: Response, next: NextFunction) {
    let userRepository = getConnection().getCustomRepository(UserRepository);
    // userRepository.findByUsername(req.body.username).then(user => {
    //   console.log(user);
    // });
    let user = await userRepository.findByUsername(req.body.username);
    if (!user) {
      return res.status(404).send({
        code: 404,
        message: 'User not found.'
      });
    }

    if (passwordHash.verify(req.body.password, user.password) === false) {
      return res.status(401).send({
        code: 401,
        message: 'The username or password don\'t match.'
      });
    }

    res.status(200).send({
      token: this.createToken(user)
    });
  }

  /**
   * Create Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  async getMeAction(req: Request, res: Response, next: NextFunction) {
    let userRepository = getConnection().getCustomRepository(UserRepository);
    let user = await userRepository.findOneById(req.session.user_id);
    res.status(200).send(user);
  }

  /**
   * Create Action
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  creatAction(req: Request, res: Response, next: NextFunction): void {
    // DBHandle.getCon().then(async connection => {
    //   // Create a User
    //   let user = new User();
    //   user.username = 'admin';
    //   user.password = passwordHash.generate('123456');
    //   user.email = 'tuanquynh0508@gmail.com';
    //   user.isActive = true;
    //   user.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

    //   // Get entity repositories
    //   let userRepository = connection.getRepository(User);
    //   // First we should persist a photo
    //   await userRepository.persist(user);

    // }).catch(error => console.log(error));

    res.status(200).send(req.body);
  }

  /**
   * Create Token
   *
   * @private
   * @param {User} user
   * @returns {string}
   */
  private createToken(user: User): string {
    let data = {
      id: user.id,
      username: user.username,
      ip: ip.address(),
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }

    return jwt.sign(data, appConfig.secret);
  }

}
