
import React from 'react';
import Manuitem from '../manu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'Shirts',
                imageUrl: 'https://w7.pngwing.com/pngs/147/979/png-transparent-blouse-shirt-uniform-pants-blue-shirt-blue-white-woman-thumbnail.png',
                id: 1,
                size: 'large',
                linkUrl: 'shirts'

            },
            {
                title: 'jackets',
                imageUrl: 'https://w7.pngwing.com/pngs/910/719/png-transparent-hoodie-jacket-sleeve-coat-women-jacket-thumbnail.png',
                id: 2,
                size: 'large'
                ,
                linkUrl: 'jackets'


            },
            {
                title: 'Under Garments',
                imageUrl: 'https://i.pinimg.com/564x/6b/b8/34/6bb8344682794a96e3df373667ca4134.jpg',

                id: 3,
                size: 'large'
                ,
                linkUrl: 'under-Garments'
            },
            {
                title: 'childerns',
                imageUrl: 'https://w7.pngwing.com/pngs/617/943/png-transparent-dress-skirt-girl-children-dress-white-child-fashion-girl-thumbnail.png',
                id: 4,
                size: 'large'
                ,
                linkUrl: 'childerns'

            },
            {
                title: 'pants',
                imageUrl: 'https://icon2.cleanpng.com/20180610/wy/kisspng-capri-pants-clothing-jacket-chino-cloth-women-and-trousers-5b1d620fe60c79.1855533715286523039423.jpg',
                id: 5,
                size: 'large'
                ,
                linkUrl: 'pants'
            }]
        }

    }
    render() {
        return (

            <div className='directory-menu'>
                {

                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <Manuitem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}
export default Directory;