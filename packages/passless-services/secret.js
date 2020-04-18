'use strict'

const db = require('@passless/db')
const {
  generateKey,
  encrypt,
  decrypt
} = require('@passless/crypto')

async function createSecret (user, password, name, value) {
  const secretKey = generateKey(password)
  const randomKey = user.randomKey
  const encrypted = encrypt(value, secretKey, randomKey)

  return db.Secret.create({
    username: user.username,
    name,
    value: encrypted
  })
}

async function listSecrets (username) {
  return db.Secret.findAndCountAll({ where: { username } })
}

async function getSecret (user, password, name) {
  const secret = await db.Secret.findOne({ where: { name } })
  if (!secret) return null

  const secretKey = generateKey(password)
  const randomKey = user.randomKey
  const decrypted = decrypt(secret.value, secretKey, randomKey)
  secret.value = decrypted

  return secret
}

async function updateSecret (user, password, name, value) {
  const secretKey = generateKey(password)
  const randomKey = user.randomKey
  const encrypted = encrypt(value, secretKey, randomKey)

  return db.Secret.update(
    { value: encrypted },
    { where: { username: user.username, name } }
  )
}

async function deleteSecret (username, name) {
  return db.Secret.destroy({
    where: { username, name }
  })
}

module.exports = {
  createSecret,
  listSecrets,
  getSecret,
  updateSecret,
  deleteSecret
}
