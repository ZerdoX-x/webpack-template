const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
