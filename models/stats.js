const { Schema } = require('mongoose')

const statsSchema = new Schema(
  {
    totalDives: { type: String, required: false },
    totalTimeUnderwater: { type: String, required: false },
    deepestDepth: { type: String, require: false },
    longestDepth: { type: String, require: false },
    averageDepth: { type: String, require: false }
  },
  { timestamps: true }
)

module.exports = statsSchema
