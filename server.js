const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));

app.get('/', (req, res) => {
   res.render('index.html')
});

app.listen(3000, function () {
  console.log('Reaction Timer app listening on port 3000!');
});
