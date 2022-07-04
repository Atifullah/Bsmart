import React from 'react';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartItem from '../../components/cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../Store/cart/cart.selector';
import './cart-dropdown.styles.scss';
const CartDropdown = () => {
 
  const CartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {CartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;