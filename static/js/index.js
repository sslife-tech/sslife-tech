/**
 * Add _blank to outbound
 * @returns {*}
 */
const externalLinkAddBlank = function () {
  const a_tags = document.querySelectorAll('a:not([target="_blank"])')
  let res = []
  if (!a_tags.length) return // a_tagsがマッチなし = end
  for (let i = 0; i < a_tags.length; i++) {
    if (a_tags[i].href.indexOf(window.location.host) !== -1) continue
    if (a_tags[i].href.indexOf('#') === 1) continue
    a_tags[i].setAttribute('target', '_blank')
    a_tags[i].setAttribute('rel', 'noopener')
    res.push(a_tags[i])
  }
  return res
}
// var a__add_blanks = external_link__add_blank(); console.log(a__add_blanks);
document.addEventListener('DOMContentLoaded', externalLinkAddBlank, false)

/**
 * Show Webp as jpg in iOS
 * @param path
 * @returns {boolean}
 */
const isWebp = path => path.endsWith('.webp')

const images = document.querySelectorAll('img')

const wrapWebpPicture =  () => {
  images.forEach(image => {
    const src = image.src
    if (isWebp(src)) {
      const jpgSrc = src.replace(/\.webp/, '.jpg')

      const newImage = document.createElement('picture')
      newImage.innerHTML = `<source type="image/webp" srcset="${src}"><img src="${jpgSrc}">`
      image.parentNode.insertBefore(newImage, image)
      image.remove()
    }
  })
}

document.addEventListener('DOMContentLoaded', wrapWebpPicture, false)
