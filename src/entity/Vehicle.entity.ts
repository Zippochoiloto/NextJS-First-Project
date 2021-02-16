import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./Person.entity";


@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column('varchar')
    public brand!: string

    @Column('varchar')
    public model!: string

    @ManyToOne(() => Person, person => person.vehicle)
    public person: Person
}