function throttle(cb, delay) {
  let wait = false
  return (...args) => {
    if (!wait) {
      cb(...args)
      wait = true
      setTimeout(() => {
        wait = false
      }, delay)
    }
  }
}

const fn = throttle(() => console.log("called api"), 2000)
fn()
fn()
fn()
fn()
fn()
fn()
fn()
fn()
setTimeout(fn, 3000)
