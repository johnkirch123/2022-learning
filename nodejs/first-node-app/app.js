const Logger = require('./logger');

const logger = new Logger();

logger.on('messageLogged', (e) => {
  console.log('Listener Called', e);
});

logger.log('message');
