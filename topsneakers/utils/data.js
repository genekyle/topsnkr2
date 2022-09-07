import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'G',
            email: 'genomaga@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'k',
            email: 'kimmy@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Nike Dunk Low "Panda"',
            slug: 'nike-dunk-low-panda',
            category: 'Shoes',
            image:'/images/pandalows1.png',
            price: 120,
            brand: 'Nike',
            rating: 4.9,
            NumReviews: 7,
            sizeAvailable: [6, 10],
            sizing:[],
            images:
                [
                    { src: '/images/pandalows1.png', key: 1},
                    { src: '/images/pandalows2.png', key: 2},
                    { src: '/images/pandalows3.png', key: 3},
                    { src: '/images/pandalows4.png', key: 4}
                ],
            countInStock: 2,
            description: 'The upper Nike Dunk Low Retro White Black is constructed of white leather with black leather overlays and Swooshes. Classic Nike branding is featured on the nylon tongue, nodding to traditional Dunk design elements. A white midsole and black outsole completes the design'
        },
        {
            name: 'Yeezy 350 v2 "Beluga 2.0"',
            slug: 'yzy-350v2-beluga2',
            category: 'Shoes',
            image:'/images/beluga2350v2-1.png',
            price: 240,
            brand: 'Adidas',
            rating: 4.6,
            NumReviews: 3,
            sizeAvailable: [6, 10],
            countInStock: 2,
            description:"The Yeezy Beluga 2.0 takes Kanye West's famous adidas sneakers full circle by returning to the colors of the first adidas Yeezy Boost 350 V2."
        },
        {
            name: 'Yeezy 700 v2 "Static"',
            slug: 'yzy-700v2-static',
            category: 'Shoes',
            image:'/images/static700v2-1.png',
            price:250,
            brand: 'Adidas',
            rating: 4.5,
            NumReviews: 1,
            sizeAvailable: [8, 10.5],
            countInStock: 2,
            description:" This Yeezy 700 comes with a grey upper with white accents, white midsole, and a black sole. These sneakers released in December 2018 and retailed for $300."
        },
        {
            name: 'Air Jordan 1 Retro High OG "Shadow 2.0"',
            slug: 'aj1-high-shadow2',
            category: 'Shoes',
            image:'/images/shadow2aj1-1.png',
            price: 170,
            brand: 'Jordan',
            rating: 4.8,
            NumReviews: 6,
            sizeAvailable: [8, 10.5],
            countInStock: 2,
            description:'The upper of the Air Jordan 1 Shadow 2.0 is made of a black leather base with Light Smoke Grey overlays. A classic Wings logo appears on the lateral ankle wrap while a woven Nike Air label is stitched atop the tongue to complete the look.'
        },
        {
            name: 'A Bathing Ape Bape Sta Low "Black/White"',
            slug: 'bapesta-low-bw',
            category: 'Shoes',
            image:'/images/bwbapestalow1.png',
            price: 170,
            brand: 'BAPE',
            rating: 4.5,
            NumReviews: 1,
            sizeAvailable: [10.5],
            countInStock: 1,
            description:'A Bathing Ape is a Japanese streetwear brand founded by Nigo in 1993. Popularized with quirky graphic t-shirts and colorful hoodies, Bape entered the footwear realm with the Bapesta sneaker, arriving in bright colorways and distinct  collaborations with brands like Marvel, Spongebob, MoWax, Kanye West, jjjound and more.'
        },
        {
            name: 'New Balance 550 "White Grey"',
            slug: 'nb-550-wg',
            category: 'Shoes',
            image:'/images/wgnb550-1.png',
            price: 100,
            brand: 'New Balance',
            rating: 4.3,
            NumReviews: 12,
            sizeAvailable: [10.5],
            countInStock: 1,
            description:'The New Balance 550 White Grey features a white leather upper with monochromatic perforated leather overlays and puffed New Balance logos. From there, a woven New Balance Basketball tongue label and matching sole completes the design.'
        },
        {
            name: 'Eric Emanuel "EE Shorts" Black Varsity Red',
            slug: 'ee-short-bvr',
            category: 'Apparel',
            image:'/images/eeshort-black1.png',
            price: 148,
            brand: 'Eric Emanuel',
            rating: 4.8,
            NumReviews: 3,
            sizeAvailable: ['L'],
            countInStock: 1,
            description: "Simple yet Classic Mesh Basketball Shorts designed by New York City's Own Eric Emanuel."
        },
        {
            name: 'Eric Emanuel "EE Shorts" Burnt Summit',
            slug: 'ee-short-bs',
            category: 'Apparel',
            image:'/images/eeshort-burnt1.png',
            price: 148,
            brand: 'Eric Emanuel',
            rating: 4.5,
            NumReviews: 1,
            sizeAvailable: ['L'],
            countInStock: 1,
            description: "Simple yet Classic Mesh Basketball Shorts designed by New York City's Own Eric Emanuel."
        }
    ]
}

export default data;