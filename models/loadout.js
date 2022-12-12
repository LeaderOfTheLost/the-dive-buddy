const { Schema } = require('mongoose')

const loadoutSchema = new Schema(
  {
    name: { type: String, required: true },
    gear: [{ type: Schema.Types.ObjectId, ref: 'Gear' }]
  },
  { timestamps: true }
)

module.exports = loadoutSchema
