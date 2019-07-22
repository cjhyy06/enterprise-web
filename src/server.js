import Express from 'express'

let consoleLogger = console

const app = new Express()

app.get('/api', (req, res, next) => {
  res.send('hello express')
})

const port = 3000
const host = '127.0.0.1'

app.listen(3000, host, () => {
  consoleLogger.log(`server listening at port:${port}!`)
})
