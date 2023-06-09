import { ConditionValueType } from '../types/conditions.types';

export const condition = (value: ConditionValueType): string => {
  switch (value) {
    case 'new':
      return 'Nuevo';
    case 'used':
      return 'Usado';
    default:
      return '';
  }
};
