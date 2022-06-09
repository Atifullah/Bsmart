import React from 'react';
import './Collection-Preview.styles.scss';
import CollectionItem from '../../components/collect-item/Collect-Item.component';
const CollectionPreview = ({ title, items }) => (

    <div className='CollectionPreview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((items, idx) => idx < 4)
                .map(({ id, ...OtherItemProps }) => (
                    <CollectionItem key={id} {...OtherItemProps} />
                ))}
        </div>

    </div>


);
export default CollectionPreview;