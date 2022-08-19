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
                id="featured"
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                layout="responsive"
            ></Image>
            <div className="flex space-x-2">
                <div class = "thumbnail active" className="relative sm:h-[100px] sm:w-[100px] sm:border-solid sm:border-2 md:h-[150px] md:w-[150px]">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full hover:cursor-pointer hover:bg-[#F5F5DC]"
                    ></Image>
                </div>
                <div class = "thumbnail" className="relative sm:h-[100px] sm:w-[100px] sm:border-solid sm:border-2 md:h-[150px] md:w-[150px]"> 
                    <Image
                        src="/images/pandalows2.png"
                        layout="fill"
                        className="rounded-full hover:cursor-pointer hover:bg-[#F5F5DC]"
                        ></Image>
                </div>
                <div class = "thumbnail" className="relative sm:h-[100px] sm:w-[100px] sm:border-solid sm:border-2 md:h-[150px] md:w-[150px]"> 
                    <Image
                        src="/images/pandalows3.png"
                        layout="fill"
                        className="rounded-full hover:cursor-pointer hover:bg-[#F5F5DC]"
                        ></Image>
                </div>
            </div>
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
