// Libraries
import React from 'react';
import { MdPerson } from 'react-icons/md';

// Stylesheets
import './Avatar.css';

export default function Avatar({ avatar }) {
  const avatarComponent = avatar ? (
    <img src={avatar} className="avatar__image" alt="avatar" />
  ) : (
    <MdPerson className="avatar__icon" />
  );
  return <div className="avatar">{avatarComponent}</div>;
}
