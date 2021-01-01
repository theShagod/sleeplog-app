/*

Routes, serverside userinput validation

*/

const express = require('express');
const sleeplogger = require('../models/sleeplog')
const router = express.Router();
var i = 0;

//home screen
router.get('/', (req, res) =>{
    res.render('home', {

    });
});

//app screen
router.get('/users/:name', (req, res) =>{
    
    sleeplogger.viewAll(req.params.name, result => {
        /*
        console.log(result[0].wakeup_date.toDateString())
        result = result.map(item => item.wakeup_date = item.wakeup_date.toDateString())*/

        if (result.length == 0){ 
            sleeplogger.addEntry(req.params.name, null, null, result => {
                //res.json(result); 
                res.redirect(`/users/${req.params.name}`)
            });
        } else {
            res.render('home', {
            table: result,
            name: req.params.name
            });
        };
    });
    
});

router.post('/users/:name', (req, res) => {//name, wakeup_date, bed_date
    let wake = req.body.wakeup_date;
    let bed = req.body.bed_date;
    let dateFormat = /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2} [0-9]{2}:[0-9]{2}$/;
    let validatedWake = null;
    let validatedBed = null;
    if (wake){//must match format: YYYY-Month-Day HH:MM
        if (!wake.match(dateFormat)) {
            res.status(400).send('date format for wakeup_date does not match')
            return;
        } else if (new Date(wake) == 'Invalid Date'){
            res.status(400).send('inputed wakeup_date is not valid.')
            return;
        }
        
        validatedWake = new Date(wake);
    }
    if (bed){
        if (!bed.match(dateFormat)) {
            res.status(400).send('date format for bed_date does not match')
            return;
        } else if (new Date(bed) == 'Invalid Date'){
            res.status(400).send('inputed bed_date is not valid.')
            return;
        }
        validatedBed = new Date(bed);
    }
    if (validatedWake || validatedBed){
        sleeplogger.addEntry(req.params.name, validatedWake, validatedBed, result => {
            //res.json(result); 
            res.redirect(`/users/${req.params.name}`)
        });
    } else {
        res.status(400).send('wake or bed date must have a date to be submitted.')
    }
});

router.put('/users/:name/:id', (req, res) => {
    if (!req.body.name){//'date must be equal to wakeup_date or bed_date'
        sleeplogger.changeEntry(req.body.col, req.body.date, req.params.id, req.params.name, result => {
            
            if(result.changedRows == "0"){
                res.status(400).send(result.message + " Your id could have possibly matched but the information was the same as what was orginally there. Another possibility is that you supplied the wrong id resulting in a bad request. Or you are in a bad url where the id and name do not match.")
            } else {
                res.send(result.message)
            }
        })
    }
});

router.delete('/users/:name/:id', (req, res) => {
    sleeplogger.delete(req.params.id, req.params.name, result => {
        if(result.affectedRows == "0"){
            res.status('400').send('something went wrong, possibly because id and name dont match')
        } else {
            res.send(result)
        }
        
    })
})

module.exports = router;