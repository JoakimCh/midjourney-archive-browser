
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
