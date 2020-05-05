passless
========

A secret manager for your CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/passless.svg)](https://npmjs.org/package/passless)
[![Downloads/week](https://img.shields.io/npm/dw/passless.svg)](https://npmjs.org/package/passless)
[![License](https://img.shields.io/npm/l/passless.svg)](https://github.com/santiagocardo80/passless/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g passless
$ passless COMMAND
running command...
$ passless (-v|--version|version)
passless/1.0.0 darwin-x64 node-v12.16.2
$ passless --help [COMMAND]
USAGE
  $ passless COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`passless help [COMMAND]`](#passless-help-command)
* [`passless secrets`](#passless-secrets)
* [`passless secrets:create USERNAME NAME`](#passless-secretscreate-username-name)
* [`passless secrets:delete USERNAME NAME`](#passless-secretsdelete-username-name)
* [`passless secrets:get USERNAME NAME`](#passless-secretsget-username-name)
* [`passless secrets:list USERNAME`](#passless-secretslist-username)
* [`passless secrets:update USERNAME NAME`](#passless-secretsupdate-username-name)
* [`passless users`](#passless-users)
* [`passless users:create USERNAME`](#passless-userscreate-username)
* [`passless users:list`](#passless-userslist)

## `passless help [COMMAND]`

display help for passless

```
USAGE
  $ passless help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `passless secrets`

Manage secrets by user

```
USAGE
  $ passless secrets
```

_See code: [src/commands/secrets/index.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/index.js)_

## `passless secrets:create USERNAME NAME`

Creates a secret by name

```
USAGE
  $ passless secrets:create USERNAME NAME
```

_See code: [src/commands/secrets/create.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/create.js)_

## `passless secrets:delete USERNAME NAME`

Delete a secret by username and name

```
USAGE
  $ passless secrets:delete USERNAME NAME
```

_See code: [src/commands/secrets/delete.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/delete.js)_

## `passless secrets:get USERNAME NAME`

Lists secrets by username

```
USAGE
  $ passless secrets:get USERNAME NAME

OPTIONS
  -c, --copy
```

_See code: [src/commands/secrets/get.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/get.js)_

## `passless secrets:list USERNAME`

Lists secrets by username

```
USAGE
  $ passless secrets:list USERNAME
```

_See code: [src/commands/secrets/list.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/list.js)_

## `passless secrets:update USERNAME NAME`

Delete a secret by username and name

```
USAGE
  $ passless secrets:update USERNAME NAME
```

_See code: [src/commands/secrets/update.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/secrets/update.js)_

## `passless users`

Manage users

```
USAGE
  $ passless users
```

_See code: [src/commands/users/index.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/users/index.js)_

## `passless users:create USERNAME`

Creates an user

```
USAGE
  $ passless users:create USERNAME
```

_See code: [src/commands/users/create.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/users/create.js)_

## `passless users:list`

List all users

```
USAGE
  $ passless users:list
```

_See code: [src/commands/users/list.js](https://github.com/santiagocardo80/passless/blob/v1.0.0/src/commands/users/list.js)_
<!-- commandsstop -->
