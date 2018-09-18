import { NamingStrategyInterface, DefaultNamingStrategy } from 'typeorm';
import * as _ from 'lodash';

export class SnakeCaseNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName ? userSpecifiedName : _.snakeCase(targetName);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ): string {
    return _.snakeCase(
      embeddedPrefixes.concat(customName ? customName : propertyName).join('_')
    );
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return _.snakeCase(propertyName);
  }
}
