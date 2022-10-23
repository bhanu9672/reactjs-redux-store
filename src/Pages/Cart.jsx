import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { VscDiffRemoved } from "react-icons/vsc";
import { Button } from '@chakra-ui/react'

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            Cart
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div>
        <div className="cartWrapper">

          {
            products.length > 0 &&
            <h2>
              You have {products.length} cars in your garage.
            </h2>

          }

          {
            products.map(product => (
              <div className='cartCard'>
                <img src={product.image} alt="" />
                <h2> {product.title} </h2>
                <h5> {product.price} </h5>
                <Button colorScheme='red' onClick={() => handleRemove(product.id)}>
                  <VscDiffRemoved w={8} h={6} color="white.500" />
                  Remove
                </Button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart