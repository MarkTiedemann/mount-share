'use strict'

const fs = require('fs')

const share = require('.')({
    server: '<server>',
    share: '<share>',
    username: '<username>',
    password: '<password>'
})

const listFiles = () => new Promise((resolve, reject) =>
    fs.readdir('X:', (err, files) => err ? reject(err) : resolve (files))
)

share.mount()
    .then(() => console.log('mounted'))
    .then(listFiles)
    .then(files => console.dir(files))
    .catch(err => console.error(err))
        .then(share.dismount)
        .then(() => console.log('dismounted'))
        .catch(() => console.log('dismounted'))
