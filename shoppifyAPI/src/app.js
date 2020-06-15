const express = require('express');
const app = express();
const signUpRouter = require('./routers/signUpRouter')
const loginRouter = require('./routers/loginRouter')
const prodRouter = require('./routers/products')
const cartRouter = require('./routers/cartRouter')
const cors = require('cors')

require('./db/mongoose')

app.use(cors())
app.use(express.json())
app.use(signUpRouter)
app.use(loginRouter)
app.use(prodRouter)
app.use(cartRouter)

app.listen(8000, () => {
    console.log("Server is Up");
})