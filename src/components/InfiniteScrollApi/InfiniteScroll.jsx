// import React from 'react'
import { useCallback, useRef, useState } from "react";
import UseScroll from "./UseScroll";
import "./styles.css";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = UseScroll(query, pageNumber);

  const observer = useRef(null);
  const lastBook = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
    },
    [loading, hasMore]
  );

  function handleChange(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Text to Search"
        />
      </div>
      {books.map((item, index) => {
        if (books.length === index.length + 1) {
          return (
            <div key={item} ref={lastBook}>
              {" "}
              {item}{" "}
            </div>
          );
        } else {
          return <div key={item}> {item} </div>;
        }
      })}
      <div>{loading && " Loading........."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default InfiniteScroll;
