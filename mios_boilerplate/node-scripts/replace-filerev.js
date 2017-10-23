const replace = require('replace')
const Git = require('nodegit')

Git.Repository.open('./')
  .then((repository) => repository.getHeadCommit())
  .then((commit) => commit.sha())
  .then((hash) => {
    hash = hash.substr(0, 7)
    replace({
      regex: /(\.(jpeg|jpg|png|gif|webp))/g,
      replacement: '$1?v=' + hash,
      paths: ['./public/'],
      recursive: true,
      include: '*.css'
    })

    replace({
      regex: /(\.(png|gif|jpg|webp|js|css))/g,
      replacement: '$1?v=' + hash,
      paths: ['./public/'],
      recursive: true,
      include: '*.html'
    })

    replace({
      regex: /(\.(jpeg|jpg|png|gif|webp))/g,
      replacement: '$1?v=' + hash,
      paths: ['./public/'],
      recursive: true,
      include: '*.js'
    })
  })
