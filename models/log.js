const { Schema } = require('mongoose')

const logSchema = new Schema(
  {
    location: { type: String, required: false },
    dateOfDive: { type: String, required: false },
    timeOfDive: { type: String, require: false },
    diveNumOfDay: { type: String, require: false },
    maxDepth: { type: String, require: false },
    diveTime: { type: String, require: false },
    surfaceTemp: { type: String, require: false },
    bottomTemp: { type: String, require: false },
    visibility: { type: String, require: false },
    diveBuddy: { type: String, require: false },
    notes: { type: String, require: false },
    startPressure: { type: String, require: false },
    endPressure: { type: String, require: false },
    gasMix: { type: String, require: false },
    surfaceInterval: { type: String, require: false }
  },
  { timestamps: true }
)

module.exports = logSchema
