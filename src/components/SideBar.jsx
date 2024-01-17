import React, { useEffect, useState } from "react";

function SideBar() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => setCards(data.slice(0, 5)));
  }, []);
  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleString();
  }
  return (
    <div className="sidebar">
      <div className="mini-posts">
        <div className="input">
          <input type="text" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="popular">
          <div className="buttons">
            <button className="selected">POPULAR</button>
            <button>RECENT</button>
            <button>
              <i className="fa-solid fa-comments"></i>
            </button>
          </div>
          <div className="content">
            {cards.map((x) => (
              <div className="mini-card">
                <div className="image">
                  <img src={x.image} alt="" />
                </div>
                <div className="text">
                  <p>{x.title}</p>
                  <span>{formatDate(x.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="comments">
        <h2>Recent Comments</h2>
        <div className="comments-container">
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <p>
              hhhh on <span>Hello world!</span>
            </p>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <p>
              Stefanos on <span> Bullet Point Test</span>
            </p>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <p>
              mimi on <span>Gallery</span>
            </p>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <p>
              Finn on <span>Page with comments</span>
            </p>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <p>
              gargi on <span>Page with comments</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
