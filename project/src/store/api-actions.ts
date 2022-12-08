import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {errorMessage, findFilms, isLoadingFilms, redirectToRoute, requireAuthorization} from './action';
import {Films} from '../types/film';
import {store} from './index';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_DELETE_ERROR_MESSAGE} from '../const';
import {Auth} from '../types/auth';
import {User} from '../types/user';
import {dropToken, saveToken} from '../services/token';

export const clearErrorMessage = createAsyncThunk(
  'app/clearErrorInfo',
  () => {
    setTimeout(
      () => store.dispatch(errorMessage(null)),
      TIMEOUT_DELETE_ERROR_MESSAGE
    );
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
