process.env.NODE_CONFIG_DIR = __dirname + '/config';

import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
  useContainer as ormUseContainer,
} from 'typeorm';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { SnakeCaseNamingStrategy } from './libs/typeorm/SnakeCaseNamingStrategy';
import { createApp } from './app';

async function startServer() {
  ormUseContainer(Container);
  routingUseContainer(Container);

  const connectionOptions: ConnectionOptions = await getConnectionOptions();
  Object.assign(connectionOptions, {
    namingStrategy: new SnakeCaseNamingStrategy(),
  });

  createConnection(connectionOptions).then(async (connection) => {
    const app = createApp(connection);
    app.listen(3000);
    console.log('Server running on port 3000');
  });
}

startServer();
