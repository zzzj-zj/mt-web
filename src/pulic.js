export default function debounce (fn, delay) {
  let timer = null
  console.log(333)
  return function () {
    console.log(444)
    let self = this
    let args = arguments
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay)
  }
}
