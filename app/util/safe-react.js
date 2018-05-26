import safeRender from 'react-safe-render';
import logger from './logger_client';
import React from 'react';

safeRender(React, {
  errorHandler: (err) => {
    logger.error(err, `Error: ${err.displayName}.${err.method}() failed: ${err.error}`);
  }
});

export default React;
