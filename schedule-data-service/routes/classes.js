const encrypt = require('../modules/encrypt.js')

module.exports = function (server, db) {

  server.get('/data/classes', (req, res) => {
    let query = "SELECT * FROM classes"
    let result = db.prepare(query).all()
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  server.get('/data/classes/:id', (req, res) => {
    let query = "SELECT * FROM classes WHERE id=@id"
    let result = db.prepare(query).all({ id: req.params.id })
    res.setHeader('Content-Range', result.length);
    res.setHeader('X-Total-Count', result.length);
    res.json(result)
  })

  server.put('/data/classes/:id', (req, res) => { // limit which tables to query with ACL
    req.body.id = req.params.id // move/replace the id into the body so it can be passed with the other replacements
    let query = `UPDATE classes SET name = ?, shortName = ?, school = ?, blog = ?, hide = ?, defaultStartTime = ?, defaultEndTime = ?, defaultHoursPerDay = ?, WHERE id=@id`
    let result
    try {
      result = db.prepare(query).run(req.body)
    } catch (e) {
      console.error(e)
    }
    res.json(result)
  })

}