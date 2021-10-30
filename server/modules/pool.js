const pg = require( 'pg' );
const pool = new pg.Pool({
    database: 'weekend-react-gallery',
    host: 'localhost',
    port: 5432,
    max: 15,
    idleTimeoutMillis: 30000
});

module.exports = pool;