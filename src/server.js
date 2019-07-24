import Express from 'express'

let consoleLogger = console

const app = new Express()

// attach apis
import('./router-api').then(fnc => {
  fnc(app)
})

const port = 3000
const host = '127.0.0.1'

app.listen(3000, host, () => {
  consoleLogger.log(`server listening at port:${port}!`)
})
