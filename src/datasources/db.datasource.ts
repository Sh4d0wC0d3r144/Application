import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: 'postgresql://db_2kiq_user:9ndz9zikyV1Ba0YTB01OKXFC8x3pegGc@dpg-cs1sf2q3esus739fe220-a.frankfurt-postgres.render.com:5433/db_2kiq?ssl=true',
  host: 'dpg-cs1sf2q3esus739fe220-a.frankfurt-postgres.render.com',
  port: 5432,
  user: 'db_2kiq_user',
  password: '9ndz9zikyV1Ba0YTB01OKXFC8x3pegGc',
  database: 'db_2kiq'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The stop() method is inherited from juggler.DataSource.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}