import React from 'react';

import './ProfPic.css';

import { MdPerson } from 'react-icons/md';

export default function ProfPic({ avatar }) {
  const avatarComponent = avatar ? (
    <img src={avatar} className="avatar__image" />
  ) : (
    <MdPerson className="profpic__icon" />
  );
  return <div className="profpic">{avatarComponent}</div>;
}
