import { useContext } from 'react';
import AppContext from '../../../Logic/Context/AppContext/AppContext';
import BookContext from '../../../Logic/Context/BookContext/BookContext';
import UserContext from '../../../Logic/Context/UserContext/UserContext';

const useContexts = () => {
  const {
    currentPage,
    lastShelfUpdate,
    dispatch: appDispatch,
  } = useContext(AppContext);
  const { jwt } = useContext(UserContext);
  const { shelves, dispatch: bookDispatch } = useContext(BookContext);

  return {
    currentPage,
    lastShelfUpdate,
    appDispatch,
    jwt,
    shelves,
    bookDispatch,
  };
};

export default useContexts;
