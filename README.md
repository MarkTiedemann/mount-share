
# mount-share

**Mount and dismount network shares on Windows.**

## Installation

```
npm install mount-share
```

## Quickstart

```js
const share = require('mount-share')

const options = {
    server: 'multimedia-homeserver',
    share: 'music-collection',
    drive: 'M'
    username: 'uncreative-username',
    password: 'super-secret-password'
}

share.mount(options)
    .then(() => console.log('mounted!'))

// some time later
share.dismount(options)
    .then(() => console.log('dismounted!'))

```

## API

```js
const share = require('mount-share')
```

### `share.mount(options)`

- **options** `<Object>`:
    - **server** `<String>`
    - **share** `<String>`
    - **drive** `<String>`: *default*: `X`
    - **username** `<String>`: *optional*
    - **password** `<String>`: *optional*
- **returns** a `<Promise>` which:
    - **resolves** if the share was mounted
    - **rejects** if an error occured

### `share.dismount(options)`

- **options** `<Object>`:
    - **drive** `<String>`: *default*: `X`
- **returns** a `<Promise>` which:
    - **resolves** if the share was dismounted
    - **rejects** if an error occured

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
