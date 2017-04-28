import { createConnection, Connection, useContainer } from 'typeorm';
import 'reflect-metadata';
import { appConfig } from '../configs';
import { User } from './entity/user';

/**
 * @export
 * @class DBConnect
 */
export class DBConnect {

  public static connect(): void {
    // useContainer(Container);
    createConnection({
      driver: {
        type: 'mysql',
        host: appConfig.dbhost,
        port: appConfig.dbport,
        username: appConfig.dbuser,
        password: appConfig.dbpass,
        database: appConfig.dbname
      },
      entities: [
       __dirname + '/entity/*.js'
      ],
      autoSchemaSync: true,
    }).then(async connection => {
      console.log('Database connected.');
    }).catch(error => console.log('Error: ', error));
  }

}
