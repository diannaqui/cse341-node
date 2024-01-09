// express web server

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use('/', require('./routes'))

// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Hello");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});