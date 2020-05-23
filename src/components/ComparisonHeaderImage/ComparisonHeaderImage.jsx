import React from 'react';
import './ComparisonHeaderImage.scss';

function ComparisonHeaderImage(props) {
    return (
        <div className='image-block'>
            <img src={props.img_url} alt={props.alt_text}/>
        </div>
    )
}

export default ComparisonHeaderImage;