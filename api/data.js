import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
      name: 'mohamed',
      email: 'mohamedbebba1@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      
    },
    {
      name: 'jamel',
      email: 'jamelbebba1@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
      
    },
    {
      name: 'najwa',
      email: 'najwa123@gmail.com',
      password: bcrypt.hashSync('123445', 8),
      isAdmin: false,
      
    },
    {
      name: 'mariem',
      email: 'mimou@gmail.com',
      password: bcrypt.hashSync('123445', 8),
      isAdmin: false,
      
    },
    {
      name: 'yassine',
      email: 'yassine@gmail.com',
      password: bcrypt.hashSync('123445', 8),
      isAdmin: false,
      
    },
  ],
    products: [
      {
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        color:'black',
        size:'L',
       countInStock: 10,
        brand: 'Nike', 
        rating: 5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
  
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 100,
        color:'blue',
        size:'M',
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
  
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 220,
        color:'blue',
        size:'M',
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
  
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        color:'blue',
        size:'M',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
  
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        color:'blue',
        size:'M',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
  
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 12,
        color:'blue',
        size:'M',
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;
  