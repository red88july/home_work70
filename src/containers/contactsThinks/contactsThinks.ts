import axiosApi from '../../axiosApi.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Contacts, ContactsMutation} from '../../types';

export const postContact = createAsyncThunk<void, Contacts>(
  'contact/postContact', async (contact) => {
    await axiosApi.post('/contact.json', contact);
  }
);

export const getContacts = createAsyncThunk<ContactsMutation[], undefined>(
  'contact/getContact',
  async () => {
    try {
      const response = await axiosApi.get<ContactsMutation>('/contact.json');
      const contacts = response.data;

      const contactsItemValue = Object.values(contacts).map((contact) => ({
        id: contact.id,
        name: contact.name,
        photo: contact.photo,
      }));

      return contactsItemValue;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
);