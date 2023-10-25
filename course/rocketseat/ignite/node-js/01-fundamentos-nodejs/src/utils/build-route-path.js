//Test Regex...
// /users/:id

export function buildRoutePath(path){
  // const routeParametersRegex = /:([a-zA-Z]+)/g
  const routeParametersRegex = /:([a-zA-Z]+)/g
  // const pathWithParams = path.replaceAll(routeParametersRegex, '([a-z0-9\-_]+)')
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  // return new RegExp()
  // console.log(Array.from(path.matchAll(routeParametersRegex)))

  console.log(pathWithParams);

  // const test = /\/users\/([a-z0-9-_]+)/;


  const pathRegex = new RegExp(`^${pathWithParams}`);


  // console.log('result', pathRegex)

  return pathRegex

  // pathRegex.test()
}