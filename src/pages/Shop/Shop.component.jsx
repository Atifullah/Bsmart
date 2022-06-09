import react from 'react';
import React from 'react';
import CollectionPreview from '../../components/Collection-Preview/Collection-Preview.component.jsx';
import SHOP_DATA from './Shop.data.js';

class ShopPage extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            collection: SHOP_DATA
        };
    }
    render() {
        const { collection } = this.state;
        return (<div className='ShopPage' style={{paddingTop:'80px'}}>
            {
                collection.map(({ id, ...OtherCollectionProps }) => (
                    <CollectionPreview key={id} {...OtherCollectionProps} />
                ))
            }

        </div>);
    }
}

export default ShopPage;
