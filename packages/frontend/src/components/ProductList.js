import Card from './Card';
import { getProducts } from '../service/productService';
import { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setProducts(await getProducts());
        }
        fetchData();
    }, []);
    return (
        <>
            {products.map((card) => (
                <div key={card.id}>
                    <Card card={card} />
                </div>
            ))}
        </>
    );
}
export default ProductList;
