import { createConnection } from 'typeorm'
import { DefaultNamingStrategy } from 'typeorm/naming-strategy/DefaultNamingStrategy'
import { NamingStrategyInterface } from 'typeorm/naming-strategy/NamingStrategyInterface'
import { snakeCase } from 'typeorm/util/StringUtils'
<<<<<<< HEAD
=======
import User from './users/entity'
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0

class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName ? userSpecifiedName : snakeCase(targetName) + 's';
  }

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join("_"));
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}

export default () =>
  createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres',
    entities: [
<<<<<<< HEAD
      //...
=======
      User
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
    ],
    synchronize: true,
    logging: true,
    namingStrategy: new CustomNamingStrategy()
  })
<<<<<<< HEAD
    .then(_ => console.log('Connected to Postgres with TypeORM'))
=======
    .then(_ => console.log('Connected to Postgres with TypeORM'))
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
