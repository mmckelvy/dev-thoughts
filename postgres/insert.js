/**
* Convert js objects to parameterized queries for node-postgres.
*
* returns an {object} with a SQL query and values for node-postgres escaped queries
* @param {string} table -- the table in which to insert
* @param {object} newRecord the new record to insert
*/
module.exports = function insert(table, newRecord) {
  const cols = []
  const params = []
  const values = []

  Object.keys(newRecord).forEach((col, i) => {
    params.push(`$${i + 1}`)
    values.push(newRecord[col])
  })

  return {
    query: `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${params.join(', ')})`,
    values
  }
}

