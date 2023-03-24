const callApi = (counter) => {
  console.log(`Calling API... + ${counter}`)
}

const debounceFn = (cb, t) => {
  let id
  const ti = Date.now()
  return (...args) => {
    if (Date.now() - ti < t) {
      clearTimeout(id)
    }

    id = setTimeout(() => {
      cb(...args)
    }, t)
  }
}

const deb = debounceFn(callApi, 1000)
deb(1)
deb(2)
deb(3)
setTimeout(() => {
  deb(4)
  console.log("called from timeout")
}, 800)
