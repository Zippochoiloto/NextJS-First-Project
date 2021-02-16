import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Vehicle } from "./Vehicle.entity";

@Entity()
export class Person {
    @PrimaryGeneratedColumn('increment')
    public id!: number;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public email: string;

    @OneToMany(() => Vehicle, vehicle => vehicle.person)
    public vehicle: Vehicle[]
}