export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string;
  image: string;
};

const products: Product[] = [
// CAT
  {
    id: "cozy-cat-comfort-bed",
    name: "Cozy Cat Comfort Bed",
    category: "Kucing",
    price: 129000,
    description: "Tempat tidur lembut untuk kucing yang nyaman dan mudah dicuci.",
    details:
      "Bantal bulu sintetis, desain anti-slip, dan ukuran pas untuk kucing dewasa.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cat-scratching-post",
    name: "Cat Scratching Post",
    category: "Kucing",
    price: 125000,
    description: "Tiang garukan untuk menjaga kuku kucing tetap sehat.",
    details:
      "Material sisal kuat, alas stabil, dan cocok untuk kucing aktif.",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cat-tunnel-toy",
    name: "Cat Tunnel Toy",
    category: "Kucing",
    price: 98000,
    description: "Terowongan bermain interaktif untuk kucing indoor.",
    details:
      "Dapat dilipat, ringan, dan memiliki bola gantung untuk bermain.",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "premium-cat-bed",
    name: "Premium Cat Bed",
    category: "Kucing",
    price: 189000,
    description: "Kasur empuk premium untuk tidur nyaman kucing.",
    details:
      "Bahan lembut, anti-slip, dan mudah dicuci.",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cat-feeding-bowl",
    name: "Cat Feeding Bowl",
    category: "Kucing",
    price: 45000,
    description: "Mangkuk makan modern untuk kucing.",
    details:
      "Desain ergonomis dan anti tumpah.",
    image:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cat-activity-wheel",
    name: "Cat Activity Wheel",
    category: "Kucing",
    price: 77000,
    description: "Roda aktivitas untuk kucing agar tetap aktif di rumah.",
    details:
      "Desain senyap, struktur kuat, dan cocok untuk kucing indoor.",
    image:
      "https://media.istockphoto.com/id/2231193921/id/foto/close-up-kucing-sphynx-hitam-tak-berbulu-dengan-mata-kuning-berjalan-dengan-anggun-di-roda.jpg?s=612x612&w=is&k=20&c=ADVVY4ihqbwlJeI60EPB7ThGZdE3wPRi3vHgmXRffH4=",
  },

// DOG
  {
    id: "smart-dog-travel-bag",
    name: "Smart Dog Travel Bag",
    category: "Anjing",
    price: 185000,
    description: "Tas perjalanan ringan untuk anjing kecil dengan ventilasi optimal.",
    details:
      "Material anti air, pengunci kuat, dan bantalan nyaman untuk perjalanan sehari.",
    image:
      "https://images.unsplash.com/photo-1661322563051-15248c0568a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "dog-bone-treat",
    name: "Beef Bone Treat Set",
    category: "Anjing",
    price: 56000,
    description: "Set cemilan tulang daging sapi untuk menjaga gigi dan mood anjing.",
    details:
      "Diproses tanpa pengawet, cocok untuk anjing dewasa, dan dikemas segar.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
  },
  {
  id: "dog-chew-toy",
  name: "Dog Chew Toy",
  category: "Anjing",
  price: 85000,
  description: "Mainan kunyah kuat untuk anjing aktif.",
  details:
    "Membantu menjaga kesehatan gigi dan mengurangi stres.",
  image:
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dog-food-dispenser",
    name: "Dog Food Dispenser",
    category: "Anjing",
    price: 210000,
    description: "Dispenser makanan otomatis untuk anjing.",
    details:
      "Kapasitas besar dan mudah dibersihkan.",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dog-winter-jacket",
    name: "Dog Winter Jacket",
    category: "Anjing",
    price: 165000,
    description: "Jaket hangat untuk anjing kecil dan sedang.",
    details:
      "Material lembut dan nyaman digunakan harian.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "portable-dog-bottle",
    name: "Portable Dog Bottle",
    category: "Anjing",
    price: 70000,
    description: "Botol minum portable untuk perjalanan.",
    details:
      "Praktis digunakan saat jalan-jalan atau traveling.",
    image:
      "https://plus.unsplash.com/premium_photo-1667563115157-a6d48d8b03d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

// GUINEA PIG
  {
    id: "guinea-pig-playhouse",
    name: "Guinea Pig Playhouse",
    category: "Guinea Pig",
    price: 99000,
    description: "Rumah bermain kecil yang aman untuk kelinci mini dan guinea pig.",
    details:
      "Material ramah hewan, ventilasi baik, dan akses mudah untuk membersihkan.",
    image:
      "https://images.unsplash.com/photo-1642387702727-8fc52fd8f522?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "guinea-pig-snag-hay",
    name: "Premium Hay Snack",
    category: "Guinea Pig",
    price: 45000,
    description: "Makanan serat tinggi yang cocok untuk guinea pig dan kelinci kecil.",
    details:
      "Dipetik segar, kaya vitamin, dan dikemas dalam porsi praktis.",
    image:
      "https://plus.unsplash.com/premium_photo-1673131729425-3971eb3ac5b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
  id: "guinea-pig-food-pack",
  name: "Guinea Pig Food Pack",
  category: "Guinea Pig",
  price: 65000,
  description: "Paket makanan sehat untuk guinea pig.",
  details:
    "Mengandung vitamin dan serat tinggi.",
  image:
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "guinea-pig-water-bottle",
    name: "Guinea Pig Water Bottle",
    category: "Guinea Pig",
    price: 35000,
    description: "Botol minum gantung praktis.",
    details:
      "Anti bocor dan mudah dipasang di kandang.",
    image:
      "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "guinea-pig-hideout",
    name: "Guinea Pig Hideout",
    category: "Guinea Pig",
    price: 78000,
    description: "Tempat persembunyian nyaman untuk guinea pig.",
    details:
      "Membantu hewan merasa aman dan rileks.",
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "guinea-pig-hay-feeder",
    name: "Guinea Pig Hay Feeder",
    category: "Guinea Pig",
    price: 55000,
    description: "Tempat penyimpanan hay agar tetap bersih.",
    details:
      "Desain praktis dan mudah diisi ulang.",
    image:
      "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=1200&auto=format&fit=crop",
  },

  // BIRD
  {
  id: "bird-cage-deluxe",
  name: "Bird Cage Deluxe",
  category: "Burung",
  price: 320000,
  description: "Kandang burung premium dengan ruang luas.",
  details:
    "Material besi anti karat dan mudah dibersihkan.",
  image:
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bird-feeding-set",
    name: "Bird Feeding Set",
    category: "Burung",
    price: 60000,
    description: "Set tempat makan dan minum burung.",
    details:
      "Desain minimalis dan mudah dipasang.",
    image:
      "https://images.unsplash.com/photo-1610112759110-41b5e2d00ff9?q=80&w=426&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bird-swing-toy",
    name: "Bird Swing Toy",
    category: "Burung",
    price: 40000,
    description: "Ayunan bermain untuk burung peliharaan.",
    details:
      "Membantu burung tetap aktif dan tidak bosan.",
    image:
      "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bird-nest-house",
    name: "Bird Nest House",
    category: "Burung",
    price: 95000,
    description: "Rumah sarang nyaman untuk burung kecil.",
    details:
      "Bahan alami dan aman digunakan.",
    image:
      "https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default products;
