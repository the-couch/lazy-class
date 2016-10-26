
let classSwap = (e, change, className) => {
  switch(change) {
    case 'add':
      e.classList.add(className)
      break
    case 'remove':
      e.classList.remove(className)
      break
    case 'toggle':
      e.classList.toggle(className)
      break
    default:
      console.log('invalid value for change option specified')
  }
}

/**
 *  @param  {object|...array} el dom element/s
 *  @param  {string} className long to wait for a response
 *  @param  {number} timing in milliseconds
 *  @param  {options} options object
 */

let lazy = (el, className, timing, options = {}) => {
  let change = options.change || 'add'
  let sT = (e) => {
    setTimeout(() => { classSwap(e, change, className) }, timing)
  }
  el.length ? [].forEach.call(el, (e) => { sT(e) }) : sT(el)
}

exports.lazy = lazy
