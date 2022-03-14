import React from 'react';
import Book from '../../Book/Book';
import Card from '../../UI/Card/Card';

import './AuthorWorks.css';

export default function AuthorWorks({ className }) {
  return (
    <Card className={`works ${className}`}>
      <h2 className="works__text">آثار</h2>
      <div className="works__books">
        <Book
          className="works__book"
          title="عنوان کتاب"
          cover={require('../../../images/navbar-colorful-books.png')}
          price="20000"
          stars={5}
          editable={true}
          finished={false}
        />
      </div>
    </Card>
  );
}
