/**
 * RelationSchema definition
 * @author  heroic
 */

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Collection name in the database is `relation`
 * @type {Schema}
 */
var RelationSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true
  },
  followId: {
    type: String,
    required: true,
    index: true
  }
}, {
  collection: 'relation'
});

/**
 * Exports schema and model name
 * @type {object}
 */
module.exports = {
  schema: RelationSchema,
  modelName: 'Relation'
};