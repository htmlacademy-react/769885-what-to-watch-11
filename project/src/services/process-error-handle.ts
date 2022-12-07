import {store} from '../store';
import {errorMessage} from '../store/action';
import {clearErrorMessage} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(errorMessage(message));
  store.dispatch(clearErrorMessage());
};
