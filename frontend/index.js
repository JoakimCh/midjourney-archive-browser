
const CDNs = ['https://cdn.midjourney.com/', 'https://storage.googleapis.com/dream-machines-output/']
/* these can be generated from an archive an uploaded to a file. complete with tags, ratings and whatnot */
const imgIds = [
  '7fd9a634-d37f-47d0-9f17-bd73688e3b5f/0_0',
  'fa08c821-e3ac-4b6a-bdad-00a03b33f085/0_3'
]
const tags = new Map([
  ['tag', imgIds]
])
// then maybe cache every img download in the browsers filesystem and thumbnails?

const el_img = document.getElementById('image')

el_img.src = `${CDNs[0]}/${imgIds[0]}.webp`

// const defaultKeyMap = new Map([
//   ['ArrowLeft', 'previous'],
//   ['ArrowRight', 'next'],
// ])

// export const
//   key = {}, // e.g.: if (key.jump.pressed)
//   keyMap = defaultKeyMap

// for (const action of ['next','previous']) {
//   key[action] = {
//     pressed: false,
//     listeners: []
//   }
// }

// // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
// addEventListener('keydown', keyChange, {capture: true})
// addEventListener('keyup', keyChange, {capture: true})

// function keyChange(event) {
//   if (event.repeat || event.defaultPrevented) return
//   const mappedKey = keyMap.get(event.code)
//   if (mappedKey) {
//     const action = key[mappedKey]
//     action.pressed = (event.type == 'keydown')
//     for (const listener of action.listeners) // notify all listeners of the change
//       listener(action.pressed)
//   } else return // before the preventDefault
//   event.preventDefault()
// }
