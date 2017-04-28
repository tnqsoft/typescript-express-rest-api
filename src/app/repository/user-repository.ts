// import { Service } from 'typedi';
import { Repository, EntityRepository, Connection } from 'typeorm';
// import { OrmCustomRepository, OrmConnection } from 'typeorm-typedi-extensions';
import { User } from '../entity/user';

// create custom Repository class
// @Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public findByUsername(username: string): Promise<User | undefined> {
        return this.findOne({ username: username });
    }

}
