import type { DatabaseEntitiesType } from '../types';

export const databaseTables: Record<keyof DatabaseEntitiesType, string> = <const>{
  examples: 'examples',
};
