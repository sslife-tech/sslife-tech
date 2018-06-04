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
