const pool = require('../../../mysql/connection');
const mysql = require('mysql');

const deleteRequest = (req, res) => {
  let sql = `
    DELETE FROM service_requests
    WHERE id = ?
  `
  let replacements = [req.params.requestId]

  sql = mysql.format(sql, replacements);

  pool.query(sql, (err, results)=>{
    if(err) {return res.status(500).send(err)}
    return res.status(204).send('content deleted successfully')
  })
}

module.exports = deleteRequest;