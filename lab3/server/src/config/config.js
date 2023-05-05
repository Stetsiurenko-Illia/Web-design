module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker', 
        user: process.env.DB_USER || 'tabtracker',
        firstname: process.env.DB_FNAME || 'tabtracker',
        lastname: process.env.DB_LNAME || 'tabtracker',
        date: process.env.DB_DATE || 'tabtracker',
        gender: process.env.DB_GENDER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALCECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    },
    authentication:{
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
