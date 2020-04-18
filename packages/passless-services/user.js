'use strict'

const db = require('@passless/db')
const { comparePassword } = require('@passless/crypto')

async function authenticate (username, password) {
  const user = await db.User.findOne({ where: { username } })
  if (!user) return false

  const isValid = await comparePassword(password, user.password)

  return isValid && user
}

async function createUser (username, fullname, password) {
  return db.User.create({
    username,
    fullName: fullname,
    password
  })
}

async function listUsers () {
  return db.User.findAndCountAll()
}

module.exports = {
  createUser,
  listUsers,
  authenticate
}
