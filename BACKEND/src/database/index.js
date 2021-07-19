exports.db = (async () => {
    const database = require('../config/database');
    const Card = require('../app/Models/Card');
 
    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})();