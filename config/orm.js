const db = require('./connection.js');

const orm = {
    addEntry: (name, wakeup_date, bed_date, cb) => {
        let newRow = [name, wakeup_date, bed_date];
        db.query(`INSERT INTO sleeplog (username, wakeup_date, bed_date) VALUES
        (?,?,?);`, newRow, (err, res, fields) => { //more info about ? https://www.mysqltutorial.org/mysql-nodejs/insert/
            if (err) throw err;
            cb(res);
        })
    },
    changeEntry: (col, date, id, name, cb) => {
        if (col != 'wakeup_date' && col != 'bed_date') {
            throw 'date must be equal to wakeup_date or bed_date'
        }
        db.query(`UPDATE sleeplog SET ?? = ? WHERE id = ? AND username = ?;`, [col, date, id, name], (err, res)=>{
            if (err) throw err;
            cb(res);
        })
    },
    viewAll: (name, cb) => {

        db.query(`SELECT * FROM sleeplog WHERE username = ?;`, [name], (err, res, fields) => {
            if (err) throw err;
            cb(res);
        })
    },
    delete: (id, name, cb) => {
        db.query(`DELETE FROM sleeplog WHERE id = ? and username = ?`, [id, name], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

//orm.viewAll();
//orm.addEntry('jon','2017-05-13 07:59:38','2017-05-13 07:59:38');
module.exports = orm;