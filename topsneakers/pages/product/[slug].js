import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import Sizing from '../../components/Sizing';

export default function ProductPage() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if(!product){
        return <div>Product Not Found</div>
    }
    return (
    <Layout title={product.name}>
        <div className="py-2">
            <Link href="/">Back to Products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
            <div className="md:col-span-2">
            <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
            ></Image>
            </div>
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
                            <div className="card">{size}</div>
                        ))}
                    </div>
                    <li>{product.description}</li>
                </ul>
            </div>
        </div>
    </Layout>
  )
}