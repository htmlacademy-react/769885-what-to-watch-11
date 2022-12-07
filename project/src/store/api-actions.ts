import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {errorMessage, findFilms, isLoadingFilms} from './action';
import {Films} from '../types/film';
import {store} from './index';
import {APIRoute, TIMEOUT_DELETE_ERROR_MESSAGE} from '../const';

export const clearErrorMessage = createAsyncThunk(
  'app/clearErrorInfo',
  () => {
    setTimeout(
      () => store.dispatch(errorMessage(null)),
      TIMEOUT_DELETE_ERROR_MESSAGE
    );
  }
);
export const getFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(isLoadingFilms(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(isLoadingFilms(false));
    dispatch(findFilms(data));
  }
);
