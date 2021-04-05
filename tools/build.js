const fs = require('fs')
const showdown = require('showdown')
const copydir = require('copy-dir')

function recreateBuildFolder() {
  try {
    fs.rmdirSync('./build', { recursive: true, force: true })
  } catch (err) {
    console.error('no build folder detected... creating from scratch')
  }

  fs.mkdirSync('./build')
  fs.mkdirSync('./build/posts')
}

function buildPosts() {
  const markdownConverter = new showdown.Converter()

  fs.readdirSync('./src/posts').forEach((filename) => {
    const markdown = fs.readFileSync(`./src/posts/${filename}`).toString()
    const html = markdownConverter.makeHtml(markdown)
    const htmlFilename = filename.replace('md', 'html')

    fs.writeFileSync(`./build/posts/${htmlFilename}`, html)
  })
}

function buildIndex() {
  const rawIndex = fs.readFileSync('./src/index.html').toString()
  const updatedIndex = rawIndex

  fs.writeFileSync('./build/index.html', updatedIndex)
}

function copyAssets() {
  copydir.sync('./src/assets', './build/assets')
}

function build() {
  recreateBuildFolder()
  buildPosts()
  buildIndex()
  copyAssets()
}

build()

// This should
// 1. Create the build folder
// 2. Copy the assets (no compiling just yet, maybe never)
// 3. Generate the articles
// 4. NTH => deploy
