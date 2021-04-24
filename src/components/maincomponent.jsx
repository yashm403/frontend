import React from 'react';
import './card.css';

const Card = props =>{
    return(
        <div className='card text-center'>
            
            <div className="card-body text-dark">
                <h4 className="card-title">Category 1</h4>
                <a href='#'className='btn btn-outline-successs'>Explore</a>
            </div>
        </div>
    );
}

export default Card;