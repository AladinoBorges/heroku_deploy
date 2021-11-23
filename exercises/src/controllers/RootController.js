const rescue = require('express-rescue');

module.exports = rescue(async (_request, response, _next) => {
  return response.status(200).send('Está vivo!!!');
});
