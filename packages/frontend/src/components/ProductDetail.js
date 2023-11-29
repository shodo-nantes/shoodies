import { useParams } from 'react-router-dom';
import { getProductById } from '../service/productService';
import { useEffect, useState } from 'react';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(0);
    useEffect(() => {
        async function fetchData() {
            setProduct(await getProductById(id));
        }
        fetchData();
    }, [id]);

    const { title, frontPhoto, backPhoto, description } = product;

    return (
        <section>
            <h1>{title}</h1>
            <div className="tshirtCard">
                <img className="photoFront" src={`/images/${frontPhoto}/front.jpg`} alt="" />
                {backPhoto && <img className="photoBack" src={`/images/${backPhoto}/back.jpg`} alt="" />}

                <div className="cardText">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
