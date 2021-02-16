import { NextApiRequest, NextApiResponse } from 'next'
const { Pool, Client } = require('pg')

export default function getPerson(req: NextApiRequest, respond: NextApiResponse) {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432,
    })

    const selectQuery = `
  SELECT * from Person where id = '${req.query.id}'
  `

    const updateQuery = (name: string = '', email = '') => {
        return (
            `
      update person set "name" = '${name}' , email = '${email}' where id = '1'
      `
        )
    }

    let people: any
    if (req.method === 'PUT') {
        pool.query(updateQuery(req.body.name, req.body.email), (err: any, res: any) => {
            // pool.end()
            respond.statusCode = 200
        })
    }
    pool.query(selectQuery, (err: any, res: any) => {
        // console.log(err, res)
        people = res
        pool.end()
        respond.json(JSON.stringify(people.rows, null, 2))
    })

} 