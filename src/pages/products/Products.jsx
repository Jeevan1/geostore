import React, { useState, useEffect } from "react";
import "./Product.scss";
import PageTopContainer from "../../components/pageTopContainer/PageTopContainer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PaginatedItems } from "../../components/pagination/Pagination";
import { fetchApiData } from "../../store/slice/reelsSlice";

function Products({ categories }) {
  const allProducts = useSelector((state) => state.products.products);
  const allReels = useSelector((state) => state.reels.reels);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredReels, setFilteredReels] = useState(allReels);
  const [topContent, setTopContent] = useState(true);

  const { search } = useParams();

  // Filter products based on the selected categories when the component mounts
  useEffect(() => {
    fetchApiData();
    const updateProducts = (val) => {
      const filterProduct = allProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filterProduct);
    };
    if (
      (!search && categories === `men's clothing`) ||
      categories === `women's clothing`
    ) {
      const filtered = allProducts.filter(
        (product) => product.category === categories
      );
      setFilteredProducts(filtered);
      setTopContent(false);
    } else if (search) {
      setFilteredProducts(updateProducts);
      setTopContent(false);
    } else {
      // If no categories is selected, show all products
      setFilteredProducts(allProducts);
      setTopContent(true);
    }
  }, [categories, allProducts, search]);

  return (
    <div className="Products">
      {/* top */}
      {topContent && (
        <PageTopContainer
          img={"url('../../../src/assets/img/bg/aboutus-01.jpg')"}
          title={"Our Products"}
          desc={"Lorem amet consectetur adipisicing elit. Doloremque, error."}
        />
      )}
      {/* end */}

      <div className="Products__section py-5">
        {
          console.log(allReels)
        }
        <div className="container">
          <div className="section__heading">
            <h2>Our Latest Products</h2>
            <i>Check out all of our products.</i>
          </div>
          <div className="products__items pt-5">
            <div className="category">
              <h6 className=" text-capitalize d-flex gap-2 align-items-center">
                {`${!search ? 'Category: ': 'Search: '}`}
                <span className=" fs-5 border-bottom fw-bold">
                  {!search? categories: search}
                </span>
              </h6>
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
