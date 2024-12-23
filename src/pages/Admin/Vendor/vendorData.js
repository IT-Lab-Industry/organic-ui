import images from '../../../assets/img/images'

export const vendorData = [
  {
    vendorId: 1,
    vendorPhoto: images.vendorShop10,
    vendorBanner: images.vendorBanner,
    vendorName: 'Alice Johnson',
    shopName: "Alice's Boutique",
    email: 'alice.johnson@example.com',
    phone: '555-1234',
    address: '123 Main St, Springfield, IL',
    description:
      ' Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is one of the wealthiest people in the world; as of April 2024, Forbes estimates his net worth to be $178 billion.',
    bankInfo: {
      bankName: 'Uttara bank Limited',
      branch: 'Dhaka(250690286)',
      Name: 'Adnan Hassan',
      accountNo: '370711410125555',
    },
    status: 'Active',
    discount: '20%',
    vendorProduct: [
      {
        id: 1,
        product_id: 'P001',
        name: 'Product 1',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 49.99,
        old_price: 59.99,
        save_percentage: 17,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 2,
        product_id: 'P002',
        name: 'Product 2',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 29.99,
        old_price: 39.99,
        save_percentage: 25,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct2,
        rating: 3.5,
      },
      {
        id: 3,
        product_id: 'P003',
        name: 'Product 3',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 79.99,
        old_price: 89.99,
        save_percentage: 11,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct3,
        rating: 5,
      },

      {
        id: 5,
        product_id: 'P005',
        name: 'Product 5',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 39.99,
        old_price: 49.99,
        save_percentage: 20,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct5,
        rating: 5,
      },
      {
        id: 6,
        product_id: 'P006',
        name: 'Product 6',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 149.99,
        old_price: 169.99,
        save_percentage: 12,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct6,
        rating: 5,
      },
      {
        id: 7,
        product_id: 'P007',
        name: 'Product 7',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 59.99,
        old_price: 69.99,
        save_percentage: 14,
        shipping_optimize: false,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 8,
        product_id: 'P008',
        name: 'Product 8',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 69.99,
        old_price: 79.99,
        save_percentage: 13,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 9,
        product_id: 'P009',
        name: 'Product 9',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 19.99,
        old_price: 29.99,
        save_percentage: 33,
        shipping_optimize: false,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 10,
        product_id: 'P010',
        name: 'Product 10',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 119.99,
        old_price: 139.99,
        save_percentage: 14,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
    ],
    createDate: '2024, 10 Feb',
  },
  {
    vendorId: 2,
    vendorPhoto: images.vendorShop1,
    vendorBanner: images.vendorBanner,
    vendorName: 'Bob Smith',
    shopName: "Bob's Electronics",
    email: 'bob.smith@example.com',
    phone: '555-5678',
    address: '456 Oak St, Springfield, IL',
    description:
      ' Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is one of the wealthiest people in the world; as of April 2024, Forbes estimates his net worth to be $178 billion.',
    bankInfo: {
      bankName: 'Uttara bank Limited',
      branch: 'Dhaka(250690286)',
      Name: 'Adnan Hassan',
      accountNo: '370711410125555',
    },
    status: 'Inactive',
    discount: '20%',
    vendorProduct: [
      {
        id: 1,
        product_id: 'P001',
        name: 'Product 1',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 49.99,
        old_price: 59.99,
        save_percentage: 17,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 2,
        product_id: 'P002',
        name: 'Product 2',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 29.99,
        old_price: 39.99,
        save_percentage: 25,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct2,
        rating: 3.5,
      },
      {
        id: 3,
        product_id: 'P003',
        name: 'Product 3',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 79.99,
        old_price: 89.99,
        save_percentage: 11,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct3,
        rating: 5,
      },

      {
        id: 5,
        product_id: 'P005',
        name: 'Product 5',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 39.99,
        old_price: 49.99,
        save_percentage: 20,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct5,
        rating: 5,
      },
      {
        id: 6,
        product_id: 'P006',
        name: 'Product 6',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 149.99,
        old_price: 169.99,
        save_percentage: 12,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct6,
        rating: 5,
      },
      {
        id: 7,
        product_id: 'P007',
        name: 'Product 7',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 59.99,
        old_price: 69.99,
        save_percentage: 14,
        shipping_optimize: false,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 8,
        product_id: 'P008',
        name: 'Product 8',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 69.99,
        old_price: 79.99,
        save_percentage: 13,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 9,
        product_id: 'P009',
        name: 'Product 9',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 19.99,
        old_price: 29.99,
        save_percentage: 33,
        shipping_optimize: false,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 10,
        product_id: 'P010',
        name: 'Product 10',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 119.99,
        old_price: 139.99,
        save_percentage: 14,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
    ],
    createDate: '2024, 10 Feb',
  },
  {
    vendorId: 3,
    vendorPhoto: images.vendorShop2,
    vendorBanner: images.vendorBanner,
    vendorName: 'Carol White',
    shopName: "Carol's Crafts",
    email: 'carol.white@example.com',
    phone: '555-8765',
    address: '789 Pine St, Springfield, IL',
    description:
      ' Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is one of the wealthiest people in the world; as of April 2024, Forbes estimates his net worth to be $178 billion.',
    bankInfo: {
      bankName: 'Uttara bank Limited',
      branch: 'Dhaka(250690286)',
      Name: 'Adnan Hassan',
      accountNo: '370711410125555',
    },
    status: 'Active',
    discount: '20%',
    vendorProduct: [
      {
        id: 1,
        product_id: 'P001',
        name: 'Product 1',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 49.99,
        old_price: 59.99,
        save_percentage: 17,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 2,
        product_id: 'P002',
        name: 'Product 2',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 29.99,
        old_price: 39.99,
        save_percentage: 25,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct2,
        rating: 3.5,
      },
      {
        id: 3,
        product_id: 'P003',
        name: 'Product 3',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 79.99,
        old_price: 89.99,
        save_percentage: 11,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct3,
        rating: 5,
      },

      {
        id: 5,
        product_id: 'P005',
        name: 'Product 5',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 39.99,
        old_price: 49.99,
        save_percentage: 20,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct5,
        rating: 5,
      },
      {
        id: 6,
        product_id: 'P006',
        name: 'Product 6',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 149.99,
        old_price: 169.99,
        save_percentage: 12,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct6,
        rating: 5,
      },
      {
        id: 7,
        product_id: 'P007',
        name: 'Product 7',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 59.99,
        old_price: 69.99,
        save_percentage: 14,
        shipping_optimize: false,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 8,
        product_id: 'P008',
        name: 'Product 8',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 69.99,
        old_price: 79.99,
        save_percentage: 13,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 9,
        product_id: 'P009',
        name: 'Product 9',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 19.99,
        old_price: 29.99,
        save_percentage: 33,
        shipping_optimize: false,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 10,
        product_id: 'P010',
        name: 'Product 10',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 119.99,
        old_price: 139.99,
        save_percentage: 14,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
    ],
    createDate: '2024, 10 Feb',
  },
  {
    vendorId: 4,
    vendorPhoto: images.vendorShop4,
    vendorBanner: images.vendorBanner,
    vendorName: 'David Brown',
    shopName: "David's Diner",
    email: 'david.brown@example.com',
    phone: '555-4321',
    address: '101 Maple St, Springfield, IL',
    description:
      ' Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is one of the wealthiest people in the world; as of April 2024, Forbes estimates his net worth to be $178 billion.',
    bankInfo: {
      bankName: 'Uttara bank Limited',
      branch: 'Dhaka(250690286)',
      Name: 'Adnan Hassan',
      accountNo: '370711410125555',
    },
    status: 'Pending',

    discount: '20%',
    vendorProduct: [
      {
        id: 1,
        product_id: 'P001',
        name: 'Product 1',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 49.99,
        old_price: 59.99,
        save_percentage: 17,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 2,
        product_id: 'P002',
        name: 'Product 2',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 29.99,
        old_price: 39.99,
        save_percentage: 25,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct2,
        rating: 3.5,
      },
      {
        id: 3,
        product_id: 'P003',
        name: 'Product 3',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 79.99,
        old_price: 89.99,
        save_percentage: 11,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct3,
        rating: 5,
      },

      {
        id: 5,
        product_id: 'P005',
        name: 'Product 5',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 39.99,
        old_price: 49.99,
        save_percentage: 20,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct5,
        rating: 5,
      },
      {
        id: 6,
        product_id: 'P006',
        name: 'Product 6',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 149.99,
        old_price: 169.99,
        save_percentage: 12,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct6,
        rating: 5,
      },
      {
        id: 7,
        product_id: 'P007',
        name: 'Product 7',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 59.99,
        old_price: 69.99,
        save_percentage: 14,
        shipping_optimize: false,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 8,
        product_id: 'P008',
        name: 'Product 8',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 69.99,
        old_price: 79.99,
        save_percentage: 13,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 9,
        product_id: 'P009',
        name: 'Product 9',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 19.99,
        old_price: 29.99,
        save_percentage: 33,
        shipping_optimize: false,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 10,
        product_id: 'P010',
        name: 'Product 10',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 119.99,
        old_price: 139.99,
        save_percentage: 14,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
    ],
    createDate: '2024, 10 Feb',
  },
  {
    vendorId: 5,
    vendorPhoto: images.vendorShop3,
    vendorBanner: images.vendorBanner,
    vendorName: 'Eve Davis',
    shopName: "Eve's Essentials",
    email: 'eve.davis@example.com',
    phone: '555-6789',
    address: '202 Birch St, Springfield, IL',
    description:
      ' Elon Reeve Musk is a businessman and investor. He is the founder, chairman, CEO, and CTO of SpaceX; angel investor, CEO, product architect, and former chairman of Tesla, Inc.; owner, executive chairman, and CTO of X Corp.; founder of the Boring Company and xAI; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is one of the wealthiest people in the world; as of April 2024, Forbes estimates his net worth to be $178 billion.',
    bankInfo: {
      bankName: 'Uttara bank Limited',
      branch: 'Dhaka(250690286)',
      Name: 'Adnan Hassan',
      accountNo: '370711410125555',
    },
    status: 'Active',
    discount: '20%',
    vendorProduct: [
      {
        id: 1,
        product_id: 'P001',
        name: 'Product 1',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 49.99,
        old_price: 59.99,
        save_percentage: 17,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 2,
        product_id: 'P002',
        name: 'Product 2',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 29.99,
        old_price: 39.99,
        save_percentage: 25,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct2,
        rating: 3.5,
      },
      {
        id: 3,
        product_id: 'P003',
        name: 'Product 3',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 79.99,
        old_price: 89.99,
        save_percentage: 11,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct3,
        rating: 5,
      },

      {
        id: 5,
        product_id: 'P005',
        name: 'Product 5',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 39.99,
        old_price: 49.99,
        save_percentage: 20,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct5,
        rating: 5,
      },
      {
        id: 6,
        product_id: 'P006',
        name: 'Product 6',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 149.99,
        old_price: 169.99,
        save_percentage: 12,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct6,
        rating: 5,
      },
      {
        id: 7,
        product_id: 'P007',
        name: 'Product 7',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 59.99,
        old_price: 69.99,
        save_percentage: 14,
        shipping_optimize: false,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 8,
        product_id: 'P008',
        name: 'Product 8',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 69.99,
        old_price: 79.99,
        save_percentage: 13,
        shipping_optimize: true,
        free_shipping: true,
        image: images.flashproduct1,
        rating: 4.5,
      },
      {
        id: 9,
        product_id: 'P009',
        name: 'Product 9',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 19.99,
        old_price: 29.99,
        save_percentage: 33,
        shipping_optimize: false,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 5,
      },
      {
        id: 10,
        product_id: 'P010',
        name: 'Product 10',
        title:
          'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
        price: 119.99,
        old_price: 139.99,
        save_percentage: 14,
        shipping_optimize: true,
        free_shipping: false,
        image: images.flashproduct1,
        rating: 4.5,
      },
    ],
    createDate: '2024, 10 Feb',
  },
]