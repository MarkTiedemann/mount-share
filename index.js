'use strict'

const { exec } = require('child_process')

const execCommand = command => new Promise((resolve, reject) =>
    exec(command, err => err ? reject(err) : resolve())
)

const x = o => { throw new TypeError(`Missing option: ${o}`) }

module.exports = ({ server = x`server`, share = x`share`, drive = 'X', username, password }) => {

    this.mount = () => !!username && !!password
        ? execCommand(`net use ${drive}: \\\\${server}\\${share} /user:${username} ${password}`)
        : execCommand(`net use ${drive}: \\\\${server}\\${share}`)

    this.dismount = () =>
        execCommand(`net use ${drive}: /delete`)

    return this

}
