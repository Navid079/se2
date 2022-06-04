// Libraries
import React, { useContext } from 'react';
import {
  BrowserRouter as RouterComponent,
  Routes,
  Route,
} from 'react-router-dom';

// Components
import LandingWrapper from '../../Pages/LandingWrapper/LandingWrapper';
import Landing from '../../Pages/Landing/Landing';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';
import HomeWrapper from '../../Pages/HomeWrapper/HomeWrapper';
import UserContext from '../Context/UserContext/UserContext';
import BookView from '../../Pages/BookView/BookView';
import Agenda from '../../Pages/Agenda/Agenda';
import ChapterView from '../../Pages/ChapterView/ChapterView';
import TextEditor from './../../Pages/TextEditor/TextEditor';
import BookContext from '../Context/BookContext/BookContext';
import AppContext from '../Context/AppContext/AppContext';
import AddBook from "../../Pages/AddBook/AddBook";
import AddChapter from '../../Pages/AddChapter/AddChapter';

export default function Router() {
  const userContext = useContext(UserContext);
  const bookContext = useContext(BookContext);
  const appContext = useContext(AppContext);
  window.onbeforeunload = () => {
    localStorage.setItem('user-context', JSON.stringify(userContext));
    localStorage.setItem('book-context', JSON.stringify(bookContext));
    localStorage.setItem('app-context', JSON.stringify(appContext));
  };

  return (
    <RouterComponent>
      <Routes>
        <Route exact path="/" element={<LandingWrapper />}>
          <Route exact path="" element={<Landing />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
        </Route>
        <Route exact path="/app" element={<HomeWrapper />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="viewBook/:bookId" element={<BookView />} />
          <Route exact path="agenda/:bookId" element={<Agenda />} />
          <Route
            exact
            path="viewChapter/:bookId/:chapterId"
            element={<ChapterView />}
          />
          <Route exact path="editor" element={<TextEditor />} />
          <Route exact path="add" element={<AddBook />} />
          <Route exact path="addchapter" element={<AddChapter />} />
        </Route>
      </Routes>
    </RouterComponent>
  );
}
