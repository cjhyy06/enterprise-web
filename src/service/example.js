import createRequest from '../core/request'

let hello = (params, req) => {
  console.log(createRequest)
  // return createRequest(req).post('/api/example/hello', params)
}

export default {
  hello
}
