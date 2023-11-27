import React from 'react';
import { Link } from 'react-router-dom';

function Card({ card: { title, frontPhoto, id } }) {
    return (
        <div className="cardContainer">
            <div className="card">
                <h3>{title}</h3>
                <Link to={`product/${id}`}>
                    <img src={frontPhoto} alt={title} />
                </Link>
            </div>
        </div>
    );
}

export default Card;
