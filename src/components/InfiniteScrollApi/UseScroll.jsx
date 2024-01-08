import axios from "axios";
import { useEffect, useState } from "react";

const UseScroll = (query, pageNumber) => {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: "https://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prev) => {
          return [...new Set(...prev, ...res.data.docs.map((b) => b.title))];
        });
        console.log(res.data);
        setLoading(false);
        setHasMore(res.data.docs.length > 0);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.log(err);
        setError(true);
      });

    return () => cancel;
  }, [query, pageNumber]);

  return { books, hasMore, loading, error };
};

export default UseScroll;
