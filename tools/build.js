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
  const markdownConverter = new showdown.Converter({ openLinksInNewWindow: true })

  fs.readdirSync('./src/posts').forEach((filename) => {
    let html

    const template = fs.readFileSync('./src/templates/article.html').toString()
    const markdown = fs.readFileSync(`./src/posts/${filename}`).toString()

    const articleContent = markdownConverter.makeHtml(markdown)
    const htmlFilename = filename.replace('md', 'html')

    html = template.replace('[[TITLE]]', htmlFilename.replace('.html', ''))
    html = html.replace('[[CONTENT]]', articleContent)

    fs.writeFileSync(`./build/posts/${htmlFilename}`, centerImages(html))
  })
}

function centerImages(html) {
  return html.replace('<p><img', '<p style="text-align: center;"><img')
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
