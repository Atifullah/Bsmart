import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../img/shopping-bag.svg';

import { useSelector } from 'react-redux';
import { selectCartCount,selectIsCartOpen } from '../Store/cart/cart.selector';
import { setIsCartOpen } from '../Store/cart/cart.action';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;