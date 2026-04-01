// external import
import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    port: 3306,
    database: 'blogging_website'
})

export default async function dbConnection({ app, PORT }) {

    try {
        await db.connect()
        console.log('Database connected successfully')
        app.listen(PORT, () => console.log(`Server listening on port: http://localhost:${PORT}`))
    } catch (error) {
        console.error(error)
    }
}