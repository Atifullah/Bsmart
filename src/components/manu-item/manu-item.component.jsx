import React from 'react';
import './manu-item.scss';
import { withRouter } from 'react-router-dom';

const Manuitem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} manu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            style={{
                backgroundImage: `url(${imageUrl})`

            }}
            className='background-image'
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>ShopNow</span>
        </div>
    </div>
);
export default withRouter(Manuitem);