const db = require('../db');
async function getCock(){
    const {rows} = await db.query('select cname, preis from cocktail');
    return{
        data: rows,
        status: 200,
    };
}