import { useState, useEffect } from "react";

const API_URL = `https://api.punkapi.com/v2/beers`;
const PERPAGE = 25;

export default function SearchBarPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState("");

  const makeApiCall = (url, page, per_page, beerName) => {
    fetch(
      `${url}?page=${page}&per_page=${per_page}&${
        beerName ? `beer_name=${beerName}` : ""
      }`
    )
      .then((resp) => resp.json())
      .then((list) => {
        if (!Array.isArray(list)) {
          setList([]);
        } else {
          setList(list);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    makeApiCall(API_URL, page, PERPAGE, beerName);
  }, [page, beerName]);

  return (
    <div className="App">
      <div>
        <label htmlFor="page">Page : </label>
        <select
          id="page"
          onChange={(e) => {
            setPage(e.target.value);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <br/>
        <input
          placeholder="Enter beer name"
          onChange={(e) => setBeerName(e.target.value)}
        />
      </div>
      {list.map((e) => (
        <Beer {...e} key={e.id} />
      ))}
    </div>
  );
}

const Beer = ({id, name, tagline, image_url, description }) => {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>Tag line : <span style={{background:"purple", color:"whitesmoke"}}>{tagline}</span></p>
      <p>{description}</p>
      <img src={image_url} alt={name} width="100px" style={{objectFit:"cover"}} />
    </div>
  );
};
