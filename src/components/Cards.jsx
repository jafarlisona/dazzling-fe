import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString(); 
  }
  return (
    <div className="cards">
      {cards.map((x) => (
        <div className="card" key={x._id}>
          <h2>{x.title}</h2>
          <div className="folder-date">
            <div className="date">
              <i className="fa-regular fa-calendar-days"></i>
              <span>{formatDate(x.createdAt)}</span>
            </div>
            <div className="folder">
              <i className="fa-regular fa-folder-open"></i>
              <span>{x.folder}</span>
            </div>
          </div>
          <div className="card-content">
            <div className="img">
              <img src={x.image} alt="" />
            </div>
            <div className="text">
              <p>{x.description}</p>
              <Link to="#">
                Continue Reading <i class="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
