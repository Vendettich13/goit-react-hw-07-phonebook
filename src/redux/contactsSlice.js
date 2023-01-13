import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addMatcher(
        isAnyOf(fetchContacts, addContact, deleteContact),
        anyPendingReducer
      )
      .addMatcher(
        isAnyOf(fetchContacts, addContact, deleteContact),
        anyRejectedReducer
      )
      .addMatcher(
        isAnyOf(fetchContacts, addContact, deleteContact),
        anyFulfilledReducer
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
