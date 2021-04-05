const fs = require('fs')
const showdown = require('showdown')

const recreateBuildFolder = () => {
  try {
    fs.rmdirSync('./build', { recursive: true, force: true })
  } catch (err) {
    console.log('no build folder detected... creating from scratch')
  } finally {
    fs.mkdirSync('./build')
  }
}

const buildIndex = () => {
  return
}

const buildPosts = () => {
  return
}

const build = () => {
  recreateBuildFolder()
  buildIndex()
  buildPosts()
}

build()

// This should
// 1. Create the build folder
// 2. Copy the assets (no compiling just yet, maybe never)
// 3. Generate the articles
// 4. NTH => deploy
