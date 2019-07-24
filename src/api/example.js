// import _ from 'lodash'
import { Router } from 'express'
// import { createDefaultMsRequest } from '../core/request/ms'

let router = new Router()

router.post('/hello', (req, res, next) => {
  res.json({ name: 'xuesong', greet: 'hello' })
})

module.exports = router
