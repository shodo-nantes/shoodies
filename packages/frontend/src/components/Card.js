import React from 'react';
import { Link } from 'react-router-dom';

function Card({ card: { title, photoFolder, id } }) {
    return (
        <div className="cardContainer">
            <div className="card">
                <h3>{title}</h3>
                <Link to={`product/${id}`}>
                    <img src={`/images/${photoFolder}/front.jpg`} alt={title} />
                </Link>
            </div>
        </div>
    );
}

export default Card;
