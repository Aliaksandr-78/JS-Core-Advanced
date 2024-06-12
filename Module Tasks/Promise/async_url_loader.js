async function Loader(urls){
  const results = []
  for (const url of urls) {
    const contentPromise = new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.text())
        .then(content => resolve(content))
        .catch(error => reject(error))
    })
    results.push(contentPromise)
  }
  return Promise.all(results)
}
