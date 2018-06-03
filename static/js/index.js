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
