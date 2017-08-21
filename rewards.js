"use strict";
// import express      from 'express';

import app from './config/express-config';
import routes from './api/routes';

routes(app);

app
  .listen(3444, () => {
    console.info(`server started on port 3444`);
  })
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port 3444 already in use`);
    }
  });
