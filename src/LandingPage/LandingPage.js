import React from "react";
import Button from "../Components/UI/Button/Button";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <Button className="landing-page__login" type="" onClick="">
          ورود
        </Button>
        <Button className="landing-page__signup" type="" onClick="">
          ثبت نام
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
