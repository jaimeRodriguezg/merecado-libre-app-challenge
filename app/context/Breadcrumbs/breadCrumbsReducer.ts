import { BreadCrumbsState } from './BreadCrumbsProvider';

type TimerActionType = {
  type: '[BreadCrumb] - addCategories';
  payload: string[];
};

export const breadCrumbReducer = (
  state: BreadCrumbsState,
  action: TimerActionType,
): BreadCrumbsState => {
  switch (action.type) {
    case '[BreadCrumb] - addCategories':
      return {
        ...state,
        categories: [...action.payload],
      };
    default:
      return state;
  }
};
