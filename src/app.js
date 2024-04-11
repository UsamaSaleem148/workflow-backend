const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
)

app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
