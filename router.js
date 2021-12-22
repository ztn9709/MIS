const express = require('express')
const fs = require('fs')
let operate = require('./mongoose')

//创建路由容器
let router = express.Router()

router.get('/students', function(req, res) {
    operate.find(function(err, stu_data) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html', { stu: stu_data })
    })
}).get('/students/create', function(req, res) {
    res.render('create.html')
}).post('/students/create', function(req, res) {
    new operate(req.body).save(function(err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
}).get('/students/update', function(req, res) {

    operate.findById(req.query.id, function(err, stu) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('update.html', { student: stu })
    })
}).post('/students/update', function(req, res) {
    operate.findByIdAndUpdate(req.body.id, req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
}).get('/students/delete', function(req, res) {
    operate.deleteOne({ _id: req.query.id }, function(err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })

}).get('/', function(req, res) {
    res.send('ok')

})

module.exports = router