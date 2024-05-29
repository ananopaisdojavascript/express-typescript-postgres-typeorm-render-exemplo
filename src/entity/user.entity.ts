import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Users {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string
}

export default Users;