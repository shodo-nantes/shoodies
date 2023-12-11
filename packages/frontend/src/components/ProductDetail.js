import { useParams } from 'react-router-dom';
import { getProductById } from '../service/productService';
import { useEffect, useState } from 'react';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function fetchData() {
            setProduct(await getProductById(id));
        }
        fetchData();
    }, [id]);

    const { title, photoFolder, description } = product;

    if (Object.keys(product).length === 0) {
        return <h2>Produit non trouvé</h2>;
    }

    return (
        <section>
            <h1>{title}</h1>
            <div className="tshirtCard">
                <img className="photoFront" src={`/images/${photoFolder}/front.jpg`} alt="" />
                <img
                    className="photoBack"
                    src={`/images/${photoFolder}/back.jpg`}
                    alt=""
                    onError={(e) => e.target.remove()}
                />

                <div className="cardText">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
