import Card from './Card';
import { getProducts } from '../service/productService';

function ProductList() {
    const cards = getProducts();
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
