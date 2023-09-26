import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { products } from "../../assets/data/products";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiFillStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./Pagination.scss";
import { itemAddedCartPopup } from "../../store/slice/stateSlice";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/slice/cartSlice";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, allProducts }) {
  const dispatch = useDispatch();
  const itemToAdd = (id, title, category, quantity, price, image) => ({
    id: id,
    title: title,
    category,
    quantity: quantity,
    price,
    image,
  });

  const popupCart = (active, title) => ({
    active: active,
    item: title,
  });
  return (
    <>
      <div className="row">
        {currentItems &&
          allProducts.map((item, idx) => (
            <div className="col-lg-4 py-3">
              <div className="product__item shadow p-3" key={idx}>
                <div className="product__item__top">
                  <img src={item.image} alt="" />
                  <div className="product__item__top__content">
                    <ul className=" ">
                      <li>
                        <Link className="link" to={`/${item.id}`}>
                          <AiOutlineEye />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <AiFillStar />
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          dispatch(
                            addCart(
                              itemToAdd(
                                item.id,
                                item.title,
                                item.category,
                                1,
                                item.price,
                                item.image
                              )
                            )
                          );
                          dispatch(
                            itemAddedCartPopup(popupCart(true, item.title))
                          );
                        }}
                      >
                        <Link className="link">
                          <AiOutlineShoppingCart />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product__item__content row d-flex  justify-content-between">
                  <div className="col-lg-6">
                    <h6>{item.title}</h6>
                    <span>${item.price}</span>
                  </div>
                  <ul className=" col-lg-6 stars d-flex">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export function PaginatedItems({ itemsPerPage, allProducts }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allProducts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} allProducts={allProducts} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
