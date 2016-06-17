'use strict'

const x = require('throw-if-missing')
const exec = require('./exec')

module.exports = ({ server = x`server`, share = x`share`, drive = 'X', username, password }) => {

    this.mount = () => !!username && !!password
        ? exec(`net use ${drive}: \\\\${server}\\${share} /user:${username} ${password}`)
        : exec(`net use ${drive}: \\\\${server}\\${share}`)

    this.dismount = () =>
        exec(`net use ${drive}: /delete`)

    return this

}
