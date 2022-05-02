// Libraries
import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import Footer from '../../Components/UI/Footer/Footer';
import Navbar from '../../Components/UI/Navbar/Navbar';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import UserContext from '../../Logic/Context/UserContext/UserContext';
import BookContext from '../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './HomeWrapper.css';
import ChapterView from './../ChapterView/ChapterView';

export default function HomeWrapper() {
  const { currentPage, dispatch: appDispatch } = useContext(AppContext);
  const { isLoggedIn, dispatch } = useContext(UserContext);
  const { dispatch: bookDispatch } = useContext(BookContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  });

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
    bookDispatch({ type: 'RESET' });
    appDispatch({ type: 'RESET' });
  };

  return (
    <div className="home-wrapper">
      <Navbar onLogout={logoutHandler} />
      <div className="home-wrapper__container">
        {/* <ChapterView title="فلسفه تنهایی" chapter="20">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </ChapterView> */}
        <Outlet />
      </div>
      <Footer currentPage={currentPage} />
    </div>
  );
}
