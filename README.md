# PAWPAYA 🐾

PAWPAYA adalah website pet shelter dan pet shop modern yang dibuat menggunakan Next.js App Router.
Website ini menyediakan berbagai produk hewan peliharaan seperti kucing, anjing, guinea pig, dan burung dengan tampilan modern, responsive, dan user-friendly.

---

## ✨ Features

* Responsive design untuk desktop, tablet, dan mobile
* Dynamic product detail page
* Product category filtering
* Modern product grid layout
* Interactive navigation bar
* External image support
* Add to Cart button UI
* Dynamic routing menggunakan Next.js App Router
* Dark mode ready
* Fast navigation menggunakan `next/link`

---

## 🐶 Product Categories

* Kucing
* Anjing
* Guinea Pig
* Burung

---

## 🛠️ Tech Stack

* Next.js 16 (App Router)
* React 19
* Tailwind CSS
* JavaScript & TypeScript
* Next/Image
* Next/Link

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── faq/
│   ├── products/
│   │   └── [id]/
│   ├── promotion/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Navigation.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetail.tsx
│   └── ProductGrid.jsx
│
├── data/
│   └── products.ts
│
public/
└── logo.png
```

---

## 📸 Main Features Preview

### Home Page

* Hero section
* Product categories
* Product cards
* Responsive grid layout

### Product Detail Page

* Product image
* Description
* Price
* Add to Cart button

### Category Filter

Users dapat memfilter produk berdasarkan kategori:

* All
* Kucing
* Anjing
* Guinea Pig
* Burung

---

## 🚀 Installation

Clone repository:

```bash
git clone https://github.com/your-username/pawpaya.git
```

Masuk ke folder project:

```bash
cd pawpaya
```

Install dependencies:

```bash
npm install
```

atau menggunakan Bun:

```bash
bun install
```

---

## ▶️ Run Development Server

Menggunakan npm:

```bash
npm run dev
```

Menggunakan Bun:

```bash
bun run dev
```

Open browser:

```bash
http://localhost:3000
```

atau custom port:

```bash
http://localhost:5000
```

---

## 📦 Dynamic Routing

Project menggunakan dynamic route:

```bash
/products/[id]
```

untuk menampilkan detail produk secara otomatis berdasarkan product ID.

---

## 🖼️ Image Handling

Project menggunakan:

* `next/image`
* External image URL support
* Responsive image rendering

---

## 📱 Responsive Design

Website telah dioptimalkan untuk:

* Desktop
* Tablet
* Mobile devices

---

## 📄 License

This project is licensed for educational and personal portfolio purposes.

---

## 👨‍💻 Author

Developed by Frans.

## 💡 Future Improvements

* Shopping cart functionality
* Product search feature
* Authentication system
* Checkout page
* Backend integration
* Database support
* Payment gateway
* Wishlist feature
