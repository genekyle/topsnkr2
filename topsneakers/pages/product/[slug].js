import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ImageSlider from '../../components/ImageSlider';
import { Store } from '../../utils/store';
import Product from '../../models/Product';
import db from '../../utils/db';
import axios from 'axios'
import { toast } from 'react-toastify';


export default function ProductPage(props) {
    const { product } = props
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    let button = false;
    let sizePicked = [];
    let sizesChosen = [];
    let pickedSize = false;
    if(!product){
        return <Layout title="Product Not Found">Product Not Found</Layout>
    }
    
    const addToCartHandler = async(size) => {
        if (pickedSize == true) {
            const sizes = sizePicked
            const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
            const quantity = existItem ? existItem.quantity + 1 : 1;
            const { data } = await axios.get(`/api/products/${product._id}`);
            if (data.countInStock < quantity) {
                return toast.error(`Sorry. We're out of stock of that product...`);
            }
            console.log(product.slug)
            dispatch ({ type: 'CART_ADD_ITEM', payload: { ...product, quantity, sizePicked }})
            router.push('/cart')
        }
        if (pickedSize == false) {
            if ( button === false) {
                const text = document.createTextNode('* Required')
                const changeMe = document.getElementById('changeMe')
                const box = document.getElementById('box')
                changeMe.appendChild(text)
                changeMe.classList.add("text-red-500")
                box.classList.add("text-red-500")
                return button = true;
            }
        }
    }

    const sizeClick = (size) => {
        if (pickedSize === true) {
            sizePicked = size;
            sizesChosen = size;
            console.log(`you picked size ${sizePicked}`)
            console.log(`pickedSize is still ${pickedSize}`)
            console.log(size)
        } else {
            pickedSize = true;
            sizePicked = size;
            sizesChosen = size;
            console.log(`pickedSize is now ${pickedSize}`)
            console.log(`you picked size ${sizePicked}`)
        }
    }
    
    
    return (
    <Layout title={product.name}>
        <div className="py-2">
            <Link href="/">Back to Products</Link>
        </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-3">
                    <ImageSlider product={product}></ImageSlider>
                </div>
                <div>
                    <div>
                        <ul>
                            <li> 
                                <h1 className="text-lg">{product.name}</h1>
                            </li>
                            <li>Category: {product.category}</li>
                            <li>Brand: {product.brand}</li>
                            <div id="changeMe">Sizes Available</div>
                            <div id="box" class="grid grid-cols-4 gap-4">
                                {product.sizeAvailable.map((size) => (
                                    <button value={size} className="size primary-button rounded-full focus:bg-slate-300" onClick={product => sizeClick(product.target.value)}>{size}</button>
                                ))}
                            </div>
                            <li>{product.description}</li>
                        </ul>
                        <button className="primary-button rounded-full w-full" onClick={addToCartHandler}>Add to Cart</button>
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;

    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    return {
        props: {
            product: product ? db.convertDocToObj(product) : null,
        },
    };
}