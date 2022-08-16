import React, { Children, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
    const[isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>

        <Head>
            <title>{title ? title + ' - topsneakerstore':'topsneakers'}</title>
            <meta name="description" content="Online Sneaker Apparel and Accessories Store" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex min-h-screen flex-col justify-between">
            <header>
                <nav className='flex h-12 items-center px-4 justify-between shadow'>
                    <Link href="/">
                        <a className='text-lg font-bold'>topsneakers</a>
                    </Link>
                    <div className="flex m-0 p-0 h-8 max-w-xs my-0 mx-[30px] cursor-pointer bg-white" >
                        <form action="" class="relative mx-auto w-max cursor-pointer">
                            <input type="search" 
                                class="peer cursor-pointer relative z-10 h-8 min-w-4 w-12 rounded-full border bg-transparent pl-12 outline-none md:w-full md:cursor-text focus:w-full focus:cursor-text focus:border-gray-500 focus:pl-16 focus:pr-4" />
                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-500 peer-focus:stroke-gray-700" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </div>
                    <div className="hidden overflow-hidden md:block">
                        <Link href="/cart"><a className='p-2'>Cart</a></Link>
                        <Link href="/login"><a className='p-2'>Login</a></Link>
                    </div>
                    <div class="flex md:hidden overflow-hidden cursor-pointer"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/about">About</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
              `}</style>
            </header>
            <main className='container m-auto mt-4 px-4'>{children}</main>
            <footer className='flex h-10 justify-center items-center shadow-inner'>Copyright © 2022 topsneakerstore. All Rights Reserved. </footer>
        </div>
    </>
  );
}