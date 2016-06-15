'use strict'

const fs = require('fs')
const share = require('.')

const logMounted = () => console.log('mounted')
const logFiles = files => console.dir(files)
const logErr = err => console.error(err)
const logDismounted = () => console.log('dismounted')

const mountShare = () =>
    share.mount({
        server: '<server>',
        share: '<share>',
        username: '<username>',
        password: '<password>'
    })

const listFiles = () =>
    new Promise((resolve, reject) =>
        fs.readdir('X:', (err, files) =>
            err ? reject(err)
                : resolve (files)
        )
    )

const dismountShare = () =>
    share.dismount()

mountShare()
    .then(logMounted)
    .then(listFiles)
    .then(logFiles)
    .catch(logErr)
        .then(dismountShare)
        .then(logDismounted)
        .catch(logDismounted)
