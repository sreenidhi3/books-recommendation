import React, { useState } from "react";
import "./styles.css";

var recommendationDatabase = {
  Classics: [
    {
      name: "Pride & Prejudice",
      rating: "⭐⭐⭐⭐⭐",
      author: "Jane Austen"
    },
    {
      name: "Little Women",
      rating: "⭐⭐⭐⭐⭐",
      author: "Louisa May Alcott"
    },
    {
      name: "A Midsummer Night's Dream",
      rating: "  ⭐⭐⭐⭐",
      author: "William Shakespeare"
    }
  ],
  "Self Help": [
    {
      name: "Rich Dad, Poor Dad",
      rating: "⭐⭐⭐⭐⭐",
      author: "Robert T. Kiyosaki, Sharon Lechter"
    },
    {
      name: "How to Win Friends and Influence People",
      rating: "⭐⭐⭐⭐",
      author: "Dale Carnegie"
    }
  ],
  Fiction: [
    {
      name: "Harry Potter",
      rating: "⭐⭐⭐⭐⭐",
      author: "J. K. Rowling"
    },
    {
      name: "Frankenstein",
      rating: "⭐⭐⭐⭐",
      author: "Mary Shelley"
    },
    {
      name: "Don Quixote",
      rating: "⭐⭐⭐⭐",
      author: " Miguel de Cervantes"
    }
  ],
  "Short Stories": [
    {
      name: "The Last Leaf",
      rating: "⭐⭐⭐⭐⭐",
      author: "O. Henry"
    },
    {
      name: "My Lost Dollar",
      rating: "⭐⭐⭐⭐⭐",
      author: "Stephen Leacock"
    },
    {
      name: "The Kabuliwala",
      rating: "⭐⭐⭐⭐⭐",
      author: "Rabindranath Tagore"
    }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("Short Stories");

  function genreEventHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div className="block">
        <h1>
          <span>📚</span>GoodReads
        </h1>
        <p>Here are my favorite books. Select genres below to know more.</p>
        <ul className="genreList">
          {Object.keys(recommendationDatabase).map((genre) => (
            <li key={genre}>
              <button onClick={() => genreEventHandler(genre)}>{genre}</button>
            </li>
          ))}
        </ul>
        <hr />
        <br />
        <div className="recomm">
          <ul>
            {
              recommendationDatabase[selectGenre].map((book) => (
                <li className="item" key={book.name}>
                  <span style={{ fontSize: "larger" }}>{book.name}</span> <br />
                  <span style={{ fontSize: "smaller" }}>{book.rating}</span>
                  <br />
                  <span style={{ fontSize: "smaller" }}>{book.author}</span>
                </li>
              ))
              //console.log(recommendationDatabase.Classics[0]);
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
