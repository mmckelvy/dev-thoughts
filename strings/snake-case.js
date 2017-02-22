// Converts camelCase strings to snake_case
function snakeCase(str) {
  const regEx = /[A-Z]/g

  return str.replace(regEx, (match) => {
    return `_${match.toLowerCase()}`
  })
}
