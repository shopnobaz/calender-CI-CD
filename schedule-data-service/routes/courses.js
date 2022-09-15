const { response } = require('express')
const encrypt = require('../modules/encrypt.js')
const setResultHeaders = require("../modules/set-result-headers");

module.exports = function (server, db) {

  server.get('/data/courses', (req, res) => {
    let query = "SELECT * FROM courses"
    let result = db.prepare(query).all()
    //res.setHeader('Content-Range', result.length);
    //res.setHeader('X-Total-Count', result.length);
    setResultHeaders(res, result)
    res.json(result)
  })

  server.get('/data/courses/:id', (req, res) => {
    let query = "SELECT * FROM courses WHERE id=@id"
    let result = db.prepare(query).all({ id: req.params.id })
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  server.post('/data/courses', (request, response) => {
    let course = request.body
    let result
    try {
      result = db.prepare('INSERT INTO courses (name, shortName, class, points, startDate, endDate, plan, invoiceItem, hoursPerDay, hide) VALUES(?,?,?,?,?,?,?,?,?,?)').run([course.name, course.shortName, course.class, course.points, course.startDate, course.endDate, course.plan, course.invoiceItem, course.hoursPerDay, course.hide])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })
}