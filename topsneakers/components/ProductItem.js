/* eslint-disable @next/next/no-img-elemnt */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function ProductItem({product}) {
    const router = useRouter();
    return (
        <div className="card">
            <Link href={`/product/${product.slug}`}>
                <a>
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </a>
            </Link>

            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className="text-lg">{product.name}</h2>
                    </a>
                </Link>
                <p className="mb-2">{product.brand}</p>
                <button className="primary-button" type="button" onClick={() => router.push(`/product/${product.slug}`)}>
                    ${product.price}
                </button>
            </div>
        </div>
    )
}

export default ProductItem