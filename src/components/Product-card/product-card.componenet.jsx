
import './product-card.styles.scss';
import { useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../Store/cart/cart.action';
import {selectCartItems} from '../Store/cart/cart.selector';
import Button from '../Button/Button.componenet';
const ProductCard = ({ product }) => {
  const dispatch =useDispatch ();
  const { name, price, imageUrl } = product;
  const cartItem =useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItem,product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;