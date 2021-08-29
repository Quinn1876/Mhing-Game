const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(5500, () => {
  console.log('Listening on 127.0.0.1:5500');
});
