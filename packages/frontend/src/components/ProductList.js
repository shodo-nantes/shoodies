import Card from './Card';
import { getProducts } from '../service/productService';
import { useEffect, useState } from 'react';

function ProductList() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(getProducts());
    }, []);
    return (
        <>
            {cards.map((card) => (
                <div key={card.id}>
                    <Card card={card} />
                </div>
            ))}
        </>
    );
}
export default ProductList;
