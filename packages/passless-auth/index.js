'use strict'

const { User, redisClient } = require('@passless/db')
const { comparePassword, generateKey } = require('@passless/crypto')

const AUTHENTICATED = Symbol('AUTHENTICATED')

async function isAuthenticated (username) {
  return redisClient.get(username)
}

async function getSecretKey (username, password) {
  if (password === AUTHENTICATED) {
    return redisClient.get(username)
  } else {
    return generateKey(password)
  }
}

async function authenticate (username, password) {
  const user = await User.findOne({ where: { username } })
  if (!user) return false

  const isValid = await comparePassword(password, user.password)
  if (isValid) {
    await redisClient.set(username, generateKey(password), 'EX', 2 * 60)
  }

  return isValid && user
}

module.exports = {
  AUTHENTICATED,
  isAuthenticated,
  getSecretKey,
  authenticate
}
