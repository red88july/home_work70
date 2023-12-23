import {createSlice} from '@reduxjs/toolkit';
import {getContacts, postContact} from '../contactsThinks/contactsThinks.ts';
import {ContactsMutation} from '../../types';

interface ContactsState {
  item: ContactsMutation[];
  postLoading: boolean;
  getLoading: boolean;
}

const initialState: ContactsState = {
  item: [],
  postLoading: false,
  getLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(postContact.pending, (state) => {
      state.postLoading = true;
    });
    builder.addCase(postContact.fulfilled, (state) => {
      state.postLoading = false;
    });
    builder.addCase(postContact.rejected, (state) => {
      state.postLoading = false;
    });
    builder.addCase(getContacts.pending, (state) => {
      state.getLoading = true;
    });
    builder.addCase(getContacts.fulfilled, (state, {payload: item}) => {
      state.getLoading = false;
      state.item = item;
    });
    builder.addCase(getContacts.rejected, (state) => {
      state.getLoading = false;
    });
  }
});

export const contactReducers = contactsSlice.reducer;