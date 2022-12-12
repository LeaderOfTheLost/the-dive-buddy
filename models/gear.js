const { Schema } = require('mongoose')

const gearSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = gearSchema
