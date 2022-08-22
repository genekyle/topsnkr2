import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import ImageSlider from '../../components/ImageSlider';
import { Store } from '../../utils/store';

export default function ProductPage() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    let sizePicked = "";
    let pickedSize = false;
    if(!product){
        return <div>Product Not Found</div>
    }
    
    const sizeClick = (size) => {
        if (pickedSize === true) {
            sizePicked = size;
            console.log(`you picked size ${sizePicked}`)
            console.log(`pickedSize is still ${pickedSize}`)
        } else if (pickedSize === false) {
            pickedSize = true;TodInt
            sizePicked = size;
            console.log(`pickedSize is now ${pickedSize}`)
            console.log(`you picked size ${sizePicked}`)
        }
    }
    
    const addToCartHandler = () => {
        if (pickedSize == true) {
            dispatch ({ type: 'CART_ADD_ITEM', payload: { ...product, sizePicked: sizePicked, quantity: 1}})
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
                            Sizes Available
                            <div class="grid grid-cols-4 gap-4">
                                {product.sizeAvailable.map((size) => (
                                    <button value={size} className="primary-button rounded-full" onClick={product => sizeClick(product.target.value)}>{size}</button>
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
