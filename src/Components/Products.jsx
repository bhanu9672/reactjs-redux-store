import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../store/cartSlice";
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'

const Products = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    //const [products, setProducts] = useState([]);
    useEffect(() => {

        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products");
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <h2> Loading... </h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2 style={{ color: "red" }}> Something went wrong </h2>
    }

    return (
        <>
            <div className='productsWrapper'>
                {
                    products.map(product => (
                        <div className='cart' key={product.id}>
                            <img src={product.image} alt="" />
                            <h4> {product.title} </h4>
                            <h4>
                                <Badge colorScheme='green'>{product.category}</Badge>
                            </h4>
                            <h4> {product.price} </h4>
                            <Button colorScheme='blue' onClick={() => handleAdd(product)}>
                                <PlusSquareIcon w={8} h={6} color="white.500" />
                                Add To Cart
                            </Button>
                        </div>
                    ))
                }
                <div className="card card-5"></div>
            </div>
        </>
    )
}

export default Products;