const orm = require('../config/orm');

const sleeplogger = {
    addEntry: (name, wakeup_date, bed_date, cb) => {
        orm.addEntry(name, wakeup_date, bed_date, (res) => {
            cb(res);
            //console.log('hello')
        });//vs. cb??? you can add more functions when you do it like res => {}

    },
    changeEntry: (col, date, id, name, cb) => {
        orm.changeEntry(col, date, id, name, res => {
            cb(res);
        })
    },
    viewAll: (name, cb) => {
        orm.viewAll(name, res => {
            cb(res);
        })
    },
    delete: (id, name, cb) => {
        orm.delete(id, name, res => {
            cb(res);
        })
    }
}


//sleeplogger.addEntry('jon','2017-05-13 07:59:38','2017-05-13 07:59:38', console.log)

module.exports = sleeplogger;