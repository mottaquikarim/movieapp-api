const dbName = 'movieapp'
const dbAddr = process.env.DATABASE_URL || `postgres://localhost/${dbName}`

module.exports = {
    dbAddr,
}
