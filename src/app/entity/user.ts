import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Table} from 'typeorm';

@Entity('tbl_user')
export class User {

    @PrimaryColumn('int', { generated: true })
    id: number;

    @Column({
        type: 'string',
        length: 50,
        nullable: false
    })
    username: string;

    @Column({
        type: 'string',
        length: 100,
        nullable: false
    })
    password: string;

    @Column({
        type: 'string',
        length: 100,
        nullable: false
    })
    email: string;

    @Column({
        type: 'boolean',
        name: 'is_active',
        nullable: false
    })
    isActive: boolean;

    @Column({
        type: 'datetime',
        name: 'created_at',
        nullable: true
    })
    createdAt: any;

    @Column({
        type: 'datetime',
        name: 'updated_at',
        nullable: true
    })
    updatedAt: any;
}
