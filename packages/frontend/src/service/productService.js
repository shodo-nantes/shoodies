export async function getProducts() {
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json();
    return products;
}

export async function getProductById(id) {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const product = await response.json();
    return product;
}
