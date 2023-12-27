import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
// backend driven

export default function PaginatedBar() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchData = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10 - 10}`
    );
    console.log(res.data.products);
    setProducts(res.data.products);
    setTotalPages(res.data.total / 10);
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== currentPage
    )
      setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products.map((prod) => (
              <span className="products__single" key={prod.id}>
                {
                  <>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <span>{prod.title}</span>
                  </>
                }
              </span>
            ))}
          </div>
        )}
      </div>
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={currentPage === 1 ? "disable" : ""}
            onClick={() => handleClick(currentPage - 1)}
          >
            ⬅
          </span>
          {/* here we make 10 no of block for pagination. */}
          {[...Array(totalPages)].map((_, index) => (
            <span
              className={
                currentPage === index + 1 ? "pagination__selected" : ""
              }
              onClick={() => handleClick(index + 1)}
              key={index + 1}
            >
              {index + 1}
            </span>
          ))}
          <span
            className={currentPage === totalPages ? "disable" : ""}
            onClick={() => handleClick(currentPage + 1)}
          >
            ➡
          </span>
        </div>
      )}
    </div>
  );
}
