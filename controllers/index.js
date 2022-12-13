// const { model } = require('mongoose')
const { User, Log, Loadout, Gear } = require('../models')

//User Controllers
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    return res.status(200).json({ allUsers })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({
      newUser
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id).populate('logs').populate('loadouts')
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if (deletedUser) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Log Controllers
const createLog = async (req, res) => {
  try {
    const newLog = new Log(req.body)
    await newLog.save()
    let updatedUser = await User.findById(req.params.id)
    updatedUser.logs.push(newLog._id)
    await updatedUser.save()
    return res.status(201).json({
      newLog
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllLogs = async (req, res) => {
  try {
    const allLogs = await Log.find({})
    return res.status(200).json({ allLogs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLogById = async (req, res) => {
  try {
    const { id } = req.params
    const log = await Log.findById(id)
    if (log) {
      return res.status(200).json(log)
    }
    return res.status(404).send('Log with specific ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateLog = async (req, res) => {
  try {
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updatedLog)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteLog = async (req, res) => {
  try {
    // const { id } = req.params
    const deletedLog = await Log.findByIdAndDelete(req.params.id)
    if (deletedLog) {
      return res.status(200).send('Log deleted')
    }
    throw new Error('Log not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Loadout Controllers
const createLoadout = async (req, res) => {
  try {
    const newLoadout = new Loadout(req.body)
    await newLoadout.save()
    let updatedUser = await User.findById(req.params.id)
    updatedUser.loadouts.push(newLoadout._id)
    await updatedUser.save()
    return res.status(201).json({
      newLoadout
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllLoadouts = async (req, res) => {
  try {
    const allLoadouts = await Loadout.find({})
    return res.status(200).json({ allLoadouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLoadoutById = async (req, res) => {
  try {
    const { id } = req.params
    const loadout = await Loadout.findById(id).populate('gear')
    if (loadout) {
      return res.status(200).json(loadout)
    }
    return res.status(404).send('Loadout with specific ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateLoadout = async (req, res) => {
  try {
    const updatedLoadout = await Loadout.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(updatedLoadout)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteLoadout = async (req, res) => {
  try {
    const { id } = req.params
    const deletedLoadout = await Loadout.findByIdAndDelete(req.params.id)
    if (deletedLoadout) {
      return res.status(200).send('Loadout deleted')
    }
    throw new Error('Loadout not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Gear Controllers
const createGear = async (req, res) => {
  try {
    const newGear = new Gear(req.body)
    await newGear.save()
    let updatedLoadout = await Loadout.findById(req.params.id)
    updatedLoadout.gear.push(newGear._id)
    await updatedLoadout.save()
    return res.status(201).json({
      newGear
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllGears = async (req, res) => {
  try {
    const allGears = await Gear.find({})
    return res.status(200).json({ allGears })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGearById = async (req, res) => {
  try {
    const { id } = req.params
    const gear = await Gear.findById(id).populate('gear')
    if (gear) {
      return res.status(200).json(gear)
    }
    return res.status(404).send('Gear with specific ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateGear = async (req, res) => {
  try {
    const updatedGear = await Gear.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updatedGear)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteGear = async (req, res) => {
  try {
    const { id } = req.params
    const deletedGear = await Gear.findByIdAndDelete(req.params.id)
    if (deletedGear) {
      return res.status(200).send('Gear deleted')
    }
    throw new Error('Gear not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllLogs,
  createLog,
  getLogById,
  updateLog,
  deleteLog,
  getAllLoadouts,
  createLoadout,
  getLoadoutById,
  updateLoadout,
  deleteLoadout,
  createGear,
  getAllGears,
  getGearById,
  updateGear,
  deleteGear
}
