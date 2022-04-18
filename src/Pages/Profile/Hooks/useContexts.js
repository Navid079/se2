import { useContext } from 'react';
import AppContext from '../../../Logic/Context/AppContext/AppContext';
import BookContext from '../../../Logic/Context/BookContext/BookContext';
import UserContext from '../../../Logic/Context/UserContext/UserContext';

const useContexts = () => {
  const {
    currentPage,
    myBooksSynced,
    dispatch: appDispatch,
  } = useContext(AppContext);
  const {
    username,
    fullName,
    phone,
    bio,
    token,
    avatar,
    dispatch: userDispatch,
  } = useContext(UserContext);
  const { dispatch: bookDispatch } = useContext(BookContext);

  return {
    currentPage,
    myBooksSynced,
    appDispatch,
    username,
    fullName,
    phone,
    bio,
    token,
    avatar,
    bookDispatch,
    userDispatch,
  };
};
export default useContexts;
