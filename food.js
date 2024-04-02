const data = [
  {
    id: 1,
    name: "BROWN SUGAR",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1710905354brownsugar1kg1.png",
    amt: 140,
    size: "1 KG",
    seller: "Patanjali",
    catagory: "SUGER",
  },

  {
    id: 2,
    name: "Gur",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690955853Gur-1kg1.png",
    amt: 110,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "SUGER",
  },

  {
    id: 3,
    name: "Oats",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1708338108oats200g(1).png",
    amt: 45,
    size: "1 kg",
    seller: "patanjali",
    catagory: "GROCERY",
  },
  {
    id: 4,
    name: "Walnut inshell",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1709554874WalnutInshell-400g1.png",
    amt: 450,
    size: "400 g",
    seller: "Patanjali",
    catagory: "DRYFRUIT",
  },
  {
    id: 5,
    name: "Cashew",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690019501Cashew250g1.png",
    amt: 275,
    size: "250 g",
    seller: "Patanjali",
    catagory: "DRYFRUIT",
  },

  {
    id: 6,
    name: " Gold tea ",
    img: "https://www.patanjaliayurved.net/assets/product_images/additional_images/DSC_0041_1709113594.png",
    amt: 325,
    size: "500  g",
    seller: "Patanjali",
    catagory: "GROCERY",
  },

  {
    id: 7,
    name: "Sooji",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690278398Sooji500g1.png",
    amt: 35,
    size: "500  g",
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "sugar",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690181438sugar1kg1.png",
    amt: 58,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "SUGER",
  },
  {
    id: 9,
    name: "Divya peya",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16897520171.png",
    amt: 85,
    size: "100 g",
    seller: "Patanjali",
    catagory: "GROCERY",
  },
  {
    id: 10,
    name: "Makhana",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690178382MakhanaPack250g1.png",
    amt: 370,
    size: "250 g",
    seller: "Patanjali",
    catagory: "DRYFRUIT",
  },
  {
    id: 11,
    name: "Bel Candy",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690961620Belcandy500g1.png",
    amt: 140,
    size: "500g",
    seller: "Patanjali",
    catagory: "CANDY",
  },
  {
    id: 12,
    name: "guava jam",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16909586271.png",
    amt: 165,
    size: "500 g",
    seller: "Patanjali",
    catagory: "JAM",
  },
  {
    id: 13,
    name: "Twisty Tasty Noodles",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16900007761.png",
    amt: 10,
    size: "50 g",
    seller: "Patanjali",
    catagory: "NOODLES",
  },
  {
    id: 14,
    name: "Amla Candy",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1691576825AmlaCandy500g1.png",
    amt: 175,
    size: "500 g",
    seller: "Patanjali",
    catagory: "CANDY",
  },
  {
    id: 15,
    name: "khatta meetha",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16897578321.png",
    amt: 10,
    size: "42 g",
    seller: "Patanjali",
    catagory: "NAMKEEN",
  },
  {
    id: 16,
    name: "amla pickle",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16909613251.png",
    amt: 200,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "PICKLE",
  },
  {
    id: 17,
    name: "Bel Murabba",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690959472Belmurraba1kg1.png",
    amt: 155,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "MURABBA",
  },
  {
    id: 18,
    name: "Amla Murabba",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690959531AmlaMurabba-1kg1.png",
    amt: 200,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "MURABBA",
  },
  {
    id: 19,
    name: "Besen",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690957558Besan500gNew1.png",
    amt: 60,
    size: "500 g",
    seller: "Patanjali",
    catagory: "GROCERY",
  },
  {
    id: 20,
    name: "choco flakes",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689327480ChocoFlakes-125g1.png",
    amt: 55,
    size: "125 g",
    seller: "Patanjali",
    catagory: "BREAKFAST",
  },
  {
    id: 21,
    name: "corn flakes",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690265211Cornflakes875g1.png",
    amt: 250,
    size: "875 g",
    seller: "Patanjali",
    catagory: "BREAKFAST",
  },
  {
    id: 22,
    name: "Ginger Candy",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1708161416GingerCandy1.png",
    amt: 55,
    size: "100 g",
    seller: "Patanjali",
    catagory: "CANDY",
  },
  {
    id: 23,
    name: "Lemon Pickle",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690263373LemonPickle-500g1.png",
    amt: 130,
    size: "500 g",
    seller: "Patanjali",
    catagory: "PICKLE",
  },
  {
    id: 24,
    name: "Mango Pickle",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689847809MangoPickle-500g1.png",
    amt: 145,
    size: "500 g",
    seller: "Patanjali",
    catagory: "PICKLE",
  },
  {
    id: 25,
    name: "Mixed Pickle",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690268652MixedPickle-500g1.png",
    amt: 220,
    size: "1kg",
    seller: "Patanjali",
    catagory: "PICKLE",
  },
  {
    id: 26,
    name: "Ragi Cookies Digestive",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1695709158RagiCookies200g1.png",
    amt: 75,
    size: "200 g",
    seller: "Patanjali",
    catagory: "BISCUIT",
  },
  {
    id: 27,
    name: "Bandhani Hing",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690961412bandhanihing10g1.png",
    amt: 25,
    size: "10g",
    seller: "Patanjali",
    catagory: "GROCERY",
  },
  {
    id: 28,
    name: "Doodh Biscuit",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16975334021.png",
    amt: 125,
    size: "800g",
    seller: "Patanjali",
    catagory: "BISCUIT",
  },
  {
    id: 29,
    name: "Groundnut Oil",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690280299GroundNutOilB1ltr1.png",
    amt: 225,
    size: "1 L",
    seller: "Patanjali",
    catagory: "OIL",
  },
  {
    id: 30,
    name: "Rice Bran Oil",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690280183RiceBranOilBottle1ltr1.png",
    amt: 135,
    size: "1 L",
    seller: "Patanjali",
    catagory: "OIL",
  },
  {
    id: 31,
    name: "Sunflower Oil",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690284075SunflowerOil1ltrB1.png",
    amt: 125,
    size: "1 L",
    seller: "Patanjali",
    catagory: "OIL",
  },
  {
    id: 32,
    name: "Sesame Oil (B)",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690278803SesameOilbottle1l1.png",
    amt: 340,
    size: "1 L",
    seller: "Patanjali",
    catagory: "OIL",
  },
  {
    id: 33,
    name: "Delight kids fruits & nuts",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1710850102delightkids1.png",
    amt: 25,
    size: "23 g",
    seller: "Patanjali",
    catagory: "CHOCOLATE",
  },
  {
    id: 34,
    name: "black salt",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690182716blacksalt100g1.png",
    amt: 10,
    size: "100g",
    seller: "Patanjali",
    catagory: "SALT",
  },
  {
    id: 35,
    name: "rock salt",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689328950Rocksalt1kg(1).png",
    amt: 60,
    size: "1kg",
    seller: "Patanjali",
    catagory: "SALT",
  },
  {
    id: 36,
    name: "iodized salt",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689329495PatanjaliSalt1kg1.png",
    amt: 22,
    size: "1 kg",
    seller: "Patanjali",
    catagory: "SALT",
  },
  {
    id: 37,
    name: "Cumin Whole",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690956007CuminWhole-100g1.png",
    amt: 132,
    size: "100G",
    seller: "Patanjali",
    catagory: "SPICES",
  },
  {
    id: 38,
    name: "Carom Seeds",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690957724caromseed100g1.png",
    amt: 70,
    size: "100G",
    seller: "Patanjali",
    catagory: "SPICES",
  },
  {
    id: 39,
    name: "Red chilli Powder",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690955461redchilli200g1.png",
    amt: 115,
    size: "200g",
    seller: "Patanjali",
    catagory: "SPICES",
  },
  {
    id: 40,
    name: "Turmeric Powder",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1690961261TurmericPowder-100g1.png",
    amt: 35,
    size: "100g",
    seller: "Patanjali",
    catagory: "SPICES",
  },
  {
    id: 41,
    name: "A2 cow Ghee",
    img: "https://www.theauric.com/cdn/shop/products/01_58901a00-d28a-4798-a8d4-565e88344009_360x.jpg?v=1692356502",
    amt: 2350,
    size: "1 L",
    seller: "AURIC",
    catagory: "GHEE",
  },
  {
    id: 42,
    name: "Bilona cow Ghee",
    img: "https://www.theauric.com/cdn/shop/files/Ghee1_360x.jpg?v=1688194586",
    amt: 1299,
    size: "1 L",
    seller: "AURIC",
    catagory: "GHEE",
  },
  {
    id: 43,
    name: "cow ghee",
    img: "https://www.theauric.com/cdn/shop/files/Cow-Ghee-Web_360x.jpg?v=1692356502",
    amt: 999,
    size: "1 L",
    seller: "AURIC",
    catagory: "GHEE",
  },
  {
    id: 44,
    name: "Italian Cheese & Herbs",
    img: "https://www.theauric.com/cdn/shop/files/4_bf4e8b0a-a0ae-4c2c-bb9c-9901cf6a257c_360x.jpg?v=1705492698",
    amt: 147,
    size: "3 pack",
    seller: "AURIC",
    catagory: "CHEESE",
  },
  {
    id: 45,
    name: "Mexican Peri Peri",
    img: "https://www.theauric.com/cdn/shop/files/3_addea6e4-2aae-4bb2-bc18-8b04918694bd_360x.jpg?v=1705492698",
    amt: 147,
    size: "3 pack",
    seller: "AURIC",
    catagory: "CHEESE",
  },
  {
    id: 46,
    name: "Almonds (premium Quality)",
    img: "https://www.theauric.com/cdn/shop/files/2_aadb7596-2dc9-4a6d-9d16-bf20e05a9673_360x.jpg?v=1704263885",
    amt: 2000,
    size: "1kg",
    seller: "AURIC",
    catagory: "DRYFRUIT",
  },
  {
    id: 47,
    name: "Cashewsn (premium Quality)",
    img: "https://www.theauric.com/cdn/shop/files/1_13_360x.jpg?v=1704262960",
    amt: 2000,
    size: "1kg",
    seller: "AURIC",
    catagory: "DRYFRUIT",
  },
  {
    id: 48,
    name: "Multi Millet Idli Mix",
    img: "https://www.theauric.com/cdn/shop/products/01_7ae84f07-f947-47bb-96dc-00389064c2af_360x.jpg?v=1665058932",
    amt: 300,
    size: "400g",
    seller: "AURIC",
    catagory: "BREAKFAST",
  },
  {
    id: 49,
    name: "multi Millet Dose Mix",
    img: "https://www.theauric.com/cdn/shop/products/01_ec5057a0-1024-4eb5-9e27-1e427ab2793f_360x.jpg?v=1665058932",
    amt: 300,
    size: "400g",
    seller: "AURIC",
    catagory: "BREAKFAST",
  },
  {
    id: 50,
    name: "Ragi Almond Cookies",
    img: "https://www.theauric.com/cdn/shop/products/3_4_360x.jpg?v=1665056942",
    amt: 400,
    size: "1 TIN-10pices",
    seller: "AURIC",
    catagory: "BISCUIT",
  }

];

const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products) {
  if (products.length > 0) {
    const product_details = products
      .map(
        (product) => `
    <div class="product"onclick="display('section5')">
    <div class="img">
      <img src="${product.img}" alt="${product.name}" />
    </div>
    <div class="product-details">
      <span class="name">${product.name}</span>
      <span class="amt">Rs.${product.amt}</span>
      <span class="seller">${product.seller}</span>
      <div>
      <button class="cart1">View Details<i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
    </div>
    </div>
  </div>`
      )
      .join("");

    productsContainer.innerHTML = product_details;
  } else {
    productsContainer.innerHTML = "<h3>No Products Available</h3>";
  }
}


function setCategories() {
  const allCategories = data.map((product) => product.catagory);
  //console.log(allCategories);
  const catagories = [
    "All",
    ...allCategories.filter((product, index) => {
      return allCategories.indexOf(product) === index;
    }),
  ];
  //console.log(catagories);
  categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");

  categoryList.addEventListener("click", (e) => {
    const selectedCatagory = e.target.textContent;
    selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
  });
}
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");

function setPrices() {
  const priceList = data.map((product) => product.amt);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceValue.textContent = "Rs." + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "Rs." + e.target.value;
    displayProducts(data.filter((product) => product.amt <= e.target.value));
  });
}

const txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  if (value) {
    displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
  } else {
    displayProducts(data);
  }
});


displayProducts(data);
setCategories();
setPrices();