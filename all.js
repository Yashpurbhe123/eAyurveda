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
    seller: "Patanjali",
    catagory: "GROCERY",
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
  },
  // cosmatics
  {
    id: 111,
    name: "Saundarya Aloe vera Gel",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1700199709Aloveragel60g1.png",
    amt: 50,
    size: "60ml",
    seller: "Patanjali",
    category: "Face Care"
  },
  {
    id: 112,
    name: "Herbal Kajal",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689484143HerbalKajal3g1.png",
    amt: 90,
    size: "3g",
    seller: "Patanjali",
    category: "Makeup"
  },
  {
    id: 113,
    name: "Divya Gulab Jal",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689576629GulabJal120ml1.png",
    amt: 35,
    size: "120ml",
    seller: "Patanjali",
    category: "Face Care"
  },
  {
    id: 114,
    name: "Moringa Vit-c Tikta Cream Face Wash",
    img: "https://nathabit.in/_nat/images/Moringa_Cream_PDP_1_acd1b517e2.jpg?format=auto&width=1080&quality=75",
    amt: 244,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 115,
    name: "Brightening Ubtan Tikta Face Wah",
    img: "https://nathabit.in/_nat/images/1_fb7d90aedb.jpg?format=auto&width=1080&quality=75",
    amt: 244,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 116,
    name: "Bitter Neem Tikta Cream Face Wash",
    img: "https://nathabit.in/_nat/images/Neem_Cream_PDP_1_ecc2907567.jpg?format=auto&width=1080&quality=75",
    amt: 299,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 117,
    name: "Pure Turmeric Rosehip Mukhalaya Face Oil",
    img: "https://nathabit.in/_nat/images/Turmeric_Rosehip_1_2d4190af5b.jpg?format=auto&width=1080&quality=75",
    amt: 427,
    size: "30ml",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 118,
    name: "Pomegranate Roes Lip Butter",
    img: "https://nathabit.in/_nat/images/pomegranate_rose_web_978a99c229.jpg?format=auto&width=1080&quality=75",
    amt: 200,
    size: "10g",
    seller: "Nat Habit",
    category: "Lip Care"
  },
  {
    id: 119,
    name: "Pure Netraa Serum Dhataki Soaked Undereye Care",
    img: "https://nathabit.in/_nat/images/1st_image_43219d35aa.jpg?format=auto&width=1080&quality=75",
    amt: 319,
    size: "9.2mi",
    seller: "Nat Habit",
    category: "Eye Care"
  },
  {
    id: 1110,
    name: "Lemon Lanvender Lip Butter",
    img: "https://nathabit.in/_nat/images/lemon_lavender_web_51a596e338.jpg?format=auto&width=1080&quality=75",
    amt: 200,
    size: "10g",
    seller: "Nat Habit",
    category: "Lip Care"
  },
  {
    id: 1111,
    name: "Fresh Orange Kiwi Vit-C Gel",
    img: "https://nathabit.in/_nat/images/Orange_Kiwi_6842bb4065.jpg?format=auto&width=1080&quality=75",
    amt: 235,
    size: "80g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 1112,
    name: "Fresh Olive Vit-E Night Gel",
    img: "https://nathabit.in/_nat/images/Olive_Vit_E_d96692345a.jpg?format=auto&width=1080&quality=75",
    amt: 235,
    size: "80g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 1113,
    name: "Ready to Apply Henna Paste (Pack of 2)",
    img: "https://nathabit.in/_nat/images/Henna_paste_pack_2_ceaed1eaa0.jpg?format=auto&width=1080&quality=75",
    amt: 342,
    size: "220g",
    seller: "Nat Habit",
    category: "Hair Care"
  },
  {
    id: 1114,
    name: "Ready to Apply Henna Root Touch Up",
    img: "https://nathabit.in/_nat/images/1st_image_f55c826b02.jpg?format=auto&width=1080&quality=75",
    amt: 85,
    size: "60g",
    seller: "Nat Habit",
    category: "Hair Care"
  },
  {
    id: 1115,
    name: "Transformative Soundarya Night Cream",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/1/5/15623_g_transformative_soundarya_night_cream_12g_side_copy.png",
    amt: 2850,
    size: "12g",
    seller: "Forest Essestials",
    category: "Face Care"
  },
  {
    id: 16,
    name: "Kashmiri Walnut Gel Scrub",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/8/8853_revitalising_kashmiri_walnut_gel_scrub_50g_front_copy_1.png",
    amt: 1425,
    size: "50g",
    seller: "Forest Essestials",
    category: "Face Care"
  },
  {
    id: 17,
    name: "Som Rasa Velvet Concealer Chandan",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21265_velvet_concealer_som_rasa_chandan_3.2g_product_display_1.jpg",
    amt: 2350,
    size: "3.2g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 18,
    name: "Highlight glow Manikya-Ruby",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21347_highlighting_glow_ruby_manikya_5g_open.png",
    amt: 2200,
    size: "5g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 19,
    name: "Highlight glow Mukta-Sliver",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21348_highlighting_glow_silver_mukta_5g_open.png",
    amt: 2200,
    size: "5g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 20,
    name: "Som Rasa Silk Skin Tint Kesari",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21262_som_rasa_silk_skin_tint_kesari_40ml_product_display_1.jpg",
    amt: 3250,
    size: "40ml",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 21,
    name: "Som Rasa Silk Skin Tint Chandan",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/1/0/1057_som_rasa_silk_skin_tint_chandan_40ml_product_display_1.jpg",
    amt: 3250,
    size: "40ml",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 22,
    name: "Som Rasa Silk Skin Tint Genhu",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/1/0/1056_som_rasa_silk_skin_tint_genhu_40ml_product_display_1.jpg",
    amt: 3250,
    size: "40ml",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 23,
    name: "Noor Nikhaar Satin Cheek Tint Gulaabi",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21284_satin_cheek_tint_noor_nikhaar_gulaabi_5g_product_display_1.jpg",
    amt: 1975,
    size: "5g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 24,
    name: "Noor Nikhaar Satin Cheek Tint Manikya-Ruby",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21287_satin_cheek_tint_noor_nikhaar_ruby_manikya_5g_product_display_1.jpg",
    amt: 1975,
    size: "5g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 25,
    name: "Madhu Rasa Tinted Lip Serum Anjeer",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/2/1/21280_tinted_lip_serum_madhu_rasa_anjeer_2.2_g_product_display_1.jpg",
    amt: 1850,
    size: "2.2g",
    seller: "Forest Essestials",
    category: "Lip Care"
  },
  {
    id: 26,
    name: "Nayantara Clear Lash & Brow Serum",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/9/5/9500_nayantara_clear_lash___brow_serum_8.5g_front.png",
    amt: 1495,
    size: "8.5ml",
    seller: "Forest Essestials",
    category: "Eye Care"
  },
  {
    id: 27,
    name: "Gulaab Khaas Kajal Charcoal Black",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/9/5/9572_gulaab_khaas_kajal_charcoal_black_0.30g__front.png",
    amt: 950,
    size: "0.30g",
    seller: "Forest Essestials",
    category: "Makeup"
  },
  {
    id: 28,
    name: "Anti Acne Cleansing Foam",
    img: "https://static.kamaayurveda.in/cdn-cgi/image/width=640,format=auto/pub/media/catalog/product/cache/378129b977c0447474b52f397234ee02/a/n/antiacne-cleanser-foam_50ml_600x600px_1.png",
    amt: 975,
    size: "50ml",
    seller: "Kama Ayurveda",
    category: "Face Care"
  },
  {
    id: 29,
    name: "Kumkumadi Brightening Cleansing Oil",
    img: "https://static.kamaayurveda.in/cdn-cgi/image/width=640,format=auto/pub/media/catalog/product/cache/378129b977c0447474b52f397234ee02/k/k/kk-cleansing-oil_50ml_600x600px_1.png",
    amt: 1345,
    size: "50ml",
    seller: "Kama Ayurveda",
    category: "Face Care"
  },
  {
    id: 30,
    name: "Pure Lavender Water",
    img: "https://static.kamaayurveda.in/cdn-cgi/image/width=640,format=auto/pub/media/catalog/product/cache/378129b977c0447474b52f397234ee02/p/u/pure-lavender-water-50ml_3.png",
    amt: 425,
    size: "50ml",
    seller: "Kama Ayurveda",
    category: "Face Care"
  },
  {
    id: 31,
    name: "Cream Foundation / Concealear Makeup Base",
    img: "https://barvaskintherapie.com/cdn/shop/files/resize_foundation1_209x.progressive.jpg?v=1711945035",
    amt: 360,
    size: "15ml",
    seller: "Barva Skin Therapie",
    category: "Makeup"
  },
  {
    id: 32,
    name: "Natural Lipstick",
    img: "https://barvaskintherapie.com/cdn/shop/files/FIERYdownsize_650x.progressive.jpg?v=1711945250",
    amt: 540,
    size: "",
    seller: "Barva Skin Therapie",
    category: "Makeup"
  },
  {
    id: 33,
    name: "Mango Butter Moisturizer",
    img: "https://barvaskintherapie.com/cdn/shop/files/resized_moisturizer_650x.progressive.jpg?v=1711945220",
    amt: 430,
    size: "50ml",
    seller: "Barva Skin Therapie",
    category: "Face Care"
  },
  {
    id: 34,
    name: "Perfect Glow Crème BB Cream",
    img: "https://barvaskintherapie.com/cdn/shop/files/resize_pg1_650x.progressive.jpg?v=1711945285",
    amt: 990,
    size: "50ml",
    seller: "Barva Skin Therapie",
    category: "Makeup"
  },
  {
    id: 35,
    name: "Sunshine Dew Face Oil",
    img: "https://barvaskintherapie.com/cdn/shop/files/resize_faceoil_650x.progressive.jpg?v=1711945714",
    amt: 630,
    size: "15ml",
    seller: "Barva Skin Therapie",
    category: "Face Care"
  },
  {
    id: 36,
    name: "Highlighter Makeup",
    img: "https://barvaskintherapie.com/cdn/shop/files/resize_highlighter1_650x.progressive.jpg?v=1711945054",
    amt: 630,
    size: "",
    seller: "Barva Skin Therapie",
    category: "Makeup"
  },
  {
    id: 37,
    name: "Kashmiri Saffron Sunscreen",
    img: "https://ayuga.in/cdn/shop/files/SS_1st_2_800x.jpg?v=1702544751",
    amt: 599,
    size: "50gm",
    seller: "Ayuga",
    category: "Face Care"
  },
  {
    id: 38,
    name: "Kashmiri Saffron Face Wash",
    img: "https://ayuga.in/cdn/shop/files/02_FaceWash_800x.jpg?v=1702544687",
    amt: 399,
    size: "100ml",
    seller: "Ayuga",
    category: "Face Care"
  },
  {
    id: 39,
    name: "Kashmiri Saffron Face Oil",
    img: "https://ayuga.in/cdn/shop/files/02_FaceOil_800x.jpg?v=1702544668",
    amt: 999,
    size: "15ml",
    seller: "Ayuga",
    category: "Face Care"
  },
  {
    id: 40,
    name: "Kashmiri Saffron Moisturizing Cream",
    img: "https://ayuga.in/cdn/shop/files/02_MoisturizingCream_157e3609-6d93-4e1b-b094-84e0f796d9a6_1000x.jpg?v=1709198276",
    amt: 849,
    size: "50gms",
    seller: "Ayuga",
    category: "Face Care"
  },
  {
    id: 41,
    name: "Kashmiri Saffron Face Mask",
    img: "https://ayuga.in/cdn/shop/files/02_FaceMask_800x.jpg?v=1702544639",
    amt: 599,
    size: "50gms",
    seller: "Ayuga",
    category: "Face Care"
  },
  {
    id: 42,
    name: "Mascura-Pure Black",
    img: "https://www.soultree.in/cdn/shop/products/2_a020ac4a-37a8-47b0-b8d2-a970d8a2b7a1_2048x2048.jpg?v=1659439421",
    amt: 1295,
    size: "6g",
    seller: "Soultree",
    category: "Makeup"
  },
  {
    id: 43,
    name: "BB Cream-Golden Glow",
    img: "https://www.soultree.in/cdn/shop/products/2_72c1abc8-8162-482d-afb5-7c7b689e3c9c_2048x2048.jpg?v=1659439283",
    amt: 1295,
    size: "30g",
    seller: "Soultree",
    category: "Face Care"
  },
  {
    id: 44,
    name: "Lipstick Coral Pink 904",
    img: "https://www.soultree.in/cdn/shop/products/904_2048x2048.jpg?v=1677838192",
    amt: 1295,
    size: "4g",
    seller: "Soultree",
    category: "Makeup"
  },
  {
    id: 45,
    name: "Lipstick Cantaloupe 817",
    img: "https://www.soultree.in/cdn/shop/products/817_2048x2048.jpg?v=1677838091",
    amt: 1295,
    size: "4g",
    seller: "Soultree",
    category: "Makeup"
  },
  {
    id: 46,
    name: "Lip Gloss-Lush Berry",
    img: "https://www.soultree.in/cdn/shop/products/2_ff5de596-42bf-4b7d-b21f-4604528bb0bf_2048x2048.jpg?v=1659439379",
    amt: 1095,
    size: "5g",
    seller: "Soultree",
    category: "Makeup"
  },
  {
    id: 47,
    name: "Long Stay Makeup Fixer with Aloe vera & Green Tea",
    img: "https://www.justherbs.in/cdn/shop/files/01_9f58d7bb-48ba-4b74-9712-0e424571edc7_1280x.jpg?v=1685681430",
    amt: 545,
    size: "100ml",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 48,
    name: "Herb Enriched Ayurvedic Llipstick",
    img: "https://www.justherbs.in/cdn/shop/products/Color-Bhavna_1_Pink_1280x.jpg?v=1665379591",
    amt: 575,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 49,
    name: "Hydrating Skin Tint",
    img: "https://www.justherbs.in/cdn/shop/products/0_1280x.jpg?v=1678098010",
    amt: 1295,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 50,
    name: "Oil Control Radiance Boost Compact Powder",
    img: "https://www.justherbs.in/cdn/shop/files/01-Porcelain_1280x.jpg?v=1687758602",
    amt: 275,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 50,
    name: "Oil Control Radiance Boost Compact Powder",
    img: "https://www.justherbs.in/cdn/shop/files/01-Porcelain_1280x.jpg?v=1687758602",
    amt: 275,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 51,
    name: "Herb Enriched Ayurvedic Lipstick Micro Mini Kit",
    img: "https://www.justherbs.in/cdn/shop/files/1_93b2322f-00e7-40b1-95f9-5d7d8c83a3f5_1280x.jpg?v=1689335838",
    amt: 575,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 52,
    name: "Tinted Lip Balms SPF 20",
    img: "https://www.justherbs.in/cdn/shop/products/Beetroot-Tinted-Lip-Balm-SPF-20_1280x.jpg?v=1672390052",
    amt: 295,
    size: "",
    seller: "Just Herbs",
    category: "Lip Care"
  },
  {
    id: 53,
    name: "Serum Foundation Dewy Finish SPF 30",
    img: "https://www.justherbs.in/cdn/shop/files/01-Vanilla_29f3548a-0618-4640-8c95-30b134993b35_1280x.jpg?v=1685190875",
    amt: 699,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 54,
    name: "Long Stay Relaxed Matte Liquid Lipstick with Vitamin E",
    img: "https://www.justherbs.in/cdn/shop/files/JHRML01ToffeeTemptation_1280x.jpg?v=1693464105",
    amt: 425,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 55,
    name: "Herb Enriched Waterproof Eyecliner Organic",
    img: "https://www.justherbs.in/cdn/shop/files/JHEL-01-Eclectic-Blue_1280x.jpg?v=1685605139",
    amt: 295,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 56,
    name: "Long Stay Liquid Sindoor",
    img: "https://www.justherbs.in/cdn/shop/products/RubyRed_1280x.jpg?v=1678448225",
    amt: 225,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 57,
    name: "Long Wear Weightless Foundationn",
    img: "https://www.justherbs.in/cdn/shop/files/04-Natural_4a704069-efb7-4513-b22c-7f3a2d98fe9f_1280x.jpg?v=1707984229",
    amt: 499,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 58,
    name: "Herb Enriched 4-in-1 Eye Shadow Palette",
    img: "https://www.justherbs.in/cdn/shop/files/1_115131ea-7385-481d-b308-610f222ab6db_1280x.jpg?v=1698383265",
    amt: 375,
    size: "",
    seller: "Just Herbs",
    category: "Makeup"
  },
  {
    id: 59,
    name: "Amla & Bhringraj Hair Cleanser",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_950678f6-96b1-4a23-a35d-e37eb69be7e6.jpg?v=1684411760&width=800",
    amt: 210,
    size: "210ml",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 60,
    name: "Pure Rose Water Skin Toner",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_cbd62902-bb8d-42dd-ae7d-fff81b1bf2bf.jpg?v=1684473056&width=1000",
    amt: 249,
    size: "24g",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 61,
    name: "Khadi Natural Sandalwood Face Pack",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_39a098d7-eabf-443b-8aca-311e4898ca32.jpg?v=1684479926&width=1000",
    amt: 140,
    size: "50g",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 62,
    name: "Alomd & Saffron Moisturizer",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_5dd1a49b-acad-4f8d-a73d-bb441c30582d.jpg?v=1684479240&width=1000",
    amt: 275,
    size: "210ml",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 63,
    name: "Rose & Pappya Face Scrub",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_3cae9f1b-bf27-4e34-8ae0-c5caceda3465.jpg?v=1687239485&width=1000",
    amt: 250,
    size: "50g",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 64,
    name: "Neem & Tulsi Face Wash",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1-1_b1fa651c-5362-4a81-ade6-00f6d35bc47a.jpg?v=1684479697&width=1000",
    amt: 210,
    size: "210ml",
    seller: "Khadi Natural",
    category: "Face Care"
  },
  {
    id: 65,
    name: "Organic Amla Powder",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_1e18b3fa-59df-49ff-8b97-5d44f36ffa6f.jpg?v=1691474091&width=1000",
    amt: 235,
    size: "150g",
    seller: "Khadi Natural",
    category: "Face Care/Hair Care"
  },
  {
    id: 66,
    name: "Organic Shikakai Powder",
    img: "https://www.khadinatural.com/cdn/shop/files/1_b05b1f85-4b06-4d3e-934f-7397241bdeb3.png?v=1691473864&width=1000",
    amt: 235,
    size: "150g",
    seller: "Khadi Natural",
    category: "Face Care/Hair Care"
  },
  {
    id: 67,
    name: "Organic Reetha Powder",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_84ed4a01-6521-4340-8c83-01391f457be1.jpg?v=1691474436&width=1000",
    amt: 235,
    size: "150g",
    seller: "Khadi Natural",
    category: "Face Care/Hair Care"
  },
  {
    id: 68,
    name: "Kasturi Nalpamarodi Skin Brightening&De-tanning Body Ubtan",
    img: "https://sheshaayurveda.com/wp-content/uploads/2021/02/02-1-min-scaled.jpg",
    amt: 599,
    size: "150g",
    seller: "Sheesha Naturals",
    category: "Body Care"
  },
  {
    id: 69,
    name: "Precious Kumkumadi Lightning Lip Balm",
    img: "https://sheshaayurveda.com/wp-content/uploads/2023/02/ALTMF-SHESHA-LIP-TEX-01-min.jpg",
    amt: 350,
    size: "5g",
    seller: "Sheesha Naturals",
    category: "Lip Care"
  },
  {
    id: 70,
    name: "Kasturi Turmeric & Vetiver Shower Gel",
    img: "https://sheshaayurveda.com/wp-content/uploads/2022/11/ALTMF-SHESHA-SHRGL-TEX-01-min.jpg",
    amt: 399,
    size: "200ml",
    seller: "Sheesha Naturals",
    category: "Body Care"
  },
  {
    id: 71,
    name: "Kumkumadi Thailam Skin Brightening,Tan Removal & Anti-Ageing Cream",
    img: "https://sheshaayurveda.com/wp-content/uploads/2020/12/33-scaled.jpg",
    amt: 750,
    size: "5ml",
    seller: "Sheesha Naturals",
    category: "Face Care"
  },
  {
    id: 72,
    name: "Pure White Kasturi Manjal Mist",
    img: "https://sheshaayurveda.com/wp-content/uploads/2023/06/610i1i1KNPL._SL1500_.jpg",
    amt: 399,
    size: "100ml",
    seller: "Sheesha Naturals",
    category: "Face Care"
  },
  {
    id: 73,
    name: "Hibiscus Amla Summer Hair Oil",
    img: "https://nathabit.in/_nat/images/Hibiscus_Summer_hair_oil_1_83dbc4d42e.jpg?format=auto&width=384&quality=75",
    amt: 334,
    size: "100ml",
    seller: "Sheesha Naturals",
    category: "Hair Care"
  },
  {
    id: 74,
    name: "Crushed Tri-LEAF Summer Hair Oil",
    img: "https://nathabit.in/_nat/images/tri_leaf_Summer_hair_oil_3_1d565123bc.jpg?format=auto&width=384&quality=75",
    amt: 299,
    size: "100ml",
    seller: "Nat Habit",
    catagory: "Hair Care"
  },
  {
    id: 75,
    name: "Neem Bhringraj Summer Oil",
    img: "https://nathabit.in/_nat/images/neem_bhringraj_Summer_hair_oil_3_481025c73f.jpg?format=auto&width=384&quality=75",
    amt: 299,
    size: "100ml",
    seller: "Nat Habit",
    catagory: "Hair Care"
  },
  {
    id: 76,
    name: "Five Oil Hibiscus NutriMask (Pack of 2)",
    img: "https://nathabit.in/_nat/images/Product_of_the_year_96461fe19e.jpg?format=auto&width=384&quality=75",
    amt: 250,
    size: "40g",
    seller: "Nat Habit",
    catagory: "Hair Care"
  },
  {
    id: 77,
    name: "Curry Sesame NutiMask (Pack of 2)",
    img: "https://nathabit.in/_nat/images/curry_sesame_01_6dbc21f677.jpg?format=auto&width=384&quality=75",
    amt: 250,
    size: "40g",
    seller: "Nat Habit",
    catagory: "Hair Care"
  },
  {
    id: 78,
    name: "Castor & Black Onion Sees Shampoo",
    img: "https://www.justherbs.in/cdn/shop/products/1_9f4ba136-c162-4f16-9b12-b89395affb3e_1280x.jpg?v=1667627951",
    amt: 375,
    size: "200ml",
    seller: "Just Herbs",
    catagory: "Hair Care"
  },
  {
    id: 79,
    name: "Ayurvedic Anti- Dandrufff Shampoo For Strong & Bouncy Hair",
    img: "https://www.justherbs.in/cdn/shop/products/1_1dc329ea-722a-4de7-bc4f-f6ea58b713a6_1280x.jpg?v=1652976466",
    amt: 695,
    size: "200ml",
    seller: "Just Herbs",
    catagory: "Hair Care"
  },
  {
    id: 80,
    name: "Coco Soul Curl Cult Hydrating Shampoo",
    img: "https://mycocosoul.com/cdn/shop/products/12000by2000_9053ad27-b53c-4bfd-a504-d88e1af1c460_3000x.jpg?v=1675313889",
    amt: 549,
    size: "200ml",
    seller: "Coco Soul",
    catagory: "Hair Care"
  },
  {
    id: 81,
    name: "Ayurvedic Kumuda Indian White Waterlily Hair Conditioner",
    img: "https://www.justherbs.in/cdn/shop/files/1_c29cbadf-e913-46da-82d0-e6cd6dbed792_1280x.jpg?v=1690273725",
    amt: 695,
    size: "100ml",
    seller: "Just Herbs",
    catagory: "Hair Care"
  },
  {
    id: 82,
    name: "Forest Essentials Hair Conditioner Amla, Honey & Mulethi",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/9/7/9737-hair-conditioner-amla_--honey-_-mulethi-200ml_fornt-new.png",
    amt: 1675,
    size: "200ml",
    seller: "Forest Essestials",
    catagory: "Hair Care"
  },
  {
    id: 83,
    name: "Khadi Natural Amla & Bhringraj Hair Conditioner",
    img: "https://www.khadinatural.com/cdn/shop/files/Artboard1copy_34f854e0-3b56-4143-9223-dd6d5e2ebb2f.jpg?v=1687350356&width=1000",
    amt: 210,
    size: "100ml",
    seller: "Khadi Natural",
    catagory: "Hair Care"
  },
  {
    id: 84,
    name: "Coco Soul Hair+Scalp Conditioner with Coconut & Ayurveda for Frizz Free",
    img: "https://mycocosoul.com/cdn/shop/files/Artboard1copy2_41ff0513-3407-4d39-9dbe-0b547575d0a4_3000x.jpg?v=1703840033",
    amt: 399,
    size: "200ml",
    seller: "Coco Soul",
    catagory: "Hair Care"
  },
  {
    id: 85,
    name: "Exfoliating Orange Butter Bath Soap(Pack of 2)",
    img: "https://nathabit.in/_nat/images/Orange_soap_1_eee1135669.jpg?format=auto&width=384&quality=75",
    amt: 616,
    size: "125gm",
    seller: "Nat Habit",
    catagory: "Body Care"
  },
  {
    id: 86,
    name: "Medimix Ayurvedic Classic 18 Herbs Bathing Soap",
    img: "https://www.medimixayurveda.com/cdn/shop/files/CLASSIC125FOP1_360x.jpg?v=1704273569",
    amt: 35,
    size: "125gm",
    seller: "Medimix",
    catagory: "Body Care"
  },
  {
    id: 87,
    name: "Forest Essentials Luxury Sugar Soap Lime Saffron & Oudh",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/2/1/21332_luxury_sugar_soap_lime_saffron___oudh_100g_1.png",
    amt: 525,
    size: "100g",
    seller: "Forest Essestials",
    catagory: "Body Care"
  },
  {
    id: 88,
    name: "Chandrika Ayurvedic Soap Classic",
    img: "https://m.media-amazon.com/images/I/71LAULL3caL._SX355_PIbundle-2,TopRight,0,0_SX355SY337SH20_.jpg",
    amt: 50,
    size: "125g",
    seller: "Chandrika",
    catagory: "Body Care"
  },
  {
    id: 89,
    name: "Medimix Ayurvedic Kumkumadi Bathing Soap",
    img: "https://www.medimixusa.com/cdn/shop/products/Left-Anngle-Kum-Soap-merged_1_1800x1800.jpg?v=1618843986",
    amt: 70,
    size: "125g",
    seller: "Medimix",
    catagory: "Body Care"
  },
  {
    id: 90,
    name: "Ayurvedic Moisturizing Primer",
    img: "https://rubysorganics.in/cdn/shop/files/PrimerListingCOMPRESSED_550x.jpg?v=1700465379",
    amt: 880,
    size: "20ml",
    seller: "Ruby's Organics",
    catagory: "Makeup"
  },
  {
    id: 91,
    name: "Age Defence Gel Creame -Plant-Based Retinol",
    img: "https://www.justherbs.in/cdn/shop/products/1_4b168ab5-b5b2-4917-b060-4b61c6db30d1_1280x.jpg?v=1666178992",
    amt: 595,
    size: "18g",
    seller: "Just Herbs",
    catagory: "Face Care"
  },
  {
    id: 92,
    name: "Pumpkin Walnut Hand Malai",
    img: "https://nathabit.in/_nat/images/1_fd0d26347e.png?format=auto&width=384&quality=75",
    amt: 293,
    size: "30ml",
    seller: "Nat Habit",
    catagory: "Hand Care"
  },
  {
    id: 93,
    name: "Berry Vanilla Elastin Hand Malai",
    img: "https://nathabit.in/_nat/images/1_9e810d5cbf.png?format=auto&width=384&quality=75",
    amt: 279,
    size: "30ml",
    seller: "Nat Habit",
    catagory: "Hand Care"
  },
  {
    id: 94,
    name: "Organic  Harvest Soft Matte Compact",
    img: "https://www.organicharvest.in/_next/image?url=https%3A%2F%2Ffiles.organicharvest.in%2Fsite-images%2F800x800%2F1-3adc.jpg&w=384&q=75",
    amt: 495,
    size: "9gm",
    seller: "Organic Harvest",
    catagory: "Makeup"
  },
  {
    id: 95,
    name: "Kapiva Ghee Kumkumadi Body Lotion",
    img: "https://m.media-amazon.com/images/I/31ZuBb8FwXL._SX300_SY300_QL70_FMwebp_.jpg",
    amt: 399,
    size: "100ml",
    seller: "Kapiva",
    catagory: "Body Care"
  },
  {
    id: 96,
    name: "Khadi Meghdoot Shea and Cocoa Butter Body Lotion",
    img: "https://meghdootherbal.com/media/products/prod_319_3.jpg",
    amt: 345,
    size: "210ml",
    seller: "Meghdoot Herbal",
    catagory: "Body Care"
  },
  {
    id: 97,
    name: "Just Herbs Body Lotion",
    img: "https://www.justherbs.in/cdn/shop/files/1_86ad01db-6a10-4270-bcd0-d77a288dc3da_1280x.jpg?v=1696921914",
    amt: 645,
    size: "100ml",
    seller: "Just Herbs",
    catagory: "Body Care"
  },
  {
    id: 98,
    name: "Medimix Ayurvedic Body Wash, Turmeric & Argan Oil For Radiant, Blemish Free",
    img: "https://www.medimixayurveda.com/cdn/shop/products/2_6143b2be-ea47-4bdc-9505-04d186fffff5_360x.jpg?v=1667477235",
    amt: 200,
    size: "250ml",
    seller: "Medimix",
    catagory: "Body Care"
  },
  {
    id: 99,
    name: "Shvet Chandan &Saffron Body Wah Cleanser Shower Gel",
    img: "https://rootsandherbs.in/wp-content/uploads/2022/11/NYRH000000046_1.jpg",
    amt: 950,
    size: "200ml",
    seller: "Roots & Herbs",
    catagory: "Body Care"
  },
  {
    id: 100,
    name: "Forest Essentials Silkening Shower Wash Oudh & Green Tea",
    img: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/8/9/8990_shower_wash_oudh_green_tea_200ml_front_copy_2.png",
    amt: 1295,
    size: "200ml",
    seller: "Forest Essestials",
    catagory: "Body Care"
  },
  // medicine
  {
    id: 991,
    name: "Agnitundi Bati",
    img: "https://www.baidyanath.co.in/images/limg/83149234.webp",
    amt: 121.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 9992,
    name: "Arshoghani Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6007-b.webp",
    amt: 116.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 9993,
    name: "Sarpagandhaghan Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6008-b.webp",
    amt: 259.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 9994,
    name: "Bramhi Bati (Buddhi Wardhak)",
    img: "https://www.baidyanath.co.in/images/limg/79147334.webp",
    amt: 76.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 99995,
    name: "Vriddhivadhika Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6013-b.webp",
    amt: 77.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 69999,
    name: "Chandanadi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6014-b.webp",
    amt: 114.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 99997,
    name: "Chitrakadi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6016-s.webp",
    amt: 48.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 99998,
    name: "Eladi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6017-b.webp",
    amt: 57.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 99999,
    name: "Kankayan Bati (Arsh)",
    img: "https://www.baidyanath.co.in/images/mimg/6018-b.webp",
    amt: 86.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 19990,
    name: "Kankayan Bati (Gulm)",
    img: "https://www.baidyanath.co.in/images/mimg/6019-b.webp",
    amt: 73.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 19991,
    name: "Kanthasudharak Bati Pack of-2",
    img: "https://www.baidyanath.co.in/images/limg/93667232_i2_.webp",
    amt: 96.00,
    size: "6GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 19992,
    name: "Karpuradi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6021-b.webp",
    amt: 113.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 199993,
    name: "Khadiradi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6023-b.webp",
    amt: 75.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 19994,
    name: "Kshudakari Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6024-b.webp",
    amt: 120.00,
    size: "30 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 199995,
    name: "Baidyanath Kutjaghan Bati Useful in Diarrhoea Grahni Rog & Jwar",
    img: "https://www.baidyanath.co.in/images/limg/6025.webp",
    amt: 186.00,
    size: "80",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 19996,
    name: "Lashunadi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6026-b.webp",
    amt: 73.00,
    size: "80TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 179999,
    name: "Lawangadi Bati",
    img: "https://www.baidyanath.co.in/images/limg/6027.webp",
    amt: 48.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 189999,
    name: "Mahashankh Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6029-b.webp",
    amt: 49.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 199999,
    name: "Makaradhwaj Bati (Amber Yukt.)",
    img: "https://www.baidyanath.co.in/images/mimg/6030-b.webp",
    amt: 185.00,
    size: "5 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 20999,
    name: "Marichyadi Bati",
    img: "https://www.baidyanath.co.in/images/limg/6031.webp",
    amt: 76.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 299999,
    name: "Mehmudgar Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6032-b.webp",
    amt: 83.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 29992,
    name: "Pilhari Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6035-b.webp",
    amt: 113.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 999923,
    name: "Prabhakar Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6036-b.webp",
    amt: 77.00,
    size: "20 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 299994,
    name: "Pranda Gutika",
    img: "https://www.baidyanath.co.in/images/mimg/6037-b.webp",
    amt: 107.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 299995,
    name: "Raj Bati (Gandhak Bati)",
    img: "https://www.baidyanath.co.in/images/mimg/6038-b.webp",
    amt: 101.00,
    size: "60 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 25556,
    name: "Rajapravartani Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6040-b.webp",
    amt: 56.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 277777,
    name: "Sanjivani Bati",
    img: "https://www.baidyanath.co.in/images/limg/18283708.webp",
    amt: 68.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 211118,
    name: "Guduchi Ghan Sanshamani Bati",
    img: "https://www.baidyanath.co.in/images/limg/96712861_i2_.JPG",
    amt: 71.00,
    size: "20 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 297777,
    name: "Sarivadi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6044-b.webp",
    amt: 113.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 307777,
    name: "Shankha Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6045-b.webp",
    amt: 55.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 3177222,
    name: "Baidyanath Shilajitwadi Bati Useful in Urinary Disorder",
    img: "https://www.baidyanath.co.in/images/limg/85384670_i2_.webp",
    amt: 63.00,
    size: "80TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 3271717,
    name: "Shrukramatrika Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6049-b.webp",
    amt: 152.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 3377171,
    name: "Shoolwarjini Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6050-b.webp",
    amt: 60.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 377774,
    name: "Vyoshadi Bati",
    img: "https://www.baidyanath.co.in/images/mimg/6051-b.webp",
    amt: 92.00,
    size: "10 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 3232325,
    name: "Mahasudarshanghan Bati",
    img: "https://www.baidyanath.co.in/images/mimg/21033-b.webp",
    amt: 154.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 315896,
    name: "Laghusutshekhar Tab.",
    img: "https://www.baidyanath.co.in/images/mimg/19004-b.webp",
    amt: 158.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 315487,
    name: "Shilajeet Capsules",
    img: "https://www.baidyanath.co.in/images/limg/95036402.webp",
    amt: 215.00,
    size: "30 CAP",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 3134688,
    name: "Ayurvedant Haldi Tab Anty inflammatory",
    img: "https://www.baidyanath.co.in/images/limg/81141491_i1_.jpg",
    amt: 180.00,
    size: "60TAB",
    seller: "Baidyanath",
    category: "Bati/Tablets/Capsule"
  },
  {
    id: 33265899,
    name: "Kanchanar Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8003-b.webp",
    amt: 124.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 425890,
    name: "Saptvisanti Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8008-b.webp",
    amt: 295.00,
    size: "80 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 423561,
    name: "Amlapittantak Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5001-b.webp",
    amt: 161.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 4225789,
    name: "Dhatri Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5003-b.webp",
    amt: 63.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 426583,
    name: "Medoharvidangadi Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5005-b.webp",
    amt: 101.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 423564,
    name: "Navayas Loha",
    img: "https://www.baidyanath.co.in/images/limg/5006.webp",
    amt: 87.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 4254685,
    name: "Pradrantak Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5008-b.webp",
    amt: 50.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 425486,
    name: "Punarnvadi Mandur",
    img: "https://www.baidyanath.co.in/images/mimg/5010-b.webp",
    amt: 57.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 4235687,
    name: "Saptamrit Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5012-b.webp",
    amt: 44.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 414788,
    name: "Sarvjwarhar Loha Ord.",
    img: "https://www.baidyanath.co.in/images/limg/5013.webp",
    amt: 152.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 4124589,
    name: "Shilajitwadi Loha",
    img: "https://www.baidyanath.co.in/images/mimg/5015-b.webp",
    amt: 164.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 1457850,
    name: "Shothari Loha",
    img: "https://www.baidyanath.co.in/images/limg/5016.webp",
    amt: 92.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 124551,
    name: "Shothari Mandur",
    img: "https://www.baidyanath.co.in/images/mimg/5017-b.webp",
    amt: 151.00,
    size: "40 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 51245782,
    name: "Bol Parpati",
    img: "https://www.baidyanath.co.in/images/mimg/7001-b.webp",
    amt: 73.00,
    size: "5 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 513246583,
    name: "Amla Pittantak Yog",
    img: "https://www.baidyanath.co.in/images/limg/56574325.webp",
    amt: 140.00,
    size: "100 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 5256784,
    name: "Amoebica Tab.",
    img: "https://www.baidyanath.co.in/images/limg/21003.webp",
    amt: 170.00,
    size: "100 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 551245,
    name: "Prostaid Tab",
    img: "https://www.baidyanath.co.in/images/limg/21005.webp",
    amt: 195.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 56124578899,
    name: "Artho Tab",
    img: "https://www.baidyanath.co.in/images/limg/21007.webp",
    amt: 220.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 5256487,
    name: "Brain Tab.",
    img: "https://www.baidyanath.co.in/images/mimg/21010-b.webp",
    amt: 241.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 14578958,
    name: "Dimag Doshari Tab.",
    img: "https://www.baidyanath.co.in/images/mimg/21014-b.webp",
    amt: 241.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 52458989,
    name: "Dimag Paushtik Rasayan An Effective Brain Tonic",
    img: "https://www.baidyanath.co.in/images/limg/62468236_i1_.webp",
    amt: 247.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 62356480,
    name: "Baidyanath Gaisantak Bati Useful In Flatulence & Gastric",
    img: "https://www.baidyanath.co.in/images/limg/32253925_i2_.webp",
    amt: 36.00,
    size: "100 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 612457991,
    name: "Liverex Tablet",
    img: "https://www.baidyanath.co.in/images/mimg/21031-b.webp",
    amt: 145.00,
    size: "500 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 6205482,
    name: "Pathreena Tab",
    img: "https://www.baidyanath.co.in/images/limg/21038.webp",
    amt: 150.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 6231543,
    name: "Pirrhoids",
    img: "https://www.baidyanath.co.in/images/limg/81324438_i1_.jpg",
    amt: 114.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 61024584,
    name: "Pradarantak Tab.",
    img: "https://www.baidyanath.co.in/images/mimg/21040-b.webp",
    amt: 140.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 63265895,
    name: "Raktashodhak Bati",
    img: "https://www.baidyanath.co.in/images/mimg/21041-b.webp",
    amt: 215.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 66124578,
    name: "Sarpagandha Tab.",
    img: "https://www.baidyanath.co.in/images/limg/74891953.webp",
    amt: 125.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 22222267,
    name: "Sarvdosantak Gutika",
    img: "https://www.baidyanath.co.in/images/limg/32170061_i1_.webp",
    amt: 72.00,
    size: "25 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 33333368,
    name: "Baidyanath Jhansi Shodhi Harre Tasty & Digestive is Perfect Solution For all Stomach Problems",
    img: "https://www.baidyanath.co.in/images/mimg/21048-b.webp",
    amt: 135.00,
    size: "80 GM",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 22555269,
    name: "Shwas Kalp Tab.",
    img: "https://www.baidyanath.co.in/images/mimg/21057-b.webp",
    amt: 220.00,
    size: "50 TAB",
    seller: "Baidyanath",
    catagory: "Bati/Tablets/Capsule",
  },
  {
    id: 8152525,
    name: "Arjunarishta",
    img: "https://www.baidyanath.co.in/images/limg/96221711_i1_.webp",
    amt: 117,
    size: "680 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 852523,
    name: "Ashokarishta",
    img: "https://www.baidyanath.co.in/images/mimg/98904870.webp",
    amt: 86,
    size: "680 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 85225,
    name: "Baboolarishta",
    img: "https://www.baidyanath.co.in/images/limg/46670133.webp",
    amt: 181,
    size: "450 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 85256,
    name: "Balarishta",
    img: "https://www.baidyanath.co.in/images/limg/75582970.webp",
    amt: 100,
    size: "450 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 855557,
    name: "Baidyanath Ayurvedic Bhringrajasava - 450 ml For Hair Growth",
    img: "https://www.baidyanath.co.in/images/limg/33185464_i2_.webp",
    amt: 203,
    size: "450 Ml",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 9453,
    name: "Jeerkadyarishta",
    img: "https://www.baidyanath.co.in/images/limg/36369849.webp",
    amt: 247,
    size: "450 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 94456,
    name: "Kankasava",
    img: "https://www.baidyanath.co.in/images/limg/36369849.webp",
    amt: 98,
    size: "680 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 94566,
    name: "Kumari Asava",
    img: "https://www.baidyanath.co.in/images/limg/40586204.webp",
    amt: 110,
    size: "680 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 945458,
    name: "Kutjarishta",
    img: "https://www.baidyanath.co.in/images/limg/78803713.webp",
    amt: 108,
    siz: "680 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 94569,
    name: "Lodhrasava",
    img: "https://www.baidyanath.co.in/images/limg/75150199.webp",
    amt: 210,
    size: "450 ML",
    seller: "Baidyanath",
    catagory: "Asave Aristha Kadha"
  },
  {
    id: 204560,
    name: "Arshkuthar Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4015-b.webp",
    amt: 65,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 204561,
    name: "Ashwakanchuki Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4016-b.webp",
    amt: 76,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 204562,
    name: "Atul Shaktidata Yoga",
    img: "https://www.baidyanath.co.in/images/mimg/4017-b.webp",
    amt: 143,
    size: "2.5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 203456,
    name: "Pushpadhanwa Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4019-b.webp",
    amt: 242,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 204564,
    name: "Balark Ras (Ord.)",
    img: "https://www.baidyanath.co.in/images/mimg/4022-s.webp",
    amt: 780,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 204555,
    name: "Balrogantak Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4023-b.webp",
    amt: 68,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 204566,
    name: "Bangeshwar Ras (Ord.)",
    img: "https://www.baidyanath.co.in/images/mimg/4023-b.webp",
    amt: 181,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 205467,
    name: "Bolbaddh Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4029-b.webp",
    amt: 60,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath",
  },
  {
    id: 20458,
    name: "Chandrakant Ras",
    img: "https://www.baidyanath.co.in/images/limg/71080096.webp",
    amt: 244,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 245609,
    name: "Chandrakla Ras(Mo.Yu.)",
    img: "https://www.baidyanath.co.in/images/mimg/4031-b.webp",
    amt: 94,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 214560,
    name: "Chandramrit Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4032-b.webp",
    amt: 64,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 212456,
    name: "Chousathprahari Pipal",
    img: "https://www.baidyanath.co.in/images/mimg/4038-b.webp",
    amt: 53,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 215643,
    name: "Dantodbhedgadantak Ras",
    img: "https://www.baidyanath.co.in/images/limg/29409620.webp",
    amt: 80,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 214654,
    name: "Baidyanath Ekangvir Ras Helps Relieve Several Vat Disorder",
    img: "https://www.baidyanath.co.in/images/limg/15267265_i2_.webp",
    amt: 70,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 215465,
    name: "Gandhak Rasyan",
    img: "https://www.baidyanath.co.in/images/mimg/4041-s.webp",
    amt: 64,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 25416,
    name: "Garbhpal Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4044-b.webp",
    amt: 65,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 214567,
    name: "Gulmkalanal Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4046-b.webp",
    amt: 55,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 215468,
    name: "Hirdyaranva Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4047-b.webp",
    amt: 121,
    size: "10G",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 215649,
    name: "Ichhabhedi Ras (Jaypal Yu)",
    img: "https://www.baidyanath.co.in/images/mimg/4048-b.webp",
    amt: 61,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 22450,
    name: "Jwarankush Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4052-b.webp",
    amt: 119,
    size: "20 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 264521,
    name: "Kafchintamani Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4054-b.webp",
    amt: 129,
    size: "10 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 224652,
    name: "Kafkartari Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4055-b.webp",
    amt: 65,
    size: "10 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 224563,
    name: "Kafketu Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4056-b.webp",
    amt: 50,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 224564,
    name: "Kafkuthar Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4057-b.webp",
    amt: 64,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 2245645,
    name: "Kalptaru Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4058-b.webp",
    amt: 71,
    size: "10 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 225646,
    name: "Kamdhenu Ras",
    img: "https://www.baidyanath.co.in/images/limg/25750752.webp",
    amt: 131,
    size: "50 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 24652,
    name: "Kamdudha Ras (M.Y.)",
    img: "https://www.baidyanath.co.in/images/mimg/4060-b.webp",
    amt: 127,
    size: "10 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 256428,
    name: "Kamdudha Ras (Ordy.)",
    img: "https://www.baidyanath.co.in/images/limg/36561329_i1_.webp",
    amt: 60,
    size: "20 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 225649,
    name: "Panna Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4065-b.webp",
    amt: 73,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 235650,
    name: "Krimikuthar Ras",
    img: "https://www.baidyanath.co.in/images/limg/36117034_i1_.webp",
    amt: 80,
    size: "1 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 23561,
    name: "Laghumalnibasant Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4070-b.webp",
    amt: 71,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 23562,
    name: "Laxmivilas Ras (Kash)",
    img: "https://www.baidyanath.co.in/images/mimg/4071-b.webp",
    amt: 173,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 234654,
    name: "Lilavilas Ras",
    img: "https://www.baidyanath.co.in/images/limg/4073.webp",
    amt: 171,
    size: "5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 23565,
    name: "Loknath Ras(Brihat)",
    img: "https://www.baidyanath.co.in/images/limg/4074.webp",
    amt: 112,
    size: "80 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 26536,
    name: "Mahajwarankush Ras",
    img: "https://www.baidyanath.co.in/images/limg/4076.webp",
    amt: 49,
    size: "2.5 GM",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 235468,
    name: "Mahavatvidhwansan Ras",
    img: "https://www.baidyanath.co.in/images/mimg/4080-b.webp",
    amt: 93,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 2356,
    name: "Malaxmivilas Ras(Shiro)",
    img: "https://www.baidyanath.co.in/images/limg/4082.webp",
    amt: 96,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 24640,
    name: "Manmath Ras",
    img: "https://www.baidyanath.co.in/images/limg/46957384_i2_.JPG",
    amt: 210,
    size: "40 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 265641,
    name: "Mrityunjaya Ras",
    img: "https://www.baidyanath.co.in/images/limg/4085.webp",
    amt: 56,
    size: "10 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanath"
  },
  {
    id: 245462,
    name: "Muktapanchamrit Ras (Mo.Y)",
    img: "https://www.baidyanath.co.in/images/limg/51667034.webp",
    amt: 170,
    size: "20 TAB",
    catagory: "Bhasma/Ras Rasayan",
    seller: "Baidyanat"
  },
  {
    id: 245463,
    name: "Gokshuradi Guggulu",
    img: "https://www.baidyanath.co.in/images/limg/35282406.webp",
    amt: 90,
    size: "80 TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 24464,
    name: "Kaishor Guggulu",
    img: "https://www.baidyanath.co.in/images/limg/53361390_i4_.webp",
    amt: 63,
    size: "80 TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 246456,
    name: "Baidyanath Mahayograj Guggulu Useful in All Type of Vataj Disorder",
    img: "https://www.baidyanath.co.in/images/mimg/8005-b.webp",
    amt: 113,
    size: "80 TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 24946,
    name: "Singnad Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8009-b.webp",
    amt: 102,
    size: "80TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 250456,
    name: "Triphala Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8010-b.webp",
    amt: 65,
    size: "80TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 251456,
    name: "Tryodashang Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8011-b.webp",
    amt: 199,
    size: "80TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 252546,
    name: "Yograj Guggulu",
    img: "https://www.baidyanath.co.in/images/mimg/8012-b.webp",
    amt: 90,
    size: "120TAB",
    catagory: "Guggulu",
    seller: "Baidyanath"
  },
  {
    id: 253546,
    name: "Chyawanprash Special Super Immunity",
    img: "https://www.baidyanath.co.in/images/limg/89530176_i1_.jpg",
    amt: 124,
    size: "2 KG",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 25456,
    name: "Gulkand",
    img: "https://www.baidyanath.co.in/images/limg/15902062_i1_.webp",
    amt: 175,
    size: "500 GM",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 256645,
    name: "Chyawan-Fit Sugarfree",
    img: "https://www.baidyanath.co.in/images/limg/14490271_i2_.jpg",
    amt: 475,
    size: "1KG",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 25846,
    name: "Baidyanath Chyawanprash Special and Immuni Tea Ayurvedic Immunity Booster Combo Pack",
    img: "https://www.baidyanath.co.in/images/limg/85359629_i1_.webp",
    amt: 845,
    size: "2KGCP+25 TEA BAG",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 259654,
    name: "Baidyanath Chyawanprash Special and Green Tea Ayurvedic Immunity Booster Combo Pack",
    img: "https://www.baidyanath.co.in/images/limg/52007721_i1_.webp",
    amt: 570,
    size: "1KGCP +25TEA BAG",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 26056,
    name: "Amla Juice With Chywan Prash (spl) For Immunity Booster 1Ltr & 1Kg",
    img: "https://www.baidyanath.co.in/images/limg/22590828_i1_.webp",
    amt: 665,
    size: "1LTR & 1KG",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 261465,
    name: "Chyawanprash Chyawan Fit Sugar Free1Kg With Karela Jamun 1Ltr",
    img: "https://www.baidyanath.co.in/images/limg/83053012_i1_.webp",
    amt: 870,
    size: "1KG & 1LTR",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 2624556,
    name: "Baidyanath Chyawanprash Chyawan-Fit Sugarfree 1kg With Premium Cow Desi Ghee 1Ltr",
    img: "https://www.baidyanath.co.in/images/limg/38474260_i1_.webp",
    amt: 1094,
    size: "1KG ",
    catagory: "ChyawanPrash",
    seller: "Baidyanath"
  },
  {
    id: 263456,
    name: "Agastya Haritaki",
    img: "https://www.baidyanath.co.in/images/mimg/10001-b.webp",
    amt: 75,
    size: "1KG",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 264456,
    name: "Badam Pak",
    img: "https://www.baidyanath.co.in/images/mimg/10002-b.webp",
    amt: 197,
    size: "100 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 265334,
    name: "Chitrak Haritaki",
    img: "https://www.baidyanath.co.in/images/limg/29933370_i1_.webp",
    amt: 123,
    size: "50GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 266644,
    name: "Erand Pak",
    img: "https://www.baidyanath.co.in/images/mimg/10007-b.webp",
    amt: 175,
    size: "100GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 2676776,
    name: "Haridrakhand (Brihat)",
    img: "https://www.baidyanath.co.in/images/mimg/10008-b.webp",
    amt: 101,
    size: "100 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 2686767,
    name: "HaritakiKhand",
    img: "https://www.baidyanath.co.in/images/mimg/10009-b.webp",
    amt: 120,
    size: "50 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 2696868,
    name: "Musli Pak",
    img: "https://www.baidyanath.co.in/images/mimg/10012-b.webp",
    amt: 255,
    size: "100 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 270565,
    name: "Saubhagya Sunthi Pak",
    img: "https://www.baidyanath.co.in/images/limg/10013.webp",
    amt: 156,
    size: "100 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 271565,
    name: "Supari Pak Brihat.",
    img: "https://www.baidyanath.co.in/images/limg/13640037.webp",
    amt: 114,
    size: "250 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 27276,
    name: "Vasavaleha Granules Use Ful In Respiratory Wellness 100G",
    img: "https://www.baidyanath.co.in/images/limg/11265545_i2_.webp",
    amt: 100,
    size: "100 GM",
    catagory: "Churana",
    seller: "Baidyanath"
  },
  {
    id: 274224,
    name: "Shankhpushpi Syrup",
    img: "https://www.baidyanath.co.in/images/limg/19007.webp",
    amt: 115,
    size: "200 ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 2752424,
    name: "Mahashankha Drava",
    img: "https://www.baidyanath.co.in/images/mimg/25007-b.webp",
    amt: 82,
    size: "10 ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 27624244,
    name: "Shankha Drava New Size",
    img: "https://www.baidyanath.co.in/images/mimg/25009-b.webp",
    amt: 80,
    size: "10 ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 2774224,
    name: "Janamghuti Laltel(Combi Pack)",
    img: "https://www.baidyanath.co.in/images/limg/79420685_i1_.webp",
    amt: 152,
    size: "100/100ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 2782424,
    name: "Raktashodhak Syrup",
    img: "https://www.baidyanath.co.in/images/limg/74227071_i2_.webp",
    amt: 135,
    size: "200 ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 2792424,
    name: "Balamrit Syrup",
    img: "https://www.baidyanath.co.in/images/limg/21009.webp",
    amt: 120,
    size: "200 ML",
    catagory: "Syrups",
    seller: "Baidyanath"
  },
  {
    id: 142424,
    name: "Divya Taila",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16910641951.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Oil"
  },
  {
    id: 224244,
    name: "Divya Churna",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688380039Divyachuran50g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Churana"
  },
  {
    id: 32424,
    name: "Ekangveer Ras",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16914057321.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 42424,
    name: "Swet Parpati",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688453553SWETPARPATI5g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 52322,
    name: "Aamvatari Ras",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688455307Amvatariras.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 62444,
    name: "Divya Usirasav",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688194549Usirasav(1).png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Asava"
  },
  {
    id: 72424,
    name: "Laxmivilas Ras",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1706522374lakshmivilasrasa1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 82424,
    name: "Patanjali Balm",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688195749PatanjaliBalm25g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Balm"
  },
  {
    id: 923424,
    name: "Divya Anu Taila",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688451406AnuTaila20ml(2).png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Oil"
  },
  {
    id: 102324,
    name: "Divya Giloy Sat",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688206498GILOYSAT10gm1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Pishit"
  },
  {
    id: 1123245,
    name: "Divya Abhyaristh",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688195269Abhayarisht450ml1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Kadha"
  },
  {
    id: 124333,
    name: "Divya Bala Taila",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688452184Balataila100ml1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Oil"
  },
  {
    id: 13234,
    name: "Divya Amla Churna",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688380303Amlachurna100g2.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Churana"
  },
  {
    id: 143345,
    name: "Divya Arjun Kwath",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688377714ArjunKwath100g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Kwath"
  },
  {
    id: 13435,
    name: "Divya Arvindasav",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688194685Arvindasav225ml1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Asava"
  },
  {
    id: 163242,
    name: "Divya Ashokaristh",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688195187Ashokarishta450ml1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Arishta"
  },
  {
    id: 17433,
    name: "Divya Bala Churna",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688365457BalaChurna1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Churana"
  },
  {
    id: 18598,
    name: "Divya Bpgrit 60 N",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16881209351.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Vati"
  },
  {
    id: 19908,
    name: "Divya Drakshasava",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16881908221.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Asava"
  },
  {
    id: 20234,
    name: "Divya Giloy Kwath",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688377603GiloyKwath200g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Kwath"
  },
  {
    id: 21456,
    name: "Divya Lauh Bhasma",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688184598LAUHBHASM5gm1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 22332,
    name: "Divya Lithom 60 N",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688120327lithom60tab1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Vati"
  },
  {
    id: 2354,
    name: "Divya Makar Dhwaj",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688184572Makardhwaj1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 2456,
    name: "Divya Ras Manikya",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688453876RasManikya1g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 2522,
    name: "Divya Ras Sindoor",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688453819RasSindoor1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "bhasma/Ras Rasayan"
  },
  {
    id: 26213,
    name: "Divya Swasari Ras",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688453612SwasariRas10g1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 2713,
    name: "Divya Tal Sindoor",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16881843261.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 281313,
    name: "Divya Vang Bhasma",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688183617VangBhasma1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 29131,
    name: "Divya Amla Rasayan",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/16881859201.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Bhasma/Ras Rasayan"
  },
  {
    id: 30123,
    name: "Divya Arjunarishth",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1688195228Arjunarishth450ml1.png",
    amt: 10,
    seller: "Patanjali",
    catagory: "Arishta"
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