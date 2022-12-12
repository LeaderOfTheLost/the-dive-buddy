const mongoose = require('mongoose')
const userSchema = require('./user')
const logSchema = require('./log')
const loadoutSchema = require('./loadout')
const gearSchema = require('./gear')
const statsSchema = require('./stats')

const User = mongoose.model('User', userSchema)
const Log = mongoose.model('Log', logSchema)
const Loadout = mongoose.model('Loadout', loadoutSchema)
const Gear = mongoose.model('Gear', gearSchema)
const Stats = mongoose.model('Stats', statsSchema)

module.exports = {
  User,
  Log,
  Loadout,
  Gear,
  Stats
}
