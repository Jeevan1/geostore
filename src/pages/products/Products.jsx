import React, { useState, useEffect } from "react";
import "./Product.scss";
import PageTopContainer from "../../components/pageTopContainer/PageTopContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PaginatedItems } from "../../components/pagination/Pagination";

function Products({categories}) {
  const allProducts = useSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [topContent, setTopContent] = useState(true);

  // Filter products based on the selected categories when the component mounts
  useEffect(() => {
    if (categories ===`men's clothing` || categories ===`women's clothing`) {
      const filtered = allProducts.filter((product) => product.category === categories);
      setFilteredProducts(filtered);
      setTopContent(false);
    } else {
      // If no categories is selected, show all products
      setFilteredProducts(allProducts);
      setTopContent(true);
    }
  }, [categories, allProducts]);

  return (
    <div className="Products">
      {/* top */}
      {topContent && <PageTopContainer
        img={"url('../../../src/assets/img/bg/aboutus-01.jpg')"}
        title={"Our Products"}
        desc={"Lorem amet consectetur adipisicing elit. Doloremque, error."}
      />}
      {/* end */}

      <div className="Products__section py-5">
        <div className="container">
          <div className="section__heading">
            <h2>Our Latest Products</h2>
            <i>Check out all of our products.</i>
          </div>
          <div className="products__items pt-5">
          <div className="category">
            <h6 className=" text-capitalize d-flex gap-2 align-items-center">Category: <span className=" fs-5 border-bottom fw-bold">{categories}</span></h6>
          </div>
            <div className="pagination">
              <PaginatedItems itemsPerPage={5} allProducts={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
