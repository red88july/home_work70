import {configureStore} from '@reduxjs/toolkit';
import {contactReducers} from '../containers/contactsSlice/contactsSlice.ts';

export const store = configureStore({
  reducer: contactReducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;