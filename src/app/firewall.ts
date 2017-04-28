import { NextFunction, Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import * as ip from 'ip';
import { appConfig } from '../configs';

/**
 * @export
 * @class Firewall
 */
export class Firewall {

    /**
     * Authenticate
     *
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    authenticate(req: Request, res: Response, next: NextFunction): Response {
        // Except login api
        if (/^(.*)\/login$/.test(req.url)) {
            next();
            return null;
        }
        // check header or url parameters or post parameters for token
        let tokenRegex = /^Bearer\s([a-zA-Z0-9\._\-\=]+)$/;
        let token = null;

        if (typeof req.headers['authorization'] !== 'undefined' && tokenRegex.test(req.headers['authorization'])) {
            let tokenPart = req.headers['authorization'].match(tokenRegex);
            token = tokenPart[1];
        } else {
            token = req.body.token || req.query.token;
        }

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, appConfig.secret, function (err, decoded) {
                if (
                    err || typeof decoded.ip === 'undefined'
                    || (typeof decoded.ip !== 'undefined'
                    && ip.isEqual(ip.address(), decoded.ip) === false)
                    ) {
                    return res.status(401).send({
                        code: 401,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    // req.decoded = decoded;
                    req.session.user_id = decoded.id;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(401).send({
                code: 401,
                message: 'Failed to authenticate token.'
            });
        }
    }
}
