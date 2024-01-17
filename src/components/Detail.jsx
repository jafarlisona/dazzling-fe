import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  }
  return (
    <section id="detail">
      <div className="post">
        <div className="img">
          <img src={cards.image} alt="" />
        </div>
        <div className="text">
          <h1>{cards.title}</h1>
          <div className="folder-date">
            <div className="date">
              <i className="fa-regular fa-calendar-days"></i>
              <span>{formatDate(cards.createdAt)}</span>
            </div>
            <div className="folder">
              <i className="fa-regular fa-folder-open"></i>
              <span>{cards.folder}</span>
            </div>
          </div>
          <p>{cards.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Detail;
