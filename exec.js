'use strict'

const { exec } = require('child_process')

module.exports = command => new Promise((resolve, reject) =>
    exec(command, err => err ? reject(err) : resolve())
)
