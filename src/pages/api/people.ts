import {NextApiRequest, NextApiResponse} from 'next'
import { Person } from 'src/entity';
const { Pool, Client } = require('pg')
import {getConnection} from "typeorm";

export default async function getPeople() {
    const user = await getConnection()
    .createQueryBuilder()
    .select("*")
    .from(Person, "user")
    .getMany()
      console.log('user', user)
} 