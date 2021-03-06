var Validator = require('jsonschema').Validator;
var v = new Validator();

const spaceSchema = {
  id: "/Space",
  type: "objet",
  properties: {
    row: {type: "number"},
    col: {type: "number"},
  },
  required: ["row", "col"],
}
v.addSchema(spaceSchema, '/Space');

const moveSchema = {
  id: "/Move",
  type: "string",
  minLength: 2,
  maxLength: 4,
};
v.addSchema(moveSchema, '/Move');

module.exports = {
  validateMove: m => v.validate(m, moveSchema),
  validateSpace: s => v.validate(s, spaceSchema),
  validateGameId: id => !!id.match(/^[a-z0-9-]+$/),
};
