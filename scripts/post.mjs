import fs from 'fs'
const f = 'dist/index.html'
let h = fs.readFileSync(f, 'utf8')
h = h.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, '').replace(/ crossorigin(?=[ >])/g, '')
const m = fs.readdirSync('dist/assets').find(x => x.endsWith('.js'))
h = h.replace('</body>', `<script defer src="./assets/${m}"></script></body>`)
fs.writeFileSync(f, h)
