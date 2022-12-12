const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    username: { type: String, require: true },
    loadouts: [{ type: Schema.Types.ObjectId, ref: 'Loadout' }],
    logs: [{ type: Schema.Types.ObjectId, ref: 'Log' }]
  },
  { timestamps: true }
)

module.exports = userSchema
