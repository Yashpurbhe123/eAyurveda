const data = [
  {
    id: 1,
    name: "Saundarya Aloe vera Gel",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1700199709Aloveragel60g1.png",
    amt: 50,
    size: "60ml",
    seller: "Patanjali",
    category: "Face Care"
  },
  {
    id: 2,
    name: "Herbal Kajal",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689484143HerbalKajal3g1.png",
    amt: 90,
    size:"3g",
    seller: "Patanjali",
    category: "Makeup"
  },
  {
    id: 3,
    name: "Divya Gulab Jal",
    img: "https://www.patanjaliayurved.net/assets/product_images/400x500/1689576629GulabJal120ml1.png",
    amt: 35,
    size: "120ml",
    seller: "Patanjali",
    category: "Face Care"
  },
  {
    id: 4,
    name: "Moringa Vit-c Tikta Cream Face Wash",
    img: "https://nathabit.in/_nat/images/Moringa_Cream_PDP_1_acd1b517e2.jpg?format=auto&width=1080&quality=75",
    amt: 244,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 5,
    name: "Brightening Ubtan Tikta Face Wah",
    img: "https://nathabit.in/_nat/images/1_fb7d90aedb.jpg?format=auto&width=1080&quality=75",
    amt: 244,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 6,
    name: "Bitter Neem Tikta Cream Face Wash",
    img: "https://nathabit.in/_nat/images/Neem_Cream_PDP_1_ecc2907567.jpg?format=auto&width=1080&quality=75",
    amt: 299,
    size: "100g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 7,
    name: "Pure Turmeric Rosehip Mukhalaya Face Oil",
  img: "https://nathabit.in/_nat/images/Turmeric_Rosehip_1_2d4190af5b.jpg?format=auto&width=1080&quality=75",
    amt: 427,
    size: "30ml",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 8,
    name: "Pomegranate Roes Lip Butter",
    img: "https://nathabit.in/_nat/images/pomegranate_rose_web_978a99c229.jpg?format=auto&width=1080&quality=75",
    amt: 200,
    size: "10g",
    seller: "Nat Habit",
    category: "Lip Care"
  },
  {
    id: 9,
    name: "Pure Netraa Serum Dhataki Soaked Undereye Care",
    img: "https://nathabit.in/_nat/images/1st_image_43219d35aa.jpg?format=auto&width=1080&quality=75",
    amt: 319,
    size: "9.2mi",
    seller: "Nat Habit",
    category: "Eye Care"
  },
  {
    id: 10,
    name: "Lemon Lanvender Lip Butter",
    img: "https://nathabit.in/_nat/images/lemon_lavender_web_51a596e338.jpg?format=auto&width=1080&quality=75",
    amt: 200,
    size: "10g",
    seller: "Nat Habit",
    category: "Lip Care"
  },
  {
    id: 11,
    name: "Fresh Orange Kiwi Vit-C Gel",
    img: "https://nathabit.in/_nat/images/Orange_Kiwi_6842bb4065.jpg?format=auto&width=1080&quality=75",
    amt: 235,
    size: "80g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 12,
    name: "Fresh Olive Vit-E Night Gel",
    img: "https://nathabit.in/_nat/images/Olive_Vit_E_d96692345a.jpg?format=auto&width=1080&quality=75",
    amt: 235,
    size: "80g",
    seller: "Nat Habit",
    category: "Face Care"
  },
  {
    id: 13,
    name: "Ready to Apply Henna Paste (Pack of 2)",
    img: "https://nathabit.in/_nat/images/Henna_paste_pack_2_ceaed1eaa0.jpg?format=auto&width=1080&quality=75",
    amt: 342,
    size: "220g",
    seller :"Nat Habit",
    category: "Hair Care"
  },
  {
    id: 14,
    name :"Ready to Apply Henna Root Touch Up",
    img: "https://nathabit.in/_nat/images/1st_image_f55c826b02.jpg?format=auto&width=1080&quality=75",
    amt: 85,
    size: "60g",
    seller: "Nat Habit",
    category: "Hair Care"
  },
  {
    id: 15,
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