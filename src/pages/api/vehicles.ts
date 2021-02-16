import {NextApiRequest, NextApiResponse} from 'next'
const { Pool, Client } = require('pg')

export default function getVehicles(req: NextApiRequest, respond: NextApiResponse) {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '1234',
        port: 5432,
      })

      const selectQuery = `
  SELECT * from Vehicle
  `
      let people: any
      pool.query(selectQuery, (err: any, res: any) => {
        // console.log(err, res)
        people = res
        pool.end()
        respond.json(JSON.stringify(people.rows, null, 2))
    })
      
} 