import React from 'react'
import MainBanner from '../../components/MainBanner/MainBanner'
import LatestPost from '../../components/LatestProduct/LatestPost'
import Explore from '../../components/Explore/Explore'
import Social from '../../components/social/Social'
import Newsletter from '../../components/Newsletter/Newsletter'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { fetchApiData, getAllProducts } from '../../store/slice/productSlice'
import { useState } from 'react'

function Home() {
  // const dispatch = useDispatch();

  // // Change the selector to use 'product' instead of 'products'
  // const products = useSelector((state) => state.products);

  // const [pro,setPro]=  useState(products.products);
  // useEffect(() => {
  //   dispatch(fetchApiData())
  // }, []);

  return (
    <div className='home'>
      {/* <p>
        {products.loading && <div>loading...</div>}
        {!products.loading && products.error ? <div>{products.error}</div> : null}
        {!products.loading && !products.error ? <div>
          {products.products.map(user => <p></p>)}
        </div> : 's'}
      </p> */}
      {/* <p>
        {pro.map((item) => <p>{item.title}</p>)}
      </p> */}
      <MainBanner />
      <LatestPost category={`men's clothing`} title={`Men's Latest`}/>
      <LatestPost category={`women's clothing`} title={`Women's Latest`}/>
      <LatestPost category={`electronics`} title={`Kid's Latest`}/>
      <Explore />
      <Social />
      <Newsletter />
    </div>
  )
}

export default Home
