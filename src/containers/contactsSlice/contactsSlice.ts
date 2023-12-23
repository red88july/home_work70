import {createSlice} from '@reduxjs/toolkit';
import {postContact} from '../contactsThinks/contactsThinks.ts';

interface ContactsState {
  postLoading: boolean;
}

const initialState: ContactsState = {
  postLoading: false,
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
  }
});

export const contactReducers = contactsSlice.reducer;