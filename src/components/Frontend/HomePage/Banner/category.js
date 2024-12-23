import images from '../../../../assets/img/images'

const categoryData = [
  //   {
  //     id: 'cat1',
  //     name: 'Electronic Accessories',
  //     icon: 'src/assets/img/frontend/category/adapter.png',
  //     children: [
  //       {
  //         id: 'subCat1',
  //         name: 'Mobile Phones',
  //         icon: 'src/assets/img/frontend/category/adapter.png',
  //         subCategories: [
  //           {
  //             id: 'subSubCat1',
  //             name: 'Smartphones',
  //             icon: '📱',
  //           },
  //           {
  //             id: 'subSubCat2',
  //             name: 'Feature Phones',
  //             icon: '📞',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat2',
  //         name: 'Laptops',
  //         icon: '💻',
  //         children: [
  //           {
  //             id: 'subSubCat3',
  //             name: 'Gaming Laptops',
  //             icon: '🎮',
  //           },
  //           {
  //             id: 'subSubCat4',
  //             name: 'Ultrabooks',
  //             icon: '💼',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat2',
  //     name: 'Clothing',
  //     icon: 'src/assets/img/frontend/category/car.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat3',
  //     name: 'Electronic-devices',
  //     icon: 'src/assets/img/frontend/category/electronic-devices.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat4',
  //     name: 'Food',
  //     icon: 'src/assets/img/frontend/category/food.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat5',
  //     name: 'Home Applications',
  //     icon: 'src/assets/img/frontend/category/home-appliance.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat6',
  //     name: 'Mother & Baby',
  //     icon: 'src/assets/img/frontend/category/mother.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat7',
  //     name: 'Home Lifestyle',
  //     icon: 'src/assets/img/frontend/category/sofa.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat8',
  //     name: 'Health & Beauty',
  //     icon: 'src/assets/img/frontend/category/spa.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat9',
  //     name: 'Sports & Outdoors',
  //     icon: 'src/assets/img/frontend/category/sports.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat10',
  //     name: 'Watches, Bags, Jewellery',
  //     icon: 'src/assets/img/frontend/category/watch.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'cat11',
  //     name: 'Women s & Girls Fashion',
  //     icon: 'src/assets/img/frontend/category/women.png',
  //     children: [
  //       {
  //         id: 'subCat3',
  //         name: "Men's Clothing",
  //         icon: '👨',
  //         children: [
  //           {
  //             id: 'subSubCat5',
  //             name: 'Shirts',
  //             icon: '👔',
  //           },
  //           {
  //             id: 'subSubCat6',
  //             name: 'Trousers',
  //             icon: '👖',
  //           },
  //         ],
  //       },
  //       {
  //         id: 'subCat4',
  //         name: "Women's Clothing",
  //         icon: '👩',
  //         children: [
  //           {
  //             id: 'subSubCat7',
  //             name: 'Dresses',
  //             icon: '👗',
  //           },
  //           {
  //             id: 'subSubCat8',
  //             name: 'Skirts',
  //             icon: '🩳',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ]

  {
    name: "Women's & Girls' Fashion",
    icon: 'src/assets/img/frontend/category/adapter.png',
    children: [
      {
        name: 'Traditional Wear',
        path: '/traditional-wear',
        icon: 'src/assets/img/frontend/category/adapter.png',
      },
      {
        name: 'Shalwar Kameez',
        icon: 'src/assets/img/frontend/category/adapter.png',
        subCategories: [
          { name: 'Shalwar Kameez', path: '/shalwar-kameez/shalwar-kameez' },
          { name: 'Sarees', path: '/shalwar-kameez/sarees' },
          { name: 'Kurtis', path: '/shalwar-kameez/kurtis' },
          {
            name: 'Unstitched Fabric',
            path: '/shalwar-kameez/unstitched-fabric',
          },
          {
            name: 'Party Kameez & Gowns',
            path: '/shalwar-kameez/party-kameez-gowns',
          },
        ],
      },
    ],
  },
  {
    name: 'Clothing',
    icon: 'src/assets/img/frontend/category/adapter.png',
    children: [
      {
        name: 'Shalwar Kameez',
        path: '/shalwar-kameez',
        icon: 'src/assets/img/frontend/category/adapter.png',
        subCategories: [
          {
            name: 'Shalwar Kameez',
            path: '/shalwar-kameez/shalwar-kameez',
            icon: images.categoryProduct7,
          },
          {
            name: 'Sarees',
            path: '/shalwar-kameez/sarees',
            icon: images.categoryProduct1,
          },
          {
            name: 'Kurtis',
            path: '/shalwar-kameez/kurtis',
            icon: images.categoryProduct2,
          },
          {
            name: 'Unstitched Fabric',
            path: '/shalwar-kameez/unstitched-fabric',
            icon: images.categoryProduct3,
          },
          {
            name: 'Party Kameez & Gowns',
            path: '/shalwar-kameez/party-kameez-gowns',
            icon: images.categoryProduct5,
          },
        ],
      },
      {
        name: 'Traditional Wear',
        icon: 'src/assets/img/frontend/category/adapter.png',
      },
    ],
  },
]

export default categoryData
