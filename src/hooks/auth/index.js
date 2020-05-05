'use strict'

const { isAuthenticated, authenticate } = require('@passless/auth')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')

module.exports = async ({ username }) => {
  if (!await isAuthenticated(username)) {
    const password = await cli.prompt('Enter your password', { type: 'hide' })

    const user = await authenticate(username, password)
    if (!user) throw new CLIError('Invalid user or password')
  }
}
