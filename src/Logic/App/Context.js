// Libraries
import React from 'react';

// Components
import { UserContextProvider } from '../Context/UserContext/UserContext';
import { AppContextProvider } from '../Context/AppContext/AppContext';
import { BookContextProvider } from '../Context/BookContext/BookContext';

export default function Context({ children }) {
  return (
    <UserContextProvider>
      <AppContextProvider>
        <BookContextProvider>{children}</BookContextProvider>
      </AppContextProvider>
    </UserContextProvider>
  );
}
