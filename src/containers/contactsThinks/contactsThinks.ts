import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Contacts} from '../../types';

export const postContact = createAsyncThunk<void, Contacts>(
  'contact/postContact', async (contact) => {
    await axiosApi.post('/contact.json', contact);
  }
);