import { useParams } from 'react-router-dom';
import { getProductById } from '../service/productService';

function ProductDetail() {
    const { id } = useParams();
    const { title, frontPhoto, backPhoto, description } = getProductById(id);

    return (
        <section>
            <h1>{title}</h1>
            <div className="tshirtCard">
                <img className="photoFront" src={frontPhoto} alt="" />
                {backPhoto && <img className="photoBack" src={backPhoto} alt="" />}

                <div className="cardText">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;