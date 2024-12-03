import React, { useState } from 'react';
import './Second.css';

function Second() {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [books, setBooks] = useState([]);

  const handleSaveBook = (event) => {
    event.preventDefault();
    if (bookName.trim() && authorName.trim()) {
      const newBook = {
        name: bookName,
        author: authorName,
        isRead: false,
      };
      setBooks([...books, newBook]);
      setBookName('');
      setAuthorName('');
    }
  };

  const toggleReadStatus = (index) => {
    const updatedBooks = books.map((book, i) =>
      i === index ? { ...book, isRead: !book.isRead } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div>
      <form onSubmit={handleSaveBook} className="container form-book">
        <label className="book-label">Kitob nomi</label>
        <input
          className="book-input"
          type="text"
          placeholder="Kitob nomini kiriting"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <label className="author-label">Muallif nomi</label>
        <input
          className="author-input"
          type="text"
          placeholder="Muallif nomini kiriting"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <button type="submit" className="second-btn">
          Kitob Qo‘shish
        </button>
      </form>

      <ul className="book-list">
        {books.map((book, index) => (
          <li
            key={index}
            className={`book-item ${book.isRead ? 'read' : 'unread'}`}
          >
            <span>
              <strong>{book.name}</strong> - {book.author}
            </span>
            <button
              className="status-btn"
              onClick={() => toggleReadStatus(index)}
            >
              {book.isRead ? "O'qilmagan" : "O'qilgan"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Second;
