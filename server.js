// tiny keep-alive web server so Render health check passes
const express = require('express');
const app = express();

app.get('/', (_req, res) => res.send('DARKZONE-MD alive ✅'));
app.listen(process.env.PORT || 3000, () =>
  console.log('Keep-alive server running on', process.env.PORT || 3000)
);
