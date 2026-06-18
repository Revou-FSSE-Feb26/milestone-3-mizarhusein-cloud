import allProducts from "@/data/products";

let store = allProducts.map((p) => ({ ...p }));

export function getAll() {
  return store;
}

export function getById(id) {
  return store.find((p) => p.id === id) ?? null;
}

export function create(product) {
  const slug = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const newProduct = { ...product, id: `${slug}-${Date.now()}` };
  store = [newProduct, ...store];
  return newProduct;
}

export function update(id, updates) {
  let updated = null;
  store = store.map((p) => {
    if (p.id === id) {
      updated = { ...p, ...updates, id };
      return updated;
    }
    return p;
  });
  return updated;
}

export function remove(id) {
  store = store.filter((p) => p.id !== id);
  return { id };
}
