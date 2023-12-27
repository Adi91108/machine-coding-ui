import axios from "axios";
import { useEffect, useState } from "react";
// frontend driven project
import "./styles.css";
export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=100");
    console.log(res.data.products);
    setProducts(res.data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== currentPage
    )
      setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products
              .slice(currentPage * 10 - 10, currentPage * 10)
              .map((prod) => (
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
          {[...Array(products.length / 10)].map((_, index) => (
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
            className={currentPage === products.length / 10 ? "disable" : ""}
            onClick={() => handleClick(currentPage + 1)}
          >
            ➡
          </span>
        </div>
      )}
    </div>
  );
}
