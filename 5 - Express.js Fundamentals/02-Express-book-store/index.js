const express = require('express');


const bookRouter = require('./routes/book.routes');
const { loggerMiddleware } = require('./middlewares/logger');

const app = express();
const PORT = 8000;


//MIDDLEWARES
app.use(express.json()); //middleware (plugin to accept json data and put in db(internal here))
app.use(loggerMiddleware)

//ROUTUR
app.use('/books',bookRouter);

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));