import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { filterReducer } from './filterSlice';
import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Bakkard Brown', number: '666-789-13' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const mixedReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, mixedReducer);

export const { addContact, deleteContact } = contactsSlice.actions;
