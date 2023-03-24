const callApi = (counter) => {
  console.log(`Calling API... + ${counter}`)
}

const debounceFn = (cb, t) => {
  let id
  let ti = Date.now()
  return (...args) => {
    if (Date.now() - ti < t) {
      clearTimeout(id)
    }
    id = setTimeout(() => {
      cb(...args)
      ti = Date.now()
    }, t)
  }
}

const deb = debounceFn(callApi, 1000)
deb(1) //12:12:01
deb(2) //12:12:02
deb(3) //12:12:03
setTimeout(() => {
  deb(4)
  console.log("called from timeout")
}, 800)
