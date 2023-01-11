export function loadPhotos() {
  return require.context('/content/photos', true, /.json$/).keys().map(key => {
    let slug = key.replace('./', '')
    let content = require(`/content/photos/${slug}`)
    content['slug'] = slug.replace('.json', '')
    return content
  })
}

export function loadMusic() {
  return require.context('/content/music', true, /.json$/).keys().map(key => {
    let slug = key.replace('./', '')
    let content = require(`/content/music/${slug}`)
    let number = slug.replace('.json', '')
    content['slug'] = number
    content['key'] = parseInt(number)
    return content
  })
}