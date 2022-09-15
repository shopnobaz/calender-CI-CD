const { response } = require('express')
const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/schools', (req, res) => {
    let query = "SELECT id, name, shortName FROM schools"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  server.get('/data/schools/:id', (req, res) => {
    let query = "SELECT id, name, shortName FROM schools WHERE id=@id"
    let result = db.prepare(query).all({ id: req.params.id })
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  // registrera en ny school
  server.post('/data/schools', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('INSERT INTO schools (name, shortName) VALUES(?,?)').run([user.name, user.shortName])
    } catch (e) {
      console.error(e)
    }
    response.json(result)
  })

  server.put('/data/schools/:id', (req, res) => { // limit which tables to query with ACL
    req.body.id = req.params.id // move/replace the id into the body so it can be passed with the other replacements
    let query = `UPDATE schools SET name = ?, shortName = ?, WHERE id = @id`
    let result
    try {
      result = db.prepare(query).run(req.body)
    } catch (e) {
      console.error(e)
    }
    res.json(result)
  })
}