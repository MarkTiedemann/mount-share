'use strict'

const { exec } = require('child_process')

const execCommand = command =>
    new Promise((resolve, reject) =>
        exec(command, err =>
            err ? reject(err)
                : resolve()
        )
    )

const mount = ({ server, share, drive = 'X', username, password }) =>
    !!username && !!password
        ? execCommand(`net use ${drive}: \\\\${server}\\${share} /user:${username} ${password}`)
        : execCommand(`net use ${drive}: \\\\${server}\\${share}`)

const dismount = ({ drive = 'X' }) =>
    execCommand(`net use ${drive}: /delete`)

module.exports = { mount, dismount }
