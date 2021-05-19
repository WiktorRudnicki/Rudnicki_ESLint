const db = require('../db');
async function getCock(){
    const {rows} = await db.query('select cname, preis from cocktail');
    return{
        data: rows,
        status: 200,
    };
}
async function getCockPrice(p){
    const {rows} = await db.query('select cname, preis from cocktail where <= $1', [p]);
    return{
        data: rows,
        status: 200,
    };
}

async function deleteCock(name){
    const{rows}= await db.query('select cname from cocktails where cname = $1', [name]);
    if(rows.length > 0){
        await db.query('delete from bestellt where cid = (select cid from cocktail where cname = $1)', [name]);
        await db.query('delete from bestellt where cid = (select cid from cocktail where cname = $1)', [name]);
        await db.query('delete from cocktail where cname = $1', [name]);
        return{
            data: 'deleted', 
            status: 200,
        };
    }
}

module.exports = {getCock, getCockPrice, deleteCock}